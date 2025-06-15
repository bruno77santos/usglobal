'use client'
import { useState } from 'react'
import Image from 'next/image'
import InputLabel from '@/components/compartilhados/inputLabel'
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect'

// Definição dos tipos
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
  Nome?: string
  Email?: string
  Phone?: string
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

  const [contactData, setContactData] = useState<ContactData>({})
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleContactChange = (name: keyof ContactData, value: string) => {
    setContactData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      // Monta os dados para enviar
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: 'Saída Fiscal - Avaliação Tributária',
          user: contactData,
          simulation: formData,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Erro ao enviar e-mail:', error)
        alert('Erro ao enviar seus dados.')
        return
      }

      // Se der tudo certo, abre o PDF e redireciona
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
      <section className="relative bg-[#0C1D2C] text-white overflow-hidden py-20 px-6 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/calc/bg/bg-sim-s&p.jpg"
            alt="Saída Fiscal"
            fill
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Avaliação de Saída Fiscal</h1>
          <p className="text-lg max-w-3xl text-center">
            Avalie seu perfil tributário e descubra como otimizar sua residência fiscal de forma legal e estratégica.
          </p>
        </div>
      </section>

      {/* Formulário direto na página */}
      <section className="bg-[#0C1D2C] text-white py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Responda às perguntas abaixo:</h2>

          <InputLabelSelect
            labelTitle="Você é cidadão brasileiro?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </>
            }
            onChange={(e) => handleChange('isBrazilian', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Você reside no Brasil?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </>
            }
            onChange={(e) => handleChange('resideInBrazil', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Você tem renda no exterior?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </>
            }
            onChange={(e) => handleChange('hasForeignIncome', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Faixa anual de renda:"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Até R$ 80k">Até R$ 80k</option>
                <option value="R$ 80k - R$ 150k">R$ 80k - R$ 150k</option>
                <option value="Acima de R$ 150k">Acima de R$ 150k</option>
              </>
            }
            onChange={(e) => handleChange('annualIncomeRange', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Você possui bens no exterior?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </>
            }
            onChange={(e) => handleChange('hasForeignProperties', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Você é sócio em empresa estrangeira?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </>
            }
            onChange={(e) => handleChange('isForeignShareholder', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Origem da renda:"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Salário">Salário</option>
                <option value="Investimentos">Investimentos</option>
                <option value="Negócios">Negócios</option>
                <option value="Outras fontes">Outras fontes</option>
              </>
            }
            onChange={(e) => handleChange('incomeSource', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Você faz transações internacionais regularmente?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </>
            }
            onChange={(e) => handleChange('hasInternationalTransactions', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Qual o objetivo da saída fiscal?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Reduzir impostos">Reduzir impostos</option>
                <option value="Proteger patrimônio">Proteger patrimônio</option>
                <option value="Planejamento sucessório">Planejamento sucessório</option>
                <option value="Outros">Outros</option>
              </>
            }
            onChange={(e) => handleChange('fiscalExitGoal', e.target.value)}
          />

          <InputLabelSelect
            labelTitle="Qual a natureza da sua saída fiscal?"
            option={
              <>
                <option value="">Selecione uma opção</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Empresarial">Empresarial</option>
                <option value="Família">Família</option>
              </>
            }
            onChange={(e) => handleChange('fiscalExitNature', e.target.value)}
          />

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 bg-[#FF0C34] text-white px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            Enviar e Baixar Guia
          </button>
        </div>

        {/* Modal com formulário de contato */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[99]">
            <div className="bg-[#0C1D2C] text-white p-6 rounded-lg shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF0C34]/60">
              <h2 className="text-2xl font-bold mb-6">Identifique-se para receber o material</h2>
              <div className="space-y-4">
                <InputLabel
                  type="name"
                  labelTitle="Seu nome"
                  placeholder="Digite seu nome"
                  onChange={(e) => handleContactChange('Nome', e.target.value)}
                />
                <InputLabel
                  type="email"
                  labelTitle="E-mail"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => handleContactChange('Email', e.target.value)}
                />
                <InputLabel
                  type="phone"
                  labelTitle="Telefone"
                  placeholder="(xx) 9xxxx-xxxx"
                  onChange={(e) => handleContactChange('Phone', e.target.value)}
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

                {/* Botões */}
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