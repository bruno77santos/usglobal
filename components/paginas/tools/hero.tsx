'use client'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0C1D2C] text-white py-20 px-6 lg:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className="space-y-6 lg:space-y-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Ferramentas <span className="text-[#FF0C34]">estratégicas</span><br /> para decisões de investimento
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
            Nesta seção você encontra simuladores e comparativos de investimento entre as principais opções no Brasil e Estados Unidos, e questionários para que possamos entender melhor seu perfil. São ferramentas importantes que ajudam na tomada de decisão e nos permitem lhe dar orientações personalizadas.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#FF0C34] via-white to-[#1976D2] rounded-full" />
        </div>

        {/* Imagem decorativa à direita */}
        <div className="relative w-full h-[300px] lg:h-[450px]">
          <Image
            src="/bg-section-toolsjpg.jpg" // substitua por sua imagem ideal
            alt="Ferramentas Investimento"
            fill
            className="object-contain lg:object-cover rounded-xl shadow-xl border border-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF0C34]/20 via-transparent to-[#1976D2]/20 rounded-xl" />
        </div>
      </div>

      {/* Estilização no fundo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  )
}
