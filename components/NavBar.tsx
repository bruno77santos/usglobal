// components/NavBar.tsx
import { Home, FileText, BookOpen, Users, HelpCircle } from 'lucide-react'
import Link from 'next/link'; // certifique-se de importar isso no topo


export default function NavBar() {
  return (
    <nav className="bg-[#0c1d2c] text-white py-3 shadow-md fixed top-1 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="InvestGlobal US" className="h-10" />
        </div>

{/* Menu ícones */}
<div className="flex items-center space-x-6">
  <Link href="/">
    <NavIcon icon={<Home size={22} />} />
  </Link>
  <Link href="/paginas/quem-somos">
    <NavIcon icon={<FileText size={22} />} />
  </Link>
  <Link href="paginas/blog">
    <NavIcon icon={<BookOpen size={22} />} />
  </Link>
  <Link href="paginas/tools">
    <NavIcon icon={<Users size={22} />} />
  </Link>
  <Link href="paginas/faqs">
    <NavIcon icon={<HelpCircle size={22} />} />
  </Link>
</div>

        {/* CTA Button */}
        <a
          href="#contato"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition"
        >
          Agende a sua Reunião
        </a>
      </div>
    </nav>
  )
}

// Componente do ícone
function NavIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="bg-[#102336] hover:bg-[#1b3a5e] p-3 rounded-lg transition">
      {icon}
    </button>
  )
}
