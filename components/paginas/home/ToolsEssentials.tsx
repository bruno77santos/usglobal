'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Tools_Essentials() {
  return (
    <section className="w-full bg-[#f9fafb] text-[#030a34] py-24 px-6">
      <div className="max-w-[1436px] mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-16">
          <h2 className="w-full lg:max-w-[680px] text-[32px] lg:text-[56px] font-extrabold leading-tight tracking-tight">
            Ferramentas essenciais para seu{' '}
            <span className="text-[#fd0d34]">
              investimento internacional
            </span>
          </h2>

          <p className="text-lg lg:text-xl lg:max-w-[640px] text-gray-700 leading-relaxed">
            Para investir com segurança e estratégia no mercado global, é fundamental contar com as ferramentas certas.
            Por isso, disponibilizamos recursos exclusivos que ajudam você a tomar decisões mais assertivas e alcançar
            seus objetivos financeiros com eficiência.
          </p>
        </div>

        {/* Carrossel */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={3.3}
          spaceBetween={30}
          breakpoints={{
            200: { spaceBetween: 20, slidesPerView: 1.1 },
            500: { spaceBetween: 20, slidesPerView: 1.4 },
            800: { spaceBetween: 20, slidesPerView: 2 },
            1100: { spaceBetween: 30, slidesPerView: 3 },
            1400: { spaceBetween: 30, slidesPerView: 3.3 },
          }}
        >
          {[
            {
              href: "/paginas/tools/sp500",
              img: "/tools/1.jpg",
              title: "Simulador S&P 500",
              desc: "Compare seus investimentos com o índice de referência mundial e tire proveito de sua valorização.",
            },
            {
              href: "/paginas/tools/holding",
              img: "/tools/2.jpg",
              title: "Holding",
              desc: "Estruture seus investimentos para sucessão patrimonial e aumente a proteção dos seus ativos.",
            },
            {
              href: "/paginas/tools/offshore",
              img: "/tools/3.png",
              title: "Offshore",
              desc: "Aprenda a montar uma estrutura offshore para otimizar sua performance fiscal internacional.",
            },
            {
              href: "/paginas/tools/profile",
              img: "/tools/4.png",
              title: "Perfil do Investidor Global",
              desc: "Identifique seu perfil de risco e receba recomendações alinhadas aos seus objetivos.",
            },
            {
              href: "/paginas/tools/saida-fiscal",
              img: "/tools/5.png",
              title: "Saída Fiscal",
              desc: "Entenda o processo legal de saída fiscal do Brasil e planeje sua transição financeira internacional.",
            },
          ].map(({ href, img, title, desc }, index) => (
            <SwiperSlide key={index}>
  <a
    href={href}
    target="_blank"
    className="block bg-white hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden shadow-md border border-gray-200 p-6 flex flex-col gap-4 h-full min-h-[420px]" // 🔧 altura mínima padronizada
  >
    <div className="w-full h-[220px] relative rounded-xl overflow-hidden">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover rounded-xl"
      />
    </div>

    <div className="flex flex-col justify-between flex-1">
      <h3 className="text-xl font-bold text-[#030a34]">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </a>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
