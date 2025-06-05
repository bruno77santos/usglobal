'use client'

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
  const [resultadoSP500, setResultadoSP500] = useState<number | null>(null)
  const [resultadoIbovespa, setResultadoIbovespa] = useState<number | null>(null)
  const [simulator, setSimulator] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const taxaSP500 = 0.13
  const taxaIbovespa = 0.075

  const [formData, setFormData] = useState<FormData>({})

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idList: '678ec50cd39e18f5ebca5e48',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token:
            'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `Novo investidor: ${formData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      })

      if (!response.ok) {
        console.error('Erro ao enviar formulário:', response.statusText)
        alert('Erro ao enviar formulário.')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
      alert('Erro ao enviar formulário.')
    }
  }

  const calcularInvestimento = () => {
    if (valorInicial && periodo) {
      const meses = frequencia === 'mensal' ? 12 : 1
      const taxaMensalSP500 = Math.pow(1 + taxaSP500, 1 / meses) - 1
      const taxaMensalIbovespa = Math.pow(1 + taxaIbovespa, 1 / meses) - 1
      const totalPeriodos = periodo * meses

      const calcularComAportes = (taxa: number) => {
        let montante = valorInicial
        for (let i = 0; i < totalPeriodos; i++) {
          montante = montante * (1 + taxa) + aporte
        }
        return montante
      }

      setResultadoSP500(calcularComAportes(taxaMensalSP500))
      setResultadoIbovespa(calcularComAportes(taxaMensalIbovespa))
    } else {
      setResultadoSP500(null)
      setResultadoIbovespa(null)
    }
  }

  const handleModalSubmit = () => {
    setShowModal(false)
    setSimulator(true)
  }

  const data = {
    labels: ['Ibovespa', 'S&P 500'],
    datasets: [
      {
        label: 'Resultado Final',
        data: [resultadoIbovespa || 0, resultadoSP500 || 0],
        backgroundColor: ['#FF0C34', '#1976D2'],
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Índices',
          color: '#fff',
        },
        ticks: {
          color: 'white',
        },
        grid: {
          color: '#444',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valor Final (R$)',
          color: '#fff',
        },
        ticks: {
          color: 'white',
        },
        grid: {
          color: '#444',
        },
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
              Preencha os dados abaixo e compare o resultado de investir no Ibovespa vs. S&P 500
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <InputLabel
              type="number"
              labelTitle="Valor inicial (R$)"
              placeholder="Ex: 10000"
              onChange={e => setValorInicial(Number(e.target.value))}
            />
            <InputLabel
              type="number"
              labelTitle="Período de investimento (anos)"
              placeholder="Ex: 10"
              onChange={e => setPeriodo(Number(e.target.value))}
            />
            <InputLabel
              type="number"
              labelTitle="Aportes adicionais (R$)"
              placeholder="Ex: 500"
              onChange={e => setAporte(Number(e.target.value))}
            />
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
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FF0C34] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
            >
              Calcular
            </button>
          </div>

          {simulator && resultadoSP500 !== null && resultadoIbovespa !== null && (
            <div className="mt-20 space-y-8">
              <h3 className="text-3xl font-semibold text-center">Resultado da simulação</h3>
              <div className="w-full h-[400px]">
                <Bar data={data} options={options} />
              </div>
              <p className="text-center text-sm text-gray-400 italic max-w-xl mx-auto">
                * Considerando valorização média histórica do Dólar de 3% a.a.
              </p>
            </div>
            
          )}
          {/* 🔍 Seções Informativas */}


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
      <span className="text-blue-400 font-semibold">Agende uma conversa</span> com um consultor da Invest Global e receba direcionamento personalizado.
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
      </section>

      {/* Modal com formulário */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-[99] flex items-center justify-center px-4">
    <div className="relative w-full max-w-xl bg-[#0C1D2C] text-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF0C34]/60">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-sm text-white bg-[#FF0C34] hover:opacity-80 px-3 py-1 rounded-md"
      >
        Fechar
      </button>

      <h2 className="text-2xl font-bold mb-6">Preencha seus dados</h2>

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
          placeholder="DDD 9 0000-0000"
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
              handleSubmit();
              handleModalSubmit();
              calcularInvestimento();
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
