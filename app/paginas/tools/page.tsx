'use client';

import { Hero } from '@/components/paginas/tools/hero';
import { SectionOne } from '@/components/paginas/tools/section-one';

export default function Tools() {
  return (
    <div className="min-h-screen h-full overflow-hidden">
      <Hero />
      <SectionOne />
    </div>
  );
}
