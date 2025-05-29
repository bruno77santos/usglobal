import HeroSlider from '@/components/paginas/home/HeroSlider';
import HeroEbook from '@/components/paginas/home/HeroEbook ';
import SectionEight from '@/components/paginas/home/SectionEight';
import ToolsEssentials from '@/components/paginas/home/ToolsEssentials';
import {SectionOne} from '@/components/paginas/home/SectionOne';
import {SectionTwo} from '@/components/paginas/home/SectionTwo';
import {SectionThree} from '@/components/paginas/home/SectionThree';
import {SectionFour} from '@/components/paginas/home/SectionFour';
import {SectionFive} from '@/components/paginas/home/SectionFive';
import {SectionSix} from '@/components/paginas/home/SectionSix';
import {SectionSeven} from '@/components/paginas/home/SectionSeven';
import SectionNine from '@/components/paginas/home/SectionNine';
import {SectionTen} from '@/components/paginas/home/SectionTen';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <HeroEbook />
      <ToolsEssentials />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/*<SectionFive />*/}
      <SectionSix />
      {/*<SectionSeven />*/}
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </main>
  )
}
