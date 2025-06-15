'use client'
import { useState } from 'react'
import InputLabel from '@/components/compartilhados/inputLabel'
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect'
import { Hero } from '@/components/paginas/tools/holding/hero'

type TabelaResultado = {
  ano: number
  aluguelPF: number
  aluguelHolding: number
  custoAnualHolding: number
  diferencaCustos: number
}

type FormDataType = {
  Nome?: string
  Email?: string
  Phone?: string
  investeNaXP?: string
  quantoTemInvestido?: string
  investeNoExterior?: string
}

export default function HoldingPage() {
  const [selectFinalidade, setSelectFinalidade] = useState<string>('')
  const [valorAquicicao, setValorAquicicao] = useState<string>('')
  const [valorMercado, setValorMercado] = useState<string>('')
  const [valorAluguel, setValorAluguel] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [vendaValues, setVendaValues] = useState({ LucroVendaPF: '', LucroVendaHolding: '' })
  const [sim, setSim] = useState(false)
  const [tabela, setTabela] = useState<TabelaResultado[]>([])
  const [formData, setFormData] = useState<FormDataType>({})
  const [percAlugado, setPercAlugado] = useState<number>(0)
  const [prazoSimulacao, setPrazoSimulacao] = useState<number>(0)
  const [mensagemResultado, setMensagemResultado] = useState<string | null>(null)
  const [payback, setPayback] = useState<number | null>(null)

  const handleChange = (name: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calcularResultado = () => {
    const aquisicao = Number(valorAquicicao.replace(/[^\d]/g, ''))
    const mercado = Number(valorMercado.replace(/[^\d]/g, ''))
    const aluguelMensal = Number(valorAluguel.replace(/[^\d]/g, ''))

    if (selectFinalidade === 'venda') {
      const ganhoCapital = mercado - aquisicao
      const impostoPF = ganhoCapital * 0.15
      const impostoHolding = mercado * 0.06
      const economia = impostoPF - impostoHolding
      const custoEstrutura = 25000

      setVendaValues({
        LucroVendaPF: impostoPF.toFixed(2),
        LucroVendaHolding: impostoHolding.toFixed(2),
      })

      setPayback(null)

      if (economia > custoEstrutura) {
        setMensagemResultado('✅ Compensa estruturar a holding para vender o imóvel.')
      } else {
        setMensagemResultado('⚠️ Não compensa estruturar a holding apenas para a venda.')
      }
      return
    }

    const receitaAnual = aluguelMensal * 12
    const impostoPF = receitaAnual * 0.275
    const impostoHolding = receitaAnual * 0.11
    const economiaAnual = impostoPF - impostoHolding
    const custoBase = 25000
    const aplicaITBI = percAlugado > 50
    const custoTotal = aplicaITBI ? custoBase + mercado * 0.04 : custoBase
    const calculatedPayback = custoTotal / economiaAnual
    const compensa = prazoSimulacao >= calculatedPayback

    const novaTabela: TabelaResultado[] = []

    for (let ano = 1; ano <= prazoSimulacao; ano++) {
      novaTabela.push({
        ano,
        aluguelPF: impostoPF * ano,
        aluguelHolding: impostoHolding * ano,
        custoAnualHolding: custoTotal,
        diferencaCustos: economiaAnual * ano,
      })
    }

    setTabela(novaTabela)
    setPayback(calculatedPayback)

    if (compensa) {
      setMensagemResultado('✅ Compensa estruturar a holding para os aluguéis.')
    } else {
      setMensagemResultado('⚠️ Não compensa estruturar a holding para os aluguéis nesse prazo.')
    }
  }

  const handleSubmit = async () => {
    try {
      const simulationData = {
    "Cenário": selectFinalidade,
    "Valor de Aquisição": valorAquicicao,
    "Valor de Mercado": valorMercado,
    "Resultado": mensagemResultado,
    "Payback": payback ? `${payback.toFixed(2)} anos` : 'N/A'
  }
  const response = await fetch('/api/send-mail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: 'Simulador Holding',
      user: formData,
      simulation: simulationData
    })
  })

      if (!response.ok) {
        const error = await response.json()
        console.error('Erro ao enviar e-mail:', error)
        alert('Erro ao enviar os dados.')
        return
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      alert('Erro ao enviar o formulário.')
    }
  }

  const handleModalSubmit = () => setShowModal(false)

  return (
    <>
      <Hero />
      <section className="w-[90%] max-w-[1174px] mx-auto mt-12 text-white mb-[102px]">
        
        <h1 className="text-[40px] font-[700]">Simulador de Holding</h1>
        <div className="mt-6 w-full flex flex-col flex-wrap gap-7">
          <div className="flex items-center gap-5 w-full sm:flex-row flex-col">
            <InputLabelSelect
              option={
                <>
                  <option value="venda">Venda</option>
                  <option value="aluguel">Aluguel</option>
                </>
              }
              labelTitle="Finalidade"
              onChange={(e) => setSelectFinalidade(e.target.value)}
            />
            <InputLabel
              type="string"
              labelTitle="Valor de aquisição"
              placeholder="R$ 500.000"
              onChange={(e) => setValorAquicicao(e.target.value)}
            />
            <InputLabel
              type="string"
              labelTitle="Valor de mercado"
              placeholder="R$ 800.000"
              onChange={(e) => setValorMercado(e.target.value)}
            />
            {selectFinalidade === 'aluguel' && (
              <InputLabel
                type="string"
                labelTitle="Valor mensal dos aluguéis"
                placeholder="R$ 3.000"
                onChange={(e) => setValorAluguel(e.target.value)}
              />
            )}
          </div>
          {selectFinalidade === 'aluguel' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputLabel
                type="number"
                labelTitle="% dos imóveis que estão alugados"
                placeholder="Ex: 60"
                onChange={(e) => setPercAlugado(Number(e.target.value))}
              />
              <InputLabel
                type="number"
                labelTitle="Prazo da simulação (em anos)"
                placeholder="Ex: 10"
                onChange={(e) => setPrazoSimulacao(Number(e.target.value))}
              />
            </div>
          )}
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 py-3 px-6 text-lg font-medium rounded-lg transition-all duration-300 text-white bg-[#FF0C34] hover:opacity-80"
        >
          Calcular Resultado
        </button>

        {/* Resultados Dinâmicos */}
        {sim && (
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-gray-800">
            {selectFinalidade === 'venda' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Impostos - Estrutura Holding Patrimonial (Venda de Bens)</h2>
                <p className="mb-4 text-gray-500">
                  Veja abaixo o valor de cada imposto a ser pago (+ custo estruturação da Holding + ITBI):
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Valor do Total do Imposto:</strong> R$ {Number(vendaValues.LucroVendaHolding).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="mb-2">
                    Inclui Ganho de Capital + ITBI + Custo da Holding.
                  </p>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Impostos - Estrutura sem Holding Patrimonial</h2>
                <p className="mb-2">
                  <strong>Valor do Imposto (Ganho de Capital):</strong> R$ {Number(vendaValues.LucroVendaPF).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
            )}

            {selectFinalidade === 'aluguel' && tabela.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Impostos - Estrutura Holding Patrimonial (Rendimentos)</h2>
                <p className="mb-4 text-gray-500">
                  Veja abaixo o valor de cada imposto a ser pago:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="mb-2"><strong>PIS:</strong> R$ 0,19</p>
                  <p className="mb-2"><strong>COFINS:</strong> R$ 0,90</p>
                  <p className="mb-2"><strong>ADICIONAL IRPJ:</strong> R$ 0,00</p>
                  <p className="mb-2"><strong>IRPJ:</strong> R$ 1,44</p>
                  <p className="mb-2"><strong>CSLL:</strong> R$ 0,86</p>
                  <p className="mb-2">
                    <strong>Valor do Total do Imposto Mensal - Lucro Presumido:</strong> R$ {tabela[0].aluguelHolding.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="mb-2">
                    <strong>Valor do Imposto - ITBI:</strong> R$ {tabela[0].custoAnualHolding.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm text-gray-500">
                    Para fins de cálculo, consideramos algumas premissas: COFINS: 3% | IRPJ: 0,65% | ITBI: 3% | Inflação: 6% ao ano | Custo Abertura Holding: R$ 10.000
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Impostos - Estrutura sem Holding Patrimonial</h2>
                <p className="mb-2">
                  <strong>Valor do Imposto Mensal - IRPF:</strong> R$ {tabela[0].aluguelPF.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Veja abaixo a projeção dos seus impostos:</h2>
                <p className="mb-4 text-gray-500">
                  Sua economia total é de R$ {(tabela[tabela.length - 1]?.diferencaCustos || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} em {prazoSimulacao} anos
                </p>

                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">Ano</th>
                      <th className="border px-4 py-2">Com Holding</th>
                      <th className="border px-4 py-2">Sem Holding</th>
                      <th className="border px-4 py-2">Economia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabela.map((item, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{item.ano}</td>
                        <td className="border px-4 py-2">R$ {item.aluguelHolding.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                        <td className="border px-4 py-2">R$ {item.aluguelPF.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                        <td className="border px-4 py-2 text-red-500">
                          R$ {item.diferencaCustos.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {mensagemResultado && (
          <div className="mt-6 p-4 bg-gray-700 rounded-lg text-lg text-white font-semibold text-center">
            {mensagemResultado}
          </div>
        )}

        {payback !== null && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg text-center text-white text-lg">
            <strong>Payback estimado:</strong> {payback.toFixed(2)} anos
          </div>
        )}

        {/* Seções institucionais */}
        <h1 className=" mt-[48px]
                text-[40px] font-[700]">Porque simular</h1>
        <p className="text-[24px font-[500] mt-[16px]">
          A simulação é uma importante ferramenta auxiliar na tomada de decisão de investimento ou planejamento financeiro. O S&P500 é formado por empresas das principais bolsas americanas, em especial NYSE e NASDAQ.
          <br />
          <br />
          Sua composição é constantemente reavaliada de forma a considerar as ações de melhor performance e descontinuar as que deixam de apresentar bons resultados. Tornou-se o mais importante índice de referência em todo o mundo.
        </p>
        <h1 className=" mt-[48px]
                text-[40px] font-[700]">Lembre-se</h1>
        <p className="text-[24px font-[500] mt-[16px]">
          Tenha sempre em mente que rentabilidade passada não significa rentabilidade futura. Antes de uma decisão final, procure orientação de um profissional qualificado.
          <br />
          <br />
          Agende uma conversa sem compromisso com um de nossos consultores e tenha informações dirigidas a seu perfil e objetivos. Clique no botão (Botão “Agende a sua Reunião”)  </p>
        <br />
        <a target="_blank" href="https://wa.me/+5511961014004?text=Ol%C3%A1%20estou%20interessado%20em%20investir!" className="w-[220px] mt-[20px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap">
          Agende a sua Reunião
        </a>
        <h1 className=" mt-[48px]
                text-[40px] font-[700]">Saiba mais</h1>
        <p className="text-[24px font-[500] mt-[16px]">
          As Holdings são instrumentos jurídicos que podem ser usados por qualquer pessoa, família ou grupo, na organização e centralização de bens.
          São instrumentos seguros, que simplificam e protegem os bens, em especial na ocorrência de transição sucessória, que se torna muito mais simples e rápida, evitando custos desnecessários, disputas judiciais e burocracia.
          <br />
          <br />
          A formação de uma holding é mais simples e menos custosa do que a de uma Offshore, mas pode nem sempre ser a opção mais adequada. Dependendo de cada caso, ferramentas como o Joint Tenancy podem ser aplicados. Para conhecer mais sobre essa ferramenta, consulte nosso artigo <a href="#" target="_blank" className="text-red-500">clicando aqui</a>.
        </p>
      </section>

      {/* Modal com formulário */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[99]">
          <div className="bg-white text-[#0c1d2c] rounded-lg p-8 w-full max-w-xl shadow-xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Preencha seus dados</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <InputLabel type="name" labelTitle="Seu nome" placeholder="Digite seu nome" onChange={(e) => handleChange("Nome", e.target.value)} />
                <InputLabel type="email" labelTitle="E-mail" placeholder="Digite seu e-mail" onChange={(e) => handleChange("Email", e.target.value)} />
              </div>
              <InputLabel type="phone" labelTitle="Telefone" placeholder="DDD 9 0000-0000" onChange={(e) => handleChange("Phone", e.target.value)} />

              <fieldset className="space-y-2">
                <legend className="font-semibold">Investe na XP?</legend>
                {["Sim", "Não"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="radio" name="investeNaXP" onChange={() => handleChange("investeNaXP", opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              <fieldset className="space-y-2">
                <legend className="font-semibold">Quanto tem investido?</legend>
                {["Não tenho investimentos", "Abaixo de 100k", "Entre 100k e 300k", "Entre 300k a 1milhão", "Acima de 1milhão"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="radio" name="quantoTemInvestido" onChange={() => handleChange("quantoTemInvestido", opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              <fieldset className="space-y-2">
                <legend className="font-semibold">Investe no exterior?</legend>
                {["Sim", "Não"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="radio" name="investeNoExterior" onChange={() => handleChange("investeNoExterior", opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              <div className="flex justify-end gap-4 mt-4">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-md bg-gray-500 text-white">
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    handleSubmit()
                    calcularResultado()
                    handleModalSubmit()
                    setSim(true)
                  }}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white"
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