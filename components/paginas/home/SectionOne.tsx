'use client';

import Image from 'next/image';

export function SectionOne() {
  return (
    <section
      className="min-h-[520px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-section-2.png')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md w-full h-full flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10">
          
          {/* Texto à esquerda */}
          <div data-aos="fade-right" className="flex flex-col gap-6">
            <h2 className="text-[#030a34] font-extrabold text-3xl lg:text-5xl leading-tight">
              Por que investir no exterior?
            </h2>
            <p className="text-gray-800 text-lg lg:text-xl font-medium">
              Investir no exterior traz diversos benefícios. Qualquer pessoa física ou jurídica em situação fiscal regular pode fazer isso com facilidade, direto do computador ou smartphone.
            </p>
            <a
              href="#contato"
              className="mt-2 inline-block bg-[#fd0d34] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition-colors w-fit"
            >
              Fale com um especialista
            </a>
          </div>

          {/* Imagem à direita */}
          <div data-aos="fade-left" className="flex justify-center">
            <Image
              src="/sectionOnejpg.jpg" // Substitua por sua imagem real em /public
              alt="Investimento nos EUA"
              width={500}
              height={400}
              className="rounded-xl shadow-md object-cover max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
