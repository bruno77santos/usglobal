export function Hero() {
  return (
    <section className="bg-cover bg-center h-[412px] lg:h-[724px] overflow-hidden"
    style={{
        backgroundImage: "url('/bg-section-16.jpeg')"
      }}
    >
      <div className="bg-[#0C2E3E]/50 h-full">
        <div className="flex flex-col items-center justify-center gap-10 p-10 lg:p-0 lg:gap-10 h-full text-center">
          <h1 className="text-white font-bold text-3xl lg:text-5xl max-w-7xl">
            FAQs
          </h1>

          <p className="text-[#E6E6E6] lg:text-2xl font-medium max-w-7xl">
            Tem dúvidas sobre a InvestGlobal ou investimentos no exterior? Procuramos reunir as perguntas mais comuns e listar aqui para você. Caso não encontre a resposta que procura, entre em contato com a nossa equipe. Será um prazer ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}
