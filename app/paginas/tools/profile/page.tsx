'use client';

import { useState } from 'react';
//import InputRadio from '@/components/compartilhados/inputRadio';
import Hero from '@/components/paginas/tools/profile/hero';
import InputLabel from '@/components/compartilhados/inputLabel';


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
  investmentsOutsideBrazil?: string
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

  const handleChange = (name: keyof FormData | string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idList: '678ec4a34374ed91899a4752',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `+ Investidor Global ${formData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      })

      if (response.ok) {
        window.open('/Guia_Rápido_InvestGlobal.pdf', '_blank')
        setTimeout(() => {
          window.location.href = '/obrigado'
        }, 2000)
      } else {
        alert('Erro ao enviar formulário.')
      }
    } catch (error) {
  console.error('Erro ao enviar formulário:', error)
  alert('Erro na requisição.')
}
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

          {/* 1. Você já investe, investiu ou conhece ações, FIIs, fundos ou renda fixa? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Você já investe, investiu ou conhece ações, FIIs, fundos, ou renda fixa?</legend>
            {[
              'Conheço pouco, estou indeciso para investir',
              'Sim, conheço a maioria e preciso investir',
              'Sim, conheço e já sou investidor (mesmo que seja apenas no Brasil)',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="doYouInvest" onChange={() => handleChange('doYouInvest?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 2. Qual seu principal objetivo financeiro? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Qual seu principal objetivo financeiro?</legend>
            {['Renda passiva', 'Formação de patrimônio', 'Proteção e evolução de patrimônio'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="whyYourObjectiveFinance?" onChange={() => handleChange('whyYourObjectiveFinance?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 3. Qual seu horizonte de investimento? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Qual seu horizonte de investimento?</legend>
            {['Curto prazo: até 2 anos', 'Médio prazo: de 2 a 5 anos', 'Longo prazo: acima de 5 anos'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="investmentHorizon?" onChange={() => handleChange('investmentHorizon?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 4. Como você reage diante de perdas financeiras? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Como você reage diante de perdas financeiras?</legend>
            {[
              'Entre medo e pânico, sensação de “não sirvo pra isso”',
              'Preocupação controlada, esperança de seja só temporário',
              'Indiferente, sabe que perdas fazem parte e pode esperar a recuperação',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="reactionToLosses?" onChange={() => handleChange('reactionToLosses?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 5. Qual seu nível de conhecimento sobre investimentos internacionais? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Qual seu nível de conhecimento sobre investimentos internacionais?</legend>
            {[
              'Ainda não investe ou está começando a investir, estudando e reunindo informações sobre investimentos',
              'Entende alguns termos e conceitos, já investe há algum tempo no Brasil, mas ainda tem algumas dúvidas',
              'Investe há um bom tempo, inclusive no exterior em várias classes de ativos; está familiarizado com a maior parte dos termos, conceitos e estratégias',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="internationalInvestmentKnowledge?" onChange={() => handleChange('internationalInvestmentKnowledge?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 6. Você já tem investimentos fora do país? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Você já tem investimentos fora do país?</legend>
            {['Não, estou começando a me informar', 'Não, e tenho a sensação de que estou “atrasado”', 'Sim, e pretendo aumentar o envio de remessas para lá'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="investmentsOutsideBrazil?" onChange={() => handleChange('investmentsOutsideBrazil?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 7. Quanto do seu patrimônio você gostaria de ter fora do Brasil? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Quanto do seu patrimônio você gostaria de ter fora do Brasil?</legend>
            {['Pouco, no máximo 10%', 'Algo entre 10% e 20%', 'Pelo menos 35%'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="percentageInvestmentOutsideBrazil?" onChange={() => handleChange('percentageInvestmentOutsideBrazil?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 8. Qual sua maior preocupação em investir fora do Brasil? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Qual sua maior preocupação em investir fora do Brasil?</legend>
            {[
              'Uma desvalorização do dólar',
              'As transferências internacionais, complexidade e segurança',
              'Não conhecer as garantias de que meu patrimônio está seguro',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="concernInvestingOutsideBrazil?" onChange={() => handleChange('concernInvestingOutsideBrazil?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 9. O que você considera mais importante em uma estratégia de investimento? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">O que você considera mais importante em uma estratégia de investimento?</legend>
            {['Cuidado e persistência', 'Estratégia clara e conhecimento', 'Informação e arrojo'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="importantInvestmentStrategy?" onChange={() => handleChange('importantInvestmentStrategy?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 10. Em quais setores você tem mais interesse? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Em quais setores você tem mais interesse?</legend>
            {['Mineração, materiais, agronegócio', 'Financeiro, saúde, bens de consumo', 'Tecnologia, defesa, aeroespacial'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="investmentInterestSectors?" onChange={() => handleChange('investmentInterestSectors?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 11. Você pretende deixar o país futuramente? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Você pretende deixar o país futuramente?</legend>
            {['Não penso em sair do meu país', 'Se for preciso, mas tenho de pensar muito bem nisso', 'Sim, estou planejando minha saída'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="planToLeaveCountry?" onChange={() => handleChange('planToLeaveCountry?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* 12. Quanto você tem disponível para investir? */}
          <fieldset className="space-y-2">
            <legend className="text-xl font-semibold">Quanto você tem disponível para investir?</legend>
            {['Entre R$ 100.000 e R$ 300.000', 'Entre R$ 301.000 e R$ 500.000', 'Mais de R$ 500.000'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mt-2">
                <input type="radio" name="investmentAmount?" onChange={() => handleChange('investmentAmount?', opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          {/* Botão Finalizar */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FF0C34] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
            >
              Finalizar preenchimento
            </button>
          </div>
        </div>
      </section>

      {/* Modal Final */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-md bg-[#0C1D2C] text-white rounded-lg shadow-xl p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-sm text-white bg-[#FF0C34] hover:opacity-80 px-3 py-1 rounded-md"
            >
              Fechar
            </button>
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
            </div>
            <div className="space-y-3 mt-4 text-sm">
              <label className="flex gap-2 items-start">
                <input type="checkbox" />
                <span>Estou de acordo com o envio de comunicações, termos e condições e política da Invest Global US</span>
              </label>
              <label className="flex gap-2 items-start">
                <input type="checkbox" />
                <span>Estou de acordo com a política de privacidade da Invest Global US</span>
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
                onClick={handleSubmit}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition"
              >
                Enviar e Baixar PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}