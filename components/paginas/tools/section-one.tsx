'use client'

import { useState } from 'react'
import Image from 'next/image'
import InputLabel from '@/components/compartilhados/inputLabel'

function Item({ index, title }: { index: number; title: string }) {
  return (
    <div className="group bg-[#0c1d2c] hover:bg-[#102336] transition-all duration-300 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-white/5 hover:border-[#FF0C34]/40 cursor-pointer flex flex-col items-center justify-center gap-6 min-h-[220px] text-center transform hover:scale-[1.02]">
      <Image
        src={`/icons/tools/icon-${index}.svg`}
        alt={`Ícone ${index}`}
        width={56}
        height={56}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <h2 className="text-white text-lg font-semibold">{title}</h2>
    </div>
  )
}

export function SectionOne() {
  const data = [
    { title: 'Simulador S&P 500', link: '/paginas/tools/sp500' },
    { title: 'Baixe aqui seu ebook', link: '#' },
    { title: 'Holding', link: '/paginas/tools/holding' },
    { title: 'Saída Fiscal', link: '/paginas/tools/saida-fiscal' },
    { title: 'Offshore', link: '/paginas/tools/offshore' },
    { title: 'Perfil do investidor Global', link: '/paginas/tools/profile' },
  ]

  

  const [showModal, setShowModal] = useState(false)
  const [sendForm, setSendForm] = useState(false)
  const [, setFormData] = useState({
  Nome: '',
  Email: '',
  Phone: '',
  investeNaXP: '',
  quantoTemInvestido: '',
  investeNoExterior: '',
});


  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    // simulação de envio
    setTimeout(() => {
      setSendForm(true);
    }, 1000)
  }

  return (
    <>
      {/* 🧊 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[99]">
          <div className="bg-white text-[#0c1d2c] rounded-lg p-8 w-full max-w-xl shadow-xl max-h-[90vh] overflow-y-auto">
            {sendForm ? (
              <div className="flex flex-col items-center gap-4">
                <Image src="/thanks.png" alt="Obrigado" width={200} height={200} />
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSendForm(false);
                  }}
                  className="bg-[#FF0C34] hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Preencha alguns dados</h2>
                <div className="flex gap-4">
  <InputLabel
    type="name"
    labelTitle="Nome"
    placeholder="Digite seu nome"
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
                  placeholder="(xx) 9xxxx-xxxx"
                  onChange={e => handleChange('Phone', e.target.value)}
                />

                {/* Perguntas */}
                <div className="mt-4 space-y-3 text-sm">
                  <label>Investe na XP?</label>
                  <div className="flex gap-4">
                    <label><input type="radio" name="investeNaXP" onChange={() => handleChange('investeNaXP', 'Sim')} /> Sim</label>
                    <label><input type="radio" name="investeNaXP" onChange={() => handleChange('investeNaXP', 'Não')} /> Não</label>
                  </div>

                  <label className="mt-4">Quanto tem investido?</label>
                  {['Não tenho investimentos', 'Abaixo de 100k', 'Entre 100k e 300k', 'Entre 300k a 1 milhão', 'Acima de 1 milhão'].map((v, i) => (
                    <div key={i}>
                      <label><input type="radio" name="quantoTemInvestido" onChange={() => handleChange('quantoTemInvestido', v)} /> {v}</label>
                    </div>
                  ))}

                  <label className="mt-4">Investe no exterior?</label>
                  <div className="flex gap-4">
                    <label><input type="radio" name="investeNoExterior" onChange={() => handleChange('investeNoExterior', 'Sim')} /> Sim</label>
                    <label><input type="radio" name="investeNoExterior" onChange={() => handleChange('investeNoExterior', 'Não')} /> Não</label>
                  </div>
                </div>

                <button
                  className="bg-[#FF0C34] mt-6 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
                  onClick={handleSubmit}
                >
                  Confirmar
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ⚙️ Grade de ferramentas */}
      <section className="bg-[#0c1d2c] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              onClick={() => item.title === 'Baixe aqui seu ebook' && setShowModal(true)}
            >
              <a href={item.link}>
                <Item index={idx + 1} title={item.title} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
