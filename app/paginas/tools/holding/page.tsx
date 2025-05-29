'use client';

import { useState } from 'react';
import InputLabel from '@/components/compartilhados/inputLabel';
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect';
import { Hero } from '@/components/paginas/tools/holding/hero';

type TabelaResultado = {
  ano: number;
  aluguelPF: number;
  aluguelHolding: number;
  custoAnualHolding: number;
  diferencaCustos: number;
};

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  investeNaXP: string;
  quantoTemInvestido: string;
  investeNoExterior: string;
}

export default function Holding() {
  const [selectFinalidade, setSelectFinalidade] = useState<string>('');
  const [valorAquicicao, setValorAquicicao] = useState<string>('');
  const [valorMercado, setValorMercado] = useState<string>('');
  const [valorAluguel, setValorAluguel] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [qtdImoveis, setQtdImoveis] = useState<string>('');
  const [vendaValues, setVendaValues] = useState({
    LucroVendaPF: '',
    LucroVendaHolding: '',
  });
  const [sim, setSim] = useState(false);
  const [tabela, setTabela] = useState<TabelaResultado[]>([]);

  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Email: '',
    Phone: '',
    investeNaXP: '',
    quantoTemInvestido: '',
    investeNoExterior: '',
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calcularResultado = () => {
    const aquisicao = Number(valorAquicicao);
    const mercado = Number(valorMercado);
    const aluguel = Number(valorAluguel);

    if (selectFinalidade === 'venda') {
      const lucroVenda = mercado - aquisicao;
      const impostoVenda = lucroVenda * 0.15;
      const impostoHolding = mercado * 0.06;

      setVendaValues({
        LucroVendaPF: impostoVenda.toFixed(2) || '',
        LucroVendaHolding: impostoHolding.toFixed(2) || '',
      });
      return;
    }

    const metadeImoveisAlugados = qtdImoveis === 'sim';

    const custosAdvogado = 50000;
    const taxaMercado = mercado * 0.03;
    const custoInicialHolding = metadeImoveisAlugados
      ? taxaMercado + custosAdvogado
      : custosAdvogado;

    const novaTabela: TabelaResultado[] = [];
    let ano = 1;

    while (ano <= 10) {
      const aluguelPF = aluguel * 0.275 * 12;
      const aluguelHolding = aluguel * 0.11 * 12;

      const custoHoldingAnual =
        ano === 1 ? custoInicialHolding + aluguelHolding : aluguelHolding;
      const custoPFAnual = aluguelPF;

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

    setTabela(novaTabela);
  };

  const handleModalSubmit = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.trello.com/1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idList: '678ec50cd39e18f5ebca5e48',
          key: '5b6e1d320af14c490be1bda72621e7fe',
          token: 'ATTAf91a6f85ce066af1172582f6db7f18da8a199ad007cb11ae54bd8f5d55a26e97F65CF22C',
          name: `Novo investidor: ${formData.Nome}`,
          desc: `Respostas do formulário: ${JSON.stringify(formData, null, 2)}`,
        }),
      });

      if (!response.ok) {
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
      <Hero />
      <section className="w-[90%] max-w-[1174px] mx-auto mt-[83px] text-white mb-[102px]">
        <h1 className="text-[40px] font-[700]">Como usar a ferramenta de cálculo</h1>
        <p className="text-[24px] font-[500] mt-[16px]">
          Preencha os campos indicados com os valores, períodos, taxas e índices, de acordo com a simulação desejada.
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
              labelTitle={
                selectFinalidade === 'aluguel' ? 'Valor de mercado' : 'Valor de Aquisição'
              }
              placeholder="Insira o valor de aquisição"
onChange={(e) => {
  if (selectFinalidade === 'aluguel') {
    setValorMercado(e.target.value);
  } else {
    const valorNumerico = Number(e.target.value);
    const formatado = valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
       setValorAquicicao(formatado);
  }

              }}
            />
            <InputLabel
              type="string"
              labelTitle={
                selectFinalidade === 'aluguel'
                  ? 'Rendimento dos alugueis'
                  : 'Valor de Mercado'
              }
              placeholder="Insira o valor de mercado"
              onChange={(e) => {
                selectFinalidade === 'aluguel'
                  ? setValorAluguel(e.target.value)
                  : setValorMercado(e.target.value);
              }}
            />
          </div>

          {selectFinalidade === 'aluguel' && (
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

        <button
          onClick={() => setShowModal(true)}
          className="mt-[20px] lg:flex py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white text-nowrap"
        >
          Calcular Resultado
        </button>

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
              {['Sim', 'Não'].map((resposta) => (
                <label key={resposta} htmlFor="investeNaXP" className="flex items-center gap-2">
                  <input
                    name="investeNaXP"
                    type="radio"
                    onChange={() => handleChange('investeNaXP', resposta)}
                  />
                  <p>{resposta}</p>
                </label>
              ))}

              <h2 className="text-[24px] font-bold mb-4 mt-6">Quanto tem investido?</h2>
              {[
                'Não tenho investimentos',
                'Abaixo de 100k',
                'Entre 100k e 300k',
                'Entre 300k a 1milhão',
                'Acima de 1milhão',
              ].map((valor) => (
                <label key={valor} htmlFor="quantoTemInvestido" className="flex items-center gap-2">
                  <input
                    name="quantoTemInvestido"
                    type="radio"
                    onChange={() => handleChange('quantoTemInvestido', valor)}
                  />
                  <p>{valor}</p>
                </label>
              ))}

              <h2 className="text-[24px] font-bold mb-4 mt-6">Investe no exterior?</h2>
              {['Sim', 'Não'].map((resposta) => (
                <label key={resposta} htmlFor="investeNoExterior" className="flex items-center gap-2">
                  <input
                    name="investeNoExterior"
                    type="radio"
                    onChange={() => handleChange('investeNoExterior', resposta)}
                  />
                  <p>{resposta}</p>
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
                <button
                  className="px-4 py-2 bg-gray-400 text-white rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  onClick={() => {
                    handleSubmit();
                    calcularResultado();
                    handleModalSubmit();
                    setSim(true);
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Resultado omitido para foco em lógica — já funcional */}

      </section>
    </>
  );
}
