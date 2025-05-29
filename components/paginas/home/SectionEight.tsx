'use client';

import { useState } from 'react';
import Image from 'next/image';

const investmentOptions = [
  {
    title: 'ETFs',
    description:
      'Fundos negociados em bolsa que replicam índices, setores ou classes de ativos. Possuem liquidez, diversificação e baixas taxas.',
  },
  {
    title: 'Mutual Funds',
    description:
      'Fundos americanos com diversas estratégias. É necessário analisar histórico, taxas, estratégia e gestora antes de investir.',
  },
  {
    title: 'REITs',
    description:
      'Fundos imobiliários negociados em bolsa que geram dividendos. São os equivalentes americanos dos FIIs.',
  },
  {
    title: 'Stocks',
    description:
      'Ações de empresas listadas em bolsas como NYSE e NASDAQ. Representam participação em empresas.',
  },
  {
    title: 'Bonds',
    description:
      'Títulos de dívida emitidos por empresas com vencimento e rendimento. Semelhantes a debêntures.',
  },
  {
    title: 'US Treasury',
    description:
      'Títulos do Tesouro Americano (T-Bill, T-Note, T-Bond). Considerados os mais seguros do mundo.',
  },
  {
    title: 'BDRs',
    description:
      'Títulos brasileiros com lastro em ativos internacionais. Permitem exposição a empresas e ETFs americanos.',
  },
  {
    title: 'Real Estate',
    description:
      'Investimento direto em imóveis nos EUA. Pode gerar renda passiva e segurança patrimonial.',
  },
  {
    title: 'Criptomoedas',
    description:
      'Ativos digitais com alto risco. Requerem orientação profissional e devem ser usados com cautela.',
  },
];

function FlipCard({ title, description, imageSrc, index }: { title: string; description: string; imageSrc: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full sm:w-[300px] h-[280px] perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-[#030a34] text-white rounded-xl p-6 backface-hidden flex flex-col justify-center items-center gap-4 shadow-xl">
          <div className="text-[#fd0d34] text-3xl font-bold">0{index + 1}</div>
          <h3 className="text-xl font-semibold text-center">{title}</h3>
          <p className="text-sm opacity-70 mt-2">Clique e Vire o Card</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white text-[#030a34] rounded-xl p-6 backface-hidden rotate-y-180 flex flex-col justify-between shadow-xl">
          <div className="flex-1 flex items-center justify-center text-sm leading-6 text-center">
            {description}
          </div>
          <div className="mt-4 flex justify-center">
            <Image
              src={imageSrc}
              alt="Detalhe do investimento"
              width={260}
              height={100}
              className="rounded-md object-cover h-24 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionEight() {
  return (
    <section className="bg-[#f4f4f4] py-20 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-[#fd0d34] text-3xl lg:text-5xl font-bold mb-6">
          Em que investir?
        </h2>
        <p className="text-[#030a34] text-lg lg:text-2xl font-light max-w-3xl mx-auto">
          Antes de qualquer orientação de investimento, é necessário conhecer o perfil do investidor, seus objetivos e limitações.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {investmentOptions.map((item, index) => (
          <FlipCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            imageSrc="/bg-section-9.jpeg"
          />
        ))}
      </div>
    </section>
  );
}