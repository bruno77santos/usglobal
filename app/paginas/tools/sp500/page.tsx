'use client';

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartOptions
} from "chart.js";
import InputLabel from '@/components/compartilhados/inputLabel';
import { Hero } from "@/components/paginas/tools/sp500/hero";
import InputLabelSelect from "@/components/compartilhados/inputLabelSelect";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type FormData = {
  Nome?: string;
  Email?: string;
  Phone?: string;
  investeNaXP?: string;
  quantoTemInvestido?: string;
  investeNoExterior?: string;
};

export default function SEP() {
    const [valorInicial, setValorInicial] = useState<number>(0);
    const [periodo, setPeriodo] = useState<number>(0);
    const [aporte, setAporte] = useState<number>(0);
    const [frequencia, setFrequencia] = useState<string>("mensal");
    const [resultadoSP500, setResultadoSP500] = useState<number | null>(null);
    const [resultadoIbovespa, setResultadoIbovespa] = useState<number | null>(null);
    const [simulator, setSimulator] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const taxaSP500 = 0.13;
    const taxaIbovespa = 0.075;

    const [formData, setFormData] = useState<FormData>({});

    const handleChange = (name: keyof FormData, value: string) => {
        setFormData(prevData => ({
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
                    idList: "678ec50cd39e18f5ebca5e48",
                    key: "5b6e1d320af14c490be1bda72621e7fe",
                    token: "ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C",
                    name: `Novo investidor: ${formData.Nome}`,
                    desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
                }),
            });

            if (!response.ok) {
                console.error("Erro ao enviar formulário:", response.statusText);
                alert("Erro ao enviar formulário.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro ao enviar formulário.");
        }
    };

    const calcularInvestimento = () => {
        if (valorInicial && periodo) {
            const meses = frequencia === "mensal" ? 12 : 1;
            const taxaMensalSP500 = Math.pow(1 + taxaSP500, 1 / meses) - 1;
            const taxaMensalIbovespa = Math.pow(1 + taxaIbovespa, 1 / meses) - 1;
            const totalPeriodos = periodo * meses;

            const calcularComAportes = (taxa: number) => {
                let montante = valorInicial;
                for (let i = 0; i < totalPeriodos; i++) {
                    montante = montante * (1 + taxa) + aporte;
                }
                return montante;
            };

            setResultadoSP500(calcularComAportes(taxaMensalSP500));
            setResultadoIbovespa(calcularComAportes(taxaMensalIbovespa));
        } else {
            setResultadoSP500(null);
            setResultadoIbovespa(null);
        }
    };

    const handleModalSubmit = () => {
        setShowModal(false);
        setSimulator(true);
    };

    const data = {
        labels: ["Ibovespa", "S&P 500"],
        datasets: [
            {
                label: "Resultado Final",
                data: [resultadoIbovespa || 0, resultadoSP500 || 0],
                backgroundColor: ["#f39c12", "#3498db"]
            }
        ]
    };

    const options: ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: "right",
                labels: {
                    boxWidth: 20,
                    boxHeight: 20
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Índices"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Valor Final (R$)"
                }
            }
        }
    };

    return (
        <>
            <Hero />
            <section className="w-[90%] max-w-[1174px] mx-auto mt-[83px] text-white mb-[102px]">
                <h1 className="text-[40px] font-[700]">Simulador de Investimentos</h1>
                <div className="mt-[48px] w-full flex flex-col flex-wrap gap-7">
                    <div className="flex items-center gap-5 w-full sm:flex-row flex-col">
                        <InputLabel
                            type="number"
                            labelTitle="Valor inicial (R$)"
                            placeholder="Insira aqui"
                            onChange={(e) => setValorInicial(Number(e.target.value))}
                        />
                        <InputLabel
                            type="number"
                            labelTitle="Período de investimento (anos)"
                            placeholder="Insira aqui"
                            onChange={(e) => setPeriodo(Number(e.target.value))}
                        />
                    </div>
                    <div className="flex items-center gap-5 w-full sm:flex-row flex-col">
                        <InputLabel
                            type="number"
                            labelTitle="Aportes adicionais (R$)"
                            placeholder="Insira aqui"
                            onChange={(e) => setAporte(Number(e.target.value))}
                        />
                        <InputLabelSelect
                            onChange={(e) => setFrequencia(e.target.value)}
                            labelTitle="Frequência dos aportes"
                            option={
                                <>
                                    <option value="mensal">Mensal</option>
                                    <option value="anual">Anual</option>
                                </>
                            }
                        />
                    </div>
                </div>


                <button
                    onClick={() => setShowModal(true)}
                    className="mt-[20px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap"
                >
                    Calcular
                </button>

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
                                        handleModalSubmit();
                                        calcularInvestimento();
                                    }}
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {simulator && resultadoSP500 !== null && resultadoIbovespa !== null && (
                    <>
                        <p className="font-bold text-4xl mt-24">Resultado:</p>
                        <div className="mt-5 h-[500px] w-full">
                            <Bar data={data} options={options} />
                        </div>
                        <p className="w-[97%] max-w-[500px] text-center mx-auto mt-10 opacity-[0.7] italic py-5">O cálculo da rentabilidade do índice S&P500 considera uma taxa média anual de 3% de valorização do Dólar frente ao Real (média histórica dos últimos 20 anos)</p>
                    </>
                )}

                {/* Seção de explicação sobre a simulação */}
                <h1 className="mt-[48px] text-[40px] font-[700]">Porque simular</h1>
                <p className="text-[24px font-[500] mt-[16px]">
                    A simulação é uma importante ferramenta auxiliar na tomada de decisão de investimento ou planejamento financeiro. O S&P500 é formado por empresas das principais bolsas americanas, em especial NYSE e NASDAQ.
                    <br /><br />
                    Sua composição é constantemente reavaliada de forma a considerar as ações de melhor performance e descontinuar as que deixam de apresentar bons resultados. Tornou-se o mais importante índice de referência em todo o mundo.
                </p>

                {/* Seção de lembrete importante */}
                <h1 className="mt-[48px] text-[40px] font-[700]">Lembre-se</h1>
                <p className="text-[24px font-[500] mt-[16px]">
                    Tenha sempre em mente que rentabilidade passada não significa rentabilidade futura. Antes de uma decisão final, procure orientação de um profissional qualificado.
                    <br /><br />
                    Agende uma conversa sem compromisso com um de nossos consultores e tenha informações dirigidas a seu perfil e objetivos. Clique no botão acima.
                </p>

                {/* Seção de alerta sobre tributação */}
                <h1 className="mt-[48px] text-[40px] font-[700]">Atenção</h1>
                <p className="text-[24px font-[500] mt-[16px]">
                    Valores acima de US$ 60,000.00 investidos em renda variável (ações, ETFs, REITs) e saldo em Dólar são taxados nos Estados Unidos em alíquotas de 18% a 40% sobre o montante.
                    <br /><br />
                    No entanto, existem estratégias de investimento que, dentro da lei, evitam essa tributação. Fale com nossa equipe para se informar.
                </p>

                {/* Seção de informações adicionais */}
                <h1 className="mt-[48px] text-[40px] font-[700]">Saiba mais</h1>
                <p className="text-[24px font-[500] mt-[16px]">
                    Criado em 1927, há praticamente duas décadas seu crescimento médio anual tem sido de 10%. Isso significa que um investidor com estratégia passiva, que acompanha o índice S&P500 por meio de um ETF, por exemplo, teria tido uma rentabilidade de 10% ao ano, em Dólar. Considerada a variação cambial no Brasil, a rentabilidade seria ainda maior.
                    <br /><br />
                    “Never Bet Against America”
                    <br /><br />
                    A famosa frase de Warren Buffett vem bem a calhar: o S&P500 comporta-se de maneira bem distinta da renda variável no Brasil, que apesar das grandes oportunidades, carrega um alto risco. O índice americano, que tem evoluído vigorosamente, tem períodos de baixa menos frequentes e mais curtos, e uma recuperação mais acentuada.
                    <br /><br />
                    As alternativas de investimento por lá também são muito mais numerosas: por um lado contam com setores e empresas menos voláteis, como Coca-Cola ou ETFs do segmento de energia que se valorizam ao longo do tempo; por outro, setores, como o de tecnologia, com um histórico mais curto mas com evolução mais vigorosa, mas que são inexpressivos no Brasil.
                    <br /><br />
                    O S&P500, portanto, mais do que um índice de renda variável, representa a enorme diversidade, vigor e resiliência da economia americana.
                </p>
            </section>

        </>
    );
}
