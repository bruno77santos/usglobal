'use client'

import { useState } from 'react'
import Image from 'next/image'
import InputLabel from '@/components/compartilhados/inputLabel'
//import Hero from '@/components/paginas/tools/profile/hero' // ajuste o path se necessário

interface FormData {
  isBrazilian: string
  resideInBrazil: string
  hasForeignIncome: string
  annualIncomeRange: string
  hasForeignProperties: string
  isForeignShareholder: string
  incomeSource: string
  hasInternationalTransactions: string
  fiscalExitGoal: string
  fiscalExitNature: string
}

interface ContactData {
  Nome: string
  Email: string
  Phone: string
}

export default function SaidaFiscal() {
  const [formData, setFormData] = useState<FormData>({
    isBrazilian: '',
    resideInBrazil: '',
    hasForeignIncome: '',
    annualIncomeRange: '',
    hasForeignProperties: '',
    isForeignShareholder: '',
    incomeSource: '',
    hasInternationalTransactions: '',
    fiscalExitGoal: '',
    fiscalExitNature: '',
  })

  const [contactData, setContactData] = useState<ContactData>({
    Nome: '',
    Email: '',
    Phone: '',
  })

  const [showModal, setShowModal] = useState(false)

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactChange = (name: keyof ContactData, value: string) => {
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFinalSubmit = async () => {
    const finalData = {
      ...contactData,
      ...formData,
    }

    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idList: '678ec49ba4158ccfe9671908',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `Saída Fiscal - Formulário ${contactData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(finalData, null, 2)}`,
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
    } catch (err) {
      console.error('Erro:', err)
      alert('Erro ao enviar formulário.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0C1D2C] text-white overflow-hidden py-20 px-6 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/calc/bg/bg-sim-s&p.jpg"
            alt="Saída Fiscal"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/30 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/30 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 lg:pr-12">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Simulador de <span className="text-[#FF0C34]">Saída Fiscal</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              Avalie seu perfil tributário e descubra como otimizar sua residência fiscal de forma legal e estratégica.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-[#FF0C34] via-white to-[#1976D2] rounded-full" />
          </div>
          <div className="hidden lg:block relative w-full h-[360px]">
            <Image
              src="/icons/tools/icon-4.svg"
              alt="Ícone Fiscal"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Formulário direto na página */}
      <section className="bg-[#0C1D2C] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">Preencha seu perfil</h2>
          <p className="text-center text-lg text-gray-300">
            Responda às perguntas para avaliarmos sua situação tributária.
          </p>

          {[
            { label: 'Você é brasileiro?', name: 'isBrazilian' },
            { label: 'Reside no Brasil atualmente?', name: 'resideInBrazil' },
            { label: 'Possui renda de outros países?', name: 'hasForeignIncome' },
            { label: 'Possui imóveis no exterior?', name: 'hasForeignProperties' },
            { label: 'É acionista no exterior?', name: 'isForeignShareholder' },
            { label: 'Transações financeiras internacionais?', name: 'hasInternationalTransactions' },
          ].map(({ label, name }) => (
            <fieldset key={name} className="space-y-2">
              <legend className="text-lg font-semibold">{label}</legend>
              {['Sim', 'Não'].map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={name}
                    onChange={() => handleChange(name as keyof FormData, opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </fieldset>
          ))}

          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold">Faixa de renda anual estimada</legend>
            {[
              'Menos de R$ 100.000,00',
              'De R$ 100.000,00 a R$ 200.000,00',
              'Mais de R$ 200.000,00',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="annualIncomeRange"
                  onChange={() => handleChange('annualIncomeRange', opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold">Origem principal de rendimentos</legend>
            {[
              'Salário, comissões, bônus ou pro-labore',
              'Investimentos',
              'Aluguéis',
              'Sociedade em empresas',
              'Aposentadoria',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="incomeSource"
                  onChange={() => handleChange('incomeSource', opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold">Objetivo da saída fiscal</legend>
            {[
              'Estabelecer residência no exterior',
              'Redução de impostos',
              'Oportunidades de negócios',
              'Qualidade de vida e segurança para a família',
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fiscalExitGoal"
                  onChange={() => handleChange('fiscalExitGoal', opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold">Natureza da saída fiscal</legend>
            {['Temporária', 'Definitiva'].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="fiscalExitNature"
                  onChange={() => handleChange('fiscalExitNature', opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <div className="flex justify-center pt-6">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#FF0C34] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-80 transition"
            >
              Avançar
            </button>
          </div>
        </div>
      </section>

      {/* Modal final para contato */}
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
                type="name"
                labelTitle="Seu nome"
                placeholder="Digite seu nome"
                onChange={(e) => handleContactChange("Nome", e.target.value)}
              />
              <InputLabel
                type="email"
                labelTitle="E-mail"
                placeholder="Digite seu e-mail"
                onChange={(e) => handleContactChange("Email", e.target.value)}
              />
              <InputLabel
                type="phone"
                labelTitle="Telefone"
                placeholder="(xx) 9xxxx-xxxx"
                onChange={(e) => handleContactChange("Phone", e.target.value)}
              />
            </div>

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
      )}
    </>
  )
}
