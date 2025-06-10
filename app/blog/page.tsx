'use client'

//import Blocs from "./components/blocs";

export default function Blog() {
  return (
    <div className="bg-[#0C1D2C] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Seção de Artigos em Destaque */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Artigos em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/10.jpeg"
                alt="Investimentos nos Estados Unidos"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="/blog/artigos/investimentos-nos-estados-unidos-oportunidade-ou-estrategia" className="text-white hover:text-[#FF0C34] transition">
                    Investimentos nos Estados Unidos: oportunidade ou estratégia?
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Sabidamente a maior e mais ativa economia do mundo, os Estados Unidos...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Economia</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/2.jpeg"
                alt="Enfim, os americanos escolheram Trump. E agora?"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="/blog/artigos/enfim-os-americanos-escolheram-trump-e-agora" className="text-white hover:text-[#FF0C34] transition">
                    Enfim, os americanos escolheram Trump. E agora?
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Um presidente senil, uma vice-presidente polêmica, um magnata contestado...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Política</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/3.jpeg"
                alt="Paraísos fiscais: legalidade e proteção patrimonial"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="/blog/artigos/paraisos-fiscais-legitimos-ou-nao" className="text-white hover:text-[#FF0C34] transition">
                    Paraísos fiscais: legalidade e proteção patrimonial
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Os chamados paraísos fiscais são países ou jurisdições em que há redução ou mesmo...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Fiscal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Todos os Artigos */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Todos os posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/4.jpeg"
                alt="Como montar uma carteira de investimentos no exterior"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/como-montar-uma-carteira-de-investimentos-no-exterior" className="text-white hover:text-[#FF0C34] transition">
                    Como montar uma carteira de investimentos no exterior
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Instabilidade geopolítica, mudanças sociais, migrações em massa, guerras localizadas...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Investimentos</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/5.jpeg"
                alt="Meu capital está mesmo seguro fora do país?"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/meu-capital-esta-mesmo-seguro-fora-do-pais" className="text-white hover:text-[#FF0C34] transition">
                    Meu capital está mesmo seguro fora do país?
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Essa é uma questão que muitos investidores fazem, pois é naturalmente...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Riscos</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/9.jpeg"
                alt="Saída fiscal e teoria das bandeiras"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/deixar-o-pais-teoria-das-bandeiras-de-harry-schultz-e-saida-fiscal-no-brasil" className="text-white hover:text-[#FF0C34] transition">
                    Saída fiscal e teoria das bandeiras
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  A saída fiscal é um processo necessário a todos os cidadãos que decidem...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Planejamento</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/11.jpeg"
                alt="Porque expatriar meu capital com o Dólar em alta?"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/porque-expatriar-meu-capital-com-o-dolar-em-alta" className="text-white hover:text-[#FF0C34] transition">
                    Porque expatriar meu capital com o Dólar em alta?
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Warren Buffett, provavelmente o maior investidor de todos os tempos, mantém-se...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Estratégia</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/7.jpeg"
                alt="Europa, China, Japão e Emergentes"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/europa-china-japao-e-emergentes-oportunidades-potenciais-e-riscos" className="text-white hover:text-[#FF0C34] transition">
                    Europa, China, Japão e Emergentes
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Essa é uma questão que muitos investidores fazem, pois é naturalmente sentir-se mais...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Mercado</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/8.jpeg"
                alt="Joint Tenancy: o que é e como usar?"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/joint-tenancy-o-que-e-e-como-usar" className="text-white hover:text-[#FF0C34] transition">
                    Joint Tenancy: o que é e como usar?
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Joint tenancy é um instrumento legal que pode ser compreendido como uma...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Direito</span>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card-capa/1.jpeg"
                alt="A crise de 2008: um divisor de águas"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/a-crise-de-2008-um-divisor-de-aguas" className="text-white hover:text-[#FF0C34] transition">
                    A crise de 2008: um divisor de águas
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Mais do que a maior e mais vibrante economia do mundo, os Estados Unidos...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">História</span>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="/blog/card/4.png"
                alt="Estados Unidos: terra fértil para investimentos"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                  <a href="/blog/artigos/estados-unidos-terra-fertil-para-investimentos" className="text-white hover:text-[#FF0C34] transition">
                    Estados Unidos: terra fértil para investimentos
                  </a>
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  Mais do que a maior e mais vibrante economia do mundo, os Estados Unidos...
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <span className="mr-2">Categoria:</span>
                  <span className="text-[#FF0C34]">Oportunidades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}