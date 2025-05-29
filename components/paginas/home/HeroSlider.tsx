'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/bg-section-1.jpeg',
    title: 'Investir nos Estados Unidos é uma necessidade.',
    subtitle:
      'Nossa instabilidade política, fiscal e jurídica exige diversificação internacional para proteção do patrimônio.',
  },
  {
    image: '/bg-section-13.jpeg',
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
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${i}`}
            fill
            className="object-cover"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-white text-3xl md:text-5xl font-semibold mb-4 drop-shadow-sm">
              {slide.title}
            </h2>
            <p className="text-neutral-200 text-base md:text-lg max-w-2xl">
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
