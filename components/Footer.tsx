'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'Quem Somos', href: '/paginas/quem-somos' },
    { label: 'Blog', href: '/paginas/blog' },
    { label: 'Ferramentas', href: '/paginas/tools' },
    { label: 'FAQs', href: '/paginas/faqs' },
    
  ];

  const toolLinks = [
    { label: 'S&P 500', href: '/paginas/tools/sp500' },
    { label: 'Holding', href: '/paginas/tools/holding' },
    { label: 'Offshore', href: '/paginas/tools/offshore' },
    { label: 'Profile', href: '/paginas/tools/profile' },
    { label: 'Saída Fiscal', href: '/paginas/tools/saida-fiscal' },
  ];

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Política de Privacidade</h2>
            <p className="text-gray-700 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
              {/* Conteúdo completo da política aqui */}
            </p>
          </div>
        </div>
      )}

      <footer
        className="relative text-gray-200"
        style={{ backgroundImage: "url('/bg-section-11.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image src="/logo.svg" alt="InvestGlobal US" width={160} height={40} />
            </Link>
            <p className="mt-4 text-sm">
              Soluções de investimentos nos Estados Unidos para brasileiros.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/company/investglobalus" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin size={24} className="hover:text-white transition" />
              </a>
              <a href="https://www.facebook.com/people/Invest-Global-US/61558413927018" target="_blank" rel="noopener noreferrer">
                <IoLogoFacebook size={24} className="hover:text-white transition" />
              </a>
              <a href="https://www.instagram.com/investglobalus" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram size={24} className="hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ferramentas Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ferramentas</h3>
            <ul className="space-y-2">
              {toolLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs">
            <span>
              © {new Date().getFullYear()} InvestGlobal US. Todos os direitos reservados.
            </span>
            <span
              className="underline cursor-pointer hover:text-white"
              onClick={() => setShowModal(true)}
            >
              Política de Privacidade
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
