'use client';

export function SectionFive() {
  return (
    
<section className="bg-cover bg-bottom lg:bg-center h-[480px]"
    style={{
        backgroundImage: "url('/bg-section-3.png')",
      }}>
      <div className="bg-black/80 h-full flex items-center justify-center">
        <div className="max-w-7xl w-full h-full flex flex-col items-center justify-center gap-7 p-10 lg:p-0 text-center">
          <h2 className="text-[#FF0C34] font-bold text-3xl lg:text-5xl text-center">
            Como investir?
          </h2>
          <div className="text-[#E6E6E6] lg:text-2xl font-bold text-center space-y-5">
            <p>
              Há várias formas de internacionalizar capital, acessíveis a
              investidores dos mais diversos perfis, <br /> com um nível de segurança
              igual ou superior ao que temos no Brasil.
            </p>
          </div>
        </div>
      </div> 
    </section>
  );
}
