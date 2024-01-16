import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import './graph.css'

const Graph = () => {
  const networkRef = useRef(null);
  const [nodes] = useState(new DataSet([
    { id: 1, label: "Главный сервис", size: 25 },
    { id: 2, label: "Модуль Анализа", size: 15 },
    { id: 3, label: "Нейросеть", size: 15 },
    { id: 4, label: "Дата-сет", size: 15 },
    { id: 5, label: "NFT", size: 15 },
    { id: 6, label: "Smart contract", size: 15 },
    { id: 7, label: "База данных", size: 15 },
    { id: 8, label: "Блокчейн", size: 15 },
    { id: 9, label: "Интеллектуальный Агент", size: 15 },
    { id: 10, label: "Пользовательский Интерфейс", size: 15 },
    { id: 11, label: "Модуль Прогнозирования и Моделирования", size: 15 },
    { id: 12, label: "API", size: 15 },
    { id: 13, label: "Web 3.0", size: 15 },
    { id: 14, label: "Chat-GPT", size: 15 },
    { id: 15, label: "Данные", size: 15 },
  ]));

  const [edges] = useState(new DataSet([
    { from: 1, to: 12, label: 'Может иметь', font: { align: 'horizontal' } },
    { from: 1, to: 2, label: 'Может иметь', font: { align: 'horizontal' } },
    { from: 1, to: 7, label: 'Может иметь', font: { align: 'horizontal' } },
    { from: 1, to: 10, label: 'Может иметь', font: { align: 'horizontal' } },
    { from: 1, to: 11, label: 'Может иметь', font: { align: 'horizontal' } },
    { from: 2, to: 3, label: 'Взаимодействует с', font: { align: 'horizontal' } },
    { from: 3, to: 4, label: 'Обучается с помощью', font: { align: 'horizontal' } },
    { from: 3, to: 14, label: 'Реализована в виде', font: { align: 'horizontal' } },
    { from: 3, to: 13, label: 'Является', font: { align: 'horizontal' } },
    { from: 4, to: 15, label: 'Использует', font: { align: 'horizontal' } },
    { from: 5, to: 15, label: 'Содержат в себе', font: { align: 'horizontal' } },
    { from: 5, to: 13, label: 'Является', font: { align: 'horizontal' } },
    { from: 6, to: 5, label: 'Взаимодействует с', font: { align: 'horizontal' } },
    { from: 7, to: 6, label: 'Использует', font: { align: 'horizontal' } },
    { from: 7, to: 8, label: 'Представлена в виде', font: { align: 'horizontal' } },
    { from: 8, to: 5, label: 'Хранит', font: { align: 'horizontal' } },
    { from: 8, to: 13, label: 'Является', font: { align: 'horizontal' } },
    { from: 9, to: 2, label: 'Взаимодействует с', font: { align: 'horizontal' } },
    { from: 9, to: 3, label: 'Использует', font: { align: 'horizontal' } },
    { from: 9, to: 7, label: 'Взаимодействует с', font: { align: 'horizontal' } },
    { from: 9, to: 13, label: 'Является', font: { align: 'horizontal' } },
    { from: 9, to: 11, label: 'Взаимодействует с', font: { align: 'horizontal' } },
    { from: 10, to: 9, label: 'Может иметь', font: { align: 'horizontal' } },
    { from: 11, to: 3, label: 'Использует', font: { align: 'horizontal' } },
  ]));
  const [info, setInfo] = useState('');

  useEffect(() => {
    const data = { nodes, edges };
    const options = {
      physics: {
        barnesHut: {
          gravitationalConstant: -20000,
          centralGravity: 0.1,
          springLength: 95,
          springConstant: 0.004,
          damping: 10,
          avoidOverlap: 0
        },
      },
      nodes: {
        shape: 'dot',
        size: 20,
        font: {
          size: 20,
          color: '#000'
        },
        borderWidth: 2,
        shadow: true
      },
      edges: {
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'horizontal',
          roundness: 0.4
        },
        arrows: 'to',
        width: 2,
        shadow: true,
        color: {
          color: '#848484',
          highlight: '#848484',
          hover: '#848484',
          inherit: 'from',
          opacity: 0.8,
          cursor: 'pointer',
        }
      },
      interaction: { hover: true },
      manipulation: {
        enabled: true,
        addNode: function (data, callback) {
          callback(data);
        },
        editEdge: true,
        deleteNode: true,
        deleteEdge: true
      },
    };

    const network = new Network(networkRef.current, data, options);

    network.on('hoverNode', function (params) {
      const node = nodes.get(params.node);
      setInfo(node.title);
    });

    network.on('blurNode', function () {
      setInfo('');
    });
  }, [nodes, edges]);

  return (
    <div className='graph'>
      <div ref={networkRef} style={{ height: '500px' }} />
      {info && <div style={{ marginTop: '10px' }}>{info}</div>}
    </div>
  );
};

export default Graph;
