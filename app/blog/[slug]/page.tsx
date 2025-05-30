import { notFound } from 'next/navigation'
import { BlogDetail } from '../d/page'

// Slugs válidos
const SLUG_TO_TITULO: Record<string, string> = {
  'investimentos-nos-estados-unidos-oportunidade-ou-estratégia': 'Investimentos nos Estados Unidos: oportunidade ou estratégia?',
  'enfim-os-americanos-escolheram-trump-e-agora': 'Enfim, os americanos escolheram Trump. E agora?',
  'paraisos-fiscais-legitimos-ou-nao': 'Paraísos fiscais: legalidade e proteção patrimonial',
  'como-montar-uma-carteira-de-investimentos-no-exterior': 'Como montar uma carteira de investimentos no exterior',
  'meu-capital-esta-mesmo-seguro-fora-do-pais': 'Meu capital está mesmo seguro fora do país?',
  'deixar-o-pais-teoria-das-bandeiras-de-harry-schultz-e-saida-fiscal-no-brasil': 'Saída fiscal e teoria das bandeiras',
  'porque-expatriar-meu-capital-com-o-dolar-em-alta': 'Porque expatriar meu capital com o Dólar em alta?',
  'europa-china-japao-e-emergentes-oportunidades-potenciais-e-riscos': 'Europa, China, Japão e Emergentes',
  'joint-tenancy-o-que-e-e-como-usar': 'Joint Tenancy: o que é e como usar?',
  'a-crise-de-2008-um-divisor-de-aguas': 'A crise de 2008: um divisor de águas',
  'estados-unidos-terra-fertil-para-investimentos': 'Estados Unidos: terra fértil para investimentos',
}

// Geração estática de rotas (SSG)
export async function generateStaticParams() {
  return Object.keys(SLUG_TO_TITULO).map((slug) => ({ slug }))
}

// Página dinâmica
export default async function BlogArticle({
  params,
}: {
  params: { slug: string }
}) {
  const titulo = SLUG_TO_TITULO[params.slug]

  if (!titulo) return notFound()

  return <BlogDetail urlTest={titulo} />
}
