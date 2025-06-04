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
    { label: 'Investidor Global', href: '/paginas/tools/profile' },
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
              A InvestGlobal US valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossos serviços. Informações coletadas: podemos coletar informações pessoais, como nome, e-mail e informações de pagamento, quando você se cadastra em nossa plataforma ou utiliza nossos serviços.

Uso das informações: utilizamos as informações pessoais coletadas para fornecer e melhorar nossos serviços, personalizar sua experiência de usuário, processar pagamentos e enviar comunicações relacionadas aos nossos serviços.

Compartilhamento de informações: não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou conforme exigido por lei.

Cookies: utilizamos cookies e outras tecnologias de rastreamento para melhorar a funcionalidade do nosso site e personalizar sua experiência de usuário. Você pode desativar os cookies em seu navegador, mas isso pode afetar a funcionalidade do site. Segurança: implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.

Menores de idade: nossos serviços não são destinados a menores de 18 anos, e não coletamos intencionalmente informações pessoais de menores de idade. Alterações nesta política: reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento, mediante aviso prévio. O uso continuado de nossos serviços após tais alterações constitui sua aceitação das mesmas.

Contato: se você tiver alguma dúvida ou preocupação sobre nossa Política de Privacidade, entre em contato conosco através do e-mail: contato@investglobal.us.

Ao utilizar nossos serviços, você concorda com os termos desta Política de Privacidade.

Última atualização: 21/01/2025
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
              A Liberdade Financeira ao Seu Alcance
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
        {/* Disclaimer Legal */}
<div className="bg-black/80 text-white text-[11px] md:text-xs px-6 py-6 mt-4 leading-relaxed">
  <div className="max-w-7xl mx-auto text-justify">
    A Invest Global US. (CNPJ: 54.099.659/0001-76) não é uma instituição financeira e não realiza operações de crédito, consultoria ou assessoria de investimentos diretamente. Nossa plataforma facilita o acesso de clientes a produtos e serviços oferecidos por nossos parceiros, instituições financeiras renomadas e agentes autônomos de investimento. <br /><br />
    Nossas calculadoras e simuladores são ferramentas de apoio que se baseiam em históricos de rentabilidade: não representam rentabilidade futura, e os resultados apresentados não devem ser interpretados como exatos, em função dos diversos fatores que interferem nos investimentos. As informações disponíveis em nosso site não constituem recomendação de investimentos, compra, venda ou manutenção de ativos, e são obtidas de fontes confiáveis, tais como NYSE, NASDAQ, B3, Bloomberg e Investing.com.
  </div>
</div>

      </footer>
    </>
  );
}
