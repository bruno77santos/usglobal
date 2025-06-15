'use client'
import { useState } from 'react'
import Hero from '@/components/paginas/tools/profile/hero'
import InputLabel from '@/components/compartilhados/inputLabel'

type FormData = {
  Nome: string
  Email: string
  Phone: string
  investeNaXP?: string
  quantoTemInvestido?: string
  investeNoExterior?: string
  doYouInvest?: string
  whyYourObjectiveFinance?: string
  investmentHorizon?: string
  reactionToLosses?: string
  internationalInvestmentKnowledge?: string
  investmentsOutsideBrazil?: string // Sem '?' aqui
  percentageInvestmentOutsideBrazil?: string
  concernInvestingOutsideBrazil?: string
  importantInvestmentStrategy?: string
  investmentInterestSectors?: string
  planToLeaveCountry?: string
  investmentAmount?: string
}

export default function ProfileInvestor() {
  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Email: '',
    Phone: '',
  })

  const [showModal, setShowModal] = useState<boolean>(false)

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      // Envia os dados para a API de e-mail
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: 'Perfil do Investidor Global',
          user: {
            Nome: formData.Nome,
            Email: formData.Email,
            Phone: formData.Phone,
            investeNaXP: formData.investeNaXP,
            quantoTemInvestido: formData.quantoTemInvestido,
            investeNoExterior: formData.investeNoExterior,
          },
          simulation: {
            'Você investe fora do Brasil?': formData.doYouInvest,
            'Qual seu objetivo financeiro?': formData.whyYourObjectiveFinance,
            'Horizonte de investimento': formData.investmentHorizon,
            'Como reage a perdas?': formData.reactionToLosses,
            'Conhecimento em investimentos internacionais': formData.internationalInvestmentKnowledge,
            'Possui investimentos fora do Brasil?': formData.investmentsOutsideBrazil,
            'Percentual fora do Brasil?': formData.percentageInvestmentOutsideBrazil,
            'Preocupação com investir fora do Brasil': formData.concernInvestingOutsideBrazil,
            'Fator mais importante na estratégia': formData.importantInvestmentStrategy,
            'Setores de interesse': formData.investmentInterestSectors,
            'Planeja sair do país?': formData.planToLeaveCountry,
            'Valor a investir internacionalmente': formData.investmentAmount,
          },
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Erro ao enviar e-mail:', error)
        alert('Erro ao enviar seus dados.')
        return
      }

      // Se tudo der certo, abrir o PDF e redirecionar
      window.open('/Guia_Rápido_InvestGlobal.pdf', '_blank')
      setTimeout(() => {
        window.location.href = '/obrigado'
      }, 2000)
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      alert('Erro ao enviar o formulário.')
    }
  }

  const handleFinalSubmit = () => {
    handleSubmit()
  }

  return (
    <>
      {/* Hero Section */}
      <Hero title="Perfil do investidor global" />

      {/* Formulário Principal */}
      <section className="bg-[#0C1D2C] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Entenda seu perfil como investidor</h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Responda às perguntas abaixo para montarmos uma estratégia personalizada para você.
            </p>
          </div>

          

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Preencha seu perfil</h2>

            {/* Campo 1 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">Você investe fora do Brasil?</legend>
              {[
                'Não, não tenho investimentos',
                'Não, mas quero começar',
                'Sim, pouco',
                'Sim, a maior parte',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="doYouInvest"
                    onChange={() => handleChange('doYouInvest', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 2 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">Qual seu objetivo financeiro?</legend>
              {[
                'Proteção patrimonial',
                'Geração de renda passiva',
                'Aposentadoria no exterior',
                'Mudança de residência fiscal',
                'Diversificação geográfica',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="whyYourObjectiveFinance"
                    onChange={() => handleChange('whyYourObjectiveFinance', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 3 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">Horizonte de investimento:</legend>
              {[
                'Curto prazo (menos de 3 anos)',
                'Médio prazo (3 a 7 anos)',
                'Longo prazo (mais de 7 anos)',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="investmentHorizon"
                    onChange={() => handleChange('investmentHorizon', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 4 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">Como você reage a perdas?</legend>
              {[
                'Vendo oportunidade (compra mais)',
                'Reavalia sua estratégia',
                'Reduz exposição',
                'Retira recursos',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="reactionToLosses"
                    onChange={() => handleChange('reactionToLosses', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 5 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                Qual seu conhecimento em investimentos internacionais?
              </legend>
              {[
                'Básico',
                'Intermediário',
                'Avançado',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="internationalInvestmentKnowledge"
                    onChange={() => handleChange('internationalInvestmentKnowledge', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

{/* Campo 6 */}
<fieldset className="space-y-2">
  <legend className="font-semibold">Você já possui investimentos no exterior?</legend>
  {[
    'Não, nunca investi',
    'Sim, alguns',
    'Sim, muitos',
  ].map((opt) => (
    <label key={opt} className="flex items-center gap-2 mt-2">
      <input
        type="radio"
        name="investmentsOutsideBrazil"
        onChange={() => handleChange('investmentsOutsideBrazil', opt)}
      />
      <span>{opt}</span>
    </label>
  ))}
</fieldset>

            {/* Campo 7 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                Quanto do seu patrimônio você gostaria de ter fora do Brasil?
              </legend>
              {[
                'Menos de 10%',
                'Entre 10% e 30%',
                'Entre 30% e 60%',
                'Mais de 60%',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="percentageInvestmentOutsideBrazil"
                    onChange={() => handleChange('percentageInvestmentOutsideBrazil', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 8 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                Você se preocupa com a questão de investir fora do Brasil?
              </legend>
              {[
                'Não me preocupo',
                'Estou ciente, mas não sei como resolver',
                'Já estou buscando soluções',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="concernInvestingOutsideBrazil"
                    onChange={() => handleChange('concernInvestingOutsideBrazil', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 9 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                O que é mais importante na sua estratégia?
              </legend>
              {[
                'Segurança jurídica',
                'Facilidade operacional',
                'Isenção tributária',
                'Diversificação geográfica',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="importantInvestmentStrategy"
                    onChange={() => handleChange('importantInvestmentStrategy', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 10 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                Em quais setores tem interesse para investir?
              </legend>
              {[
                'Imóveis nos EUA',
                'ETFs globais',
                'Startups internacionais',
                'Fundos offshore',
                'Outros',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="investmentInterestSectors"
                    onChange={() => handleChange('investmentInterestSectors', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 11 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                Você planeja deixar o Brasil permanentemente?
              </legend>
              {[
                'Não',
                'Talvez',
                'Sim, em até 3 anos',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="planToLeaveCountry"
                    onChange={() => handleChange('planToLeaveCountry', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Campo 12 */}
            <fieldset className="space-y-2">
              <legend className="font-semibold">
                Qual valor você pretende investir no exterior?
              </legend>
              {[
                'Até US$ 50k',
                'De US$ 50k a US$ 150k',
                'De US$ 150k a US$ 500k',
                'Acima de US$ 500k',
              ].map((opt) => (
                <label key={opt} className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="investmentAmount"
                    onChange={() => handleChange('investmentAmount', opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>

            {/* Botão final */}
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-[#FF0C34] text-white px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              Enviar e Baixar Guia
            </button>
          </div>
        </div>

        {/* Modal com formulário */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[99]">
            <div className="relative w-full max-w-xl bg-[#0C1D2C] text-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF0C34]/60">
              <h2 className="text-2xl font-bold mb-6">Identifique-se para receber o material</h2>
              <div className="space-y-4">
                <InputLabel
                  type="text"
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
                <InputLabel
                  type="tel"
                  labelTitle="Telefone"
                  placeholder="(xx) 9xxxx-xxxx"
                  onChange={(e) => handleChange('Phone', e.target.value)}
                />

                {/* Termos */}
                <div className="space-y-3 mt-4 text-sm">
                  <label className="flex gap-2 items-start">
                    <input type="checkbox" required />
                    Estou de acordo com o envio de comunicações, termos e condições e política da Invest Global US
                  </label>
                  <label className="flex gap-2 items-start">
                    <input type="checkbox" required />
                    Estou de acordo com a política de privacidade da Invest Global US
                  </label>
                </div>

                {/* Botões do Modal */}
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleFinalSubmit}
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
                  >
                    Enviar e Baixar PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}