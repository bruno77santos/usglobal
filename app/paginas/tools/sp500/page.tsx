'use client'

import { usePathname } from 'next/navigation'

import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import InputLabel from '@/components/compartilhados/inputLabel'
import { Hero } from '@/components/paginas/tools/sp500/hero'
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

type FormData = {
  Nome?: string
  Email?: string
  Phone?: string
  investeNaXP?: string
  quantoTemInvestido?: string
  investeNoExterior?: string
}

export default function SEP() {
  const [valorInicial, setValorInicial] = useState<number>(0)
  const [periodo, setPeriodo] = useState<number>(0)
  const [aporte, setAporte] = useState<number>(0)
  const [frequencia, setFrequencia] = useState<string>('mensal')
  const [taxaRetorno, setTaxaRetorno] = useState<number>(13)
  const [resultadoSP500, setResultadoSP500] = useState<number[] | null>(null)
  const [simulator, setSimulator] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<FormData>({})

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

const handleSubmit = async () => {
  try {
const response = await fetch('/api/send-mail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})


    if (!response.ok) {
      const err = await response.json()
      console.error('Erro ao enviar:', err)
      alert('Erro ao enviar os dados por e-mail.')
    }
  } catch (error) {
    console.error('Erro na requisição de envio de e-mail:', error)
    alert('Erro ao enviar os dados por e-mail.')
  }
}


  const calcularInvestimento = () => {
    if (valorInicial && periodo) {
      const meses = frequencia === 'mensal' ? 12 : 1
      const taxaMensal = Math.pow(1 + (taxaRetorno / 100), 1 / meses) - 1
      const totalPeriodos = periodo * meses

      let montante = valorInicial
      const historico: number[] = [montante]

      for (let i = 1; i <= totalPeriodos; i++) {
        montante = montante * (1 + taxaMensal) + aporte
        if (i % meses === 0) historico.push(montante)
      }

      setResultadoSP500(historico)
    } else {
      setResultadoSP500(null)
    }
  }

  const handleModalSubmit = () => {
    setShowModal(false)
    setSimulator(true)
  }

  const meses = frequencia === 'mensal' ? 12 : 1
  const totalInvestido = valorInicial + aporte * meses * periodo
  const capitalFinal = resultadoSP500?.[resultadoSP500.length - 1] || 0
  const rentabilidadeAcumulada = capitalFinal - totalInvestido

  const data = {
    labels: Array.from({ length: periodo + 1 }, (_, i) => `${i} ano`),
    datasets: [
      {
        label: 'Total de Investimentos',
        data: Array.from({ length: periodo + 1 }, (_, i) => valorInicial + aporte * meses * i),
        backgroundColor: '#FF0C34',
      },
      {
        label: 'Rentabilidade Acumulada',
        data:
          resultadoSP500?.map(
            (valor, i) => valor - (valorInicial + aporte * meses * i)
          ) || [],
        backgroundColor: '#1976D2',
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: 'white' },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: '#444' },
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: '#444' },
      },
    },
  }

  return (
    <>
      <Hero />

      <section className="bg-[#0C1D2C] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simulador de Investimentos</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Preencha os dados abaixo e veja os resultados com base no retorno esperado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <InputLabel type="number" labelTitle="Valor inicial (R$)" placeholder="Ex: 10000" onChange={e => setValorInicial(Number(e.target.value))} />
            <InputLabel type="number" labelTitle="Período de investimento (anos)" placeholder="Ex: 10" onChange={e => setPeriodo(Number(e.target.value))} />
            <InputLabel type="number" labelTitle="Aportes adicionais (R$)" placeholder="Ex: 500" onChange={e => setAporte(Number(e.target.value))} />
            <InputLabelSelect
              onChange={e => setFrequencia(e.target.value)}
              labelTitle="Frequência dos aportes"
              option={
                <>
                  <option value="mensal">Mensal</option>
                  <option value="anual">Anual</option>
                </>
              }
            />
            <InputLabel type="number" labelTitle="Retorno esperado (% a.a.)" placeholder="Ex: 10" onChange={e => setTaxaRetorno(Number(e.target.value))} />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FF0C34] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
            >
              Calcular
            </button>
          </div>

          {simulator && resultadoSP500 && (
            <div className="mt-20 space-y-10">
              <h3 className="text-3xl font-semibold text-center">Resultado da simulação</h3>

              <div className="w-full h-[400px]">
                <Bar data={data} options={options} />
              </div>

              <div className="text-center space-y-4 text-white">
                <h4 className="text-2xl font-bold">Balanço final</h4>
                <p>Total de investimentos: <strong>R$ {totalInvestido.toLocaleString()}</strong></p>
                <p>Rentabilidade acumulada: <strong>R$ {rentabilidadeAcumulada.toLocaleString()}</strong></p>
                <p>Capital final: <strong>R$ {capitalFinal.toLocaleString()}</strong></p>
              </div>
            </div>
          )}

          {/* Blocos informativos adicionais */}
          <div className="mt-24 space-y-16">
            {/* Porque Simular */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#FF0C34] after:to-[#1976D2] after:mt-2">
                Porque simular
              </h2>
              <p className="text-lg leading-relaxed text-[#E6E6E6]">
                A simulação é uma ferramenta essencial para avaliar oportunidades de investimento ou planejamento financeiro.
                O <span className="text-[#FF0C34] font-semibold">S&P 500</span> é composto pelas maiores empresas americanas — NYSE, NASDAQ — representando o melhor da economia dos EUA.
                <br /><br />
                A composição do índice é constantemente reavaliada para refletir as ações mais fortes, tornando-se o principal benchmark do mundo.
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
                <span className="text-blue-400 font-semibold">Agende uma conversa</span> com um especialista e receba direcionamento personalizado.
              </p>
            </div>

            {/* Atenção */}
            <div className="space-y-6 bg-gradient-to-br from-red-900/20 via-[#0C1D2C] to-blue-900/20 p-6 rounded-xl border border-[#ffffff22] shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#FF0C34]">
                Atenção
              </h2>
              <p className="text-lg leading-relaxed text-[#E6E6E6]">
                Investimentos acima de <strong className="text-white">US$ 60.000</strong> em ações, REITs ou ETFs nos EUA podem ser tributados com alíquotas de <strong>18% a 40%</strong>.
                <br /><br />
                A boa notícia? <span className="text-blue-300 font-semibold">Existem estratégias legais</span> para evitar essa tributação. Fale conosco para saber mais.
              </p>
            </div>

            {/* Saiba mais */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-white after:to-[#FF0C34] after:mt-2">
                Saiba mais
              </h2>
              <p className="text-lg leading-relaxed text-[#E6E6E6]">
                Desde 1927, o <span className="text-[#FF0C34] font-bold">S&P 500</span> entrega em média 10% ao ano — em Dólar.
                <br /><br />
                Se considerarmos a valorização do dólar, o ganho real para brasileiros é ainda maior.
                <br /><br />
                <span className="italic text-gray-400">“Never Bet Against America”</span> — Warren Buffett.
                <br /><br />
                O índice americano se mostra mais consistente do que a bolsa brasileira: menos quedas, recuperações mais rápidas e maior diversidade.
                <br /><br />
                Das empresas consolidadas como <strong>Coca-Cola</strong> a gigantes como <strong>Apple</strong> e ETFs de tecnologia, o S&P500 é sinônimo de solidez e inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal com formulário */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[99] flex items-center justify-center px-4">
          <div className="relative w-full max-w-xl bg-[#0C1D2C] text-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF0C34]/60">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-sm text-white bg-[#FF0C34] hover:opacity-80 px-3 py-1 rounded-md">
              Fechar
            </button>

            <h2 className="text-2xl font-bold mb-6">Preencha seus dados</h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <InputLabel type="name" labelTitle="Seu nome" placeholder="Digite seu nome" onChange={(e) => handleChange("Nome", e.target.value)} />
                <InputLabel type="email" labelTitle="E-mail" placeholder="Digite seu e-mail" onChange={(e) => handleChange("Email", e.target.value)} />
              </div>
              <InputLabel type="phone" labelTitle="Telefone" placeholder="DDD 9 0000-0000" onChange={(e) => handleChange("Phone", e.target.value)} />

              {[
                { label: "Investe na XP?", key: "investeNaXP", options: ["Sim", "Não"] },
                {
                  label: "Quanto tem investido?", key: "quantoTemInvestido", options: [
                    "Não tenho investimentos", "Abaixo de 100k", "Entre 100k e 300k", "Entre 300k a 1milhão", "Acima de 1milhão"
                  ]
                },
                { label: "Investe no exterior?", key: "investeNoExterior", options: ["Sim", "Não"] },
              ].map(({ label, key, options }) => (
                <fieldset className="space-y-2 mt-4" key={key}>
                  <legend className="text-lg font-semibold mb-1">{label}</legend>
                  {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input type="radio" name={key} onChange={() => handleChange(key as keyof FormData, opt)} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
              ))}

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
                <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 transition">
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    handleSubmit()
                    handleModalSubmit()
                    calcularInvestimento()
                  }}
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
