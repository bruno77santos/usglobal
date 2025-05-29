'use client';

import { useState } from 'react';
{/*import InputRadio from '@/components/compartilhados/inputRadio';*/}
import Hero from '@/components/paginas/tools/profile/hero';
import InputLabel from '@/components/compartilhados/inputLabel';

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  investeNaXP?: string;
  quantoTemInvestido?: string;
  investeNoExterior?: string;
  doYouInvest?: string;
  whyYourObjectiveFinance?: string;
  investmentHorizon?: string;
  reactionToLosses?: string;
  internationalInvestmentKnowledge?: string;
  investmentsOutsideBrazil?: string;
  percentageInvestmentOutsideBrazil?: string;
  concernInvestingOutsideBrazil?: string;
  importantInvestmentStrategy?: string;
  investmentInterestSectors?: string;
  planToLeaveCountry?: string;
  investmentAmount?: string;
  [key: string]: string | undefined;
}

export default function ProfileInvestor() {
  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Email: '',
    Phone: '',
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (name: keyof FormData | string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idList: '678ec4a34374ed91899a4752',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `+ Investidor Global ${formData?.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      });

      if (response.ok) {
        window.open('/Guia_Rápido_InvestGlobal.pdf', '_blank');
        setTimeout(() => {
          window.location.href = '/obrigado';
        }, 2000);
      } else {
        console.error('Erro ao enviar formulário:', response.statusText);
        alert('Erro ao enviar formulário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar formulário.');
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99] overflow-auto">
          <div className="bg-slate-700 text-white p-8 rounded-md w-[600px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-[24px] font-bold mb-4">Preencha alguns dados</h2>
            <div className="flex items-center gap-2">
              <InputLabel
                type="name"
                labelTitle="Seu nome"
                placeholder="Digite o seu nome"
                onChange={(e) => handleChange('Nome', e.target.value)}
              />
              <InputLabel
                type="email"
                labelTitle="E-mail"
                placeholder="Digite seu e-mail"
                onChange={(e) => handleChange('Email', e.target.value)}
              />
            </div>
            <br />
            <InputLabel
              type="phone"
              labelTitle="Telefone"
              placeholder="DD 9 0000-0000"
              onChange={(e) => handleChange('Phone', e.target.value)}
            />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Investe na XP?</h2>
            {['Sim', 'Não'].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  name="investeNaXP"
                  type="radio"
                  onChange={() => handleChange('investeNaXP', val)}
                />
                <p>{val}</p>
              </label>
            ))}

            <h2 className="text-[24px] font-bold mb-4 mt-6">Quanto tem investido?</h2>
            {[
              'Não tenho investimentos',
              'Abaixo de 100k',
              'Entre 100k e 300k',
              'Entre 300k a 1milhão',
              'Acima de 1milhão',
            ].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  name="quantoTemInvestido"
                  type="radio"
                  onChange={() => handleChange('quantoTemInvestido', val)}
                />
                <p>{val}</p>
              </label>
            ))}

            <h2 className="text-[24px] font-bold mb-4 mt-6">Investe no exterior?</h2>
            {['Sim', 'Não'].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  name="investeNoExterior"
                  type="radio"
                  onChange={() => handleChange('investeNoExterior', val)}
                />
                <p>{val}</p>
              </label>
            ))}

            <label className="flex gap-2 mt-5 text-sm">
              <input type="checkbox" />
              Estou de acordo com o envio de comunicações, termos e condições e política da Invest Global Us
            </label>

            <label className="flex gap-2 mt-5 text-sm">
              <input type="checkbox" />
              Estou de acordo com a política de privacidade da Invest Global Us
            </label>

            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-gray-400 text-white rounded-md" onClick={() => setShowModal(false)}>
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

      {/* Hero Section */}
      <Hero title="Perfil do investidor global" />

      {/* Demais seções seguem aqui... já estavam tipadas via handleChange(key, string) ✅ */}
    </>
  );
}
