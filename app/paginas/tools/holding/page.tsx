'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  valorImovel: number;
  aluguelMensal: number;
  corretagem: number;
  ganhoCapital: number;
  mensalidadeContador: number;
  anosSimulacao: number;
}

interface ResultadoAluguel {
  ano: number;
  aluguelPF: string;
  aluguelHolding: string;
  custoAnualHolding: string;
  diferencaCustos: string;
}

export default function Calculadora() {
  const { register, handleSubmit } = useForm<FormData>();
  const [selectFinalidade, setSelectFinalidade] = useState('');
  const [tabela, setTabela] = useState<ResultadoAluguel[]>([]);
  const [vendaValues, setVendaValues] = useState({
    LucroVendaPF: '',
    LucroVendaHolding: '',
  });

  const calcularResultado = (data: FormData) => {
    const {
      valorImovel,
      aluguelMensal,
      corretagem,
      ganhoCapital,
      mensalidadeContador,
      anosSimulacao,
    } = data;

    const corretagemTotal = (valorImovel * corretagem) / 100;
    const lucroImovel = ganhoCapital - corretagemTotal;
    const impostoVenda = lucroImovel * 0.15;
    const impostoHolding = lucroImovel * 0.04;

    if (selectFinalidade === 'venda') {
      setVendaValues({
        LucroVendaPF: impostoVenda.toFixed(2) || '',
        LucroVendaHolding: impostoHolding.toFixed(2) || '',
      });
      return;
    }

    if (selectFinalidade === 'aluguel') {
      const novaTabela: ResultadoAluguel[] = [];

      for (let i = 1; i <= anosSimulacao; i++) {
        const aluguelAnual = aluguelMensal * 12 * i;
        const impostoPF = aluguelAnual * 0.275;
        const custoPF = impostoPF;

        const custoContador = mensalidadeContador * 12 * i;
        const custoHolding = custoContador;
        const diferenca = custoPF - custoHolding;

        novaTabela.push({
          ano: i,
          aluguelPF: custoPF.toFixed(2),
          aluguelHolding: aluguelAnual.toFixed(2),
          custoAnualHolding: custoHolding.toFixed(2),
          diferencaCustos: diferenca.toFixed(2),
        });
      }

      setTabela(novaTabela);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Simulação</h1>

      <select
        value={selectFinalidade}
        onChange={(e) => setSelectFinalidade(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      >
        <option value="">Selecione a finalidade</option>
        <option value="venda">Simular Venda</option>
        <option value="aluguel">Simular Aluguel</option>
      </select>

      {selectFinalidade && (
        <form
          onSubmit={handleSubmit((data) => {
            calcularResultado(data);
          })}
          className="grid grid-cols-1 gap-4"
        >
          <input
            {...register('valorImovel')}
            placeholder="Valor do Imóvel"
            type="number"
            className="border p-2"
          />
          <input
            {...register('aluguelMensal')}
            placeholder="Aluguel Mensal"
            type="number"
            className="border p-2"
          />
          <input
            {...register('corretagem')}
            placeholder="% Corretagem"
            type="number"
            className="border p-2"
          />
          <input
            {...register('ganhoCapital')}
            placeholder="Ganho de Capital"
            type="number"
            className="border p-2"
          />
          <input
            {...register('mensalidadeContador')}
            placeholder="Mensalidade Contador"
            type="number"
            className="border p-2"
          />
          <input
            {...register('anosSimulacao')}
            placeholder="Anos de Simulação"
            type="number"
            className="border p-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Calcular
          </button>
        </form>
      )}

      {/* Resultado de Venda */}
      {selectFinalidade === 'venda' && vendaValues.LucroVendaPF && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Resultado da Venda</h3>
          <p className="mt-2">Lucro na Venda (Pessoa Física): R$ {vendaValues.LucroVendaPF}</p>
          <p>Lucro na Venda (Holding): R$ {vendaValues.LucroVendaHolding}</p>
        </div>
      )}

      {/* Resultado de Aluguel */}
      {selectFinalidade === 'aluguel' && tabela.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Resultado do Aluguel</h3>
          <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Ano</th>
                <th className="border px-4 py-2">Aluguel PF (Imposto)</th>
                <th className="border px-4 py-2">Aluguel Holding</th>
                <th className="border px-4 py-2">Custo Holding</th>
                <th className="border px-4 py-2">Diferença</th>
              </tr>
            </thead>
            <tbody>
              {tabela.map((linha) => (
                <tr key={linha.ano}>
                  <td className="border px-4 py-2">{linha.ano}</td>
                  <td className="border px-4 py-2">R$ {linha.aluguelPF}</td>
                  <td className="border px-4 py-2">R$ {linha.aluguelHolding}</td>
                  <td className="border px-4 py-2">R$ {linha.custoAnualHolding}</td>
                  <td className="border px-4 py-2">R$ {linha.diferencaCustos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
