'use client'

import { useState } from "react";
import InputRadio from "@/components/compartilhados/inputRadio";
import InputLabel from "@/components/compartilhados/inputLabel";
import Hero from '@/components/paginas/tools/profile/hero';

export default function SaidaFiscal() {

    const [formData, setFormData] = useState({
        Nome: "",
        Email: "",
        Phone: "",
        isBrazilian: "",
        resideInBrazil: "",
        hasForeignIncome: "",
        annualIncomeRange: "",
        hasForeignProperties: "",
        isForeignShareholder: "",
        incomeSource: "",
        hasInternationalTransactions: "",
        fiscalExitGoal: "",
        fiscalExitNature: "",
    });
    const [showModal, setShowModal] = useState(false);  // Controle do modal

    // Atualiza o estado ao selecionar uma resposta
    const handleChange = (name: any, value: any) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        try {
            const response = await fetch("https://api.trello.com/1/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idList: "678ec49ba4158ccfe9671908",
                    key: "5b6e1d320af14c490be1bda72621e7fe",
                    token: "ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C",
                    name: `Saída Fiscal - Formulário ${formData?.Nome || ""}`,
                    desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
                }),
            });

            if (response.ok) {

              window.open('/Guia_Rápido_InvestGlobal.pdf', '_blank');

              setTimeout(() => {
                window.location.href = "/obrigado"
              }, 2000)
            } else {
                console.error("Erro ao enviar formulário:", response.statusText);
                alert("Erro ao enviar formulário.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao enviar formulário.");
        }
    };
    return (
        <>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99] overflow-auto">
                    <div className="bg-slate-700 text-white p-8 rounded-md w-[600px] max-h-[90vh] overflow-y-auto">
                        <h2 className="text-[24px] font-bold mb-4">Preencha alguns dados</h2>
                        <div className="flex items-center gap-2">
                            <InputLabel
                                type="name"
                                labelTitle="Seu nome"
                                placeholder={"Digite o seu nome"}
                                onChange={(e) => handleChange("Nome", e.target.value)}
                            />
                            <InputLabel
                                type="email"
                                labelTitle="E-mail"
                                placeholder="Digite seu e-mail"
                                onChange={(e) => handleChange("Email", e.target.value)}
                            />
                        </div>
                        <br />
                        <InputLabel
                            type="phone"
                            labelTitle="Telefone"
                            placeholder={"DD 9 0000-0000"}
                            onChange={(e) => handleChange("Phone", e.target.value)}
                        />

                        <h2 className="text-[24px] font-bold mb-4 mt-6">Investe na XP?</h2>
                        <label htmlFor="investeNaXP" className="flex items-center gap-2">
                            <input name="investeNaXP" type="radio" onChange={() => handleChange("investeNaXP", "Sim")} />
                            <p>Sim</p>
                        </label>
                        <label htmlFor="investeNaXP" className="flex items-center gap-2">
                            <input name="investeNaXP" type="radio" onChange={() => handleChange("investeNaXP", "Não")} />
                            <p>Não</p>
                        </label>

                        <h2 className="text-[24px] font-bold mb-4 mt-6">Quanto tem investido?</h2>
                        <label htmlFor="quantoTemInvestido" className="flex items-center gap-2">
                            <input name="quantoTemInvestido" type="radio" onChange={() => handleChange("quantoTemInvestido", "Não tenho investimentos")} />
                            <p>Não tenho investimentos</p>
                        </label>

                        <label htmlFor="quantoTemInvestido" className="flex items-center gap-2">
                            <input name="quantoTemInvestido" type="radio" onChange={() => handleChange("quantoTemInvestido", "Abaixo de 100k")} />
                            <p>Abaixo de 100k</p>
                        </label>

                        <label htmlFor="quantoTemInvestido" className="flex items-center gap-2">
                            <input name="quantoTemInvestido" type="radio" onChange={() => handleChange("quantoTemInvestido", "Entre 100k e 300k")} />
                            <p>Entre 100k e 300k</p>
                        </label>

                        <label htmlFor="quantoTemInvestido" className="flex items-center gap-2">
                            <input name="quantoTemInvestido" type="radio" onChange={() => handleChange("quantoTemInvestido", "Entre 300k a 1milhão")} />
                            <p>Entre 300k a 1milhão</p>
                        </label>
                        <label htmlFor="quantoTemInvestido" className="flex items-center gap-2">
                            <input name="quantoTemInvestido" type="radio" onChange={() => handleChange("quantoTemInvestido", "Acima de 1milhão")} />
                            <p>Acima de 1milhão</p>
                        </label>

                        <h2 className="text-[24px] font-bold mb-4 mt-6">Investe no exterior?</h2>

                        <label htmlFor="investeNoExterior" className="flex items-center gap-2">
                            <input name="investeNoExterior" type="radio" onChange={() => handleChange("investeNoExterior", "Sim")} />
                            <p>Sim</p>
                        </label>
                        <label htmlFor="investeNoExterior" className="flex items-center gap-2">
                            <input name="investeNoExterior" type="radio" onChange={() => handleChange("investeNoExterior", "Não")} />
                            <p>Não</p>
                        </label>

                        <label className="flex gap-2 mt-5 text-sm">
                            <input type="checkbox" />
                            Estou de acordo com o envio de comunicações, termos e condições e politica da Invest Global Us
                        </label>

                        <label className="flex gap-2 mt-5 text-sm">
                            <input type="checkbox" />
                            Estou de acordo com a politica de privacidade da Invest Global Us
                        </label>
                        <div className="flex justify-between mt-4">
                            <button className="px-4 py-2 bg-gray-400 text-white rounded-md" onClick={() => setShowModal(false)}>
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                onClick={() => {

                                    handleSubmit()
                                    setShowModal(false)

                                }}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Hero Section: Cabeçalho principal com o título "Saída fiscal" */}
            <Hero title="Saída fiscal" />

            <section className="w-[90%] max-w-[1280px] text-white mt-[91px] mx-auto mb-[102px]">

                {/* Pergunta sobre nacionalidade do usuário */}
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-5">
                    <div className="w-full lg:max-w-[770.5px]">
                        <h2 className="font-[600] text-[24px]">Você é brasileiro nato, ou naturalizado?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Sim" name="isBrazilian" onChange={() => handleChange('isBrazilian', 'Sim')} />
                            <InputRadio inputDesc="Não" name="isBrazilian" onChange={() => handleChange('isBrazilian', 'Não')} />
                        </div>
                    </div>

                    {/* Pergunta sobre residência no Brasil */}
                    <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
                        <h2 className="font-[600] text-[24px]">Reside no Brasil atualmente?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Sim" name="resideInBrazil" onChange={() => handleChange('resideInBrazil', 'Sim')} />
                            <InputRadio inputDesc="Não" name="resideInBrazil" onChange={() => handleChange('resideInBrazil', 'Não')} />
                        </div>
                    </div>
                </div>

                {/* Pergunta sobre ter renda de outros países */}
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-5 lg:mt-10">
                    <div className="w-full lg:max-w-[770.5px]">
                        <h2 className="font-[600] text-[24px]">Você possui renda oriunda de outros países?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Sim" name="hasForeignIncome" onChange={() => handleChange('hasForeignIncome', 'Sim')} />
                            <InputRadio inputDesc="Não" name="hasForeignIncome" onChange={() => handleChange('hasForeignIncome', 'Não')} />
                        </div>
                    </div>

                    {/* Pergunta sobre faixa de renda anual estimada */}
                    <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
                        <h2 className="font-[600] text-[24px]">Qual é a sua faixa de renda anual estimada? Considere valor liquido, familiar.</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Menos de R$ 100.000,00" name="annualIncomeRange" onChange={() => handleChange('annualIncomeRange', 'Menos de R$ 100.000,00')} />
                            <InputRadio inputDesc="De R$ 100.000,00 a R$ 200.000,00" name="annualIncomeRange" onChange={() => handleChange('annualIncomeRange', 'De R$ 100.000,00 a R$ 200.000,00')} />
                            <InputRadio inputDesc="Mais de R$ 200.000,00" name="annualIncomeRange" onChange={() => handleChange('annualIncomeRange', 'Mais de R$ 200.000,00')} />
                        </div>
                    </div>
                </div>

                {/* Pergunta sobre imóveis ou propriedades no exterior */}
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-5 lg:mt-10">
                    <div className="w-full lg:max-w-[770.5px]">
                        <h2 className="font-[600] text-[24px]">Você possui imóveis ou propriedades no exterior?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Sim" name="hasForeignProperties" onChange={() => handleChange('hasForeignProperties', 'Sim')} />
                            <InputRadio inputDesc="Não" name="hasForeignProperties" onChange={() => handleChange('hasForeignProperties', 'Não')} />
                        </div>
                    </div>

                    {/* Pergunta sobre ser acionista de empresas fora do país */}
                    <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
                        <h2 className="font-[600] text-[24px]">Você é acionista de empresas fora do seu país de residência?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Sim" name="isForeignShareholder" onChange={() => handleChange('isForeignShareholder', 'Sim')} />
                            <InputRadio inputDesc="Não" name="isForeignShareholder" onChange={() => handleChange('isForeignShareholder', 'Não')} />
                        </div>
                    </div>
                </div>

                {/* Pergunta sobre origem dos rendimentos */}
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-5 lg:mt-10">
                    <div className="w-full lg:max-w-[770.5px]">
                        <h2 className="font-[600] text-[24px]">Qual é a principal origem dos seus rendimentos?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Salário, comissões, bônus ou pro-labore" name="incomeSource" onChange={() => handleChange('incomeSource', 'Salário, comissões, bônus ou pro-labore')} />
                            <InputRadio inputDesc="Investimentos" name="incomeSource" onChange={() => handleChange('incomeSource', 'Investimentos')} />
                            <InputRadio inputDesc="Aluguéis" name="incomeSource" onChange={() => handleChange('incomeSource', 'Aluguéis')} />
                            <InputRadio inputDesc="Sociedade em empresas" name="incomeSource" onChange={() => handleChange('incomeSource', 'Sociedade em empresas')} />
                            <InputRadio inputDesc="Aposentadoria" name="incomeSource" onChange={() => handleChange('incomeSource', 'Aposentadoria')} />
                        </div>
                    </div>

                    {/* Pergunta sobre movimentações financeiras internacionais */}
                    <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
                        <h2 className="font-[600] text-[24px]">Você já realizou ou planeja realizar movimentações financeiras internacionais para internacionalização de capital / investimentos?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Sim" name="hasInternationalTransactions" onChange={() => handleChange('hasInternationalTransactions', 'Sim')} />
                            <InputRadio inputDesc="Não" name="hasInternationalTransactions" onChange={() => handleChange('hasInternationalTransactions', 'Não')} />
                        </div>
                    </div>
                </div>

                {/* Pergunta sobre objetivo ao considerar uma saída fiscal */}
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-5 lg:mt-10">
                    <div className="w-full lg:max-w-[770.5px]">
                        <h2 className="font-[600] text-[24px]">Qual é o seu principal objetivo ao considerar uma saída fiscal?</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Estabelecer residência no exterior" name="fiscalExitGoal" onChange={() => handleChange('fiscalExitGoal', 'Estabelecer residência no exterior')} />
                            <InputRadio inputDesc="Redução de impostos" name="fiscalExitGoal" onChange={() => handleChange('fiscalExitGoal', 'Redução de impostos')} />
                            <InputRadio inputDesc="Oportunidades de negócios" name="fiscalExitGoal" onChange={() => handleChange('fiscalExitGoal', 'Oportunidades de negócios')} />
                            <InputRadio inputDesc="Qualidade de vida e segurança para a família" name="fiscalExitGoal" onChange={() => handleChange('fiscalExitGoal', 'Qualidade de vida e segurança para a família')} />
                        </div>
                    </div>

                    {/* Pergunta sobre a natureza da saída fiscal */}
                    <div className="w-full lg:max-w-[743.5px] mt-[24px] lg:mt-0">
                        <h2 className="font-[600] text-[24px]">Sua saída fiscal será:</h2>
                        <div className="flex flex-col gap-2 mt-[24px]">
                            <InputRadio inputDesc="Temporária" name="fiscalExitNature" onChange={() => handleChange('fiscalExitNature', 'Temporária')} />
                            <InputRadio inputDesc="Definitiva" name="fiscalExitNature" onChange={() => handleChange('fiscalExitNature', 'Definitiva')} />
                        </div>
                    </div>
                </div>

                <button onClick={() => setShowModal(true)} className="mt-[80px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap ml-auto">
                    Finalizar preenchimento
                </button>
            </section>
        </>
    );
}
