'use client'

import { useState } from "react";
import InputLabel from '@/components/compartilhados/inputLabel'
import InputRadio from '@/components/compartilhados/inputRadio'

import Hero from '../profile/hero';

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  isBrazilian: string;
  resideInBrazil: string;
  hasForeignIncome: string;
  annualIncomeRange: string;
  hasForeignProperties: string;
  isForeignShareholder: string;
  incomeSource: string;
  hasInternationalTransactions: string;
  fiscalExitGoal: string;
  fiscalExitNature: string;
}

export default function SaidaFiscal() {
  const [formData, setFormData] = useState<FormData>({
    Nome: "",
    Email: "",
    Phone: "",
    isBrazilian: "",
    resideInBrazil: "",
    hasForeignIncome: "",
    annualIncomeRange: "",
    hasForeignProperties: "",
    isForeignShareholder: "",
    incomeSource: "",
    hasInternationalTransactions: "",
    fiscalExitGoal: "",
    fiscalExitNature: "",
  });
  const [showModal, setShowModal] = useState(false);

  // Atualiza o estado ao selecionar uma resposta
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.trello.com/1/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idList: "678ec49ba4158ccfe9671908",
          key: "5b6e1d320af14c490be1bda72621e7fe",
          token: "ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C",
          name: `Saída Fiscal - Formulário ${formData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      });

      if (response.ok) {
        window.open('/Guia_Rápido_InvestGlobal.pdf', '_blank');
        setTimeout(() => {
          window.location.href = "/obrigado";
        }, 2000);
      } else {
        console.error("Erro ao enviar formulário:", response.statusText);
        alert("Erro ao enviar formulário.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao enviar formulário.");
    }
  };

  return (
    <>
      {/* Modal de captura de dados */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99] overflow-auto">
          <div className="bg-slate-700 text-white p-8 rounded-md w-[600px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-[24px] font-bold mb-4">Preencha alguns dados</h2>
            <div className="flex items-center gap-2">
              <InputLabel
                type="name"
                labelTitle="Seu nome"
                placeholder="Digite o seu nome"
                onChange={(e) => handleChange("Nome", e.target.value)}
              />
              <InputLabel
                type="email"
                labelTitle="E-mail"
                placeholder="Digite seu e-mail"
                onChange={(e) => handleChange("Email", e.target.value)}
              />
            </div>
            <br />
            <InputLabel
              type="phone"
              labelTitle="Telefone"
              placeholder="DD 9 0000-0000"
              onChange={(e) => handleChange("Phone", e.target.value)}
            />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Investe na XP?</h2>
            <InputRadio inputDesc="Sim" name="isBrazilian" onChange={() => handleChange('isBrazilian', 'Sim')} />
            <InputRadio inputDesc="Não" name="isBrazilian" onChange={() => handleChange('isBrazilian', 'Não')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Reside no Brasil atualmente?</h2>
            <InputRadio inputDesc="Sim" name="resideInBrazil" onChange={() => handleChange('resideInBrazil', 'Sim')} />
            <InputRadio inputDesc="Não" name="resideInBrazil" onChange={() => handleChange('resideInBrazil', 'Não')} />

            {/* Repita o mesmo padrão de InputRadio, passando name e value corretos */}
            <h2 className="text-[24px] font-bold mb-4 mt-6">Possui renda de outros países?</h2>
            <InputRadio inputDesc="Sim" name="hasForeignIncome" onChange={() => handleChange('hasForeignIncome', 'Sim')} />
            <InputRadio inputDesc="Não" name="hasForeignIncome" onChange={() => handleChange('hasForeignIncome', 'Não')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Faixa de renda anual estimada</h2>
            <InputRadio inputDesc="Menos de R$100k" name="annualIncomeRange" onChange={() => handleChange('annualIncomeRange', 'Menos de R$ 100.000,00')} />
            <InputRadio inputDesc="R$100k–200k" name="annualIncomeRange" onChange={() => handleChange('annualIncomeRange', 'De R$ 100.000,00 a R$ 200.000,00')} />
            <InputRadio inputDesc="Mais de R$200k" name="annualIncomeRange" onChange={() => handleChange('annualIncomeRange', 'Mais de R$ 200.000,00')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Possui imóveis no exterior?</h2>
            <InputRadio inputDesc="Sim" name="hasForeignProperties" onChange={() => handleChange('hasForeignProperties', 'Sim')} />
            <InputRadio inputDesc="Não" name="hasForeignProperties" onChange={() => handleChange('hasForeignProperties', 'Não')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">É acionista no exterior?</h2>
            <InputRadio inputDesc="Sim" name="isForeignShareholder" onChange={() => handleChange('isForeignShareholder', 'Sim')} />
            <InputRadio inputDesc="Não" name="isForeignShareholder" onChange={() => handleChange('isForeignShareholder', 'Não')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Origem principal de rendimentos</h2>
            <InputRadio inputDesc="Salário/Pro-labore" name="incomeSource" onChange={() => handleChange('incomeSource', 'Salário, comissões, bônus ou pro-labore')} />
            <InputRadio inputDesc="Investimentos" name="incomeSource" onChange={() => handleChange('incomeSource', 'Investimentos')} />
            <InputRadio inputDesc="Aluguéis" name="incomeSource" onChange={() => handleChange('incomeSource', 'Aluguéis')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Transações financeiras internacionais?</h2>
            <InputRadio inputDesc="Sim" name="hasInternationalTransactions" onChange={() => handleChange('hasInternationalTransactions', 'Sim')} />
            <InputRadio inputDesc="Não" name="hasInternationalTransactions" onChange={() => handleChange('hasInternationalTransactions', 'Não')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Objetivo da saída fiscal</h2>
            <InputRadio inputDesc="Residência no exterior" name="fiscalExitGoal" onChange={() => handleChange('fiscalExitGoal', 'Estabelecer residência no exterior')} />
            <InputRadio inputDesc="Redução de impostos" name="fiscalExitGoal" onChange={() => handleChange('fiscalExitGoal', 'Redução de impostos')} />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Natureza da saída fiscal</h2>
            <InputRadio inputDesc="Temporária" name="fiscalExitNature" onChange={() => handleChange('fiscalExitNature', 'Temporária')} />
            <InputRadio inputDesc="Definitiva" name="fiscalExitNature" onChange={() => handleChange('fiscalExitNature', 'Definitiva')} />

            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={() => {
                  handleSubmit();
                  setShowModal(false);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cabeçalho e formulário principal */}
      <Hero title="Saída fiscal" />

      <section className="w-[90%] max-w-[1280px] text-white mt-[91px] mx-auto mb-[102px]">
        <button
          onClick={() => setShowModal(true)}
          className="mt-[80px] ml-auto block py-3.5 px-4 text-lg font-medium rounded-lg transition-colors duration-300 bg-[#FF0C34] hover:opacity-70"
        >
          Finalizar preenchimento
        </button>
      </section>
    </>
  );
}
