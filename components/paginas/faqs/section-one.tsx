import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/compartilhados/accordion';
import { Accordion } from '@radix-ui/react-accordion';

interface Props {
  index: number;
  title: string;
  description: string;
}
function AccordionItemData({ index, title, description }: Props) {
  return (
    <AccordionItem value={String(index)}>
      <AccordionTrigger
        className="py-2 px-4 rounded-xl bg-[#FFFFFF]/5 min-h-20 flex items-center"
        icon="ChevronDown"
      >
        <h2 className="font-bold text-xl mr-10 text-start">{title}</h2>
      </AccordionTrigger>
      <AccordionContent className="leading-6">{description}</AccordionContent>
    </AccordionItem>
  );
}

export function SectionOne() {
  const data = {
    accordion1: [
      {
        title: 'A InvestGlobal é independente ou pertence a um grupo?',
        description: 'Somos uma empresa independente e por isso temos a liberdade de indicar os melhores parceiros do mercado em cada segmento. Nosso foco está nos serviços ao cliente, na busca das melhores soluções para cada perfil de investidor, com base nas informações, características e objetivos individuais.',
      },
      {
        title: "Os serviços da InvestGlobal são gratuitos?",
        description: "Sim e não. Nossa remuneração vem do chamado spread, a comissão que cada produto financeiro tem para repasse aos agentes de mercado. Um banco, corretora ou escritório de investimento recebe uma parcela muito pequena, como comissão, de cada investimento feito. É como se o cliente não tivesse custo algum, uma vez que o preço dos produtos financeiros não é alterado. Futuramente, alguns serviços prestados pela InvestGlobal poderão ter um custo à parte, mas a maioria de nossos serviços permanecerá gratuita.",
      },
      {
        title: 'Como posso agendar uma conversa com um consultor?',
        description: 'Você tem alguns caminhos, com os links em destaque no site, mas o ideal é responder o questionário de perfil de investidor, para que possamos entender seu perfil e encontrar as melhores soluções para você.',
      },
      {
        title: 'Existe um escritório da InvestGlobal nos EUA?',
        description: 'Ainda não, mas não se trata de algo essenciai. Estamos baseados em São Paulo e temos fácil acesso a todos os nossos parceiros, produtos e soluções de investimento no exterior, para ajudá-lo da melhor forma em seus objetivos.  A tecnologia atual nos permite presença global e o relacionamento com os agentes corretos para cada área, ética, reputação e expertise são as variáveis mais importantes para os serviços que prestamos.',
      },
      {
        title: 'Qual a confiabilidade das informações da InvestGlobal?',
        description: 'Todas as informações em nosso site têm origem em fontes confiáveis, consideradas referência de mercado. Entre essas fontes, podemos citar Bloomberg, Investing.com e Yahoo Finance, de uma longa lista de especialistas no mundo das finanças.',
      },
      {
        title:
          'Com que frequência as informações do site são atualizadas?',
        description: 'Com exceção das cotações de mercado, nossas informações são atualizadas constantemente e dependem apenas de nossas fontes. As cotações apresentam uma latência e esse é um dos motivos de termos alertas em nossos simuladores. Em geral, são cotações do dia, mas isso pode variar de acordo com os horários de acesso ao site, abertura e fechamento de mercado, por exemplo.',
      },
      {
        title:
          'As ferramentas de conversão são atualizadas com as últimas cotações?',
        description: 'Sim, diariamente temos todas as cotações atualizadas. No chamado intra-day, existe uma latência e grandes oscilações, que eventualmente ocorrem em um período muito curto (em geral por eventos imprevistos que estressam o mercado, segmento ou empresa) podem não ser captados em tempo.',
      },
      {
        title: 'Como a plataforma da InvestGlobal pode me ajudar a explorar oportunidades de investimento internacional?',
        description: 'Somos profissionais do mercado de investimentos e ao longo do tempo, com a cada vez mais crescente demanda por investimentos internacionais, nos especializamos na busca de soluções a nossos clientes. Temos acesso imediato aos melhores agentes e instituições financeiras no Brasil e exterior e fazemos a ligação entre os que procuram proteger seu capital do ambiente hostil que temos atualmente e aqueles que podem fazê-lo evoluir de forma segura. A melhor forma de iniciar essa nova fase em sua vida é entrando em contato com nossa equipe.',
      },
      {
        title: 'Porque devo considerar investir globalmente? Não é mais seguro manter tudo em meu país? ',
        description: 'Investir globalmente oferece diversificação, reduzindo o risco e aumentando o potencial de retorno. Além disso, permite acesso a uma variedade de mercados, setores e ativos que podem não estar disponíveis no mercado local, expandindo as oportunidades de investimento. Manter todos os ativos no país resulta em exposição e dependência total de um só governo, um só mercado, o que, em resumo é chamado de risco-país. Com toda a instabilidade política, econômica e jurídica pela qual passamos, atualmente esse risco é bem alto.',
      },
      {
        title: 'Como a plataforma InvestGlobal US pode me ajudar a explorar oportunidades de investimento internacional?',
        description: 'A plataforma Invest Global US oferece uma variedade de ferramentas, como simuladores personalizados, comparadores de ativos e calculadoras financeiras. Essas ferramentas permitem que os investidores visualizem cenários de investimento, comparem o desempenho de ativos em diferentes países e calculem parâmetros financeiros importantes para tomar decisões informadas e estratégicas.',
      },
      {
        title: 'Quais são os benefícios de usar a plataforma InvestGlobal em comparação com outras opções disponíveis?',
        description: 'A Invest Global US oferece acesso a dados e insights de mercado em tempo real, suporte abrangente para investidores e ferramentas intuitivas e fáceis de usar, mesmo para iniciantes. Além disso, nossa plataforma é projetada especificamente para ajudar os investidores a navegar pelo mundo dos investimentos internacionais com confiança.',
      },
      {
        title: 'Como posso começar a usar a plataforma InvestGlobal?',
        description: 'Para começar a usar a plataforma Invest Global US, basta se cadastrar em nosso site e criar uma conta. Uma vez registrado, você terá acesso a todas as nossas ferramentas e recursos, permitindo que você comece a explorar e investir nos mercados financeiros internacionais imediatamente.',
      },
      {
        title: 'Quais são as principais características e funcionalidades da plataforma InvestGlobal que a diferenciam de outras plataformas de investimento internacional?',
        description: 'A Invest Global US se destaca pela sua interface intuitiva e fácil de usar, bem como pela ampla gama de ferramentas e recursos disponíveis para os investidores. Nossa plataforma oferece simuladores personalizados, comparadores de ativos e calculadoras financeiras, todos projetados para ajudar os investidores a explorar e aproveitar as oportunidades de investimento internacional de maneira eficaz e eficiente. Alem de todas as informações sobre investimentos internacionais disponíveis na home page e na área de artigos.',
      },
      {
        title:
          'Como a InvestGlobal mantém seus usuarios atualizados sobre as últimas tendências e desenvolvimento nos mercados financeiros internacionais?',
        description: 'A Invest Global US fornece aos usuários acesso a uma variedade de recursos educacionais, como artigos, análises de mercado e webinars, que abordam as últimas tendências e desenvolvimentos nos mercados financeiros internacionais. Além disso, nossa plataforma oferece notificações e alertas personalizados para manter os usuários informados sobre eventos importantes e mudanças significativas nos mercados.',
      },
      {
        title:
          'Para quem é a InvestGlobal?',
        description: 'A InvestGlobal é para todas as pessoas que procuram pela internacionalização de patrimônio e investimentos no exterior como uma forma de proteção e evolução financeira. Para que isso ocorra de maneira efetiva e sem riscos desnecessários, recomendamos que um investimento no exterior seja feito quando houver uma boa capacidade de poupança ou transferência de valores ao exterior, mantendo uma boa reserva no país de residência.',
      },
      {
        title:
          'Existe um valor mínimo para investimento?',
        description: 'Em geral não há valores mínimos, pois há ativos que permitem o investimento em frações de cotas. Também há opções que permitem aportes regulares, mensais, trimestrais ou anuais. Ao ano, tais aportes podem ser feitos a partir de US$ 2,000.00. Desde que não haja prejuízo da reserva pessoal/familiar de emergência, recomendamos um valor próximo de R$ 100.000,00 como referência para iniciar um investimento no exterior.',
      },
      {
        title:
          'Meus dados são protegidos pela LGPD?',
        description: 'Sem dúvida. Mais do que o respeito à lei, a InvestGlobal respeita seus clientes e usuarios de sua plataforma e protege seus dados. Nenhuma informação sensível ou dados pessoais são repassados a nossos parceiros sem sua autorização.',
      },
      {
        title: 'A InvestGlobal tem integracao com os dados da B3?',
        description: 'Ainda não. Estamos trabalhando constantemente para manter nossa plataforma sempre atualizada e oferecendo serviços e informações no mais alto nível e podemos futuramente buscar essa integração, se entendermos que ela será positiva a nossos usuários.',
      },
    ],
    accordion2: [
      {
        title: 'Como posso começar a investir fora do Brasil?',
        description: 'O processo é muito simples e acessível a qualquer cidadão que tenha sua situação fiscal regularizada no Brasil e acesso a um smartphone ou computador. Existem diferentes caminhos para isso, adequados a investidores dos mais diversos perfis. Falar com um de nossos especialistas é o melhor meio para encontrar o mais recomendado para o seu perfil.',
      },
      {
        title: 'O que é melhor, corretora no Brasil ou EUA? Quais os custos?',
        description: 'Diferentes necessidades, capacidades de investimento, objetivos e perfis de investidor demandam diferentes soluções. Por isso, não há como dizer o que é melhor sem avaliar cada caso. Uma boa corretora no Brasil oferece acesso fácil a ativos no exterior e é um bom caminho para quem está começando. Os custos variam de acordo com a instituição, mas em geral, todos os agentes buscam manter uma boa participação de mercado, com custos competitivos, ou seja, custos baixos e, com raras exceções, sem grandes variações.',
      },
      {
        title: 'Preciso abrir conta nos EUA para começar a investir?',
        description: 'Não é necessário abrir conta em corretora ou banco nos Estados Unidos, apesar de em alguns casos isso representar vantagens como flexibilidade, acesso a uma gama maior de ativos e um nível ainda maior de segurança. No entanto, isso acarreta custos e exigências e pode não ser interessante para todos.',
      },
      {
        title: 'Preciso ter conta em uma corretora no Brasil ou Estados Unidos para investir no exterior?',
        description: 'Sim, em pelo menos uma das opções. Uma conta em uma grande corretora no Brasil provavelmente será o caminho mais fácil e pode ser usada por qualquer investidor. Em geral, é o processo pelo qual se inicia uma trajetória de investimentos estrangeiros. Dependendo de valores, frequência de aportes, ativos de interesse, objetivos, entre outros aspectos, outras soluções poderão ser mais vantajosas. Recomendamos sempre uma conversa sem compromisso com um de nossos especialistas para entendermos o que melhor se encaixa em cada caso.',
      },
      {
        title: 'Existe idade mínima para investir nos Estados Unidos?',
        description: 'Não há idade mínima para ter investimentos nos Estados Unidos e a formação de patrimônio em seu próprio nome pode começar desde cedo, evitando assim problemas com inventário ou altos impostos. No entanto, para os menores de 18 anos será necessária a nomeação / registro de um tutor maior de idade.',
      },
    ],
    accordion3: [
      {
        title: 'Qual a confiabilidade dos parceiros da InvestGlobal?',
        description: 'Todos os nossos parceiros são referência em suas áreas de atuação. Sejam eles instituições de grande porte e consolidadas em seus segmentos, agências ou escritórios de grande ou médio porte ou mesmo profissionais, especialistas altamente qualificados. Após uma conversa com nosso time, com a identificação do perfil de cada cliente, podemos direcionar o atendimento aos parceiros mais adequados e então fornecer referências.',
      },
      {
        title: 'Quais bancos a InvestGlobal utiliza para a custódia (guarda) dos meus investimentos?',
        description: 'Temos acordos com algumas das maiores e mais tradicionais instituições financeiras dos Estados Unidos, mas como cada uma tem suas particularidades, especializações e custos, sua definição dependerá do perfil de cada cliente.',
      },
      {
        title: 'Preciso trabalhar com os parceiros da Invest Global ou posso escolher outros?',
        description: 'Todos os nossos usuários são livres na decisão de investimentos, momento de iniciar esse processo, valores a serem aportados, ativos, segmentos e também os agentes que serão utilizados. Nosso foco sempre será o de orientar os meios mais seguros de atingir os objetivos traçados, mas o cliente dará a palavra final e será responsável pelas decisões de investimento.',
      },
      {
        title: 'Quais instituições nos EUA regulam os investimentos? Qual o nível de segurança dos meus investimentos lá fora?',
        description: 'O principal órgão é a SEC (Securities and Exchange Commission), equivalente americana da CVM (Comissão de Valores Mobiliários), que regula todo o mercado financeiro americano. O Federal Reserve, também conhecido como Fed, é o correspondente do nosso Banco Central e determina a política monetária, como a taxa de juros oficial do país.',
      },
      {
        title: 'Se o banco que tem minha custódia no exterior quebrar, como recupero meu dinheiro?',
        description: 'O mercado dos Estados Unidos é altamente regulado e são raros os casos de quebra bancária, especialmente em instituições tradicionais. Confiamos nas instituições que selecionamos e em diversas outras que selecionamos, que estão entre as mais seguras do país, com atuação baseada em fundamentos sólidos. A última quebra de um banco relevante ocorreu na bolha imobiliária dos EUA em 2008, do Lehman Brothers. A SEC, equivalente da CVM no Brasil, adotou então padrões ainda mais rígidos. Além disso, o sistema financeiro americano também dispõe de ferramentas de proteção aos clientes como o FDIC (Federal Deposit Insurance Corporation), que garante até US$ 250,000.00 de ressarcimento nesses casos.',
      },
    ],
    accordion4: [
      {
        title: 'A InvestGlobal tem carteiras recomendadas?',
        description: 'Não temos carteiras recomendadas por acreditarmos que cada investidor tem particularidades que devem ser observadas em uma proposta de investimentos individualizada. A partir de uma conversa com nosso time, no entanto, é possível a montagem de uma proposta inicial de investimentos, baseada nas informações coletadas. Uma segunda opção está em responder a campanhas que realizamos regularmente, com questões que nos ajudam a identificar o perfil de investidor e então receber uma sugestão de investimento.'
      },
      {
        title: 'Como posso saber que tipo de investimento é mais adequado para meu perfil?',
        description: 'A melhor forma é entrando em contato com nosso time, totalmente sem compromisso. Teremos prazer em entender seu perfil e buscar as melhores soluções para seu caso.'
      },
      {
        title: 'Vale a pena investir com o dólar alto?',
        description: 'Há uma frase famosa que diz “Dolar caro é o que não temos”. Historicamente o Dólar tem uma trajetória continua de valorização frente ao Real, além de ser a moeda de maior liquidez no mundo todo. Os períodos de valorização do Real frente ao Dolar, sempre são seguidos de outros de recuperação mais acentuada da moeda americana. No entanto, não recomendamos o investimento em Dolar de forma especulativa, especialmente quando ele já estiver em um patamar historicamente mais alto e indicado como sobrevalorizado. O investimento em Dolar é seguro em qualquer momento e a qualquer cotação, mas deve ser entendido como de médio ou longo prazo, para formação de patrimônio de forma consistente e orgânica.'
      },
      {
        title: 'Posso investir em Euro, Yen ou outra moeda estrangeira nos EUA?',
        description: 'Há duas possibilidades: o investimento em ativos americanos a partir de moedas estrangeiras ou o investimento nas moedas estrangeiras propriamente ditas, em que estas são os próprios ativos. Ambos são possíveis, no entanto são conceitos completamente distintos. O primeiro: sim, as moedas estrangeiras tidas como fortes, como é o caso das três citadas, são aceitas pelos bancos e corretoras, mas é necessária a conversão / compra de Dolares para então realizar o investimento em outros ativos. O segundo: trata-se de um investimento, em geral, especulativo, recomendado apenas para investidores profissionais ou residentes dos países de circulação dessas moedas, em momentos de cotação favorável a elas.'
      },
      {
        title: 'Preciso de um volume mínimo inicial para investir?',
        description: 'Não há volumes mínimos para muitos ativos, como ETFs, por exemplo. No entanto alguns investimentos, bem como o processo de transferência de valores / câmbio imponha alguns custos que são mais diluídos com valores mais altos. Para investidores iniciantes no exterior recomendamos sempre uma conversa com nossa equipe a fim de esclarecer todas as possibilidades e recomendações.'
      },
      {
        title: 'Existem opções para investimento periódico (mensal, trimestral)?',
        description: 'Sim, há excelentes opções com aportes periódicos ou mesmo esporádicos, que permitem a formação de patrimônio de forma gradual e segura. Converse com nosso time e consulte essas opções e como fazer uso dessa ferramenta.'
      },
      {
        title: 'Quais as opções de investimento para renda passiva?',
        description: 'Há várias alternativas de ativos que proporcionam uma renda passiva aos investidores. Além dos REITs (similares americanos dos FIIs), outros ativos como ETFs e Treasuries (títulos do tesouro americano), pagam dividendos que, se planejados, formam uma renda passiva. Uma estratégia de investimento em ações pagadoras de dividendos ou mesmo a compra de imóveis para locação também podem ser excelentes opções. Entre em contato com nossa equipe, sem compromisso, e informe-se.'
      },
      {
        title: 'Quando invisto em criptomoedas estou investindo fora do Brasil?',
        description: 'Sim, não há até o momento, criptomoedas emitidas no Brasil. Todos os projetos são originados no exterior e quando investimos nessa categoria de ativos estamos sujeitos à variação cambial.'
      },
      {
        title: 'Porquê devo investir fora do Brasil com a instabilidade geopolítica mundial?',
        description: 'Porque o Dolar seguirá sendo a moeda de maior liquidez do mundo, aceita em qualquer parte do planeta, o que também faz dela uma das mais valorizadas, especialmente em momentos de instabilidade. Historicamente, em grandes crises o Dolar torna-se um dos ativos de proteção dos investidores, concorrendo com o Ouro. Além disso, mesmo com sua influência e eventual envolvimento em algumas tensões regionais, os Estados Unidos mantêm uma fortíssima posição geopolítica, sem inimigos próximos, aumentando a proteção do Dolar.'
      },
      {
        title: 'O que acontece com meu patrimônio fora do país se eu faltar? Quem pode recuperar meu capital?',
        description: 'Há diversos instrumentos que podem ser utilizados em casos extremos como esses. Em geral, são semelhantes aos que encontramos no Brasil, mas que variam de acordo com a estratégia de internacionalização de capital utilizada e com as instituições envolvidas: banco, corretora ou escritório de investimentos. A legislação americana tem uma clara vantagem: o patrimônio, em caso de falta do titular, não fica bloqueado por inventário e pode ser acessado imediatamente por substitutos definidos pelo titular.'
      },
      {
        title: 'Que segurança os bancos internacionais me oferecem?',
        description: 'Os bancos internacionais, incluídos os dos Estados Unidos, estão entre as instituições financeiras mais tradicionais do mundo. A regulação que rege o setor exige um altíssimo grau de transparência na gestão e custódia do patrimônio dos clientes, com a manutenção constante de regras rígidas de compliance. Quanto maior a economia, maior o volume de investidores internacionais aportando recursos - e estes não o fariam se o sistema e suas instituições não fossem seguras. Inúmeras dessas instituições são centenárias, que contam ainda com uma forte auto-regulação para sua própria sobrevivência.'
      },
      {
        title: 'Vou pagar mais impostos por investir fora do Brasil do que já pago aqui?',
        description: 'O Brasil tem um acordo bi-lateral com os Estados Unidos para que os investimentos de cidadãos brasileiros em solo americano não sejam bi-tributados. No entanto, esses investimentos devem ser relacionados na declaração de imposto de renda anual. Para saber mais detalhes da tributação sobre classes especificas de ativos fale com nossa equipe, sem compromisso.'
      },
      {
        title: 'Quais os melhores ativos para investir fora do país?',
        description: 'Há diversas ótimas alternativas para investimento no exterior, e em geral elas são similares às que já conhecemos por aqui. Ações, fundos imobiliários, ETFs, títulos de renda fixa são algumas delas. Mas para falarmos dos melhores ativos temos de conhecer o perfil de investidor, seus objetivos, limitações e expectativas, além de entender cada momento de mercado, com fatores que influenciam positivamente alguns ativos e negativamente outros. Responda ao questionário de perfil de investidor para que nossa equipe entre em contato, sem compromisso. Teremos prazer em buscar as melhores soluções para você.'
      },
      {
        title: 'Porque investir nos Estados Unidos se eu pretendo morar na Europa?',
        description: 'Uma vez que não há fronteiras para os países que contam com um sistema financeiro avançado, o investimento nos Estados Unidos torna-se atraente inclusive aos moradores de países europeus. E o principal motivo para isso é a força da economia americana, que oferece muito mais oportunidades de investimento e de ganhos em comparação com a Europa, o que faz com que uma grande parcela da população do velho continente já invista nos Estados Unidos. A proximidade cambial entre o Euro e o Dolar, bem como a estabilidade de ambas moedas, torna essa possibilidade ainda mais interessante. Não podemos deixar de citar que, dependendo do país de residência do investidor, poderá ainda haver reduções tributárias significativas em dividendos de empresas americanas.'
      },
      {
        title: 'Como faço para resgatar meu dinheiro no exterior quando estou no Brasil?',
        description: 'O processo é bastante simples e similar ao que temos no Brasil: dependendo dos ativos investidos poderá ser imediato ou exigir um período de carência. De qualquer forma, em linhas gerais, basta acessar sua conta pelo computador ou aplicativo, utilizando suas senhas de segurança, solicitar o resgate. Assim que o valor estiver disponível para saque, é só utilizar um aplicativo para transferências internacionais e o dinheiro estará em seu banco no Brasil em segundos. Existem alguns bons aplicativos para transferências, confiáveis, seguros e fáceis de usar.'
      },
      {
        title: 'Como acompanho, no Brasil, os resultados dos meus investimentos no exterior?',
        description: 'Todos os bancos e instituições com as quais trabalhamos oferecem acesso rápido às informações de seus investimentos por meio de seus sites e aplicativos. O processo em geral é similar ao que encontramos em nossas instituições, no entanto, com as diferentes formas de internacionalização de capital, cada cliente poderá ter um processo diferente para acesso a sua conta e informações.'
      },
      {
        title: 'Porque devo investir globalmente em vez de manter meu dinheiro no próprio país?',
        description: 'Ter parte de nosso capital fora do país passou a ser necessário para uma efetiva proteção de patrimônio, evolução de capital e transferência sucessória. Nossos impostos estão em patamares cada vez mais altos, sem a contrapartida em serviços do poder público. Nossa economia patina com excesso de regulação, a insegurança judicial é cada vez mais ampla. Nossa moeda frequentemente entra em espirais de desvalorização e vemos nosso poder de compra cada vez mais reduzido. E se o país representa cerca de 1% do comércio mundial, enquanto os Estados Unidos respondem por cerca de 13%, porque não participar desse mercado e das oportunidades que ele oferece? A Apple sozinha, por exemplo tem valor de mercado maior do que o PIB brasileiro, enquanto várias outras empresas valem mais do que mercados inteiros por aqui.'
      },
      {
        title: 'Quais os impostos na compra de moedas?',
        description: 'A compra de moeda estrangeira tem apenas um imposto, o IOF - Imposto sobre Operações Financeiras, e a alíquota para envios a uma conta investimento é de 0,38%.'
      },
      {
        title: 'Meus ganhos no exterior são tributados? Qual a alíquota?',
        description: 'Assim como no Brasil, dependerá da classe de ativos e origem do ganho auferido com o investimento. Os dividendos sofrem uma tributação de 30% na fonte, uma alíquota alta, mas que é compensada pelo fator cambial. Os ganhos na valorização de ações, ETFs e títulos públicos, no entanto, não são tributados nos Estados Unidos.'
      },
      {
        title: 'Meus ganhos com investimentos serão tributados apenas nos EUA?',
        description: 'Em 2023 foi aprovada nova legislação sob a qual os ganhos com investimentos no exterior são tributados em 15% no Brasil. Esses ganhos devem ser declarados à receita federal anualmente, mas seu recolhimento só é necessário quando da repatriação do capital ao país.'
      },
      {
        title: 'Existem investimentos isentos de impostos nos EUA?',
        description: 'Sim, os ganhos com a venda de ações, ETFs e títulos públicos são isentos de impostos aos investidores estrangeiros.'
      }
    ]

  };
  return (
    <>
      <section className="bg-faqs-section-1 bg-cover bg-center">
        <div className="bg-[#191919]/90 h-full p-10 lg:py-20 flex items-center justify-center">
          <div className="max-w-7xl space-y-20">
            <div className="lg:space-y-20 space-y-10">
              <h2 className="text-[#FF0C34] text-center font-bold text-2xl lg:text-5xl">
                Sobre a InvestGlobal
              </h2>
              <Accordion
                className="grid grid-cols-1 lg:grid-cols-2 flex-col justify-between gap-4"
                type="single"
                collapsible
              >
                {data.accordion1.map((item, index) => (
                  <AccordionItemData
                    key={index}
                    index={index + 1}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-full p-10 lg:py-20 flex items-center justify-center relative">
          <div className="max-w-7xl space-y-20">
            <div className="lg:space-y-20 space-y-10">
              <h2 className="text-[#FF0C34] text-center font-bold text-2xl lg:text-5xl">
                Sobre os clientes
              </h2>
              <Accordion
                className="grid grid-cols-1 lg:grid-cols-2 flex-col justify-between gap-4"
                type="single"
                collapsible
              >
                {data.accordion2.map((item, index) => (
                  <AccordionItemData
                    key={index}
                    index={index + 1}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Accordion>
            </div>
          </div>
          <div className="w-40 h-40 absolute bg-red-500 blur-[150px] rounded-full" />
        </div>
      </section>

      <section>
        <div className="h-full p-10 lg:py-20 flex items-center justify-center">
          <div className="max-w-7xl space-y-20">
            <div className="lg:space-y-20 space-y-10">
              <h2 className="text-[#FF0C34] text-center font-bold text-2xl lg:text-5xl">
                Sobre nossos parceiros
              </h2>
              <Accordion
                className="grid grid-cols-1 lg:grid-cols-2 flex-col justify-between gap-4"
                type="single"
                collapsible
              >
                {data.accordion3.map((item, index) => (
                  <AccordionItemData
                    key={index}
                    index={index + 1}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-faqs-section-2 bg-cover bg-center">
        <div className="bg-[#191919]/90 h-full p-10 lg:py-20 flex items-center justify-center">
          <div className="max-w-7xl space-y-20">
            <div className="lg:space-y-20 space-y-10">
              <h2 className="text-[#FF0C34] text-center font-bold text-2xl lg:text-5xl">
                Sobre investimentos
              </h2>
              <Accordion
                className="grid grid-cols-1 lg:grid-cols-2 flex-col justify-between gap-4"
                type="single"
                collapsible
              >
                {data.accordion4.map((item, index) => (
                  <AccordionItemData
                    key={index}
                    index={index + 1}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}