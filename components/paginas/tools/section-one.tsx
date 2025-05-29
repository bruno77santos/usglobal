'use client';

import { useState } from 'react';
import Image from 'next/image';
import InputLabel from '@/components/compartilhados/inputLabel';

function Item({ index, title }: { index: number; title: string }) {
  return (
    <div className="px-6 py-8 bg-[#282828] rounded-xl flex flex-col items-center justify-center gap-6 h-56">
      <Image
        src={`/icons/tools/icon-${index}.svg`}
        alt={`Ícone ${index}`}
        width={56}
        height={56}
      />
      <h2 className="text-white text-3xl font-bold text-center">{title}</h2>
    </div>
  );
}

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  investeNaXP: string;
  quantoTemInvestido: string;
  investeNoExterior: string;
}

export function SectionOne() {
  const data = [
    { title: 'Simulador S&P 500', link: '/paginas/tools/sp500' },
    { title: 'Baixe aqui seu ebook', link: '#' },
    { title: 'Holding', link: '/paginas/tools/holding' },
    { title: 'Saída Fiscal', link: '/paginas/tools/saida-fiscal' },
    { title: 'Offshore', link: '/paginas/tools/offshore' },
    { title: 'Perfil do investidor Global', link: '/paginas/tools/profile' },
  ];

  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Email: '',
    Phone: '',
    investeNaXP: '',
    quantoTemInvestido: '',
    investeNoExterior: '',
  });
  const [sendForm, setSendForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idList: '678ec50cd39e18f5ebca5e48',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `Novo investidor: ${formData.Nome}`,
          desc: `Respostas do formulário:\n${JSON.stringify(formData, null, 2)}`,
          closed: false,
        }),
      });

      if (response.ok) {
        setSendForm(true);
      } else {
        console.error('Erro ao enviar formulário:', response.statusText);
        alert('Erro ao enviar formulário.');
      }
    } catch (err) {
      console.error('Erro na requisição:', err);
      alert('Erro ao enviar formulário.');
    }
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99] overflow-auto">
          <div className="bg-slate-700 text-white p-8 rounded-md w-[600px] max-h-[90vh] overflow-y-auto">
            {sendForm ? (
              <>
                <button
                  className="px-4 py-2 bg-gray-400 text-white rounded-md mb-5"
                  onClick={() => {
                    setShowModal(false);
                    setSendForm(false);
                  }}
                >
                  Fechar janela
                </button>
                <Image src="/thanks.png" alt="Obrigado" width={200} height={200} />
              </>
            ) : (
              <>
                <h2 className="text-[24px] font-bold mb-4">Preencha alguns dados</h2>
                <div className="flex items-center gap-2">
                  <InputLabel
                    type="name"
                    labelTitle="Seu nome"
                    placeholder="Digite o seu nome"
                    onChange={e => handleChange('Nome', e.target.value)}
                  />
                  <InputLabel
                    type="email"
                    labelTitle="E-mail"
                    placeholder="Digite seu e-mail"
                    onChange={e => handleChange('Email', e.target.value)}
                  />
                </div>
                <InputLabel
                  type="phone"
                  labelTitle="Telefone"
                  placeholder="DD 9 0000-0000"
                  onChange={e => handleChange('Phone', e.target.value)}
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
                ].map(option => (
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
                {['Sim', 'Não'].map(option => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      name="investeNoExterior"
                      type="radio"
                      onChange={() => handleChange('investeNoExterior', option)}
                    />
                    <p>{option}</p>
                  </label>
                ))}

                <div className="flex justify-between mt-4">
                  <button
                    className="px-4 py-2 bg-gray-400 text-white rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    onClick={handleSubmit}
                  >
                    Confirmar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Seção de cards */}
      <section className="p-10 py-20 flex items-center justify-center">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 space-y-6 lg:space-y-0 grid-cols-1 items-center justify-center lg:max-w-7xl">
          {data.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => {
                if (item.title === 'Baixe aqui seu ebook') {
                  setShowModal(true);
                }
              }}
              className="block"
            >
              <Item index={idx + 1} title={item.title} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
