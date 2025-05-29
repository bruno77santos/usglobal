'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, ShieldCheck, Globe } from 'lucide-react';


export function SectionTen() {
  const panels = [
    {
      icon: <TrendingUp size={36} className="text-[#fd0d34]" />,
      title: 'Crescimento',
      points: [
        'S&P 500: +10% a.a. nas últimas 2 décadas',
        'NYSE ~20× maior que a B3 em volume',
        'Tech giants valem 30× o PIB do Brasil',
      ],
    },
    {
      icon: <ShieldCheck size={36} className="text-[#fd0d34]" />,
      title: 'Segurança',
      points: [
        'Títulos do Tesouro Americano: mais segurança',
        'Ambiente jurídico e regulatório consolidado',
        'Dólar forte como moeda refúgio global',
      ],
    },
    {
      icon: <Globe size={36} className="text-[#fd0d34]" />,
      title: 'Oportunidades',
      points: [
        'Acesso a fundos e REITs exclusivos',
        'Multinacionais listadas em NYSE/NASDAQ',
        'Diversificação fora do Brasil (BDRs, ETFs)',
      ],
    },
  ];

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative bg-[url('/bg-section-10.png')] bg-cover bg-center py-24 lg:py-40">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-0 text-white space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[#fd0d34] text-4xl lg:text-6xl font-bold leading-tight">
            Por que investir nos Estados Unidos?
          </h2>
          <p className="mt-4 text-gray-200 text-lg lg:text-xl">
            Ambiente robusto, oportunidades globais e segurança jurídica para o seu patrimônio crescer.
          </p>
        </div>

        {/* Panels */}
        <div className="grid gap-8 lg:grid-cols-3">
          {panels.map((panel, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`
                bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col h-full transition 
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                duration-700
              `}
            >
              <div className="flex-none mb-6">{panel.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{panel.title}</h3>
              <ul className="flex-1 space-y-3 text-gray-200 text-sm lg:text-base">
                {panel.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 bg-[#fd0d34] rounded-full flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/+5511961014004?text=Ol%C3%A1%20estou%20interessado%20em%20investir!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[#fd0d34] font-medium hover:underline"
              >
                Fale com um especialista →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
