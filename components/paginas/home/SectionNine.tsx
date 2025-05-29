'use client';

import Image from 'next/image';

const services = [
  {
    icon: '/icon-6.svg',
    title: 'Orientação de investimentos no exterior, com ênfase nos Estados Unidos',
    description:
      'Há vários aspectos a serem analisados, como objetivos, perfil de investidor, capacidade de investimento, patrimônio total, entre outros, que definirão o melhor caminho a seguir. A partir das informações coletadas com os clientes prestamos orientações que irão colaborar na tomada de decisão de seus investimentos, na busca do melhor resultado possível, sempre respeitando seus objetivos.',
  },
  {
    icon: '/icons/tools/icon-7.svg',
    title: 'Apoio no processo de formação de carteira de ativos, documentação e contabilidade',
    description:
      'Com nossa expertise no mercado financeiro ajudamos na seleção de ativos e formatação de uma carteira de investimentos sólida, para a evolução de seu patrimônio de forma consistente e sustentável.',
  },
  {
    icon: '/icons/tools/icon-8.svg',
    title: 'Parcerias com as instituições mais confiáveis e seguras e os profissionais mais qualificados do mercado',
    description:
      'Temos parcerias com as mais tradicionais e confiáveis instituições financeiras do Brasil e Estados Unidos, com especializações que se complementam e formam um pacote de serviços único e de altíssima qualidade. Facilitamos o acesso de nossos seus clientes às melhores opções do mercado, independente do perfil de investidor.',
  },
];

export default function SectionNine() {
  return (
    <section className="relative bg-[#030a34] text-white py-20 px-6 lg:px-12">
      {/* Overlay de fundo */}
      <div className="absolute inset-0 bg-[url('/bg-section-8.png')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-[#fd0d34] text-3xl lg:text-5xl font-bold">
            Nossa Atuação
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Todo o processo executado pela InvestGlobal US é transparente, obedecendo às normas regulatórias do Brasil e dos Estados Unidos.
            Seus recursos são geridos por agentes de alta confiabilidade e expertise.
          </p>
        </header>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <article
              key={idx}
              className="bg-white/[5%] backdrop-blur-sm rounded-xl p-8 flex flex-col h-full hover:bg-white/[10%] transition"
            >
              <div className="flex-none mb-6">
                <Image src={svc.icon} alt={svc.title} width={100} height={100} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{svc.title}</h3>
              <p className="text-gray-300 flex-1 leading-relaxed">{svc.description}</p>
              <a
                href="https://wa.me/+5511961014004?text=Ol%C3%A1%20estou%20interessado%20em%20investir!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[#fd0d34] font-medium hover:underline"
              >
                Saiba mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
