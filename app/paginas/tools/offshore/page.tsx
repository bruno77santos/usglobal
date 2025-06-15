'use client'
import { useState } from 'react'
import InputLabel from '@/components/compartilhados/inputLabel'
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect'
import { Hero } from '@/components/paginas/tools/offshore/hero'

// Simulação de cotação do dólar por ano (exemplo)
const cotacaoDolarPorAno: Record<number, number> = {
  2005: 2.54,
  2006: 2.31,
  2007: 1.94,
  2008: 1.78,
  2009: 1.72,
  2010: 1.76,
  2011: 1.67,
  2012: 2.05,
  2013: 2.34,
  2014: 2.42,
  2015: 3.91,
  2016: 3.26,
  2017: 3.29,
  2018: 3.67,
  2019: 4.22,
  2020: 5.25,
  2021: 5.27,
  2022: 5.24,
  2023: 4.88,
  2024: 5.10,
  2025: 5.10,
}

type FormData = {
  Nome?: string
  Email?: string
  Phone?: string
  investeNaXP?: string
  quantoTemInvestido?: string
  investeNoExterior?: string
}

export default function Offshore() {
  const [patrimonio, setPatrimonio] = useState<number>(0)
  const [moeda, setMoeda] = useState<'BRL' | 'USD'>('BRL')
  const [anoSimulacao, setAnoSimulacao] = useState<number>(2020)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({})
  const [showResults, setShowResults] = useState(false)

  // Resultados calculados
  const [custoOffshoreBrl, setCustoOffshoreBrl] = useState<number>(0)
  const [custoBrasilBrl, setCustoBrasilBrl] = useState<number>(0)
  const [economiaBrl, setEconomiaBrl] = useState<number>(0)
  const [economiaPercentual, setEconomiaPercentual] = useState<number>(0)

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      // Dados da simulação
      const simulationData = {
        Patrimônio: patrimonio,
        Moeda: moeda,
        AnoDaSimulação: anoSimulacao,
        CustoOffshore: custoOffshoreBrl,
        CustoBrasil: custoBrasilBrl,
        EconomiaReais: economiaBrl,
        EconomiaPercentual: `${economiaPercentual.toFixed(2)}%`,
      }

      // Envia para a API
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: 'Offshore - Estruturação Internacional',
          user: formData,
          simulation: simulationData,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Erro no envio:', error)
        alert('Erro ao enviar os dados.')
        return
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar o formulário.')
    }
  }

  const calcularCustos = () => {
    const cotacaoDolar = cotacaoDolarPorAno[anoSimulacao] || 1.76
    const patrimonioBrl = moeda === 'USD' ? patrimonio * cotacaoDolar : patrimonio

    // Cálculo do custo offshore
    const anosManutencao = 2025 - anoSimulacao
    const custoOffshoreUsd = 1200 + (1200 * anosManutencao)
    const custoOffshoreBrlCalculado = custoOffshoreUsd * cotacaoDolar

    // Cálculo do custo Brasil
    const custoBrasilBrlCalculado = patrimonioBrl * 0.14

    // Economia
    const economiaBrlCalculado = custoBrasilBrlCalculado - custoOffshoreBrlCalculado
    const economiaPercentualCalculado =
      (economiaBrlCalculado / custoBrasilBrlCalculado) * 100

    // Atualiza estados
    setCustoOffshoreBrl(custoOffshoreBrlCalculado)
    setCustoBrasilBrl(custoBrasilBrlCalculado)
    setEconomiaBrl(economiaBrlCalculado)
    setEconomiaPercentual(economiaPercentualCalculado)
    setShowResults(true)
  }

  const handleModalSubmit = () => {
    handleSubmit()
    setShowModal(false)
    calcularCustos()
  }

  return (
    <>
      <Hero />
      <section className="bg-[#0C1D2C] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simulador Offshore</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Compare os custos totais de sucessão com e sem estrutura offshore.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <InputLabel
              type="number"
              labelTitle="Valor do Patrimônio"
              placeholder="Ex: 1.000.000"
              onChange={(e) => setPatrimonio(Number(e.target.value))}
            />

            <InputLabelSelect
              labelTitle="Moeda"
              option={
                <>
                  <option value="BRL">Real (R$)</option>
                  <option value="USD">Dólar (US$)</option>
                </>
              }
              onChange={(e) => setMoeda(e.target.value as 'BRL' | 'USD')}
            />

            <InputLabelSelect
              labelTitle="Ano da simulação"
              option={Object.keys(cotacaoDolarPorAno).map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
              onChange={(e) => setAnoSimulacao(Number(e.target.value))}
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FF0C34] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
            >
              Calcular Custos
            </button>
          </div>

          {/* Resultados */}
          {showResults && (
            <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Comparativo de Custos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Com Offshore</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Custo total (em reais):</strong> R$ {custoOffshoreBrl.toLocaleString()}</li>
                    <li><strong>Anos de manutenção:</strong> {2025 - anoSimulacao}</li>
                    <li><strong>Câmbio usado:</strong> R$ {cotacaoDolarPorAno[anoSimulacao].toFixed(2)}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">No Brasil</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Custo total (em reais):</strong> R$ {custoBrasilBrl.toLocaleString()}</li>
                    <li><strong>ITCMD + Honorários:</strong> 14%</li>
                  </ul>
                </div>
              </div>

              {/* Economia */}
              <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Economia com Offshore</h4>
                <p><strong>Economia em Reais:</strong> R$ {economiaBrl.toLocaleString()}</p>
                <p><strong>Economia Percentual:</strong> {economiaPercentual.toFixed(2)}%</p>
              </div>
            </div>
          )}

          {/* Seções informativas */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#FF0C34] after:to-[#1976D2] after:mt-2">
              Porque simular
            </h2>
            <p className="text-lg leading-relaxed text-[#E6E6E6]">
              A simulação é uma importante ferramenta auxiliar na tomada de decisão sobre planejamento sucessório.
              As estruturas offshore oferecem vantagens claras em custos e simplicidade em transições familiares de patrimônios.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-[#1976D2] after:to-[#FF0C34] after:mt-2">
              Lembre-se
            </h2>
            <p className="text-lg leading-relaxed text-[#E6E6E6]">
              Rentabilidade passada <strong>não garante resultado futuro</strong>. Sempre busque a orientação de um assessor qualificado para decisões estratégicas.
              <br /><br />
              Agende uma conversa com um consultor da Invest Global e receba direcionamento personalizado.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white relative w-fit after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-white after:to-[#FF0C34] after:mt-2">
              Saiba mais
            </h2>
            <p className="text-lg leading-relaxed text-[#E6E6E6]">
              As Offshores são instrumentos legais na forma de “pessoa jurídica”, constituídas com a única finalidade de gerir os bens de seus proprietários.
              Com elas, você reduz custos tributários e simplifica a sucessão familiar.
            </p>
          </div>
        </div>
      </section>

      {/* Modal com formulário */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-[99] flex items-center justify-center px-4">
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
                  onChange={(e) => handleChange('Nome', e.target.value)}
                />
                <InputLabel
                  type="email"
                  labelTitle="E-mail"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => handleChange('Email', e.target.value)}
                />
              </div>
              <InputLabel
                type="phone"
                labelTitle="Telefone"
                placeholder="DDD 9 0000-0000"
                onChange={(e) => handleChange('Phone', e.target.value)}
              />

              {/* Campos adicionais */}
              <fieldset className="space-y-2 mt-4">
                <legend className="text-lg font-semibold mb-1">Investe na XP?</legend>
                {['Sim', 'Não'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="investeNaXP"
                      onChange={() => handleChange('investeNaXP', opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              <fieldset className="space-y-2 mt-4">
                <legend className="text-lg font-semibold mb-1">Quanto tem investido?</legend>
                {[
                  'Não tenho investimentos',
                  'Abaixo de 100k',
                  'Entre 100k e 300k',
                  'Entre 300k a 1milhão',
                  'Acima de 1milhão',
                ].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="quantoTemInvestido"
                      onChange={() => handleChange('quantoTemInvestido', opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              <fieldset className="space-y-2 mt-4">
                <legend className="text-lg font-semibold mb-1">Investe no exterior?</legend>
                {['Sim', 'Não'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="investeNoExterior"
                      onChange={() => handleChange('investeNoExterior', opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              {/* Termos */}
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

              {/* Botões */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleModalSubmit}
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