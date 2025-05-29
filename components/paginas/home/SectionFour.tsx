'use client';

export function SectionFour() {
  const items = [
    {
      image: 'bg-1.jpg',
      text: 'Casados ou solteiros, com ou sem filhos',
    },
    {
      image: 'bg-2.jpg',
      text: 'Com patrimônio a transferir, inventariar ou em formação',
    },
    {
      image: 'bg-3.jpg',
      text: 'Em busca de redução da carga tributária do Brasil',
    },
    {
      image: 'bg-4.jpg',
      text: 'Têm planos de deixar o país futuramente',
    },
    {
      image: 'bg-5.jpg',
      text: 'Possuem boa capacidade de poupança atual e futura',
    },
    {
      image: 'bg-6.jpg',
      text: 'Podem transferir ao exterior valores a partir de R$ 100.000,00',
    },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#FF0C34] text-3xl lg:text-4xl font-bold mb-6">
          Quem se beneficia com planejamento internacional
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Descubra quem pode aproveitar as oportunidades de estruturação patrimonial, sucessória e tributária fora do Brasil.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ image, text }, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group h-[300px]"
            >
              <img
                src={image}
                alt={`card-${index}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 rounded-xl shadow">
                <p className="text-gray-800 font-semibold text-base lg:text-lg">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
