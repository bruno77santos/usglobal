export function SectionTwo() {
  const accordionData = [
    {
      title: 'Redução do risco-país',
      description: 'A instabilidade política, econômica, fiscal e jurídica é altamente negativa a investimentos. Nesse contexto, os investimentos no exterior tornam-se muito mais seguros, previsíveis e interessantes para proteção, formação ou transferência de patrimônio.'
    },
    {
      title: 'Proteção cambial',
      description: 'As mesmas condições que tornam o Brasil instável e afastam investidores, causam uma excessiva perda do poder de compra do Real. Ter parte do patrimônio em Dólar nos protege dessa perda do poder de compra. '
    },
    {
      title: 'Diversificação da carteira',
      description: 'Com a diversificação internacional temos acesso a setores inexpressivos em nossa economia, mas que nos Estados Unidos contam com líderes mundiais e que oferecem grandes oportunidades de investimento e evolução patrimonial.'
    },
    {
      title: 'Sucessão patrimonial',
      description: 'Se o investidor objetiva sua sucessão patrimonial, há a possibilidade de uso de estruturas como Trust ou Holding, que oferecem uma transição de titulares segura, facilitada e econômica, com potencial de grande redução de tributos.'
    },
    {
      title: 'Segurança',
      description: 'Eventos como desastres ambientais, guerras ou confisco de bens por um governo, podem reduzir patrimônios sólidos a uma fração do original. Ter os investimentos em outra jurisdição e custodiados por instituições confiáveis e seguras torna-se uma excelente proteção.'
    },
  ];

  return (
    <section className="bg-[#F5F9FF] py-20 px-6 lg:px-20">
        <div data-aos="fade-right" className="max-w-7xl mx-auto gap-20 items-center">
<h2 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F4B] to-[#7A001A] leading-tight mb-10">
            Por que milhares de brasileiros protegem seu patrimônio no exterior?
          </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-all border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF0C34] text-white font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-semibold text-[#0A1F44]">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
