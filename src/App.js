// TODO (Bison): make dat dragon spinnn
// TODO (Bison): add new component, Bonus.jsx

import React from 'react';
import './App.css';

import Leaderboard from './components/leaderboard/Leaderboard';

import { ARYA, CERSEI, LEADERBOARDS } from './helpers/constants.js';

import nightKingKiller from './images/arya-night-king-2.gif'
import ironThroneSitter from './images/cersei-throne.gif'
import coolDragon from './images/cool-dragon-2.gif'

function App() {
  const leaderboardComponents = LEADERBOARDS.map((boardName, indx) => {
    return <Leaderboard boardName={boardName} key={indx + 1} />
  });

  return (
    <div className="App">
      <header className="">
        <h1>Cool Dragon</h1>
        <img src={coolDragon} alt="Flying dragon animation that changes colors" className="hidden"/>
      </header>
      <main>
        {leaderboardComponents}
      </main>
      <footer>
        <article className="w-100p">
          <h4>Who kills the Night King?</h4>
          <h5>{ARYA}</h5>
          <img src={nightKingKiller} alt="Arya killing The Night King" />
        </article>
        <article className="w-100p">
          <h4>Who holds the Iron Throne at the end?</h4>
          <h5>Currently: {CERSEI}</h5>
          <img src={ironThroneSitter} alt="Cersei rocking the Iron Throne" />
        </article>
      </footer>
    </div>
  );
}

export default App;
