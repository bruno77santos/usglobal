'use client'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative bg-[#0C1D2C] text-white overflow-hidden py-20 px-6 lg:py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="/calc/bg/bg-sim-s&p.jpg"
          alt="Simulador S&P 500"
          fill
          className="object-cover object-center opacity-20"
        />
        {/* Overlays de fundo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Conteúdo textual */}
        <div className="space-y-6 lg:pr-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Offshore <span className="text-[#FF0C34]"></span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
            Dependendo do patrimônio acumulado, uma possibilidade para a internacionalização de seu capital é 
            constituir uma Offshore, que é uma PJ voltada à gestão de patrimônio.
            <br />
            Os custos de abertura e manutenção diluem-se ao longo do tempo e são compensados pelas vantagens 
            tributárias e fácil sucessão patrimonial. Em geral, o resultado é altamente favorável comparado a 
            investimentos mantidos no Brasil.          

          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF0C34] via-white to-[#1976D2] rounded-full" />
        </div>
 
        {/* Imagem destacada */}
        <div className="hidden lg:block relative w-full h-[360px]">
          <Image
            src="/icons/tools/icon-5.svg"
            alt="Ícone S&P"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
