export function SectionTwo() {
  const accordionData = [
    {
      title: 'Facilidade',
      description: 'Abra sua conta em minutos, com processo 100% digital e sem burocracia.'
    },
    {
      title: 'Economia',
      description: 'Economize com IOF reduzido e câmbio mais vantajoso do que em casas de câmbio tradicionais.'
    },
    {
      title: 'Segurança',
      description: 'Sua conta é protegida por instituições regulamentadas e com autenticação em dois fatores.'
    },
    {
      title: 'Aceito globalmente',
      description: 'Utilize seu saldo em mais de 180 países com cartão de débito internacional.'
    },
    {
      title: 'Atendimento em português',
      description: 'Conte com suporte humanizado 24/7 em português, inclusive em feriados.'
    },
    {
      title: 'Controle total pelo app',
      description: 'Acompanhe suas movimentações em tempo real, diretamente do aplicativo.'
    },
  ];

  return (
    <section className="bg-[#F5F9FF] py-20 px-6 lg:px-20">
        <div data-aos="fade-right" className="max-w-7xl mx-auto gap-20 items-center">
<h2 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F4B] to-[#7A001A] leading-tight mb-10">
            Por que milhares de brasileiros protegem seu patrimônio no exterior?
          </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-all border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF0C34] text-white font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-semibold text-[#0A1F44]">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
