import React, { useState } from 'react';
import './glossary.css'

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const glossary = [
    {
      term: "Главный сервис",
      description: "Это основная платформа, которая обеспечивает взаимодействие всех модулей и обрабатывает запросы пользователей"
    },
    {
      term: "API ",
      description: "Интерфейс для взаимодействия с внешними системами и источниками данных. Он может использоваться для получения информации из различных источников, таких как базы данных"
    },
    {
      term: "Модуль прогнозирования и моделирования",
      description: "Этот модуль использует алгоритмы машинного обучения или статистические модели для анализа данных и предсказания будущих трендов или результатов"
    },
    {
      term: "Модуль загрузки данных",
      description: "Этот модуль отвечает за сбор, обработку и хранение данных, которые затем используются другими модулями"
    },
    {
      term: "Система анализа и нейросеть",
      description: "Это система, которая использует нейронные сети для анализа больших объемов данных и выявления закономерностей или тенденций."
    },
    {
      term: "NFT архивация",
      description: "Это процесс сохранения и управления NFT, что может обеспечить доказуемую уникальность и ценность данных."
    },
    {
      term: "Информационная база",
      description: "Это централизованное хранилище данных, которое используется для хранения, управления и извлечения информации."
    },
    {
      term: "Пользовательский интерфейс",
      description: "Это интерфейс, через который пользователи могут взаимодействовать с системой."
    },
    {
      term: "Нейросеть",
      description: "Это вероятно часть системы анализа и нейросеть, которая выполняет обработку естественного языка (NLP) и поиск информации"
    },
  ];

  const filteredGlossary = glossary.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='glossary-container'>
      <input
        type="text"
        placeholder="Search term..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul className='glossary-list'>
        {filteredGlossary.map((item, index) => (
          <li key={index}>
            <b>{item.term}:</b> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glossary;