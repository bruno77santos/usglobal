'use client';

export function SectionSeven() {
  return (
    <section
      className="bg-center bg-cover h-[480px]"
      style={{
        backgroundImage: "url('/bg-section-7.jpeg')",
      }}
    >
      <div className="bg-black/80 h-full flex items-center justify-center">
        <div className="max-w-7xl w-full h-full flex flex-col items-center justify-center gap-7 lg:p-0 p-10">
          <h2 className="text-[#FF0C34] font-bold text-3xl lg:text-5xl">
            Em que investir?
          </h2>
          <div className="text-[#E6E6E6] lg:text-2xl font-bold text-center space-y-5">
            <p>
              Antes de qualquer orientação de investimento, é necessário
              conhecer o perfil de investidor, <br /> seus objetivos, projetos pessoais
              e limitações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
