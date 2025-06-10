// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: "InvestGlobal US - Invista nos Estados Unidos",
  description:
    "A InvestGlobal facilita o acesso de investidores ao mercado americano, proporcionando uma evolução consistente e segura de seu patrimônio.",
  keywords:
    "invest global, invest, globals, invest globals, us, invest global us, invest globals us, global invest, Abertura de conta no exterior, Bolsa Nova York, Bonds americanos, Como investir no exterior, Dolarização de patrimônio, Investimentos internacionais, Tributação de investimentos no exterior, Planejamento financeiro global, Corretora Estados Unidos, Investir REITs, Melhor corretora internacional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* SEO Básico */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.investglobal.us/" />
        <meta name="author" content="InvestGlobal US" />

        {/* Open Graph */}
        <meta property="og:title" content="InvestGlobal: a liberdade financeira ao seu alcance" />
        <meta
          property="og:description"
          content="Informação de qualidade, simuladores, orientações e suporte ao investidor. Proporcione liberdade financeira ao seu capital de forma segura, simples e transparente."
        />
        <meta property="og:url" content="https://www.investglobal.us/" />
        <meta
          property="og:image"
          content="https://pub-09c7a488acd5428e89e424aacd908f04.r2.dev/capa.png"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@investglobalus" />
        <meta name="twitter:title" content="InvestGlobal: a liberdade financeira ao seu alcance" />
        <meta
          name="twitter:description"
          content="Informação de qualidade, simuladores, orientações e suporte ao investidor. Proporcione liberdade financeira ao seu capital de forma segura, simples e transparente."
        />
        <meta
          name="twitter:image"
          content="https://pub-09c7a488acd5428e89e424aacd908f04.r2.dev/capa.png"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LKNF8ZSVMZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LKNF8ZSVMZ');
            `,
          }}
        />

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16851710680"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16851710680');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVNQWCCX');
            `,
          }}
        />
      </head>
      <body className="bg-[#0C2E3E]/80 h-full text-gray-900 font-sans">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
