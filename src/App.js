import { useRoutes } from 'hookrouter';
import runes from './api/runes.api';

import NavButton from './components/NavButton/NavButton'
import Runewords from './pages/Runewords/Runewords'

import './App.css';

const routes = {
  '/:rune': ({rune}) => <Runewords rune={rune}/>,
}

function App() {
  const matches = useRoutes(routes);
  return (
    <div className="app">
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
