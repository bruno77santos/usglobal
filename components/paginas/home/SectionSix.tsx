'use client';

const investmentOptions = [
  {
    title: 'Corretora no Brasil',
    description:
      'Processo simples e rápido, indicado para investimentos iniciais ou de menor valor. O investimento no exterior é feito com uma simples operação de câmbio e posterior compra de ativos estrangeiros. Não é necessário transferir capital ao exterior, pois todos os recursos seguem sob custódia da corretora, alocados nos ativos escolhidos.',
  },
  {
    title: 'Corretora nos Estados Unidos',
    description:
      'Investir por meio de uma corretora sediada no território americano é simples, mas obviamente implica na abertura de uma conta no exterior e transferência de recursos. A maior vantagem está em uma maior diversidade de ativos. Além disso, há poucas corretoras que permitem a abertura de contas diretamente a partir do Brasil.',
  },
  {
    title: 'RIA - Registered Investment Advisor',
    description:
      'Um escritório RIA é semelhante a uma consultoria de investimentos, que em geral agrega a gestão de ativos nos Estados Unidos. Possui registro junto à SEC, Securities and Exchange Commission (correspondente à CVM) ou às autoridades reguladoras estaduais dos EUA e é legalmente obrigado a agir no melhor interesse de seus clientes. Tem acesso a todas as classes de ativos, incluindo estratégias mais elaboradas e investimentos alternativos.',
  },
  {
    title: 'Trust exclusiva',
    description:
      'Uma Trust é uma pessoa jurídica constituída exclusivamente para a gestão de recursos de seus participantes ou beneficiários, chamados ‘trustee’. O contrato da Trust é detalhado pelo ‘settlor’ e contém a origem dos recursos, beneficiários, instituição custodiante e administradores. Também estabelece obrigações, limitações, exigências, prestação de contas e outros aspectos definidos com a participação e concordância do cliente. A Trust em geral é sediada em jurisdição com benefícios fiscais, para redução da carga tributária. Ela ainda gera uma sucessão patrimonial facilitada e proteção de eventuais disputas judiciais de natureza cível, trabalhista ou empresarial. Seus custos, no entanto, exigem determinado nível patrimonial.',
  },
  {
    title: 'Trust coletiva',
    description:
      'Para volumes menores, há a opção de uma estrutura de Trust coletiva. Com as mesmas características de uma Trust exclusiva, esta tem como vantagens uma adesão mais rápida e custos menores, mantendo garantias ao titular e beneficiários. As opções de investimento, apesar de limitadas, ainda oferecem ótima rentabilidade e segurança.',
  },
  {
    title: 'LLC - Limited Liability Company',
    description:
      'A LLC (empresa de responsabilidade limitada), é um dos tipos de Offshore, empresa criada para a gestão de patrimônio do cliente. Deve ser sediada nos Estados Unidos e garante a separação de bens entre pessoa física e jurídica. Assim, o patrimônio da LLC não corre risco de ser acessado para pagamento de uma dívida assumida por seu(s) titular(es). Essa estrutura também oferece vantagens tributárias e pode ser gerida pelos próprios membros ou por gestores nomeados.',
  },
  {
    title: 'PIC – Private Investment Company',
    description:
      'A PIC é uma sociedade privada, usada principalmente para gerenciar investimentos, como ações, imóveis, e outros ativos financeiros, mantendo unificado e protegido o patrimônio de indivíduos e famílias. Pode ser sediada em jurisdição que conte com benefícios fiscais, de forma totalmente legal. Oferece ainda uma camada de anonimato e proteção contra litígios ou credores. Pelos custos envolvidos na criação e manutenção da pessoa jurídica, é em geral utilizada por indivíduos de alta renda.',
  },
];

export function SectionSix() {
  return (
    <section
      className="relative bg-black text-white"
      style={{
        backgroundImage: "url('/bg-section-3.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-10">
        <div className="space-y-10" data-aos="fade-right">
          <div className="space-y-6">
            <h2 className="text-[#FF0C34] text-3xl lg:text-5xl font-bold text-center lg:text-left">
              Como investir?
            </h2>
            <p className="text-gray-300 text-center lg:text-left text-base lg:text-xl">
              Há várias formas de internacionalizar capital, acessíveis a investidores dos mais diversos perfis, com um nível de segurança igual ou superior ao que temos no Brasil.
            </p>
            <h3 className="text-white font-bold text-lg lg:text-2xl">
              Meios de acesso aos investimentos no exterior:
            </h3>
          </div>

          {/* Cards estilo Clear */}
          <div className="grid gap-6 md:grid-cols-2">
            {investmentOptions.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-t from-[#242424] to-black border border-[#242424] text-[#FF0C34] font-bold w-12 h-12 rounded-xl flex items-center justify-center text-lg">
                    0{index + 1}
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
