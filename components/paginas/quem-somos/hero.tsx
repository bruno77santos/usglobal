'use client'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/bg-section-14.jpeg"
        alt="Quem somos"
        fill
        className="object-cover brightness-[.35]"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Conheça quem está por trás
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light max-w-3xl mt-6 leading-relaxed">
          Acima de tudo, somos profissionais comprometidos com investimentos inteligentes, sem amarras, sem fronteiras. Comprometidos as melhores soluções para que você alcance a independência financeira.
        </p>
      </div>
    </section>
  )
}
