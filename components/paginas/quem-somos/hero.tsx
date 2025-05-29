'use client'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black h-full bg-opacity-50">
      {/* Imagem de fundo */}
      <Image
        src="/bg-section-14.jpeg"
        alt="Quem somos - plano de fundo"
        fill
        priority
        className="object-cover brightness-50"
      />

      {/* Conteúdo sobre a imagem */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white font-regular text-3xl lg:text-5xl max-w-7xl">
          Quem somos
        </h1>
        <p className="text-[#E6E6E6] text-xl lg:text-2xl font-medium max-w-6xl mx-auto mt-6">
          Acima de tudo, somos profissionais comprometidos com investimentos inteligentes,
          sem amarras, sem fronteiras. Comprometidos com as melhores soluções para que você
          alcance a independência financeira.
        </p>
      </div>
    </section>
  )
}
