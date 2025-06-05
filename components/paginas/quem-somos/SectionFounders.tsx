'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const founders = [
  {
    name: 'Anderson de Oliveira Matos',
    image: '/anderson.svg',
    quote:
      'O contato com centenas de clientes dos mais diversos perfís ao longo dos anos, a troca de experiências com dezenas de colegas, os resultados que tenho acompanhado e o conhecimento que adquiri aumentaram minha paixão por investimentos internacionais. Investir no exterior tornou-se movimento sem volta, pela necessidade de diversificação e proteção patrimonial que os ativos internacionais representam aos brasileiros.',
    description:
      'Profissional do mercado financeiro há mais de 5 anos, atuou em alguns dos maiores escritórios de investimento do país, onde passou a se especializar em investimentos internacionais. Ao longo do tempo procurou aprofundar-se cada vez mais em uma área que considera essencial aos brasileiros, na busca de segurança e evolução patrimonial. Atualmente é ligado a um dos maiores escritórios da XP, do qual é sócio e assessor de investimento.',
  },
  {
    name: 'João Augusto C. Fernandes',
    image: '/joao.svg',
    quote:
      'A experiência adquirida ao longo de minha carreira, a vivência no exterior e os novos conhecimentos adquiridos reforçaram em mim a certeza de que ter parte do patrimônio alocado fora do país é essencial ao investidor brasileiro. A InvestGlobal irá colocar todos os seus esforços para facilitar o acesso às melhores soluções para cada perfil de investidor.',
    description:
      'Profissional de marketing por mais de 20 anos, morou no exterior por 4 anos, quando passou a administrar seus próprios investimentos. De volta ao Brasil após viver em uma economia forte e estável, concluiu um MBA em Investimentos e Asset Allocation e qualificou-se para atuar no mercado financeiro. Em 2023 associou-se a um dos maiores escritórios da XP, onde atua até hoje.',
  },
]

export function SectionFounders() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-white">
      {/* Background 🇺🇸 animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] animate-gradient-xy opacity-95 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${
              i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Avatar */}
            <div className="relative w-full lg:w-[420px]">
              <Image
                src={f.image}
                alt={f.name}
                width={500}
                height={500}
                className="rounded-xl shadow-xl border-4 border-white/20"
              />
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-red-600/60 blur-2xl rounded-full z-[-1]" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/60 blur-2xl rounded-full z-[-1]" />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                {f.name}
              </h2>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                {f.description}
              </p>
              <blockquote className="italic text-sm md:text-base text-[#F6F6F6] border-l-4 border-red-500 pl-4 mt-4">
                “{f.quote}”
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}
