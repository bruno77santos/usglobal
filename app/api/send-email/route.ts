import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()

  try {
    const result = await resend.emails.send({
      //from: 'InvestGlobal <contato@investglobal.us>',
      from: 'InvestGlobal <brsantos88@yahoo.com.br>',
      to: ['brsantos88@yahoo.com.br'],
      subject: `Novo lead: ${data.Nome}`,
      html: `
        <h1>Novo formulário recebido</h1>
        <p><strong>Nome:</strong> ${data.Nome}</p>
        <p><strong>Email:</strong> ${data.Email}</p>
        <p><strong>Telefone:</strong> ${data.Phone}</p>
        <p><strong>Investe na XP:</strong> ${data.investeNaXP}</p>
        <p><strong>Quanto tem investido:</strong> ${data.quantoTemInvestido}</p>
        <p><strong>Investe no exterior:</strong> ${data.investeNoExterior}</p>
      `,
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Erro no envio:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
