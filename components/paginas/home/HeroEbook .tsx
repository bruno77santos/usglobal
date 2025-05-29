import Link from 'next/link';
import Image from 'next/image';

const HeroEbook = () => {
  return (
    <section className="relative bg-white py-20 px-6 lg:px-20 text-[#030a34]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Texto */}
        <div className="flex-1 flex flex-col gap-6" data-aos="fade-right">
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
            Guia Para a Liberdade Financeira
          </h2>

          <p className="text-base lg:text-lg text-gray-700">
            Descubra como proteger seu patrimônio, planejar sua sucessão e valorizar seu capital investindo nos Estados Unidos!
          </p>
          <p className="text-base lg:text-lg text-gray-700">
            Nosso e-book gratuito traz orientações essenciais para quem deseja diversificar seus investimentos em um dos mercados mais sólidos e seguros do mundo.
          </p>
          <p className="text-base lg:text-lg text-gray-700">
            Com a força do dólar, a estabilidade econômica e a confiabilidade das instituições americanas, você terá acesso a oportunidades estratégicas para garantir um futuro financeiro mais seguro para você e sua família.
          </p>

          <p className="font-semibold text-[#030a34] mt-2">
            📩 <strong>Baixe agora</strong> e dê o primeiro passo rumo à sua liberdade financeira!
          </p>

          {/* Botão com cor vermelha da identidade */}
          <div className="mt-6">
            <Link
              href="/form"
              className="inline-flex items-center bg-[#fd0d34] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              <span className="mr-2">Baixar E-book</span>
              <Image
                src="/book-icon.svg"
                alt="Ícone do livro"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Imagem do Ebook */}
        <div className="flex-1 max-w-xl mx-auto" data-aos="fade-left">
          <Image
            src="/bg-book.svg"
            alt="Capa do Ebook"
            width={770}
            height={500}
            className="w-full h-auto rounded-xl shadow-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroEbook;
