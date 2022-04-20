import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useRoutes } from 'hookrouter';
import runes from './api/runes.api';

import NavButton from './components/NavButton/NavButton'
import Runewords from './pages/Runewords/Runewords'

import './App.scss';

const routes = {
  '/:rune': ({rune}) => <Runewords rune={rune}/>,
}

function App() {
  const matches = useRoutes(routes);
  return (
    <div className="app">
      <div className="app__bg"></div>
      <nav className="app__nav">
        {runes.map(rune => (
          <NavButton name={rune.name} key={rune}/>
        ))}
      </nav>
      <main>
        {matches || <Runewords rune="el"/> }
      </main>
    </div>
  );
}

export default App;
