import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import './graph.css'

const Graph = () => {
  const networkRef = useRef(null);
  const [nodes, setNodes] = useState(new DataSet([
    { id: 1, label: "Главный сервис", size: 25 },
    { id: 2, label: "API", size: 15 },
    { id: 3, label: "Система анализа и нейросеть", size: 15 },
    { id: 4, label: "Модуль загрузки данных", size: 15 },
    { id: 5, label: "Пользовательский интерфейс", size: 15 },
    { id: 6, label: "Модуль прогнозирования и моделирования", size: 15 },
    { id: 7, label: "NFT архивация", size: 15 },
    { id: 8, label: "Информационная база", size: 15 },
    { id: 9, label: "Нейросеть", size: 15 },
    // Добавьте другие узлы здесь
  ]));

  const [edges, setEdges] = useState(new DataSet([
    { from: 1, to: 2, label: 'Имеет', font: { align: 'horizontal' } },
    { from: 1, to: 3, label: 'Имеет', font: { align: 'horizontal' } },
    { from: 1, to: 4, label: 'Имеет', font: { align: 'horizontal' } },
    { from: 1, to: 5, label: 'Имеет', font: { align: 'horizontal' } },
    { from: 1, to: 6, label: 'Имеет', font: { align: 'horizontal' } },

    { from: 3, to: 9, label: 'Использует', font: { align: 'horizontal' } },
    { from: 3, to: 7, label: 'Передача данных', font: { align: 'horizontal' } },
    { from: 3, to: 4, label: 'Анализирует', font: { align: 'horizontal' } },
    { from: 3, to: 8, label: 'Передача данных', font: { align: 'horizontal' } },

    { from: 4, to: 7, label: 'Конвертация', font: { align: 'horizontal' } },
    { from: 4, to: 8, label: 'Взаимодействие', font: { align: 'horizontal' } },
    { from: 4, to: 5, label: 'Взаимодействие', font: { align: 'horizontal' } },

    { from: 7, to: 8, label: 'Передача данных', font: { align: 'horizontal' } },

    { from: 8, to: 5, label: 'Взаимодействие', font: { align: 'horizontal' } },
    { from: 8, to: 6, label: 'Взаимодействие', font: { align: 'horizontal' } },

    { from: 5, to: 3, label: 'Отправляет запрос', font: { align: 'horizontal' } },
    { from: 5, to: 6, label: 'Отправляет запрос', font: { align: 'horizontal' } },

    { from: 6, to: 9, label: 'Использует', font: { align: 'horizontal' } },
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
          // Здесь можно добавить логику для добавления нового узла
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
