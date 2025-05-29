'use client'

import { useState } from "react";
import InputLabel from "@/components/compartilhados/inputLabel";
import InputLabelSelect from "@/components/compartilhados/inputLabelSelect";
import { Hero } from "@/components/paginas/tools/holding/hero";

type TabelaResultado = {
  ano: number;
  aluguelPF: number;
  aluguelHolding: number;
  custoAnualHolding: number;
  diferencaCustos: number;
};

export default function Holding() {
  const [selectFinalidade, setSelectFinalidade] = useState<string>("");
  const [valorAquicicao, setValorAquicicao] = useState<string>("");
  const [valorMercado, setValorMercado] = useState<string>("");
  const [valorAluguel, setValorAluguel] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [qtdImoveis, setQtdImoveis] = useState<string>("");
  const [vendaValues, setVendaValues] = useState({ LucroVendaPF: "", LucroVendaHolding: "", })
  const [sim, setSim] = useState(false)

  // Adiciona a tabela como estado
  const [tabela, setTabela] = useState<TabelaResultado[]>([]);

  const calcularResultado = () => {
    const aquisicao = Number(valorAquicicao); // Input do valor de aquisição
    const mercado = Number(valorMercado); // Input do valor de mercado
    const aluguel = Number(valorAluguel); // Input do valor do aluguel mensal

    if (selectFinalidade === "venda") {
      const lucroVenda = mercado - aquisicao; // Cálculo do lucro na venda
      const impostoVenda = lucroVenda * 0.15; // Exemplo: 15% sobre o lucro
      const impostoHolding = mercado * 0.06; // 6% sobre o valor de mercado

      setVendaValues({
        LucroVendaPF: impostoVenda.toFixed(2) || "",
        LucroVendaHolding: impostoHolding.toFixed(2) || "",
      });
      return;
    }

    // Verificar se 50% dos imóveis estão alugados
    const metadeImoveisAlugados = qtdImoveis === "sim"; // Exemplo: "sim" ou "não"

    // Custos adicionais iniciais
    const custosAdvogado = 50000; // Custos fixos de advogado iniciais
    const taxaMercado = mercado * 0.03; // 3% sobre o valor de mercado
    const custoInicialHolding = metadeImoveisAlugados ? taxaMercado + custosAdvogado : custosAdvogado;

    const novaTabela = [];
    let ano = 1;

    while (ano <= 10) {
      // Fórmula Aluguel PF
      const aluguelPF = (aluguel * 0.275) * 12;

      // Fórmula Aluguel Holding
      const aluguelHolding = (aluguel * 0.11) * 12;

      // Fórmula Custo da Holding no 1° ano
      let custoHoldingAnual;
      if (ano === 1) {
        custoHoldingAnual = custoInicialHolding + aluguelHolding;
      } else {
        // Para os anos seguintes, você pode adicionar custos variáveis (exemplo: manutenção)
        custoHoldingAnual = aluguelHolding; // Exemplo: aumento de 1000 por ano
      }

      // Fórmula Custo da PF no 1° ano
      let custoPFAnual;
      if (ano === 1) {
        custoPFAnual = aluguelPF;
      } else {
        // Para os anos seguintes, você pode adicionar custos variáveis (exemplo: manutenção)
        custoPFAnual = aluguelPF; // Exemplo: aumento de 1000 por ano
      }

      // Diferença entre custos
      const diferencaCustos = custoHoldingAnual - custoPFAnual;

      novaTabela.push({
        ano,
        aluguelPF: Number(custoPFAnual.toFixed(2)),
        aluguelHolding: Number(aluguelHolding.toFixed(2)),
        custoAnualHolding: Number(custoHoldingAnual.toFixed(2)),
        diferencaCustos: Number(diferencaCustos.toFixed(2)),
      });

      ano++;
    }

    setTabela(novaTabela); // Atualiza a tabela no estado (para exibição na interface)
  };



  const handleModalSubmit = () => {
    setShowModal(false);
  };


  const [formData, setFormData] = useState({}) as any
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
          idList: "678ec50cd39e18f5ebca5e48",
          key: "5b6e1d320af14c490be1bda72621e7fe",
          token: "ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C",
          name: `Novo investidor: ${formData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      });

      if (response.ok) {


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
      <Hero />
      <section className="w-[90%] max-w-[1174px] mx-auto mt-[83px] text-white mb-[102px]">
        <h1 className="text-[40px] font-[700]">Como usar a ferramenta de cálculo</h1>
        <p className="text-[24px] font-[500] mt-[16px]">
          Preencha os campos indicados com os valores, períodos, taxas e índices, de acordo com a simulação desejada.
          <br />
          <br />
          Após a inserção do último dado, a calculadora irá apresentar automaticamente o resultado da simulação.
        </p>

        <div className="mt-[48px] w-full flex flex-col flex-wrap gap-7">
          <div className="flex items-center gap-5 w-full sm:flex-row flex-col">
            <InputLabelSelect
              option={
                <>
                  <option value="venda">Venda</option>
                  <option value="aluguel">Aluguel</option>
                </>
              }
              labelTitle="Finalidade"
              onChange={(e) => setSelectFinalidade(e.target.value)}
            />
            <InputLabel

              type="string"
              labelTitle={selectFinalidade == "aluguel" ? "Valor de mercado" : "Valor de Aquisição"}
              placeholder="Insira o valor de aquisição"
              onChange={(e) => {
                selectFinalidade === "aluguel" ? setValorMercado(e.target.value) : setValorAquicicao(e.target.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }))
              }}
            />
            <InputLabel
              type="string"
              labelTitle={selectFinalidade == "aluguel" ? "Rendimento dos alugueis" : "Valor de Mercado"}
              placeholder="Insira o valor de mercado"
              onChange={(e) => {
                selectFinalidade == "aluguel" ? setValorAluguel(e.target.value) : setValorMercado(e.target.value)
              }}
            />
          </div>

          {selectFinalidade === "aluguel" && (
            <InputLabelSelect
              onChange={(e) => setQtdImoveis(e.target.value)}
              labelTitle="A quantidade dos imóveis alugados equivale a mais de 50% dos seus imóveis?"
              option={
                <>
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
                </>
              }
            />
          )}
        </div>

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
                    calcularResultado()
                    handleModalSubmit()
                    setSim(true)
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}


        <button
          onClick={() => setShowModal(true)}
          className="mt-[20px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap"
        >
          Calcular Resultado
        </button>

        {/* Tabela com os resultados */}
        {selectFinalidade === "aluguel" && (

          <div data-off={sim} className="data-[off=true]:block hidden mt-[32px] bg-gray-800 p-6 rounded-lg">
            <h2 className="text-[28px] font-bold mb-4">Resultados</h2>
            <div data-off={sim} className="data-[off=true]:block hidden mt-[32px] bg-gray-800 p-6 rounded-lg">
              <h2 className="text-[28px] font-bold mb-4">Resultados</h2>

              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse min-w-max">
                  <thead>
                    <tr>
                      <th className="border-b-2 px-4 py-2">Ano</th>
                      <th className="border-b-2 px-4 py-2">Custo PF</th>
                      <th className="border-b-2 px-4 py-2">Custo Holding</th>
                      <th className="border-b-2 px-4 py-2">Economia com a holding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabela.map((row) => (
                      <tr key={row.ano}>
                        <td className="border-b px-4 py-2 text-center">{row.ano}</td>

                        <td className="border-b px-4 py-2 text-center">
                          {row.aluguelPF.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </td>
                        <td className="border-b px-4 py-2 text-center">
                          {row.custoAnualHolding.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </td>
                        <td className="border-b px-4 py-2 text-center text-green-400">
                          {row.diferencaCustos.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


            <div data-off={sim} className="data-[off=true]:block hidden mt-[24px] p-4 bg-gray-700 rounded-lg text-center">
              <h3 className="text-[20px] font-semibold">
                Os cálculos favorecem a Holding.
              </h3>
              <p className="mt-2">
                Recomendamos uma análise detalhada com um especialista.{" "}
                <a
                  target="_blank"
                  href="https://wa.me/+5511961014004?text=Ol%C3%A1%20estou%20interessado%20em%20investir!"
                  className="text-blue-400 underline"
                >
                  Clique aqui para falar com a Invest Global.
                </a>
              </p>
            </div>
          </div>

        )}

        {selectFinalidade === "venda" ?

          (
            <div data-off={sim} className="data-[off=true]:block hidden mt-[32px] bg-gray-800 p-6 rounded-lg">
              <h2 className=" text-[28px] font-bold mb-4">Resultados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[18px]">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold">Pessoa Física</h3>
                  <p>Imposto sobre o ganho de capital: <strong>R$ {vendaValues.LucroVendaPF}</strong></p>

                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold">Holding</h3>
                  <p>Imposto sobre o valor de mercado: <strong>R$ {vendaValues.LucroVendaHolding}</strong></p>

                </div>
              </div>

              <div data-off={sim} className="data-[off=true]:block hidden mt-[24px] p-4 bg-gray-700 rounded-lg text-center">
                <h3 className="text-[20px] font-semibold">
                  Os cálculos favorecem a Holding.
                </h3>
                <p className="mt-2">
                  Recomendamos uma análise detalhada com um especialista.{" "}
                  <a
                    target="_blank"
                    href="https://wa.me/+5511920914081?text=Ol%C3%A1%20estou%20interessado%20em%20investir!"
                    className="text-blue-400 underline"
                  >
                    Clique aqui para falar com a Invest Global.
                  </a>
                </p>
              </div>
            </div>


          )
          : ""}

        <h1 className=" mt-[48px]
                text-[40px] font-[700]">Porque simular</h1>
        <p className="text-[24px font-[500] mt-[16px]">
          A simulação é uma importante ferramenta auxiliar na tomada de decisão de investimento ou planejamento financeiro. O S&P500 é formado por empresas das principais bolsas americanas, em especial NYSE e NASDAQ.
          <br />
          <br />
          Sua composição é constantemente reavaliada de forma a considerar as ações de melhor performance e descontinuar as que deixam de apresentar bons resultados. Tornou-se o mais importante índice de referência em todo o mundo.
        </p>
        <h1 className=" mt-[48px]
                text-[40px] font-[700]">Lembre-se</h1>
        <p className="text-[24px font-[500] mt-[16px]">
          Tenha sempre em mente que rentabilidade passada não significa rentabilidade futura. Antes de uma decisão final, procure orientação de um profissional qualificado.
          <br />
          <br />
          Agende uma conversa sem compromisso com um de nossos consultores e tenha informações dirigidas a seu perfil e objetivos. Clique no botão (Botão “Agende a sua Reunião”)  </p>
        <br />
        <a target="_blank" href="https://wa.me/+5511961014004?text=Ol%C3%A1%20estou%20interessado%20em%20investir!" className="w-[220px] mt-[20px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap">
          Agende a sua Reunião
        </a>
        <h1 className=" mt-[48px]
                text-[40px] font-[700]">Saiba mais</h1>
        <p className="text-[24px font-[500] mt-[16px]">
          As Holdings são instrumentos jurídicos que podem ser usados por qualquer pessoa, família ou grupo, na organização e centralização de bens.
          São instrumentos seguros, que simplificam e protegem os bens, em especial na ocorrência de transição sucessória, que se torna muito mais simples e rápida, evitando custos desnecessários, disputas judiciais e burocracia.
          <br />
          <br />
          A formação de uma holding é mais simples e menos custosa do que a de uma Offshore, mas pode nem sempre ser a opção mais adequada. Dependendo de cada caso, ferramentas como o Joint Tenancy podem ser aplicados. Para conhecer mais sobre essa ferramenta, consulte nosso artigo <a href="#" target="_blank" className="text-red-500">clicando aqui</a>.
        </p>



      </section>




    </>
  );
}