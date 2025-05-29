export function Hero() {
    return (
        <section className="bg-[url('/calc/bg/bg-sim-s&p.jpg')] bg-cover bg-center h-auto mt-10 lg:h-[502px] overflow-hidden">
            <div className="bg-[#0C2E3E]/80 h-full ">

                <div className="w-[97%] max-w-[1280px] flex flex-col items-left justify-center gap-10 p-10 lg:p-0 lg:gap-10 h-full mx-auto">
                    <div className="w-[97%] max-w-[1127px]">
                        <h1 className="text-white font-bold text-3xl lg:text-5xl mt-5">
                            Simulador S&P 500
                        </h1>

                        <p className="text-[#E6E6E6] lg:text-2xl font-[500] mt-[24px]">
                            Principal índice de ações dos Estados Unidos, reúne as 500 maiores empresas do país, mantidas em constante monitoramento e atualização. Melhor retrato da força da economia americana e das oportunidades de evolução do capital investido no país, cujas oscilações têm impactos no mundo todo. A proposta deste simulador é fornecer um comparativo desse potencial contra os resultados da B3, e baseia-se no histórico de ambos índices (S&P500 e Ibovespa) dos últimos 10 anos.               </p>


                    </div>
                </div>

            </div>
        </section>
    );
}
