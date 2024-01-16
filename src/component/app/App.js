import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
import Glossary from '../glossary/glossary';
import Graph from '../graph/graph';


function App() {
  return (
    <Router>
      <main className="container">
        {/* <h1 className="title">Глоссарий по теме:</h1>
        <p className="text-title">Анализ научных работ в области образования на основе блокчейн-датасета и нейросетевых технологий</p> */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Граф</Link>
            </li>
            <li>
              <Link to="/glossary">Глоссарий</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Graph />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
