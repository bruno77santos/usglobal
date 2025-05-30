'use client'

import { useState } from 'react'
import { Home, FileText, BookOpen, Users, HelpCircle, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0c1d2c] text-white py-3 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="InvestGlobal US" className="h-10" />
        </div>

        {/* Mobile: Menu Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#102336] hover:bg-[#1b3a5e] p-2 rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/"><NavIcon icon={<Home size={22} />} /></Link>
          <Link href="/paginas/quem-somos"><NavIcon icon={<FileText size={22} />} /></Link>
          <Link href="/blog"><NavIcon icon={<BookOpen size={22} />} /></Link>
          <Link href="/paginas/tools"><NavIcon icon={<Users size={22} />} /></Link>
          <Link href="/paginas/faqs"><NavIcon icon={<HelpCircle size={22} />} /></Link>
        </div>
                {/* CTA sempre visível */}
        <a
          href="#contato"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition hidden md:block"
        >
          Agende a sua Reunião
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c1d2c] px-4 py-6 space-y-4 absolute w-full left-0 top-[64px] shadow-lg z-40 transition-all duration-300">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <NavIcon icon={<Home size={22} />} label="Início" />
            </Link>
            <Link href="/paginas/quem-somos" onClick={() => setIsOpen(false)}>
              <NavIcon icon={<FileText size={22} />} label="Quem Somos" />
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              <NavIcon icon={<BookOpen size={22} />} label="Blog" />
            </Link>
            <Link href="/paginas/tools" onClick={() => setIsOpen(false)}>
              <NavIcon icon={<Users size={22} />} label="Ferramentas" />
            </Link>
            <Link href="/paginas/faqs" onClick={() => setIsOpen(false)}>
              <NavIcon icon={<HelpCircle size={22} />} label="FAQs" />
            </Link>
            <a
              href="#contato"
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition w-full text-center"
            >
              Agende a sua Reunião
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

// Componente para os ícones
function NavIcon({ icon, label }: { icon: React.ReactNode, label?: string }) {
  return (
    <div className="flex items-center space-x-2 bg-[#102336] hover:bg-[#1b3a5e] px-4 py-2 rounded-md transition cursor-pointer">
      {icon}
      {label && <span className="text-sm">{label}</span>}
    </div>
  )
}
