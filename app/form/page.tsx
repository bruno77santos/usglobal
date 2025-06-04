'use client';

import { useState } from 'react';
import InputLabel from '@/components/compartilhados/inputLabel';

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  investeNaXP: string;
  quantoTemInvestido: string;
  investeNoExterior: string;
}

export default function Form() {
  const [sendForm, setSendForm] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Email: '',
    Phone: '',
    investeNaXP: '',
    quantoTemInvestido: '',
    investeNoExterior: '',
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      window.open('/Guia_LiberdadeFinanceira_InvestGlobal.pdf', '_blank', 'noopener,noreferrer')
      setTimeout(() => {
        window.location.href = '/obrigado'
        setSendForm(true)
      }, 2000)
    } else {
      alert('Erro ao enviar o formulário.')
      console.error(await response.json())
    }
  } catch (err) {
    console.error(err)
    alert('Erro ao enviar o formulário.')
  }
}


  return (
    <>
      {sendForm ? (
        <div className="w-full flex items-center justify-center mt-[300px]">
          <img src="/thanks.png" alt="Obrigado" />
        </div>
      ) : (
        <div className="bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-700 text-white mt-32 p-8 rounded-md overflow-y-auto">
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
            <label className="flex items-center gap-2">
              <input
                name="investeNaXP"
                type="radio"
                onChange={() => handleChange('investeNaXP', 'Sim')}
              />
              <p>Sim</p>
            </label>
            <label className="flex items-center gap-2">
              <input
                name="investeNaXP"
                type="radio"
                onChange={() => handleChange('investeNaXP', 'Não')}
              />
              <p>Não</p>
            </label>

            <h2 className="text-[24px] font-bold mb-4 mt-6">Quanto tem investido?</h2>
            {[
              'Não tenho investimentos',
              'Abaixo de 100k',
              'Entre 100k e 300k',
              'Entre 300k a 1milhão',
              'Acima de 1milhão',
            ].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  name="quantoTemInvestido"
                  type="radio"
                  onChange={() => handleChange('quantoTemInvestido', option)}
                />
                <p>{option}</p>
              </label>
            ))}

            <h2 className="text-[24px] font-bold mb-4 mt-6">Investe no exterior?</h2>
            <label className="flex items-center gap-2">
              <input
                name="investeNoExterior"
                type="radio"
                onChange={() => handleChange('investeNoExterior', 'Sim')}
              />
              <p>Sim</p>
            </label>
            <label className="flex items-center gap-2">
              <input
                name="investeNoExterior"
                type="radio"
                onChange={() => handleChange('investeNoExterior', 'Não')}
              />
              <p>Não</p>
            </label>

            <label className="flex gap-2 mt-5 text-sm">
              <input type="checkbox" />
              Estou de acordo com o envio de comunicações, termos e condições e política da Invest Global US
            </label>

            <label className="flex gap-2 mt-5 text-sm">
              <input type="checkbox" />
              Estou de acordo com a política de privacidade da Invest Global US
            </label>

            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleSubmit}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
