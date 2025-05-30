import { ReactNode } from 'react'
import Breadcrumbs from './components/breadcrumbs'

export type BlogArticle = {
  slug: string
  title: string
  content: ReactNode
}

export const blogData: BlogArticle[] = [
  {
    slug: 'investimentos-nos-estados-unidos-oportunidade-ou-estrategia',
    title: 'Investimentos nos Estados Unidos: oportunidade ou estratégia?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Investimentos nos Estados Unidos: oportunidade ou estratégia?',
              url: '/blog/investimentos-nos-estados-unidos-oportunidade-ou-estrategia',
              end: true,
            },
          ]}
        />
                        <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Investimentos nos Estados Unidos: oportunidade ou estratégia?</h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>Sabidamente a maior e mais ativa economia do mundo, os Estados Unidos contam com cerca de 6000 empresas listadas nas bolsas NYSE (New York Stock Exchange) e NASDAQ (National Association of Securities Dealers Automated Quotations). Ambas localizadas em Nova York, sendo a primeira a que reúne as empresas dos setores mais tradicionais, como o de alimentos e bebidas, varejo, aviação e financeiro, e a segunda a que concentra empresas do segmento de tecnologia e inovação, como Google/Alphabet, Nvidia e Microsoft.
                            Apenas o grupo formado pelas maiores empresas de tecnologia do mundo, chamado de “sete magníficas”, com Alphabet, Nvidia, Microsoft, Amazon, Tesla, Meta e Apple soma um valor de mercado em 2024 mais de 3 vezes maior do que o PIB brasileiro. Sim, um punhado de empresas, entre as mais influentes do mundo, das quais praticamente todos nós somos usuários de algum de seus serviços, valem mais do que tudo o que o Brasil produz.
                            <br />
                            <br />
                            E esses são apenas alguns exemplos da força representada pelo mercado americano, uma vez que outras gigantes como Coca-Cola, Pepsico, FedEx, General Motors, Johnson&Johnson e Oracle também tiveram origem nos Estados Unidos, impactam nossas vidas diariamente e têm suas ações negociadas na bolsa de Nova York.</p>
                        <img className='mt-[48px]' src='/blog/bg-money.jpg' alt='money' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            Enquanto a instabilidade que reina no Brasil nos força a investir em renda fixa, como forma de proteção às mudanças impostas por governos e, mais recentemente, pelo judiciário, nos Estados Unidos o investidor médio tem condições ideais para o investimento nas empresas de capital aberto. O país conta com mais de 5000 empresas listadas em bolsa - em quantidade, isso é mais de 10 vezes o nosso mercado. Em volume de investimento, no entanto, a diferença é ainda maior: enquanto a B3 tem uma média de US$ 4 Bi diários, somadas, NYSE E NASDAQ chegam a cerca de US$ 60 Bi diários. E nem incluímos aqui a Bolsa de Chicago (CME Group), especializada em commodities. Um mercado com tamanho vigor oferece inúmeras oportunidades, com muito mais segurança do que o ambiente que encontramos no Brasil.
                            <br />
                            <br />
                            Mas as oportunidades não se restringem a renda variável, da qual o investimento em ações / bolsa é a modalidade mais conhecida. Sim, as grandes oportunidades de ganho de capital em geral encontram-se no mercado de ações, especialmente na valorização de empresas. Um mercado menos regulado, mais aberto, regido por meritocracia e competência, oferece um maior potencial de ganhos. Nos últimos 15 anos o S&P500, principal índice de investimentos do mundo, que concentra os resultados das 500 maiores empresas americanas, tem crescido em média 10% ao ano - na moeda mais utilizada no mundo.
                            Ou seja, quem investe em um ETF atrelado a esse índice, ganhou, em dólar, 10% ao ano, mais a valorização da moeda frente ao Real.
                            <br />
                            <br />
                            Ainda que esses dados sejam animadores, sabemos que investidores mais conservadores sentem-se desconfortáveis com a renda variável, por diversos motivos. Mas assim como no Brasil, os EUA contam com opções como fundos de investimento, ETFs, FIIs e títulos de renda fixa. Em muito maior volume e diversificação do que encontramos no nosso mercado. Por exemplo, podemos investir em um ETF de tecnologia, de semicondutores, de ouro, ou de diversos outros setores que no Brasil são inexistentes ou irrelevantes - com a vantagem de contar com a análise e gestão de profissionais altamente capacitados, que conhecem a fundo o mercado e as empresas investidas. Na renda fixa encontramos desde os títulos mais seguros do mundo, emitidos pelo governo americano, até os de empresas privadas como a Amazon.
                            <br />
                            <br />
                            Mas afinal, devemos investir nos Estados Unidos como oportunidade ou estratégia? Bem, em um mercado com as condições descritas, com tamanha potência, ambas as modalidades são válidas e devem ser mantidas. Investir nos Estados Unidos é e sempre será estratégico, do ponto de vista de que se trata de uma diversificação necessária em nossa carteira, para proteger nosso patrimônio e participar de mercados que não temos representados por aqui; ao mesmo tempo trata-se de uma oportunidade de potencializar ganhos em momentos específicos, sejam de curto prazo e focados em um segmento ou companhia específico, seja por um momento de mercado.
                            <br />
                            <br />
                            Não podemos finalizar sem dizer, no entanto, que uma orientação profissional qualificada é essencial na decisão de investimentos, pois mesmo os investimentos mais conservadores e seguros poderão oferecer riscos se determinados fatores não forem considerados.
                        </p>
      </section>
    ),
  },
  {
    slug: 'enfim-os-americanos-escolheram-trump-e-agora',
    title: 'Enfim, os americanos escolheram Trump. E agora?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Enfim, os americanos escolheram Trump. E agora?',
              url: '/blog/enfim-os-americanos-escolheram-trump-e-agora',
              end: true,
            },
          ]}
        />
                                <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Enfim, os americanos escolheram Trump. E agora?</h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                            Um presidente senil, uma vice-presidente polêmica, um magnata contestado e um cenário eleitoral que, ao menos de acordo com a mídia tradicional, parecia indefinido.
                            Um quadro agravado pela aparente duvidosa capacidade de liderança de Joe Biden, que em diversas aparições públicas deixava a impressão de senilidade avançada, saúde frágil, capacidade cognitiva reduzida e longe das condições adequadas a cumprir um novo mandato presidencial, especialmente tratando-se da nação de maior influência no mundo.
                            <br />
                            <br />
                            A campanha iniciada com Biden logo sofreu uma mudança com a entrada de Kamala Harris, sua vice-presidente, preferida pela mídia e por segmentos sociais mais à esquerda no espectro político, que parecia ser a adversária ideal para Donald Trump, que buscava retornar ao poder representando a ala mais conservadora da nação.
                            A troca de Biden por Harris aqueceu as discussões em torno das pautas ideológicas como o direito ao aborto em todo o país, a ideologia de gênero e a permissividade com a imigração ilegal.
                            As diferenças entre Harris e Trump ficaram cada vez mais evidentes e opostas, a mídia intensificou seu apoio à possibilidade dos Estados Unidos contarem com sua primeira presidente mulher e passamos a ver uma polarização cada vez mais acentuada entre os eleitores, assim como já ocorre no Brasil desde o governo Bolsonaro.
                            A clara preferência da imensa maioria da mídia, da fortíssima indústria do entretenimento, seus atores e cantores deu a todos a impressão de que a disputa seria apertada e a eleição seria definida apenas com os chamados estados-chave, ou swing-states, que ora votam em democratas, ora em republicanos.
                        </p>
                        <img className='mt-[48px]' src='/temp/1.jpeg' alt='politics' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            No entanto, o que ocorreu surpreendeu a todos: mais uma vez os institutos de pesquisas erraram e Trump não só foi vitorioso no colégio eleitoral (votos dos delegados que definem oficialmente o novo presidente), mas também ganhou no voto popular – ou seja, Trump foi o mais votado pelo povo, que há 20 anos, na maioria, votava nos candidatos do partido democrata. O candidato que sofreu duas tentativas de assassinato, teve cinco milhões de votos a mais da população e cresceu significativamente entre setores da sociedade que sempre apoiaram majoritariamente os democratas.
                            <br />
                            <br />
                            Sem colocar em discussão quem é melhor ou pior, suas qualidades, defeitos, acertos, histórico, competência, capacidade de liderança, preparo ou qualquer outro aspecto sobre Trump e Kamala, temos de nos ater às implicações dessa mudança e seus impactos na decisão de investimentos.
                            Por suas promessas de campanha, sua ampla vitória, que inclui maioria no congresso, suas crenças e sua gestão anterior, podemos inferir que o novo mandato de Trump terá, como resultados, um Dólar fortalecido, uma reorganização geopolítica com a busca de melhores condições comerciais aos Estados Unidos, um cenário econômico local com mais inflação no início, mas com redução gradual do peso do estado, a garantia da liberdade de expressão e o foco no pragmatismo, na retomada do desenvolvimento econômico e tecnológico dos Estados Unidos.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            Uma recuperação da capacidade produtiva da maior economia do mundo deverá passar ainda por redução de impostos e pelo aumento da competição com outros países em diversas áreas, da produção automotiva à exportação de soja.
                            Esse cenário deverá ser favorável aos mais diversos setores. No entanto, qualquer previsão sobre setores específicos, neste momento, é arriscada e prematura. Devemos aguardar o início do governo, as primeiras ações tomadas pelo novo presidente, a intensidade das mudanças, o sucesso das renegociações de acordos internacionais, o comportamento de cada um dos atores envolvidos nessa nova fase que se inicia oficialmente no dia 20 de janeiro de 2025.
                            <br />
                            <br />
                            Uma famosa frase de Warren Buffett diz: “nunca aposte contra a América”. Já se provou diversas vezes e temos todas as razões para acreditar que mais uma vez ela será profética: o mundo investe nos Estados Unidos; o Dólar é a moeda mais segura e de maior liquidez no planeta; mesmo passando por turbulências o país segue se reinventando, crescendo, produzindo, atraindo os melhores cientistas e profissionais.
                            <br />
                            <br />
                            O investidor brasileiro não pode ficar de fora, especialmente considerando que seguimos, como país, na direção contrária.
                        </p>
      </section>
    ),
  },

  {
    slug: 'paraisos-fiscais-legitimos-ou-nao',
    title: 'Paraísos fiscais: legítimos ou não?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Paraísos fiscais: legítimos ou não?',
              url: '/blog/paraisos-fiscais-legitimos-ou-nao',
              end: true,
            },
          ]}
        />
                        <h1 className='text-[48px] font-[700] text-white leading-[70px]'>
                            Paraísos fiscais: legalidade e estratégia de proteção patrimonial
                        </h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                            Os chamados paraísos fiscais são países ou jurisdições em que há redução ou mesmo isenção de impostos sobre patrimônio aportado legalmente, ou investimento realizado no local.
                            Além da vantagem fiscal em relação à maioria dos países, essas jurisdições oferecem, por meio da legislação local, sigilo nas informações financeiras dos investidores.
                            <br />
                            <br />
                            Essas características fazem com que muitas empresas e patrimônios tenham sede nesses locais, atraindo altos volumes de recursos internacionais em busca das vantagens oferecidas.
                            Apesar da conotação pejorativa inerente ao termo “paraíso fiscal” e da possibilidade de atração de recursos de origem duvidosa, atualmente quase todas as jurisdições que oferecem esses benefícios contam com regulamentações que minimizam ou impedem completamente o aporte de recursos desse tipo.
                        </p>
                        <img className='mt-[48px]' src='/temp/2.jpeg' alt='money' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            Dessa forma, o que caracteriza as jurisdições como paraísos fiscais assemelha-se muito ao que ocorre com os incentivos tributários entre estados - algo, aliás, que não ocorre apenas no Brasil:
                            nos Estados Unidos, por ser uma federação de estados, essa ‘guerra’ fiscal é ainda mais acentuada.
                            E quanto ao sigilo de informações financeiras, trata-se do direito à privacidade que toda empresa ou indivíduo deveria ter como garantia.
                            <br />
                            <br />
                            Portanto, constituir uma “offshore” ou “trust” em um “paraíso fiscal” para administrar os bens ou investimento não apenas é legal, como também moral.
                            A saída de recursos do país de origem, em geral, ocorre em função de objetivos individuais que assim exigem, como a saída fiscal definitiva, questões familiares como planos de mudança de país ou de sucessão patrimonial.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            Mas talvez o que mais motive a saída de recursos do país de origem em favor de um paraíso fiscal deve-se a fatores inerentes ao governo desse país, tais como ineficiência, corrupção, abuso fiscal ou instabilidade econômica e jurídica.
                            Quando essas condições estão presentes, é natural que cidadãos busquem alternativas de proteção patrimonial, e os paraísos fiscais tornam-se não apenas legítimos como também ótimas opções para esse fim.
                            <br />
                            <br />
                            São um porto seguro aos recursos que foram duramente acumulados ao longo da vida de investidores, e estes têm todo o direito e o dever de preservá-lo.
                            Não se deve culpar quem dá saída de recursos ou quem os recebe, e sim o que motivou essa mudança.
                        </p>
      </section>
    ),
  },

    {
    slug: 'estados-unidos-terra-fertil-para-investimentos',
    title: 'Estados Unidos: terra fértil para investimentos',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Estados Unidos: terra fértil para investimentos',
              url: '/blog/estados-unidos-terra-fertil-para-investimentos',
              end: true,
            },
          ]}
        />
                        <h1 className='text-[48px] font-[700] text-white leading-[70px]'>
                            Estados Unidos: terra fértil para investimentos
                        </h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                            Mais do que a maior e mais vibrante economia do mundo, os Estados Unidos possuem um ambiente altamente favorável à evolução econômica. Sob qualquer que seja o aspecto analisado, tudo funciona para que sejam criados inúmeros novos negócios a cada ano e muitas das empresas e marcas de maior sucesso em todo o mundo surgem nas terras do Tio Sam.
                        </p>
                        <img className='mt-[48px]' src='/temp/3.jpeg' alt='money' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Sociedade:</strong> diversidade tem sido um dos maiores atributos atuantes na evolução do país como pólo gerador de negócios. As diferentes culturas presentes no país, que desde sua independência atrai imigrantes de todo o mundo, produziram uma riquíssima combinação de pensamentos, educação, tradição e vivência ancestral que proporcionou uma evolução mais rápida e profunda do que qualquer outro país. Há muito tempo as raízes britânicas que fundaram o país vêm passando por uma mudança radical em termos de combinação racial, trazendo criatividade e empreendedorismo a uma cultura recheada de meritocracia, racionalidade e objetividade dos anglo-saxões.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Tecnologia:</strong> pelo menos metade das 20 mais importantes instituições universitárias do mundo estão em território americano, desde as mais conhecidas como Harvard, Yale, MIT e Columbia, até algumas “low profile” como a Northwestern. Todas, no entanto, encontram-se em posição de destaque em aspectos como qualidade de ensino, corpo docente e produção científica, de praticamente todas as áreas do conhecimento humano. Os Estados Unidos têm sido pródigos em atrair os melhores cérebros do mundo para suas universidades, o que ao mesmo tempo em que mantém a vanguarda na produção de conhecimento, potencializa o empreendedorismo.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Demografia:</strong> apesar da alta concentração populacional que, assim como em outros países, ocorre próximo ao oceano, os Estados Unidos mais uma vez são uma nação privilegiada. Poucos países no mundo têm acesso a dois oceanos, e neste caso são os dois maiores, mais importantes e movimentados para o comércio mundial. Apesar de estados como a Califórnia, Texas, Nova York, Flórida, Massachusetts e Oregon concentrarem boa parte da economia e algumas das principais instituições americanas, outros mais centrais mantêm-se importantes em segmentos específicos. Colorado, Nevada, Michigan, Illinois e Washington são igualmente importantes em termos populacionais e econômicos, reforçando a pujança de um país que soube se desenvolver de forma mais equilibrada, aproveitando seus recursos naturais e a produção industrial, agrícola e extrativista.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Geografia:</strong> um dos desertos mais secos e quentes do mundo, diversas montanhas geladas, lindas praias em dois oceanos, enormes lagos e rios, formações rochosas gigantescas, florestas, extensas áreas alagadas e o maior canyon do mundo são apenas alguns exemplos da riqueza geográfica do território americano. Uma riqueza que ao mesmo tempo em que favorece a exploração de diversos minerais, permite uma alta produção agrícola em diversas culturas e potencializa o turismo externo.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Geo-política:</strong> aliado ao seu imenso poderio militar, os Estados Unidos estão em uma posição extremamente privilegiada. Dono da maior força de guerra do planeta, o país não tem inimigos no mesmo continente, fazendo divisa apenas com o México e o Canadá, países que sofrem tamanha influência e dependência dos americanos que praticamente anulam qualquer possibilidade de conflito. Seus adversários e eventualmente inimigos, que em geral são mantidos em uma constante “tensão controlada”, por meio da diplomacia ou de pressões econômicas, estão distantes o suficiente para que seus sistemas de defesa sejam eficazes. Desde o ataque terrorista ao World Trade Center, os sistemas anti-terrorismo do país conseguiram evitar qualquer nova ocorrência, mantendo a segurança em seu território.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Política:</strong> apesar da polarização entre Republicanos e Democratas e do maior distanciamento entre ambos os partidos nos últimos 15 anos, o sistema político ainda é estável o suficiente para manter sua economia como a mais forte do mundo. Nenhum outro país nos tempos modernos manteve-se com tamanha influência por tanto tempo. As decisões dos Estados Unidos influenciam praticamente todo o mundo, econômica e politicamente.
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            <strong>Legislação:</strong> um sistema jurídico forte, coerente, confiável, baseado em uma constituição simples, direta, que garante direitos fundamentais como o direito à liberdade de expressão, à defesa e à propriedade. Os protagonistas do sistema judicial, em geral, atuam como se espera: sem manifestação fora dos autos, seguem os princípios do direito romano e a constituição. Promovem a justiça em todas as instâncias e mantêm a confiabilidade e a segurança necessárias para que o sistema continue funcionando para todos, sejam eles cidadãos, empresários, instituições, políticos ou investidores.
                        </p>

      </section>
    ),
  },


      {
    slug: 'como-montar-uma-carteira-de-investimentos-no-exterior',
    title: 'Como montar uma carteira de investimentos no exterior?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'como-montar-uma-carteira-de-investimentos-no-exterior',
              url: '/blog/estados-unidos-terra-fertil-para-investimentos',
              end: true,
            },
          ]}
        />
                        <h1 className='text-[48px] font-[700] text-white leading-[70px]'>
                            Como montar uma carteira de investimentos no exterior
                        </h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                            Instabilidade geopolítica, mudanças sociais, migrações em massa, guerras localizadas, polarização política, desastres naturais... São diversos os fatores que interferem nas economias ao redor do mundo. Países como a China, que produzem inúmeros itens para o mundo todo, ou o Brasil com seu agronegócio que alimenta grande parte da população mundial, ao mesmo tempo em que são afetados por eventuais ocorrências também podem ser protagonistas em outros momentos, muitas vezes imprevisíveis.
                            <br />
                            <br />
                            E a melhor forma de termos investimentos protegidos, sejam eles internacionalizados ou não, é com uma diversificação da carteira, distribuindo, de forma equilibrada e de acordo com o perfil de risco aceito por cada investidor (o que deve ser analisado de forma adequada pelo próprio investidor e eventualmente por um assessor), as diferentes classes de ativos. Nos Estados Unidos encontramos as mesmas classes de ativos, que podem ser classificadas em renda fixa, renda variável, fundos de investimentos, commodities, derivativos e imóveis. Assim, títulos de renda fixa privada (CD) e títulos do tesouro americano (Treasury Notes, Treasury Bills e Treasury Bonds), estão ao alcance dos investidores, sem mencionar a maior oferta de ações, especialmente em setores que no Brasil têm baixa relevância, como o de tecnologia.
                        </p>
                        <img className='mt-[48px]' src='/temp/4.jpeg' alt='money' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            As proporções a serem destinadas a cada classe dependerão do perfil de risco de cada investidor, podendo ser 100% em renda fixa a 100% em renda variável. De qualquer forma, mesmo nesses extremos, será necessária a diversificação em diferentes ativos, com diferentes indexadores, classes de risco, vencimentos e setores. Novamente, a ajuda de um assessor com conhecimento de ativos internacionais e acesso a informações como relatórios de casas de análise, é mais do que recomendada.
                            <br />
                            <br />
                            Ao investidor que ainda não tem familiaridade com o mercado americano e internacional, ou não tem como se aprofundar seus conhecimentos em estratégia, movimentos macroeconômicos ou as especificidades de cada setor ou empresa, uma boa saída está nos ETFs. Assim como os fundos de investimento imobiliário (FIIs), mais conhecidos dos brasileiros, ETFs são fundos de investimento administrados por gestores profissionais que agrupam diversas empresas de determinados setores, ou mesmo que replicam índices como o próprio S&P500 (similar ao índice Bovespa).
                            <br />
                            <br />
                            Assim como os FIIs, os ETFs são negociados por cotas, com a possibilidade de compra ou venda a qualquer momento, ou seja, sem data de vencimento, e ainda com a possibilidade de investimento de valores abaixo do preço de sua cota. Dessa forma, um investidor pode usar um saldo de US$ 10 para comprar um ETF que tenha cota no valor de US$ 100. Como ativos de renda variável, os ganhos dependem da valorização da cota de cada um (que pode ser negativa), mas também há opções de ETFs que pagam dividendos.
                            <br />
                            <br />
                            No entanto, todos os números são muito maiores do que no Brasil: mais empresas de capital aberto, mais investidores e maior volume investido per capita, as opções oferecidas são igualmente muitas vezes maior.
                        </p>

      </section>
    ),
  },

      {
    slug: 'meu-capital-esta-mesmo-seguro-fora-do-pais',
    title: 'Meu capital está mesmo seguro fora do país?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Meu capital está mesmo seguro fora do país?',
              url: '/blog/meu-capital-esta-mesmo-seguro-fora-do-pais',
              end: true,
            },
          ]}
        />
                        <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Meu capital está mesmo seguro fora do país?</h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                            Essa é uma questão que muitos investidores fazem, pois é natural sentir-se mais confortável com a sensação de ter o dinheiro ao seu lado, em instituições com as quais estamos familiarizados.
                            <br /><br />
                            No entanto, a frágil estabilidade política do Brasil do início do século intensificou-se, ano a ano, até tornar-se constante, em especial a partir de 2010: descontrole fiscal, explosão de casos de corrupção, impunidade aos mais diversos crimes, aprofundamento da polarização, indicação de novos ministros à mais alta corte diretamente da advocacia e sem nunca terem sido juízes têm sido apenas alguns dos componentes que agravaram nossa situação econômica, social, jurídica e política.
                        </p>
                        <img className='mt-[48px]' src='/temp/5.jpeg' alt='money' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            O Brasil passou a ter condições cada vez mais difíceis para seus habitantes. Aos que têm alguma capacidade de poupança e investimento, a sensação de insegurança e incerteza com relação ao futuro é crescente. Aos investidores estrangeiros, tornou-se um destino cada vez mais arriscado e de apostas especulativas.
                            <br /><br />
                            Sob qualquer aspecto, o Brasil encontra-se em desvantagem quando comparado a outros países minimamente relevantes. Se combinados os diversos pontos de vista, nos encontramos em estado crítico:
                            <ul className='list-disc list-inside mt-[16px]'>
                                <li>Com exceção do agronegócio e da exploração de poucos minérios, a produtividade do país é baixa, não temos produtos competitivos e em geral enfrentamos um recorrente atraso tecnológico.</li>
                                <li>As leis, que vinham tendo algum alinhamento com as nações mais avançadas e com os novos hábitos de consumo e formas de produção, recentemente sofreram um retrocesso. Desrespeito à constituição, leis em excesso e confusas, decisões que anulam decisões anteriores de uma mesma corte, de forma retroativa.</li>
                                <li>A avidez exagerada por mais impostos, o estado mais uma vez com um ônus insustentável e sem as devidas contrapartidas e uma reforma tributária que torna a contabilidade ainda mais complexa.</li>
                                <li>A volta das pautas ideológicas na educação, um sistema unificado que não ensina, não educa e não forma cidadãos capazes, com resultados sofríveis em desempenho escolar que nos coloca entre os últimos do mundo.</li>
                                <li>A proteção exagerada a alguns setores da sociedade aprofunda uma divisão que nem deveria existir, aumenta tensões e nos faz, pouco a pouco, perder a identidade e os valores da nação.</li>
                                <li>O engessamento imposto pelas leis ambientais impede diversos empreendimentos e o progresso do país, ao mesmo tempo em que esquece de que investir em saneamento básico também é proteger o meio-ambiente.</li>
                                <li>O favorecimento de apadrinhados em inúmeros investimentos feitos pelo estado, com processos de concorrência decididos sem transparência e com superfaturamento.</li>
                                <li>O jogo político do congresso, com a frequente compra de apoio parlamentar, fazendo com que inúmeras decisões sejam tomadas atendendo a interesses pessoais dos políticos e em prejuízo do país.</li>
                                <li>Nossa moeda se desvaloriza em uma velocidade muito maior do que outras moedas no mundo. Em 1994, o Real foi criado em paridade com o Dólar, e hoje tem apenas 1/6 do valor da moeda americana.</li>
                                <li>A economia é eternamente maltratada, e o país não deixa a espiral de atraso em que entrou há cerca de 20 anos.</li>
                            </ul>
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            O questionamento acerca da segurança de investir no exterior é mais do que pertinente. Devemos sempre nos preocupar, buscar informações, analisar, consultar profissionais capacitados e nos certificar de que todos os aspectos a serem avaliados foram cobertos.
                            <br /><br />
                            Mas, passadas essas etapas de forma criteriosa, ter patrimônio na maior economia do mundo, que mesmo em seu período mais conturbado manteve-se estável e seguro, é na verdade muito mais seguro do que no Brasil.
                            <br /><br />
                            Instituições centenárias, altamente reguladas, um sistema jurídico sólido, coerente e que preza pela garantia de direitos fundamentais e a conversão do capital na moeda de maior liquidez do mundo, com poder de compra que se mantém ao longo dos anos, são apenas alguns dos aspectos que colocam os Estados Unidos em grande vantagem como destino de investimentos de cidadãos brasileiros. E não devemos esquecer de que, em caso de necessidade, a internacionalização de capital é reversível, de forma simples e ágil.
                        </p>

      </section>
    ),
  },


        {
    slug: 'meu-capital-esta-mesmo-seguro-fora-do-pais',
    title: 'Meu capital está mesmo seguro fora do país?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Meu capital está mesmo seguro fora do país?',
              url: '/blog/meu-capital-esta-mesmo-seguro-fora-do-pais',
              end: true,
            },
          ]}
        />
                        <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Meu capital está mesmo seguro fora do país?</h1>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                            Essa é uma questão que muitos investidores fazem, pois é natural sentir-se mais confortável com a sensação de ter o dinheiro ao seu lado, em instituições com as quais estamos familiarizados.
                            <br /><br />
                            No entanto, a frágil estabilidade política do Brasil do início do século intensificou-se, ano a ano, até tornar-se constante, em especial a partir de 2010: descontrole fiscal, explosão de casos de corrupção, impunidade aos mais diversos crimes, aprofundamento da polarização, indicação de novos ministros à mais alta corte diretamente da advocacia e sem nunca terem sido juízes têm sido apenas alguns dos componentes que agravaram nossa situação econômica, social, jurídica e política.
                        </p>
                        <img className='mt-[48px]' src='/temp/5.jpeg' alt='money' />
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            O Brasil passou a ter condições cada vez mais difíceis para seus habitantes. Aos que têm alguma capacidade de poupança e investimento, a sensação de insegurança e incerteza com relação ao futuro é crescente. Aos investidores estrangeiros, tornou-se um destino cada vez mais arriscado e de apostas especulativas.
                            <br /><br />
                            Sob qualquer aspecto, o Brasil encontra-se em desvantagem quando comparado a outros países minimamente relevantes. Se combinados os diversos pontos de vista, nos encontramos em estado crítico:
                            <ul className='list-disc list-inside mt-[16px]'>
                                <li>Com exceção do agronegócio e da exploração de poucos minérios, a produtividade do país é baixa, não temos produtos competitivos e em geral enfrentamos um recorrente atraso tecnológico.</li>
                                <li>As leis, que vinham tendo algum alinhamento com as nações mais avançadas e com os novos hábitos de consumo e formas de produção, recentemente sofreram um retrocesso. Desrespeito à constituição, leis em excesso e confusas, decisões que anulam decisões anteriores de uma mesma corte, de forma retroativa.</li>
                                <li>A avidez exagerada por mais impostos, o estado mais uma vez com um ônus insustentável e sem as devidas contrapartidas e uma reforma tributária que torna a contabilidade ainda mais complexa.</li>
                                <li>A volta das pautas ideológicas na educação, um sistema unificado que não ensina, não educa e não forma cidadãos capazes, com resultados sofríveis em desempenho escolar que nos coloca entre os últimos do mundo.</li>
                                <li>A proteção exagerada a alguns setores da sociedade aprofunda uma divisão que nem deveria existir, aumenta tensões e nos faz, pouco a pouco, perder a identidade e os valores da nação.</li>
                                <li>O engessamento imposto pelas leis ambientais impede diversos empreendimentos e o progresso do país, ao mesmo tempo em que esquece de que investir em saneamento básico também é proteger o meio-ambiente.</li>
                                <li>O favorecimento de apadrinhados em inúmeros investimentos feitos pelo estado, com processos de concorrência decididos sem transparência e com superfaturamento.</li>
                                <li>O jogo político do congresso, com a frequente compra de apoio parlamentar, fazendo com que inúmeras decisões sejam tomadas atendendo a interesses pessoais dos políticos e em prejuízo do país.</li>
                                <li>Nossa moeda se desvaloriza em uma velocidade muito maior do que outras moedas no mundo. Em 1994, o Real foi criado em paridade com o Dólar, e hoje tem apenas 1/6 do valor da moeda americana.</li>
                                <li>A economia é eternamente maltratada, e o país não deixa a espiral de atraso em que entrou há cerca de 20 anos.</li>
                            </ul>
                        </p>
                        <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                            O questionamento acerca da segurança de investir no exterior é mais do que pertinente. Devemos sempre nos preocupar, buscar informações, analisar, consultar profissionais capacitados e nos certificar de que todos os aspectos a serem avaliados foram cobertos.
                            <br /><br />
                            Mas, passadas essas etapas de forma criteriosa, ter patrimônio na maior economia do mundo, que mesmo em seu período mais conturbado manteve-se estável e seguro, é na verdade muito mais seguro do que no Brasil.
                            <br /><br />
                            Instituições centenárias, altamente reguladas, um sistema jurídico sólido, coerente e que preza pela garantia de direitos fundamentais e a conversão do capital na moeda de maior liquidez do mundo, com poder de compra que se mantém ao longo dos anos, são apenas alguns dos aspectos que colocam os Estados Unidos em grande vantagem como destino de investimentos de cidadãos brasileiros. E não devemos esquecer de que, em caso de necessidade, a internacionalização de capital é reversível, de forma simples e ágil.
                        </p>
      </section>
    ),
  },

        {
    slug: 'porque-expatriar-meu-capital-com-o-dolar-em-alta',
    title: 'Porque expatriar meu capital com o Dólar em alta?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Porque expatriar meu capital com o Dólar em alta?',
              url: '/blog/porque-expatriar-meu-capital-com-o-dolar-em-alta',
              end: true,
            },
          ]}
        />
                          <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Porque expatriar meu capital com o Dólar em alta?</h1>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                              Sabidamente a maior e mais ativa economia do mundo, os Estados Unidos contam com cerca de 6000 empresas listadas nas bolsas NYSE (New York Stock Exchange) e NASDAQ (National Association of Securities Dealers Automated Quotations). Ambas localizadas em Nova York, sendo a primeira a que reúne as empresas dos setores mais tradicionais, como o de alimentos e bebidas, varejo, aviação e financeiro, e a segunda a que concentra empresas do segmento de tecnologia e inovação, como Google/Alphabet, Nvidia e Microsoft.
                              Apenas o grupo formado pelas maiores empresas de tecnologia do mundo, chamado de “sete magníficas”, com Alphabet, Nvidia, Microsoft, Amazon, Tesla, Meta e Apple soma um valor de mercado em 2024 mais de 3 vezes maior do que o PIB brasileiro. Sim, um punhado de empresas, entre as mais influentes do mundo, das quais praticamente todos nós somos usuários de algum de seus serviços, valem mais do que tudo o que o Brasil produz.
                              <br /><br />
                              E esses são apenas alguns exemplos da força representada pelo mercado americano, uma vez que outras gigantes como Coca-Cola, Pepsico, FedEx, General Motors, Johnson&Johnson e Oracle também tiveram origem nos Estados Unidos, impactam nossas vidas diariamente e têm suas ações negociadas na bolsa de Nova York.
                          </p>
                          <img className='mt-[48px]' src='/temp/10.jpeg' alt='money' />
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Enquanto a instabilidade que reina no Brasil nos força a investir em renda fixa, como forma de proteção às mudanças impostas por governos e, mais recentemente, pelo judiciário, nos Estados Unidos o investidor médio tem condições ideais para o investimento nas empresas de capital aberto. O país conta com mais de 5000 empresas listadas em bolsa - em quantidade, isso é mais de 10 vezes o nosso mercado. Em volume de investimento, no entanto, a diferença é ainda maior: enquanto a B3 tem uma média de US$ 4 Bi diários, somadas, NYSE E NASDAQ chegam a cerca de US$ 60 Bi diários. E nem incluímos aqui a Bolsa de Chicago (CME Group), especializada em commodities. Um mercado com tamanho vigor oferece inúmeras oportunidades, com muito mais segurança do que o ambiente que encontramos no Brasil.
                              <br /><br />
                              Mas as oportunidades não se restringem a renda variável, da qual o investimento em ações / bolsa é a modalidade mais conhecida. Sim, as grandes oportunidades de ganho de capital em geral encontram-se no mercado de ações, especialmente na valorização de empresas. Um mercado menos regulado, mais aberto, regido por meritocracia e competência, oferece um maior potencial de ganhos. Nos últimos 15 anos o S&P500, principal índice de investimentos do mundo, que concentra os resultados das 500 maiores empresas americanas, tem crescido em média 10% ao ano - na moeda mais utilizada no mundo.
                              Ou seja, quem investe em um ETF atrelado a esse índice, ganhou, em dólar, 10% ao ano, mais a valorização da moeda frente ao Real.
                              <br /><br />
                              Ainda que esses dados sejam animadores, sabemos que investidores mais conservadores sentem-se desconfortáveis com a renda variável, por diversos motivos. Mas assim como no Brasil, os EUA contam com opções como fundos de investimento, ETFs, FIIs e títulos de renda fixa. Em muito maior volume e diversificação do que encontramos no nosso mercado. Por exemplo, podemos investir em um ETF de tecnologia, de semicondutores, de ouro, ou de diversos outros setores que no Brasil são inexistentes ou irrelevantes - com a vantagem de contar com a análise e gestão de profissionais altamente capacitados, que conhecem a fundo o mercado e as empresas investidas. Na renda fixa encontramos desde os títulos mais seguros do mundo, emitidos pelo governo americano, até os de empresas privadas como a Amazon.
                              <br /><br />
                              Mas afinal, devemos investir nos Estados Unidos como oportunidade ou estratégia? Bem, em um mercado com as condições descritas, com tamanha potência, ambas as modalidades são válidas e devem ser mantidas. Investir nos Estados Unidos é e sempre será estratégico, do ponto de vista de que se trata de uma diversificação necessária em nossa carteira, para proteger nosso patrimônio e participar de mercados que não temos representados por aqui; ao mesmo tempo trata-se de uma oportunidade de potencializar ganhos em momentos específicos, sejam de curto prazo e focados em um segmento ou companhia específico, seja por um momento de mercado.
                              <br /><br />
                              Não podemos finalizar sem dizer, no entanto, que uma orientação profissional qualificada é essencial na decisão de investimentos, pois mesmo os investimentos mais conservadores e seguros poderão oferecer riscos se determinados fatores não forem considerados.
                          </p>
                          <h2 className='text-[32px] font-[600] text-white leading-[50px] mt-[64px]'>Warren Buffett: o exemplo de paciência e estratégia</h2>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[32px]'>
                              Warren Buffett, provavelmente o maior investidor de todos os tempos, mantém-se como uma pessoa extremamente conservadora em seus hábitos. Simples, pacato, avesso a holofotes, anda em um Cadillac dos anos 2000, não usa ternos ou relógios caros, mora na mesma casa em uma cidade pequena do interior americano, come hambúrgueres com Coca-Cola todos os dias e não costuma ser visto em eventos de figurões. Dedica-se a administrar com cuidado seus investimentos, em geral feitos nas empresas de grande faturamento e que atuam em mercados consolidados.
                              <br /><br />
                              Um dos fatores de seu sucesso é o conhecimento profundo das bases de cada empresa investida: sua saúde financeira, a cultura empresarial, a qualidade da gestão, o que a gestão pensa sobre o futuro da companhia e as projeções de vendas e os planos de investimento. Avalia profundamente o mercado em que atua, a posição da empresa, sua reputação e a percepção do consumidor. Analisa todas as variáveis que podem impactar no negócio e nos resultados da empresa.
                              <br /><br />
                              Outro é a paciência, que anda junto com o tempo. Muito da expressiva rentabilidade que seus investimentos obtêm, vêm após uma longa maturação: os fundamentos, que são a base de seus resultados, quando bem geridos tornam-se consistentes e sustentáveis, mas necessitam de tempo. Consistência, coerência, persistência, planejamento e estratégia. Warren Buffett não especula, não espera ganhos de curto prazo e tem a paciência que a quase totalidade dos investidores não têm - o que o torna altamente diferenciado e o levou à posição que ocupa há décadas.
                          </p>
                          <h2 className='text-[32px] font-[600] text-white leading-[50px] mt-[64px]'>Por que dolarizar o patrimônio?</h2>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[32px]'>
                              Da mesma forma devemos proceder com o Dólar. Moeda mais forte do mundo, utilizada tanto entre países e instituições financeiras mundiais na definição de suas dívidas, receitas e resultados, o Dólar é a moeda mais líquida do mundo, a mais conhecida e desejada, que em muitos países pode ser tão ou mais aceita do que a moeda local.
                              <br /><br />
                              Seja por governos, empresas privadas ou cidadãos, o mundo aceita Dólares na operação de transações comerciais ou na valoração destas. O Dólar literalmente define o curso do comércio mundial, o custo de commodities, a dívida ou reserva de governos e empresas e a riqueza de pessoas de todo o mundo. Bancos da Suíça, Argentina, Uruguai, e praticamente todos os países do mundo guardam o patrimônio de clientes em Dólar.
                              <br /><br />
                              Obter e manter Dólares em nosso poder há muitas décadas representa proteção cambial, reserva de emergência, valorização patrimonial e segurança em momentos de crise. Investidores do mundo inteiro recorrem à compra de Dólares em momentos de crise.
                              <br /><br />
                              Mas como qualquer moeda de livre negociação, o Dólar sofre variações em seu valor frente a outros benchmarks e moedas. Decisões político-econômicas, acontecimentos geopolíticos, catástrofes naturais e outras ocorrências de grande magnitude podem interferir na valorização do Dólar. Sentimos isso em nosso Real, que sofre os efeitos de decisões do governo referentes à economia, política e legislação. Após ter permanecido em torno dos R$ 5,00 em grande parte de 2023 e 2024, a cotação do Dólar subiu para algo próximo de R$ 5,70, em virtude da situação fiscal do país, que se deteriora a cada dia.
                              <br /><br />
                              Por que, então, dolarizar o patrimônio em um período de alta? Porque assim como Warren Buffett, devemos investir em Dólar de forma estratégica, com consistência, paciência e coerência. Desde sua criação, há 30 anos, o Real perdeu cerca de 84% de seu valor; no mesmo período, o Dólar desvalorizou-se em 35%. Historicamente, os períodos de alta da moeda americana são muito mais duradouros e resistentes; quando há uma reversão, esta será sucedida por novo período de alta, alcançando um novo patamar de valorização. Ou seja, ainda que aparentemente caro, não apenas mantém seu poder de compra por muito mais tempo do que o Real, como tende a manter-se em uma constante valorização frente à nossa moeda.
                              <br /><br />
                              Assim como Warren Buffett faz com seus investimentos, devemos tratar o Dólar com estratégia, consistência, coerência e paciência. Uma famosa frase, que deve sempre ser lembrada, diz que ‘Dólar caro é o Dólar que não se tem’. Em uma livre adaptação de outra, igualmente famosa e de autoria do Sr. Buffett, podemos dizer: never bet against Dólar.
                          </p>
      </section>
    ),
  },


        {
    slug: 'europa-china-japao-e-emergentes-oportunidades-potenciais-e-riscos',
    title: 'Europa, China, Japão e Emergentes: oportunidades, potenciais e riscos envolvidos',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Europa, China, Japão e Emergentes: oportunidades, potenciais e riscos envolvidos',
              url: '/blog/europa-china-japao-e-emergentes-oportunidades-potenciais-e-riscos',
              end: true,
            },
          ]}
        />

                          <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Europa, China, Japão e Emergentes: oportunidades, potenciais e riscos envolvidos</h1>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                              Cada vez mais investidores de todos os perfis têm aumentado seu interesse pelo exterior, seja para proteção de patrimônio ou aproveitar oportunidades que não vemos por aqui, como acontece no setor de tecnologia, defesa ou em vários outros, em maior ou menor grau. Afinal, se o Brasil representa menos de 2% do comércio mundial (e excluído o agronegócio essa participação seria ainda menor), por que nos limitamos a investimentos apenas dentro do país? Com o mundo cada vez mais conectado, a tecnologia de comunicação cada vez mais avançada, confiável e a nosso favor, assim como a tecnologia de segurança, praticamente não há mais fronteiras.
                              <br />
                              <br />
                              Se analisarmos nosso ambiente político, econômico-fiscal e jurídico, o Brasil não deixa de nos apresentar motivos para nos internacionalizarmos: a constituição sendo constantemente reinterpretada, a falta de compromisso com os gastos governamentais, a alta desenfreada de impostos, as liberdades que pouco a pouco desaparecem são apenas alguns exemplos. Uma situação que gera incertezas, aumento de custos, queda no consumo, fuga de investidores, baixa competitividade e tantos outros efeitos negativos à nossa economia. Sob qualquer aspecto, portanto, encontramos diversos motivos para investir no exterior.
                          </p>
  
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Para onde ir então? Cada vez mais consolidada como uma potência rival aos Estados Unidos, a China segue crescendo, apesar de em taxas menores, e cada vez ocupa mais espaço na economia mundial com produtos de maior qualidade e tecnologia. Suas empresas e marcas são mais familiares e igualmente se consolidam no mundo todo. A Índia, que há muito tempo passou a ocupar espaço no desenvolvimento de tecnologia, pode ultrapassar a China em total populacional e passou a ser um dos principais destinos para uma nova onda de industrialização, o que deverá mudar o patamar do país em termos de desenvolvimento econômico e social. Outro exemplo do potencial do país vem da produção intelectual: muitos dos CEOs de grandes corporações mundiais e grandes cientistas são oriundos da Índia.
                              <br />
                              <br />
                              Entre os emergentes, países como África do Sul, Vietnã e México industrializam-se cada vez mais, aumentam seus PIBs, melhoram pouco a pouco sua situação social com mais empregos e consumo e passam a mudar gradativamente de patamar. A Argentina recupera-se de décadas de estagnação econômica, crescimento do estado e inflação descontrolada e parece retomar o caminho da reorganização econômica, com diversos esforços do governo Milei para atrair investimentos externos.
                              <br />
                              <img className='mt-[48px]' src='/temp/6.jpeg' alt='money' />
                              <br />
                              A Europa segue sendo responsável por grande parte do PIB mundial, tem uma diversidade de culturas inigualável, uma sociedade economicamente menos desigual, conta com um sistema financeiro entre os mais avançados do mundo, grandes corporações e reúne grande parte dos maiores decisores de investimentos ao resto do mundo.
                          </p>
  
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Então por que, apesar de termos argumentos suficientes para incluir qualquer um desses destinos em nossos investimentos, nosso foco segue sendo investir nos Estados Unidos? O motivo é totalmente racional: nenhum desses países reúne todas as condições favoráveis a investidores como ocorre nos Estados Unidos. A China segue sendo uma economia controlada duramente pelo governo, que mantém todas as decisões centralizadas no partido comunista, único decisor dos rumos do país. A economia não funciona pelo mercado, e sim por resultados ao partido. Um excesso de planejamento que se vê, por exemplo, na bolha imobiliária chinesa, que levou à quebra de corporações gigantes e a distorções na cotação do minério de ferro.
                              <br />
                              <br />
                              A Índia ainda tem sua sociedade baseada no sistema de castas, que produziu um enorme cisma social, ainda maior do que nos acostumamos a ver em outros países emergentes. O crescimento da indústria não será suficiente para incorporar a enorme população, que segue com baixa qualificação. Trata-se de um longo caminho a seguir, com décadas de um trabalho que necessita ser muito bem executado pelos governantes para colher bons resultados.
                              <br />
                              <br />
                              Uma situação semelhante à da África do Sul: apesar de mais industrializada, ainda enfrenta inúmeros desafios resultantes do período de apartheid e corrupção. Os desafios não são menores para outros emergentes como México, Vietnã ou outros. Baixa qualificação profissional, pobreza, corrupção, infraestrutura precária, defasagem tecnológica, entre outros, são fatores que afetam cada um desses países, em maior ou menor grau. Na América do Sul, além desses mesmos fatores, ainda vemos a instabilidade política, agravada com o sempre presente risco de volta do populismo que promete tirar a população da pobreza e entrega mais corrupção e benefícios aos amigos da classe política.
                              <br />
                              <br />
                              A Europa, por fim, reúne diversas condições interessantes para investimento, mas há muito deixou de crescer a taxas saudáveis para investimento externo. O crescimento econômico insuficiente reduz as oportunidades de ganhos e o continente já não atrai investidores externos como no passado. Por outro lado, sua sociedade passa por turbulências pela chegada de refugiados do norte da África e leste europeu, impondo enormes despesas aos governos e aumentando a instabilidade social.
                          </p>
  
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Dessa forma, investimentos na China, Índia ou em algum dos emergentes podem, sem dúvida, representar grandes oportunidades, mas carregariam um alto nível de risco. Na Europa, se temos segurança, as oportunidades são escassas. Na contramão de tudo isso, os Estados Unidos seguem sendo a potência mais influente, econômica, política e cultural do mundo. Atrai os maiores cientistas, mantém-se no topo do desenvolvimento tecnológico em todos os setores, e concentra as empresas que determinam o avanço mundial, mas que se orientam pelas leis de mercado: seus resultados serão tanto melhores quanto suas estratégias forem eficazes.
                              <br />
                              <br />
                              Seu ambiente continua sendo estável, seguro, previsível e promissor, o que consolida o país como o destino ideal para investidores externos. Também concentra grande parte das instituições financeiras mais tradicionais e sólidas do mundo, com um sistema regulatório, jurídico e tecnológico altamente avançado e confiável para investidores do mundo todo. Com tudo na balança, temos motivos de sobra para manter nosso foco nos Estados Unidos quando se trata de internacionalização de capital.
                          </p>
      </section>
    ),
  },

        {
    slug: 'joint-tenancy-o-que-e-e-como-usar',
    title: 'Joint Tenancy: o que é e quais são seus benefícios?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Joint Tenancy: o que é e quais são seus benefícios?',
              url: '/blog/joint-tenancy-o-que-e-e-como-usar',
              end: true,
            },
          ]}
        />

                          <h1 className='text-[48px] font-[700] text-white leading-[70px]'>Joint Tenancy: o que é e quais são seus benefícios?</h1>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>Joint Tenancy é um instrumento legal que pode ser compreendido como uma guarda-compartilhada de ativos, pelo qual dois ou mais indivíduos dividem a posse de ativos com direitos iguais, incluindo imóveis, contas bancárias e investimentos, sem a burocracia de um inventário. Ocorrendo a falta de um dos seus integrantes, é aplicado o “direito de sobrevivência” ao(s) participante restante(s), com os ativos passando diretamente a estes.</p>
                          <img className='mt-[48px]' src='/temp/7.jpeg' alt='joint tenancy' />
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              <strong>Principais características:</strong>
                              <br />
                              a. <strong>Posse igualitária:</strong> todos os participantes têm uma mesma parte dos ativos, independente da contribuição de cada um na formação ou manutenção desses ativos.
                              <br />
                              b. <strong>Direito de sobrevivência:</strong> no caso de morte de um dos participantes, sua parcela dos ativos é transferida automaticamente aos remanescentes, garantindo a continuidade da posse e evitando a burocracia de um inventário.
                              <br />
                              c. <strong>Unicidade de posse:</strong> o Joint Tenancy é constituído de forma que todos os participantes a ele adiram, ao mesmo tempo, sob as mesmas condições, no mesmo documento com iguais interesses e direitos.
                              <br />
                              d. <strong>Indivisibilidade:</strong> essa modalidade de participação não permite a venda ou transferência do todo ou parte da participação entre os participantes ou a terceiros. Caso isso ocorra, será automaticamente retirado o direito à sobrevivência, com o retorno da exigência legal de inventário no caso de falta de um dos participantes.
                          </p>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Essas características geram outras vantagens ao Joint Tenancy, como:
                              <br />
                              - <strong>Transferência simplificada de ativos:</strong> ocorre de forma rápida, em geral com a apresentação de atestado de óbito.
                              <br />
                              - <strong>Responsabilidade compartilhada:</strong> custos de manutenção, impostos e quaisquer outras despesas relacionadas aos ativos são igualmente divididos entre os participantes.
                          </p>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              <strong>Desvantagens:</strong>
                              <br />
                              - Falta de flexibilidade na alteração da estrutura da “sociedade”.
                              <br />
                              - Potencial de conflitos sobre a condução dos ativos.
                              <br />
                              - Risco de consequências indesejadas, como um fiador assumir a fatia de um dos participantes por falta de pagamento de dívidas.
                              <br />
                              - Possibilidade de aumento de impostos, especialmente quando o instrumento não é feito entre cônjuges.
                          </p>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              <strong>Principais usos do Joint Tenancy:</strong>
                              <br />
                              - Facilitação de uma futura transferência de imóveis como sucessão patrimonial.
                              <br />
                              - Rápido acesso a contas bancárias, correntes ou de investimento, por familiares ou sucessores no caso de falta de um dos participantes.
                              <br />
                              - Acesso a contas e ativos de propriedade de empresas no caso de falta de um dos sócios, mantendo a continuidade de sua liquidez.
                          </p>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Uma alternativa ao Joint Tenancy é a constituição de uma Trust, instrumento jurídico que mantém as principais características da primeira, mas dá mais controle e flexibilidade à distribuição de ativos entre os participantes.
                          </p>
      </section>
    ),
  },

        {
    slug: 'deixar-o-pais-teoria-das-bandeiras-de-harry-schultz-e-saida-fiscal-no-brasil',
    title: 'A saída fiscal e a teoria das bandeiras: oportunidades para otimizar seus recursos',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'A saída fiscal e a teoria das bandeiras: oportunidades para otimizar seus recursos',
              url: '/blog/deixar-o-pais-teoria-das-bandeiras-de-harry-schultz-e-saida-fiscal-no-brasil',
              end: true,
            },
          ]}
        />                          
                          <h1 className='text-[48px] font-[700] text-white leading-[70px]'>
                              A saída fiscal e a teoria das bandeiras: oportunidades para otimizar seus recursos.
                          </h1>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                              A saída fiscal é um processo necessário a todos os cidadãos que decidem transferir-se para o exterior ou passam mais de um ano fora do país. Resumidamente, ela funciona para que os expatriados não tenham mais de apresentar as declarações anuais de imposto de renda e só sejam tributados, na fonte, por rendimentos originados no Brasil, como aluguéis.
                              <br />
                              <br />
                              É um processo relativamente simples, realizado na última declaração de imposto de renda feita até o ano seguinte da saída do país, respeitando a mesma data limite da apresentação do IR à Receita Federal. Dependendo da complexidade da declaração de cada contribuinte, a ajuda de um contador pode ser necessária.
                              <br />
                              <br />
                              Mas dentro do processo de mudança, que envolve toda uma reorganização de vida, que envolve um extenso e cuidadoso planejamento, a obtenção de autorização de residência e trabalho no exterior, a decisão pela localização, a busca de uma nova residência, a abertura de uma conta bancária, a aquisição de novos bens, a eventual transferência de outros, a assimilação de uma nova cultura... um processo cansativo, longo e repleto de desafios, que torna a saída fiscal talvez a parte mais simples.
                          </p>
                          <img className='mt-[48px]' src='/temp/8.jpeg' alt='money' />
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              E uma vez envolvidos nesse planejamento, faz cada vez mais sentido aplicar a teoria das bandeiras, de Harry Schultz, para uma completa reorganização de vida e otimização de recursos.
                              <br />
                              <br />
                              Harry Schultz, escritor, consultor financeiro e investidor, nasceu em 1923, nos Estados Unidos e construiu uma carreira influente como defensor da liberdade financeira, proteção patrimonial e evasão legal de regimes tributários excessivos.
                              Schultz escreveu diversos livros sobre finanças, economia e liberdade individual, sempre enfatizando a importância de pensar globalmente e diversificar a vida financeira e pessoal para maximizar a segurança e a liberdade. Também escreveu sobre investimentos, política econômica e estratégias de proteção patrimonial. Ele defendia que as pessoas deveriam estar preparadas para se adaptar às mudanças geopolíticas e financeiras rapidamente.
                              <br />
                              <br />
                              A Teoria das Bandeiras é um modelo de planejamento financeiro e de vida que busca maximizar a liberdade individual, minimizar a carga tributária e proteger o patrimônio pessoal. Essa teoria baseia-se no conceito de que, em um mundo globalizado, os indivíduos não precisam limitar suas vidas e atividades a um único país. Em vez disso, eles podem distribuir suas conexões pessoais, financeiras e empresariais estrategicamente por diversas jurisdições para aproveitar vantagens legais e econômicas.
                              <br />
                              <br />
                              Sua teoria evoluiu ao longo do tempo e a versão mais recente propõe a organização da vida em cinco “bandeiras”, ou jurisdições:
                              <br />
                              <ul className='list-disc pl-6'>
                                  <li><strong>Residência ou Cidadania:</strong> Viver em um país com baixa tributação sobre a renda ou onde a qualidade de vida seja elevada.</li>
                                  <li><strong>Atividades Econômicas:</strong> Registrar negócios em um país com um ambiente corporativo favorável e leis fiscais amigáveis.</li>
                                  <li><strong>Bancos e Investimentos:</strong> Manter recursos financeiros em países com estabilidade econômica e sistemas bancários sólidos.</li>
                                  <li><strong>Estilo de Vida:</strong> Passar o tempo em jurisdições que ofereçam liberdade pessoal e proteção jurídica.</li>
                                  <li><strong>Patrimônio e Planejamento Sucessório:</strong> Armazenar bens em países que protejam ativos, como imóveis, ouro ou arte.</li>
                              </ul>
                              <br />
                              Os benefícios da adoção desse modelo, em geral, são a redução da carga tributária, ao viver em um país com isenção ou menor tributação sobre rendimentos ou patrimônio; maior proteção patrimonial obtida em países com leis robustas de proteção a ativos; mobilidade financeira, com a liberdade de movimentar recursos sem duplicidade de tributos.
                              <br />
                              <br />
                              Para obter sucesso na aplicação dessa teoria, além de muita preparação, planejamento e estudo acerca das condições locais, legislação e exigências, entre outros aspectos, é recomendável contar com orientação e acompanhamento de profissionais qualificados.
                              <br />
                              <br />
                              E enquanto a hora de deixar o país não chega, sempre é possível fazer um uso parcial da Teoria das Bandeiras internacionalizando o patrimônio e buscando países que ofereçam melhores condições de evolução do capital, com oportunidades frequentes, estabilidade econômica e segurança jurídica.
                          </p>
      </section>
    ),
  },

        {
    slug: 'investimentos-nos-estados-unidos-oportunidade-ou-estratégia',
    title: 'Investimentos nos Estados Unidos: oportunidade ou estratégia?',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'Investimentos nos Estados Unidos: oportunidade ou estratégia?',
              url: '/blog/investimentos-nos-estados-unidos-oportunidade-ou-estratégia',
              end: true,
            },
          ]}
        />
                          <h1 className='text-[48px] font-[700] text-white leading-[70px]'>
                              Investimentos nos Estados Unidos: oportunidade ou estratégia?
                          </h1>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                              Nos acostumamos a ter a Europa no centro de nossas atenções, por diversos motivos: berço da civilização do Ocidente, da industrialização, continente com o maior número de países, culturas, idiomas, de onde uma expressiva parcela da população brasileira tem origens.
                              Um grupo de nações que ao longo de centenas de anos desenvolveu sistemas de governo, fortaleceu seus sistemas e viu suas sociedades evoluírem de uma forma mais igualitária, sem os grandes desequilíbrios sociais que temos em países do terceiro mundo e emergentes como o Brasil.
                              Há três décadas, o bloco das economias mais desenvolvidas da Europa decidiu unificar-se com a criação do Euro, que foi adotado como moeda comum na maioria do bloco. A força econômica desse grupo, associada a outros fatores como sua capacidade industrial, seu foco em itens de alto valor agregado, o nível educacional e a qualificação média de sua população e o potencial de consumo do bloco mantiveram o Euro em um nível sempre muito próximo ao Dólar, algo semelhante entre as nações que optaram por não adotar o Euro, como o Reino Unido e a Suíça.
                              Em 2008, a crise do “sub-prime”, causada pelo excesso de exposição de instituições financeiras no financiamento imobiliário de baixa qualificação/alto risco, gerou uma queda vertiginosa de crédito em todo o mundo, com um período inicial recessivo, seguido de uma lenta recuperação dos mercados em todo o mundo. Os Estados Unidos, onde se originou essa trágica situação, que incluiu quebra de bancos e de empresas, foi o país mais atingido. Com forte bloco econômico, uma rígida regulação imposta a seus integrantes e uma dependência relativamente baixa dos Estados Unidos, a Europa viria a sofrer muito menos e viria a ter uma recuperação mais rápida. Até então, tudo dentro do esperado.
                              Mas o que se viu em um segundo momento foi um crescimento vigoroso da economia americana, que teve sua renda per capita praticamente dobrada desde então, com uma taxa de crescimento descolada da que se observou na Europa. No mesmo período, na chamada Zona do Euro, a renda per capita se manteve em um nível muito próximo ao anterior.
                              Sob outro ângulo, o Reino Unido, que deixou a Comunidade Econômica Européia em busca de maior flexibilidade em negociações e maior crescimento econômico, hoje tem sua renda média inferior ao estado do Mississippi, a menor economia entre os estados americanos.
                              Em um terceiro ponto de vista: há cerca de 20 anos, quatro das dez maiores empresas do mundo eram americanas, quatro européias e duas japonesas. Atualmente, nove das dez maiores são dos Estados Unidos e uma da Arábia Saudita. Apple, Microsoft e Nvidia, separadamente, hoje valem mais do que o total das empresas com ações comercializadas na Bolsa de Frankfurt (FSE), uma das maiores e mais importantes do mundo.
                              Assim como ocorreu em todo o mundo, a crise gerada pela pandemia afetou economicamente os Estados Unidos, que sofreram especialmente com a alta da inflação pelos estímulos lançados a diversos setores e também aos trabalhadores, buscando compensar os efeitos negativos de ações como o lockdown. Mesmo convivendo até hoje com juros em um patamar elevado e incomum para o país, a economia seguiu crescendo e mantém-se vigorosa. Com a definição das eleições e a composição da nova equipe de governo, o cenário indica a possibilidade de uma nova era de forte crescimento dos Estados Unidos, com desregulamentação e queda de impostos.
                              Ainda tratando de ambiente interno: em termos populacionais, o país será o único do ocidente que manterá sua população em crescimento nos próximos 25 anos. Enquanto Brasil, Argentina, toda a Zona do Euro vêm suas populações economicamente ativas em declínio, impondo mais peso ao estado e limitando sua capacidade de investimento e geração de renda, os Estados Unidos seguem com taxas de natalidade x mortalidade positivas e fluxos migratórios importantes que os mantêm em forte crescimento.
                              A história recente nos mostra fatos que corroboram a força da economia americana e confirmam que as condições de mercado necessárias para que ela siga vigorosa continuam presentes. Um mercado com pouca regulamentação, uma cultura baseada em performance e meritocracia e um cenário positivo sendo desenhado.
                              Todo esse conjunto reforça a tese de investimentos nos Estados Unidos como destino preferencial de investimentos estrangeiros para acúmulo de capital e proteção patrimonial.
                          </p>
                          <img className='mt-[48px]' src='/blog/bg-money.jpg' alt='money' />
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Sabidamente a maior e mais ativa economia do mundo, os Estados Unidos contam com cerca de 6000 empresas listadas nas bolsas NYSE (New York Stock Exchange) e NASDAQ (National Association of Securities Dealers Automated Quotations). Ambas localizadas em Nova York, sendo a primeira a que reúne as empresas dos setores mais tradicionais, como o de alimentos e bebidas, varejo, aviação e financeiro, e a segunda a que concentra empresas do segmento de tecnologia e inovação, como Google/Alphabet, Nvidia e Microsoft.
                              Apenas o grupo formado pelas maiores empresas de tecnologia do mundo, chamado de “sete magníficas”, com Alphabet, Nvidia, Microsoft, Amazon, Tesla, Meta e Apple soma um valor de mercado em 2024 mais de 3 vezes maior do que o PIB brasileiro. Sim, um punhado de empresas, entre as mais influentes do mundo, das quais praticamente todos nós somos usuários de algum de seus serviços, valem mais do que tudo o que o Brasil produz.
                              E esses são apenas alguns exemplos da força representada pelo mercado americano, uma vez que outras gigantes como Coca-Cola, Pepsico, FedEx, General Motors, Johnson&Johnson e Oracle também tiveram origem nos Estados Unidos, impactam nossas vidas diariamente e têm suas ações negociadas na bolsa de Nova York.
                          </p>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Enquanto a instabilidade que reina no Brasil nos força a investir em renda fixa, como forma de proteção às mudanças impostas por governos e, mais recentemente, pelo judiciário, nos Estados Unidos o investidor médio tem condições ideais para o investimento nas empresas de capital aberto. O país conta com mais de 5000 empresas listadas em bolsa - em quantidade, isso é mais de 10 vezes o nosso mercado. Em volume de investimento, no entanto, a diferença é ainda maior: enquanto a B3 tem uma média de US$ 4 Bi diários, somadas, NYSE E NASDAQ chegam a cerca de US$ 60 Bi diários. E nem incluímos aqui a Bolsa de Chicago (CME Group), especializada em commodities. Um mercado com tamanho vigor oferece inúmeras oportunidades, com muito mais segurança do que o ambiente que encontramos no Brasil.
                              Mas as oportunidades não se restringem a renda variável, da qual o investimento em ações / bolsa é a modalidade mais conhecida. Sim, as grandes oportunidades de ganho de capital em geral encontram-se no mercado de ações, especialmente na valorização de empresas. Um mercado menos regulado, mais aberto, regido por meritocracia e competência, oferece um maior potencial de ganhos. Nos últimos 15 anos o S&P500, principal índice de investimentos do mundo, que concentra os resultados das 500 maiores empresas americanas, tem crescido em média 10% ao ano - na moeda mais utilizada no mundo.
                              Ou seja, quem investe em um ETF atrelado a esse índice, ganhou, em dólar, 10% ao ano, mais a valorização da moeda frente ao Real.
                              Ainda que esses dados sejam animadores, sabemos que investidores mais conservadores sentem-se desconfortáveis com a renda variável, por diversos motivos. Mas assim como no Brasil, os EUA contam com opções como fundos de investimento, ETFs, FIIs e títulos de renda fixa. Em muito maior volume e diversificação do que encontramos no nosso mercado. Por exemplo, podemos investir em um ETF de tecnologia, de semicondutores, de ouro, ou de diversos outros setores que no Brasil são inexistentes ou irrelevantes - com a vantagem de contar com a análise e gestão de profissionais altamente capacitados, que conhecem a fundo o mercado e as empresas investidas. Na renda fixa encontramos desde os títulos mais seguros do mundo, emitidos pelo governo americano, até os de empresas privadas como a Amazon.
                              Mas afinal, devemos investir nos Estados Unidos como oportunidade ou estratégia? Bem, em um mercado com as condições descritas, com tamanha potência, ambas as modalidades são válidas e devem ser mantidas. Investir nos Estados Unidos é e sempre será estratégico, do ponto de vista de que se trata de uma diversificação necessária em nossa carteira, para proteger nosso patrimônio e participar de mercados que não temos representados por aqui; ao mesmo tempo trata-se de uma oportunidade de potencializar ganhos em momentos específicos, sejam de curto prazo e focados em um segmento ou companhia específico, seja por um momento de mercado.
                              Não podemos finalizar sem dizer, no entanto, que uma orientação profissional qualificada é essencial na decisão de investimentos, pois mesmo os investimentos mais conservadores e seguros poderão oferecer riscos se determinados fatores não forem considerados.
                          </p>
      </section>
    ),
  },


          {
    slug: 'a-crise-de-2008-um-divisor-de-aguas',
    title: 'A crise de 2008: um divisor de água',
    content: (
      <section className="w-[90%] max-w-[1261px] mx-auto mt-52 text-white">
        <Breadcrumbs
          dir={[
            { title: 'Blog', url: '/blog' },
            {
              title: 'A crise de 2008: um divisor de água',
              url: '/blog/a-crise-de-2008-um-divisor-de-aguas',
              end: true,
            },
          ]}
        />
                          <h1 className='text-[48px] font-[700] text-white leading-[70px]'>
                              A crise de 2008: um divisor de água
                          </h1>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[64px]'>
                              Nos acostumamos a ter a Europa no centro de nossas atenções, por diversos motivos: berço da civilização do Ocidente, da industrialização, continente com o maior número de países, culturas, idiomas, de onde uma expressiva parcela da população brasileira tem origens.
                              Um grupo de nações que ao longo de centenas de anos desenvolveu sistemas de governo, fortaleceu seus sistemas e viu suas sociedades evoluírem de uma forma mais igualitária, sem os grandes desequilíbrios sociais que temos em países do terceiro mundo e emergentes como o Brasil.
                              <br />
                              <br />
                              Há três décadas, o bloco das economias mais desenvolvidas da Europa decidiu unificar-se com a criação do Euro, que foi adotado como moeda comum na maioria do bloco. A força econômica desse grupo, associada a outros fatores como sua capacidade industrial, seu foco em itens de alto valor agregado, o nível educacional e a qualificação média de sua população e o potencial de consumo do bloco mantiveram o Euro em um nível sempre muito próximo ao Dólar, algo semelhante entre as nações que optaram por não adotar o Euro, como o Reino Unido e a Suíça.
                              Em 2008, a crise do “sub-prime”, causada pelo excesso de exposição de instituições financeiras no financiamento imobiliário de baixa qualificação/alto risco, gerou uma queda vertiginosa de crédito em todo o mundo, com um período inicial recessivo, seguido de uma lenta recuperação dos mercados em todo o mundo. Os Estados Unidos, onde se originou essa trágica situação, que incluiu quebra de bancos e de empresas, foi o país mais atingido. Com forte bloco econômico, uma rígida regulação imposta a seus integrantes e uma dependência relativamente baixa dos Estados Unidos, a Europa viria a sofrer muito menos e viria a ter uma recuperação mais rápida. Até então, tudo dentro do esperado.
                              Mas o que se viu em um segundo momento foi um crescimento vigoroso da economia americana, que teve sua renda per capita praticamente dobrada desde então, com uma taxa de crescimento descolada da que se observou na Europa. No mesmo período, na chamada Zona do Euro a renda per capita se manteve em um nível muito próximo ao anterior.
                              <br />
                              <br />
                              Sob outro ângulo, o Reino Unido, que deixou a Comunidade Econômica Européia em busca de maior flexibilidade em negociações e maior crescimento econômico, hoje tem sua renda média inferior ao estado do Mississippi, a menor economia entre os estados americanos.
                              Em um terceiro ponto de vista: há cerca de 20 anos, quatro das dez maiores empresas do mundo era americanas, quatro européias e duas japonesas. Atualmente, nove das dez maiores são dos Estados Unidos e uma da Arábia Saudita. Apple, Microsoft e Nvidia, separadamente, hoje valem mais do que o total das empresas com ações comercializadas na Bolsa de Frankfurt (FSE), uma das maiores e mais importantes do mundo.
                              Assim como ocorreu em todo o mundo, a crise gerada pela pandemia afetou economicamente os Estados Unidos, que sofreram especialmente com a alta da inflação pelos estímulos lançados a diversos setores e também aos trabalhadores, buscando compensar os efeitos negativos de ações como o lockdown. Mesmo convivendo até hoje com juros em um patamar elevado e incomum para o país, a economia seguiu crescendo e mantém-se vigorosa. Com a definição das eleições e a composição da nova equipe de governo, o cenário indica a possibilidade de uma nova era de forte crescimento dos Estados Unidos, com desregulamentação e queda de impostos.
                              <br />
                              <br />
                              Ainda tratando de ambiente interno: em termos populacionais, o país será o único do ocidente que manterá sua população em crescimento nos próximos 25 anos. Enquanto Brasil, Argentina, toda a Zona do Euro vêm suas populações economicamente ativas em declínio, impondo mais peso ao estado e limitando sua capacidade de investimento e geração de renda, os Estados Unidos seguem com taxas de natalidade x mortalidade positivas e fluxos migratórios importantes que os mantêm em forte crescimento.
                              A história recente nos mostra fatos que corroboram a força da economia americana e confirmam que as condições de mercado necessárias para que ela siga vigorosa continuam presentes. Um mercado com pouca regulamentação, uma cultura baseada em performance e meritocracia e um cenário positivo sendo desenhado.
                              Todo esse conjunto reforça a tese de investimentos nos Estados Unidos como destino preferencial de investimentos estrangeiros para acúmulo de capital e proteção patrimonial.
                          </p>
                          <img className='mt-[48px]' src='/temp/9.jpeg' alt='money' />
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Sabidamente a maior e mais ativa economia do mundo, os Estados Unidos contam com cerca de 6000 empresas listadas nas bolsas NYSE (New York Stock Exchange) e NASDAQ (National Association of Securities Dealers Automated Quotations). Ambas localizadas em Nova York, sendo a primeira a que reúne as empresas dos setores mais tradicionais, como o de alimentos e bebidas, varejo, aviação e financeiro, e a segunda a que concentra empresas do segmento de tecnologia e inovação, como Google/Alphabet, Nvidia e Microsoft.
                              Apenas o grupo formado pelas maiores empresas de tecnologia do mundo, chamado de “sete magníficas”, com Alphabet, Nvidia, Microsoft, Amazon, Tesla, Meta e Apple soma um valor de mercado em 2024 mais de 3 vezes maior do que o PIB brasileiro. Sim, um punhado de empresas, entre as mais influentes do mundo, das quais praticamente todos nós somos usuários de algum de seus serviços, valem mais do que tudo o que o Brasil produz.
                              E esses são apenas alguns exemplos da força representada pelo mercado americano, uma vez que outras gigantes como Coca-Cola, Pepsico, FedEx, General Motors, Johnson&Johnson e Oracle também tiveram origem nos Estados Unidos, impactam nossas vidas diariamente e têm suas ações negociadas na bolsa de Nova York.
                          </p>
                          <p className='text-[20px] text-white leading-[36.04px] mt-[48px]'>
                              Enquanto a instabilidade que reina no Brasil nos força a investir em renda fixa, como forma de proteção às mudanças impostas por governos e, mais recentemente, pelo judiciário, nos Estados Unidos o investidor médio tem condições ideais para o investimento nas empresas de capital aberto. O país conta com mais de 5000 empresas listadas em bolsa - em quantidade, isso é mais de 10 vezes o nosso mercado. Em volume de investimento, no entanto, a diferença é ainda maior: enquanto a B3 tem uma média de US$ 4 Bi diários, somadas, NYSE E NASDAQ chegam a cerca de US$ 60 Bi diários. E nem incluímos aqui a Bolsa de Chicago (CME Group), especializada em commodities. Um mercado com tamanho vigor oferece inúmeras oportunidades, com muito mais segurança do que o ambiente que encontramos no Brasil.
                              <br />
                              <br />
                              Mas as oportunidades não se restringem a renda variável, da qual o investimento em ações / bolsa é a modalidade mais conhecida. Sim, as grandes oportunidades de ganho de capital em geral encontram-se no mercado de ações, especialmente na valorização de empresas. Um mercado menos regulado, mais aberto, regido por meritocracia e competência, oferece um maior potencial de ganhos. Nos últimos 15 anos o S&P500, principal índice de investimentos do mundo, que concentra os resultados das 500 maiores empresas americanas, tem crescido em média 10% ao ano - na moeda mais utilizada no mundo.
                              <br />
                              <br />
                              Ou seja, quem investe em um ETF atrelado a esse índice, ganhou, em dólar, 10% ao ano, mais a valorização da moeda frente ao Real.
                              <br />
                              <br />
                              Ainda que esses dados sejam animadores, sabemos que investidores mais conservadores sentem-se desconfortáveis com a renda variável, por diversos motivos. Mas assim como no Brasil, os EUA contam com opções como fundos de investimento, ETFs, FIIs e títulos de renda fixa. Em muito maior volume e diversificação do que encontramos no nosso mercado. Por exemplo, podemos investir em um ETF de tecnologia, de semicondutores, de ouro, ou de diversos outros setores que no Brasil são inexistentes ou irrelevantes - com a vantagem de contar com a análise e gestão de profissionais altamente capacitados, que conhecem a fundo o mercado e as empresas investidas. Na renda fixa encontramos desde os títulos mais seguros do mundo, emitidos pelo governo americano, até os de empresas privadas como a Amazon.
                              <br />
                              <br />
                              Mas afinal, devemos investir nos Estados Unidos como oportunidade ou estratégia? Bem, em um mercado com as condições descritas, com tamanha potência, ambas as modalidades são válidas e devem ser mantidas. Investir nos Estados Unidos é e sempre será estratégico, do ponto de vista de que se trata de uma diversificação necessária em nossa carteira, para proteger nosso patrimônio e participar de mercados que não temos representados por aqui; ao mesmo tempo trata-se de uma oportunidade de potencializar ganhos em momentos específicos, sejam de curto prazo e focados em um segmento ou companhia específico, seja por um momento de mercado.
                              <br />
                              <br />
                              Não podemos finalizar sem dizer, no entanto, que uma orientação profissional qualificada é essencial na decisão de investimentos, pois mesmo os investimentos mais conservadores e seguros poderão oferecer riscos se determinados fatores não forem considerados.
                          </p>
      </section>
    ),
  },

]
