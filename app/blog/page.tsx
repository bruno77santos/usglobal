import Blocs from "./components/blocs";


export default function Blog() {
  return (
    <div className="min-h-screen h-full overflow-hidden mt-28">
      <div className="flex flex-col gap-28 mx-auto mt-[87px] mb-[108px]">
        <Blocs
          title="Artigos em destaque"
          cards={[
            {
              urlImage: "/blog/card-capa/10.jpeg",
              title: "Investimentos nos Estados Unidos: oportunidade...",
              description:
                "Sabidamente a maior e mais ativa economia do mundo, os Estados Unidos...",
              articleDetailsLink: "/blog/artigos/investimentos-nos-estados-unidos-oportunidade-ou-estrategia",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/2.jpeg",
              title: "Enfim, os americanos escolheram Trump. E agora?",
              description:
                "Um presidente senil, uma vice-presidente polêmica, um magnata contestado...",
              articleDetailsLink: "/blog/artigos/enfim-os-americanos-escolheram-trump-e-agora",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/3.jpeg",
              title: "Paraísos fiscais: legalidade e proteção patrimonial",
              description:
                "Os chamados paraísos fiscais são países ou jurisdições em que há redução ou mesmo...",
              articleDetailsLink: "/blog/artigos/paraisos-fiscais-legitimos-ou-nao",
              Category: "Categoria",
            },

          ]}
        />
        <Blocs
          title="Demais artigos"
          cards={[
            {
              urlImage: "/blog/card-capa/4.jpeg",
              title: "Como montar uma carteira de investimentos no exterior",
              description:
                "Instabilidade geopolítica, mudanças sociais, migrações em massa, guerras localizadas...",
              articleDetailsLink: "/blog/artigos/como-montar-uma-carteira-de-investimentos-no-exterior",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/5.jpeg",
              title: "Meu capital está mesmo seguro fora do país?",
              description:
                "Essa é uma questão que muitos investidores fazem, pois é naturalmente...",
              articleDetailsLink: "/blog/artigos/meu-capital-esta-mesmo-seguro-fora-do-pais",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/9.jpeg",
              title: "Saída fiscal e teoria das bandeiras",
              description:
                "A saída fiscal é um processo necessário a todos os cidadãos que decidem...",
              articleDetailsLink: "/blog/artigos/deixar-o-pais-teoria-das-bandeiras-de-harry-schultz-e-saida-fiscal-no-brasil",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/11.jpeg",
              title: "Porque expatriar meu capital com o Dólar em alta?",
              description:
                "Warren Buffett, provavelmente o maior investidor de todos os tempos, mantém-se...",
              articleDetailsLink: "/blog/artigos/porque-expatriar-meu-capital-com-o-dolar-em-alta",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/7.jpeg",
              title: "Europa, China, Japão e Emergentes",
              description:
                "Essa é uma questão que muitos investidores fazem, pois é naturalmente sentir-se mais...",
              articleDetailsLink: "/blog/artigos/europa-china-japao-e-emergentes-oportunidades-potenciais-e-riscos",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/8.jpeg",
              title: "Joint Tenancy: o que é e como usar?",
              description:
                "Joint tenancy é um instrumento legal que pode ser compreendido como uma...",
              articleDetailsLink: "/blog/artigos/joint-tenancy-o-que-e-e-como-usar",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card-capa/1.jpeg",
              title: "A crise de 2008: um divisor de águas",
              description:
                "Nos acostumamos a ter a Europa no centro de nossas atenções, por diversos motivos...",
              articleDetailsLink: "/blog/artigos/a-crise-de-2008-um-divisor-de-aguas",
              Category: "Categoria",
            },
            {
              urlImage: "/blog/card/4.png",
              title: "Estados Unidos: terra fértil para investimentos",
              description:
                "Mais do que a maior e mais vibrante economia do mundo, os Estados Unidos...",
              articleDetailsLink: "/blog/artigos/estados-unidos-terra-fertil-para-investimentos",
              Category: "Categoria",
            },
          ]}
        />
      </div>
    </div>
  );
}
