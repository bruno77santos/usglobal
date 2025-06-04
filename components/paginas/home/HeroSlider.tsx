'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/carrossel-foto1.jpg',
    title: 'Investir nos Estados Unidos é uma necessidade.',
    subtitle:
      'Nossa instabilidade política, fiscal e jurídica exige diversificação internacional para proteção do patrimônio.',
  },
  {
    image: '/bg-section-13.jpg',
    title: 'E pode ser para você.',
    subtitle:
      'Alocar parte dele nos Estados Unidos traz proteção, minimiza riscos e aumenta seu potencial de valorização.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
  <div
    key={i}
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      i === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
    }`}
  >
    <Image
      src={slide.image}
      alt={`Slide ${i}`}
      fill
      priority={i === 0}
      className="object-cover"
      style={{
        objectPosition: 'center top', // Foco mais natural
      }}
    />

    {/* Escurecimento total */}
    <div className="absolute inset-0 bg-black/60 z-10" />

    {/* Texto em destaque */}
<div
  className={`absolute inset-0 z-20 flex flex-col px-6 ${
    i === 1
      ? 'items-start justify-center text-left pb-24 md:pl-24'
      : 'items-center justify-center text-center'
  }`}
>
  <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in mb-4">
    {slide.title}
  </h2>
  <p className="text-neutral-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed animate-fade-in delay-200">
    {slide.subtitle}
  </p>
</div>



  </div>
))}


      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 transition"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300 transition"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  )
}
