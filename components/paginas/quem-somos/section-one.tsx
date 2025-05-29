export function SectionOne() {
  return (
    <section className="flex items-center justify-center p-10 py-20 lg:pb-40 bg-black h-full bg-opacity-50">
      <div className="lg:space-y-40 space-y-10 lg:flex flex-col justify-between lg:max-w-7xl">
        <div className="flex-1 lg:flex items-center justify-between gap-20 space-y-5 lg:space-y-0">
          <div className="flex-1 space-y-5">
            <h2 className="text-[#FF0C34] text-2xl lg:text-4xl font-bold">
              Anderson de Oliveira Matos - founder
            </h2>
            <p className="text-[#E6E6E6] lg:text-xl">
              Profissional do mercado financeiro há mais de 5 anos, atuou em
              alguns dos maiores escritórios de investimento do país, onde
              passou a se especializar em investimentos internacionais. Ao longo
              do tempo procurou aprofundar-se cada vez mais em uma área que
              considera essencial aos brasileiros, na busca de segurança e
              evolução patrimonial. Atualmente é ligado a um dos maiores escritórios da XP, do qual é sócio e assessor de investimento.
            </p>
          </div>
          <div className="flex flex-col items-center justify-end relative">
            <img
              className="!shadow-[#FF0C34] shadow-[7px_7px_0px_0px] lg:shadow-[14px_14px_0px_0px] rounded-lg lg:h-[500px] lg:w-[500px] z-10"
              src="/anderson.svg"
              alt="anderson"
            />
            <div className="w-40 h-40 absolute top-0 right-0 bg-red-500/90 blur-[150px] rounded-full" />
            <div className="lg:w-[600px] lg:absolute -bottom-20 lg:right-1/2 italic z-20 bg-white rounded-2xl p-6 flex items-center justify-center text-sm">
              “O contato com centenas de clientes dos mais diversos perfís ao
              longo dos anos, a troca de experiências com dezenas de colegas, os
              resultados que tenho acompanhado e o conhecimento que adquiri
              aumentaram minha paixão por investimentos internacionais. Investir
              no exterior tornou-se movimento sem volta, pela necessidade de
              diversificação e proteção patrimonial que os ativos internacionais
              representam aos brasileiros”.
            </div>
          </div>
        </div>

        <div className="flex-1 lg:flex flex-row-reverse items-center justify-between gap-20 space-y-5 lg:space-y-0">
          <div className="flex-1 space-y-5">
            <h2 className="text-[#FF0C34] text-2xl lg:text-4xl font-bold">
              João Augusto C. Fernandes - founder
            </h2>
            <p className="text-[#E6E6E6] lg:text-xl">
              Profissional de marketing por mais de 20 anos, morou no exterior
              por 4 anos, quando passou a administrar seus próprios
              investimentos. De volta ao Brasil após viver em uma economia forte
              e estável, concluiu um MBA em Investimentos e Asset Allocation e qualificou-se para atuar no mercado financeiro. Em 2023 associou-se a um dos maiores escritórios da XP, onde atua até hoje.
            </p>
          </div>
          <div className="flex flex-col items-center justify-end relative">
            <img
              className="!shadow-[#FF0C34] shadow-[7px_7px_0px_0px] lg:shadow-[14px_14px_0px_0px] rounded-lg lg:h-[500px] lg:w-[500px] z-10"
              src="/joao.svg"
              alt="joao"
            />
            <div className="w-40 h-40 absolute top-0 left-0 bg-red-500/90 blur-[150px] rounded-full" />
            <div className="lg:w-[600px] lg:absolute -bottom-20 lg:left-1/2 italic z-20 bg-white rounded-2xl p-6 flex items-center justify-center text-sm">
              “A experiência adquirida ao longo de minha carreira, a vivência no
              exterior e os novos conhecimentos adquiridos reforçaram em mim a
              certeza de que ter parte do patrimônio alocado fora do país é
              essencial ao investidor brasileiro. A InvestGlobal irá colocar
              todos os seus esforços para facilitar o acesso às melhores
              soluções para cada perfil de investidor”.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
