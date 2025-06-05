'use client';

import { useState } from 'react';
import InputRadio from '@/components/compartilhados/inputRadio';
import Hero from '@/components/paginas/tools/profile/hero';
import InputLabel from '@/components/compartilhados/inputLabel';

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  investeNaXP?: string;
  quantoTemInvestido?: string;
  investeNoExterior?: string;
  doYouInvest?: string;
  whyYourObjectiveFinance?: string;
  investmentHorizon?: string;
  reactionToLosses?: string;
  internationalInvestmentKnowledge?: string;
  investmentsOutsideBrazil?: string;
  percentageInvestmentOutsideBrazil?: string;
  concernInvestingOutsideBrazil?: string;
  importantInvestmentStrategy?: string;
  investmentInterestSectors?: string;
  planToLeaveCountry?: string;
  investmentAmount?: string;
  [key: string]: string | undefined;
}

export default function ProfileInvestor() {
  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Email: '',
    Phone: '',
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (name: keyof FormData | string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idList: '678ec4a34374ed91899a4752',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `+ Investidor Global ${formData?.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      });

      if (response.ok) {
        window.open('/Guia_Rápido_InvestGlobal.pdf', '_blank');
        setTimeout(() => {
          window.location.href = '/obrigado';
        }, 2000);
      } else {
        console.error('Erro ao enviar formulário:', response.statusText);
        alert('Erro ao enviar formulário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar formulário.');
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99] overflow-auto">
          <div className="bg-slate-700 text-white p-8 rounded-md w-[600px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-[24px] font-bold mb-4">Preencha alguns dados</h2>
            <div className="flex items-center gap-2">
              <InputLabel
                type="name"
                labelTitle="Seu nome"
                placeholder="Digite o seu nome"
                onChange={(e) => handleChange('Nome', e.target.value)}
              />
              <InputLabel
                type="email"
                labelTitle="E-mail"
                placeholder="Digite seu e-mail"
                onChange={(e) => handleChange('Email', e.target.value)}
              />
            </div>
            <br />
            <InputLabel
              type="phone"
              labelTitle="Telefone"
              placeholder="DD 9 0000-0000"
              onChange={(e) => handleChange('Phone', e.target.value)}
            />

            <h2 className="text-[24px] font-bold mb-4 mt-6">Investe na XP?</h2>
            {['Sim', 'Não'].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  name="investeNaXP"
                  type="radio"
                  onChange={() => handleChange('investeNaXP', val)}
                />
                <p>{val}</p>
              </label>
            ))}

            <h2 className="text-[24px] font-bold mb-4 mt-6">Quanto tem investido?</h2>
            {[
              'Não tenho investimentos',
              'Abaixo de 100k',
              'Entre 100k e 300k',
              'Entre 300k a 1milhão',
              'Acima de 1milhão',
            ].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  name="quantoTemInvestido"
                  type="radio"
                  onChange={() => handleChange('quantoTemInvestido', val)}
                />
                <p>{val}</p>
              </label>
            ))}

            <h2 className="text-[24px] font-bold mb-4 mt-6">Investe no exterior?</h2>
            {['Sim', 'Não'].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  name="investeNoExterior"
                  type="radio"
                  onChange={() => handleChange('investeNoExterior', val)}
                />
                <p>{val}</p>
              </label>
            ))}

            <label className="flex gap-2 mt-5 text-sm">
              <input type="checkbox" />
              Estou de acordo com o envio de comunicações, termos e condições e política da Invest Global Us
            </label>

            <label className="flex gap-2 mt-5 text-sm">
              <input type="checkbox" />
              Estou de acordo com a política de privacidade da Invest Global Us
            </label>

            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-gray-400 text-white rounded-md" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={() => {
                  handleSubmit();
                  setShowModal(false);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Hero title="Perfil do investidor global" />

      {/* Demais seções seguem aqui... já estavam tipadas via handleChange(key, string) ✅ */}
       <section className=" w-[90%] max-w-[1280px] text-white mt-[91px] mx-auto mb-[102px]">

        {/* Pergunta sobre investimentos, com opções de radio button */}
        <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-5">
          {/* Seção sobre o conhecimento ou experiência com investimentos */}
          <div className="w-full lg:max-w-[770.5px]">
            <h2 className="font-[600] text-[24px]">Você já investe, investiu ou conhece ações, FIIs, fundos, ou renda
              fixa?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Conheço pouco, estou indeciso para investir" name="doYouInvest?"
                          onChange={() => handleChange('doYouInvest?', 'Conheço pouco, estou indeciso para investir')} />
              <InputRadio inputDesc="Sim, conheço a maioria e preciso investir" name="doYouInvest?"
                          onChange={() => handleChange('doYouInvest?', 'Sim, conheço a maioria e preciso investir')} />
              <InputRadio inputDesc="Sim, conheço e já sou investidor (mesmo que seja apenas no Brasil)"
                          name="doYouInvest?"
                          onChange={() => handleChange('doYouInvest?', 'Sim, conheço e já sou investidor (mesmo que seja apenas no Brasil)')} />
            </div>
          </div>

          {/* Seção sobre o principal objetivo financeiro */}
          <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
            <h2 className="font-[600] text-[24px]">Qual seu principal objetivo financeiro?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Renda passiva" name="whyYourObjectiveFinance?"
                          onChange={() => handleChange('whyYourObjectiveFinance?', 'Renda passiva')} />
              <InputRadio inputDesc="Formação de patrimônio" name="whyYourObjectiveFinance?"
                          onChange={() => handleChange('whyYourObjectiveFinance?', 'Formação de patrimônio')} />
              <InputRadio inputDesc="Proteção e evolução de patrimônio" name="whyYourObjectiveFinance?"
                          onChange={() => handleChange('whyYourObjectiveFinance?', 'Proteção e evolução de patrimônio')} />
            </div>
          </div>
        </div>

        {/* Seção sobre o horizonte de investimento e reação diante de perdas */}
        <div className="w-full flex flex-col lg:flex-row justify-between mt-[64px] lg:gap-5">
          {/* Seção sobre o horizonte de investimento */}
          <div className="w-full lg:max-w-[770.5px]">
            <h2 className="font-[600] text-[24px]">Qual seu horizonte de investimento?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Curto prazo: até 2 anos" name="investmentHorizon?"
                          onChange={() => handleChange('investmentHorizon?', 'Curto prazo: até 2 anos')} />
              <InputRadio inputDesc="Médio prazo: de 2 a 5 anos" name="investmentHorizon?"
                          onChange={() => handleChange('investmentHorizon?', 'Médio prazo: de 2 a 5 anos')} />
              <InputRadio inputDesc="Longo prazo: acima de 5 anos" name="investmentHorizon?"
                          onChange={() => handleChange('investmentHorizon?', 'Longo prazo: acima de 5 anos')} />
            </div>
          </div>

          {/* Seção sobre como o investidor reage diante de perdas financeiras */}
          <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
            <h2 className="font-[600] text-[24px]">Como você reage diante de perdas financeiras?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Entre medo e pânico, sensação de “não sirvo pra isso”" name="reactionToLosses?"
                          onChange={() => handleChange('reactionToLosses?', 'Entre medo e pânico, sensação de “não sirvo pra isso”')} />
              <InputRadio inputDesc="Preocupação controlada, esperança de seja só temporário" name="reactionToLosses?"
                          onChange={() => handleChange('reactionToLosses?', 'Preocupação controlada, esperança de seja só temporário')} />
              <InputRadio inputDesc="Indiferente, sabe que perdas fazem parte e pode esperar a recuperação"
                          name="reactionToLosses?"
                          onChange={() => handleChange('reactionToLosses?', 'Indiferente, sabe que perdas fazem parte e pode esperar a recuperação')} />
            </div>
          </div>
        </div>

        {/* Seção sobre o conhecimento de investimentos internacionais e se já tem investimentos fora */}
        <div className="w-full flex flex-col lg:flex-row justify-between mt-[64px] lg:gap-5">
          {/* Seção sobre conhecimento de investimentos internacionais */}
          <div className="w-full lg:max-w-[770.5px]">
            <h2 className="font-[600] text-[24px]">Qual seu nível de conhecimento sobre investimentos
              internacionais?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio
                inputDesc="Ainda não investe ou está começando a investir, estudando e reunindo informações sobre investimentos"
                name="internationalInvestmentKnowledge?"
                onChange={() => handleChange('internationalInvestmentKnowledge?', 'Ainda não investe ou está começando a investir, estudando e reunindo informações sobre investimentos')} />
              <InputRadio
                inputDesc="Entende alguns termos e conceitos, já investe ha algum tempo no Brasil, mas ainda tem algumas dúvidas"
                name="internationalInvestmentKnowledge?"
                onChange={() => handleChange('internationalInvestmentKnowledge?', 'Entende alguns termos e conceitos, já investe ha algum tempo no Brasil, mas ainda tem algumas dúvidas')} />
              <InputRadio
                inputDesc="Investe há um bom tempo, inclusive no exterior em várias classes de ativos; está familiarizado com a maior parte dos termos, conceitos e estratégias"
                name="internationalInvestmentKnowledge?"
                onChange={() => handleChange('internationalInvestmentKnowledge?', 'Investe há um bom tempo, inclusive no exterior em várias classes de ativos; está familiarizado com a maior parte dos termos, conceitos e estratégias')} />
            </div>
          </div>

          {/* Seção sobre se já tem investimentos fora do Brasil */}
          <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
            <h2 className="font-[600] text-[24px]">Você já tem investimentos fora do país?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Não, estou começando a me informar" name="investmentsOutsideBrazil?"
                          onChange={() => handleChange('investmentsOutsideBrazil?', 'Não, estou começando a me informar')} />
              <InputRadio inputDesc="Não, e tenho a sensação de que estou “atrasado”" name="investmentsOutsideBrazil?"
                          onChange={() => handleChange('investmentsOutsideBrazil?', 'Não, e tenho a sensação de que estou “atrasado”')} />
              <InputRadio inputDesc="Sim, e pretendo aumentar o envio de remessas para lá"
                          name="investmentsOutsideBrazil?"
                          onChange={() => handleChange('investmentsOutsideBrazil?', 'Sim, e pretendo aumentar o envio de remessas para lá')} />
            </div>
          </div>
        </div>

        {/* Seção sobre o percentual do patrimônio fora do Brasil e as preocupações sobre investir fora */}
        <div className="w-full flex flex-col lg:flex-row justify-between mt-[64px] lg:gap-5">
          {/* Seção sobre o percentual do patrimônio fora do Brasil */}
          <div className="w-full lg:max-w-[770.5px]">
            <h2 className="font-[600] text-[24px]">Quanto do seu patrimônio você gostaria de ter fora do Brasil?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Pouco, no máximo 10%" name="percentageInvestmentOutsideBrazil?"
                          onChange={() => handleChange('percentageInvestmentOutsideBrazil?', 'Pouco, no máximo 10%')} />
              <InputRadio inputDesc="Algo entre 10% e 20%" name="percentageInvestmentOutsideBrazil?"
                          onChange={() => handleChange('percentageInvestmentOutsideBrazil?', 'Algo entre 10% e 20%')} />
              <InputRadio inputDesc="Pelo menos 35%" name="percentageInvestmentOutsideBrazil?"
                          onChange={() => handleChange('percentageInvestmentOutsideBrazil?', 'Pelo menos 35%')} />
            </div>
          </div>

          {/* Seção sobre preocupações ao investir fora do Brasil */}
          <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
            <h2 className="font-[600] text-[24px]">Qual sua maior preocupação em investir fora do Brasil?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Uma desvalorização do dólar" name="concernInvestingOutsideBrazil?"
                          onChange={() => handleChange('concernInvestingOutsideBrazil?', 'Uma desvalorização do dólar')} />
              <InputRadio inputDesc="As transferências internacionais, complexidade e segurança"
                          name="concernInvestingOutsideBrazil?"
                          onChange={() => handleChange('concernInvestingOutsideBrazil?', 'As transferências internacionais, complexidade e segurança')} />
              <InputRadio inputDesc="Não conhecer as garantias de que meu patrimônio está seguro"
                          name="concernInvestingOutsideBrazil?"
                          onChange={() => handleChange('concernInvestingOutsideBrazil?', 'Não conhecer as garantias de que meu patrimônio está seguro')} />
            </div>
          </div>
        </div>

        {/* Seção sobre a importância da estratégia de investimento e interesse em setores */}
        <div className="w-full flex flex-col lg:flex-row justify-between mt-[64px] lg:gap-5">
          {/* Seção sobre o que é mais importante em uma estratégia de investimento */}
          <div className="w-full lg:max-w-[770.5px]">
            <h2 className="font-[600] text-[24px]">O que você considera mais importante em uma estratégia de
              investimento?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Cuidado e persistência" name="importantInvestmentStrategy?"
                          onChange={() => handleChange('importantInvestmentStrategy?', 'Cuidado e persistência')} />
              <InputRadio inputDesc="Estratégia clara e conhecimento" name="importantInvestmentStrategy?"
                          onChange={() => handleChange('importantInvestmentStrategy?', 'Estratégia clara e conhecimento')} />
              <InputRadio inputDesc="Informação e arrojo" name="importantInvestmentStrategy?"
                          onChange={() => handleChange('importantInvestmentStrategy?', 'Informação e arrojo')} />
            </div>
          </div>

          {/* Seção sobre interesse nos setores de investimento */}
          <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
            <h2 className="font-[600] text-[24px]">Em quais setores você tem mais interesse?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Mineração, materiais, agronegócio" name="investmentInterestSectors?"
                          onChange={() => handleChange('investmentInterestSectors?', 'Mineração, materiais, agronegócio')} />
              <InputRadio inputDesc="Financeiro, saúde, bens de consumo" name="investmentInterestSectors?"
                          onChange={() => handleChange('investmentInterestSectors?', 'Financeiro, saúde, bens de consumo')} />
              <InputRadio inputDesc="Tecnologia, defesa, aeroespacial" name="investmentInterestSectors?"
                          onChange={() => handleChange('investmentInterestSectors?', 'Tecnologia, defesa, aeroespacial')} />
            </div>
          </div>
        </div>

        {/* Seção sobre planos futuros de sair do país e capacidade de investimento */}
        <div className="w-full flex flex-col lg:flex-row justify-between mt-[64px] lg:gap-5">
          {/* Seção sobre planos de deixar o país */}
          <div className="w-full lg:max-w-[770.5px]">
            <h2 className="font-[600] text-[24px]">Você pretende deixar o país futuramente?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Não penso em sair do meu país" name="planToLeaveCountry?"
                          onChange={() => handleChange('planToLeaveCountry?', 'Não penso em sair do meu país')} />
              <InputRadio inputDesc="Se for preciso, mas tenho de pensar muito bem nisso" name="planToLeaveCountry?"
                          onChange={() => handleChange('planToLeaveCountry?', 'Se for preciso, mas tenho de pensar muito bem nisso')} />
              <InputRadio inputDesc="Sim, estou planejando minha saída" name="planToLeaveCountry?"
                          onChange={() => handleChange('planToLeaveCountry?', 'Sim, estou planejando minha saída')} />
            </div>
          </div>

          {/* Seção sobre quanto está disponível para investir */}
          <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
            <h2 className="font-[600] text-[24px]">Agora, para que possamos ser mais assertivos e falar também de uma
              carteira recomendada para seu perfil, pode nos informar quanto você tem disponível para investir?</h2>
            <div className="flex flex-col gap-2 mt-[24px]">
              <InputRadio inputDesc="Entre R$ 100.000 e R$ 300.000" name="investmentAmount?"
                          onChange={() => handleChange('investmentAmount?', 'Entre R$ 100.000 e R$ 300.000')} />
              <InputRadio inputDesc="Entre R$ 301.000 e R$ 500.000" name="investmentAmount?"
                          onChange={() => handleChange('investmentAmount?', 'Entre R$ 301.000 e R$ 500.000')} />
              <InputRadio inputDesc="Mais de R$ 500.000" name="investmentAmount?"
                          onChange={() => handleChange('investmentAmount?', 'Mais de R$ 500.000')} />
            </div>
          </div>
        </div>


        <button onClick={() => {
          setShowModal(true);
        }}
                className="mt-[80px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap ml-auto">
          Finalizar preenchimento
        </button>

      </section>
    </>
  );
}
