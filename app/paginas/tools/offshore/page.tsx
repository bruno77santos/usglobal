'use client'

import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import InputLabel from '@/components/compartilhados/inputLabel'
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect'
import { Hero } from '@/components/paginas/tools/offshore/hero'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function Offshore() {
  const [investment, setInvestment] = useState<number>(0)
  const [scenario, setScenario] = useState<string>('Realista')
  const [period, setPeriod] = useState<number>(10)
  const [results, setResults] = useState({ offshore: 0, brazil: 0, difference: 0 })
  const [showModal, setShowModal] = useState<boolean>(false)

  const [formData, setFormData] = useState({
    Nome: '',
    Email: '',
    Phone: '',
    investeNaXP: '',
    quantoTemInvestido: '',
    investeNoExterior: ''
  })

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idList: '678ec50cd39e18f5ebca5e48',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `Novo investidor: ${formData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`
        })
      })

      if (!response.ok) {
        alert('Erro ao enviar formulário.')
      }
    } catch (error) {
      console.error(error)
      alert('Erro na requisição.')
    }
  }

  const handleCalculate = () => {
    const annualExchangeRate =
      scenario === 'Pessimista' ? 0.04 : scenario === 'Realista' ? 0.03 : 0.01
    const offshoreRate = 0.1 // 10%
    const brazilRate = 0.075 // 7.5%
    const capitalGainsTax = 0.15
    const itcmdTax = 0.1
    const offshoreMaintenance = 1200

    let offshoreValue = investment - offshoreMaintenance
    let brazilValue = investment

    for (let year = 1; year <= period; year++) {
      offshoreValue = offshoreValue * (1 + offshoreRate) - offshoreMaintenance
      brazilValue = brazilValue * (1 + brazilRate)
      offshoreValue *= 1 + annualExchangeRate
      brazilValue *= 1 + annualExchangeRate
    }

    offshoreValue -= offshoreValue * capitalGainsTax
    brazilValue -= brazilValue * (itcmdTax + capitalGainsTax)

    setResults({
      offshore: offshoreValue,
      brazil: brazilValue,
      difference: offshoreValue - brazilValue
    })
  }

  const chartData = {
    labels: Array.from({ length: period }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Offshore',
        data: Array.from({ length: period }, (_, i) => (results.offshore / period) * (i + 1)),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4
      },
      {
        label: 'Brasil',
        data: Array.from({ length: period }, (_, i) => (results.brazil / period) * (i + 1)),
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        tension: 0.4
      }
    ]
  }

  return (
    <>
      <Hero />

      <section className="bg-[#0C1D2C] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simulador Offshore</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Compare a rentabilidade de manter seus investimentos no Brasil vs. uma estrutura offshore com benefício sucessório e fiscal.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            <InputLabel
              type="number"
              labelTitle="Valor a investir (R$)"
              placeholder="Ex: 100000"
              onChange={(e) => setInvestment(Number(e.target.value))}
            />
            <InputLabelSelect
              labelTitle="Cenário de câmbio"
              option={
                <>
                  <option>Otimista</option>
                  <option>Realista</option>
                  <option>Pessimista</option>
                </>
              }
              onChange={(e) => setScenario(e.target.value)}
            />
            <InputLabel
              type="number"
              labelTitle="Período (anos)"
              placeholder="Ex: 10"
              onChange={(e) => setPeriod(Number(e.target.value))}
            />
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FF0C34] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
            >
              Calcular
            </button>
          </div>

          {/* Chart */}
          {results.offshore > 0 && results.brazil > 0 && (
            <div className="space-y-8">
              <div className="w-full h-[400px] rounded-lg bg-gray-800 p-4">
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                        labels: {
                          color: 'white'
                        }
                      }
                    },
                    scales: {
                      x: {
                        ticks: { color: 'white' },
                        grid: { color: '#444' }
                      },
                      y: {
                        ticks: { color: 'white' },
                        grid: { color: '#444' }
                      }
                    }
                  }}
                />
              </div>
              <p className="text-center text-lg text-gray-300 italic">
                Passe o cursor sobre o gráfico para visualizar os valores estimados por ano.
              </p>
            </div>
          )}

          {/* Seções informativas */}
          {/* Porque simular */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#FF0C34] after:to-[#1976D2] after:mt-2">
              Porque simular
            </h2>
            <p className="text-lg leading-relaxed text-[#E6E6E6]">
              A simulação é uma importante ferramenta auxiliar na tomada de decisão de investimento ou planejamento financeiro.
              <br /><br />
              Sua composição é constantemente reavaliada de forma a considerar as ações de melhor performance.
            </p>
          </div>

          {/* Lembre-se */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1976D2] after:to-[#FF0C34] after:mt-2">
              Lembre-se
            </h2>
            <p className="text-lg leading-relaxed text-[#E6E6E6]">
              Rentabilidade passada <strong>não garante resultado futuro</strong>.
              Sempre busque a orientação de um assessor qualificado para decisões estratégicas.
              <br /><br />
              <span className="text-blue-400 font-semibold">Agende uma conversa</span> com um consultor da Invest Global e receba direcionamento personalizado.
            </p>
          </div>

          {/* Saiba mais */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-white after:to-[#FF0C34] after:mt-2">
              Saiba mais
            </h2>
            <p className="text-lg leading-relaxed text-[#E6E6E6]">
              As Offshores são instrumentos legais na forma de “pessoa jurídica”, constituídas com a única finalidade de gerir os bens de seus proprietários.
              <br /><br />
              Custos e impostos Offshore:
            </p>
            <ul className="list-disc pl-5 mt-2 text-lg text-[#E6E6E6]">
              <li>Custo inicial: US$1.200</li>
              <li>Manutenção anual: US$1.200</li>
              <li>Imposto de sucessão: isento</li>
              <li>Tributação sobre ganho de capital: 15%</li>
            </ul>
          </div>

          {/* Outras vantagens */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-white after:to-[#FF0C34] after:mt-2">
              Outras vantagens de uma Offshore
            </h2>
            <ul className="list-disc pl-5 mt-2 text-lg text-[#E6E6E6]">
              <li>Alto nível de sigilo e privacidade em relação ao patrimônio.</li>
              <li>Facilidade na sucessão patrimonial.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[99] flex items-center justify-center px-4">
          <div className="relative w-full max-w-xl bg-[#0C1D2C] text-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF0C34]/60">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-sm text-white bg-[#FF0C34] hover:opacity-80 px-3 py-1 rounded-md"
            >
              Fechar
            </button>
            <h2 className="text-2xl font-bold mb-6">Identifique-se para receber o material</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <InputLabel
                  type="name"
                  labelTitle="Seu nome"
                  placeholder="Digite seu nome"
                  onChange={(e) => handleChange("Nome", e.target.value)}
                />
                <InputLabel
                  type="email"
                  labelTitle="E-mail"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => handleChange("Email", e.target.value)}
                />
              </div>
              <InputLabel
                type="phone"
                labelTitle="Telefone"
                placeholder="(xx) 9xxxx-xxxx"
                onChange={(e) => handleChange("Phone", e.target.value)}
              />
              <fieldset className="space-y-2 mt-4">
                <legend className="text-lg font-semibold mb-1">Investe na XP?</legend>
                {["Sim", "Não"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="investeNaXP"
                      onChange={() => handleChange("investeNaXP", opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>
              <fieldset className="space-y-2 mt-4">
                <legend className="text-lg font-semibold mb-1">Quanto tem investido?</legend>
                {[
                  "Não tenho investimentos",
                  "Abaixo de 100k",
                  "Entre 100k e 300k",
                  "Entre 300k a 1milhão",
                  "Acima de 1milhão",
                ].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="quantoTemInvestido"
                      onChange={() => handleChange("quantoTemInvestido", opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>
              <fieldset className="space-y-2 mt-4">
                <legend className="text-lg font-semibold mb-1">Investe no exterior?</legend>
                {["Sim", "Não"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="investeNoExterior"
                      onChange={() => handleChange("investeNoExterior", opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>
              <div className="space-y-3 mt-4 text-sm">
                <label className="flex gap-2 items-start">
                  <input type="checkbox" />
                  Estou de acordo com o envio de comunicações, termos e condições e política da Invest Global US
                </label>
                <label className="flex gap-2 items-start">
                  <input type="checkbox" />
                  Estou de acordo com a política de privacidade da Invest Global US
                </label>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    handleSubmit()
                    handleCalculate()
                    setShowModal(false)
                  }}
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}