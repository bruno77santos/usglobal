// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar' // caminho correto
import Footer from '../components/Footer' // caminho correto

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />

      </head>
      <body className="bg-[#0C2E3E]/80 h-full text-gray-900 font-sans">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
