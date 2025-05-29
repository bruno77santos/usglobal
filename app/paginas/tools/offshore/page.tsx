'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import InputLabel from '@/components/compartilhados/inputLabel';
import InputLabelSelect from '@/components/compartilhados/inputLabelSelect';
import { Hero } from '@/components/paginas/tools/offshore/hero';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FormData {
  Nome: string;
  Email: string;
  Phone: string;
  investeNaXP: string;
  quantoTemInvestido: string;
  investeNoExterior: string;
}

export default function Offshore() {
  const [investment, setInvestment] = useState<number>(0);
  const [scenario, setScenario] = useState<string>('Realista');
  const [period, setPeriod] = useState<number>(10);
  const [results, setResults] = useState({ offshore: 0, brazil: 0, difference: 0 });
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const handleCalculate = () => {
    const annualExchangeRate =
      scenario === 'Pessimista' ? 0.04 : scenario === 'Realista' ? 0.03 : 0.01;
    const offshoreRate = 0.1;
    const brazilRate = 0.075;
    const capitalGainsTax = 0.15;
    const itcmdTax = 0.1;
    const offshoreMaintenance = 1200;

    let offshoreValue = investment - offshoreMaintenance;
    let brazilValue = investment;

    for (let year = 1; year <= period; year++) {
      offshoreValue = offshoreValue * (1 + offshoreRate) - offshoreMaintenance;
      brazilValue = brazilValue * (1 + brazilRate);
      offshoreValue *= 1 + annualExchangeRate;
      brazilValue *= 1 + annualExchangeRate;
    }

    offshoreValue -= offshoreValue * capitalGainsTax;
    brazilValue -= brazilValue * (itcmdTax + capitalGainsTax);

    setResults({
      offshore: offshoreValue,
      brazil: brazilValue,
      difference: offshoreValue - brazilValue,
    });
  };

  const chartData = {
    labels: Array.from({ length: period }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Offshore',
        data: Array.from({ length: period }, (_, i) => (results.offshore / period) * (i + 1)),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
      },
      {
        label: 'Brasil',
        data: Array.from({ length: period }, (_, i) => (results.brazil / period) * (i + 1)),
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
      },
    ],
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
              <button className="px-4 py-2 bg-gray-400 text-white rounded-md" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={() => {
                  handleSubmit();
                  handleCalculate();
                  setShowModal(false);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      <Hero />
      <section className="w-[90%] max-w-[1174px] mx-auto mt-[83px] text-white mb-[102px]">
        <div className="mt-[83px] flex items-center gap-10 flex-col lg:flex-row">
          <InputLabel
            placeholder="Insira aqui"
            labelTitle="Valor a investir"
            type="number"
            onChange={(e) => setInvestment(Number(e.target.value))}
          />
          <InputLabelSelect
            labelTitle="Cenário"
            option={
              <>
                <option>Otimista</option>
                <option>Pessimista</option>
                <option>Realista</option>
              </>
            }
            onChange={(e) => setScenario(e.target.value)}
          />
          <InputLabel
            placeholder="Período (anos)"
            labelTitle="Período"
            type="number"
            onChange={(e) => setPeriod(Number(e.target.value))}
          />
          <button
            onClick={() => setShowModal(true)}
            className="py-3.5 px-4 text-lg font-medium rounded-lg transition-all duration-300 text-[#E6E6E6] bg-[#FF0C34] hover:opacity-70 hover:text-white"
          >
            Calcular
          </button>
        </div>

        <div className="flex flex-col mt-[48px] text-center w-full">
          <div className="w-full h-[400px] rounded-[12px] bg-[#D9D9D9]" style={{ position: 'relative' }}>
            <Line
              className="opacity-[0] hover:opacity-[1]"
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              }}
            />
          </div>

          <p className="mt-[48px] font-[500] text-[24px] text-white">
            Passe o cursor sobre a linha de tempo do gráfico para visualizar os valores em ambas as curvas.
          </p>
        </div>
      </section>
    </>
  );
}
