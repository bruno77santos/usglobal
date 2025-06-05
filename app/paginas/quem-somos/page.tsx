import { Hero } from '@/components/paginas/quem-somos/hero'
import { SectionFounders } from '@/components/paginas/quem-somos/SectionFounders'
import { SectionMission } from '@/components/paginas/quem-somos/SectionMission'

export default function QuemSomos() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <SectionMission />
      <SectionFounders />
    </main>
  )
}
