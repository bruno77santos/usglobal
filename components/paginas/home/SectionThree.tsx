export function SectionThree() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto bg-[#030a34] rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg">
        
        {/* Texto à esquerda */}
        <div className="flex-1 text-white space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold">Quem deve investir?</h2>
          <p className="text-base leading-relaxed text-[#D1FAE5]">
            Com a tecnologia conectando o mundo, transferências de valores feitas em segundos e total segurança
nas transações, não há mais fronteiras para os investimentos.
          </p>
          
        </div>

        {/* Imagem à direita */}
        <div className="flex-1">
          <img
            src="/bg-section-3.png" // troque pelo caminho correto da imagem
            alt="Mulheres usando app bancário"
            className="rounded-xl w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
