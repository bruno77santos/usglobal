import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const { page, user, simulation } = body

  if (!page || !user) {
    return NextResponse.json({ success: false, error: 'Dados incompletos' }, { status: 400 })
  }

  try {
    // Monta conteúdo do e-mail com base nos dados enviados
    let emailHtml = `
      <h2>Novo lead recebido</h2>
      <p><strong>Página:</strong> ${page}</p>

      <h3>Dados do Usuário</h3>
      <ul>
        <li><strong>Nome:</strong> ${user.Nome || 'Não informado'}</li>
        <li><strong>Email:</strong> ${user.Email || 'Não informado'}</li>
        <li><strong>Telefone:</strong> ${user.Phone || 'Não informado'}</li>
        <li><strong>Investe na XP?:</strong> ${user.investeNaXP || 'Não informado'}</li>
        <li><strong>Quanto tem investido?:</strong> ${user.quantoTemInvestido || 'Não informado'}</li>
        <li><strong>Investe no exterior?:</strong> ${user.investeNoExterior || 'Não informado'}</li>
      </ul>
    `

    // Adiciona os dados da simulação se existirem
    if (simulation) {
      emailHtml += `
        <h3>Simulação</h3>
        <ul>
          ${Object.entries(simulation).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
        </ul>
      `
    }

    // Envia e-mail
    const result = await resend.emails.send({
      from: 'InvestGlobal <contato@caulfieldco.com.br>',
      to: ['contato@investglobal.us'],
      subject: `[Formulário] ${page} - ${user.Nome || 'Usuário'} `,
      html: emailHtml,
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}