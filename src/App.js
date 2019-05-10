// TODO (Bison): add special winner text to getPageHeading
// TODO (Bison): add new component, Bonus.jsx

import React from 'react';
import './reset.css';
import './App.css';


import Leaderboard from './components/leaderboard/Leaderboard';

import { ARYA, CERSEI, LEADERBOARDS } from './helpers/constants.js';
import { masterEntries } from './components/entries/entryData';
import { getCurrentMaster } from './helpers/scoring.js';

import nightKingKiller from './images/arya-night-king-2.gif'
import ironThroneSitter from './images/cersei-throne.gif'
import coolDragon from './images/cool-dragon-2.gif'

function App() {
  const currentMaster = getCurrentMaster(masterEntries);

  const leaderboardComponents = LEADERBOARDS.map((boardName, indx) => {
    return <Leaderboard boardName={boardName} key={indx + 1} episodeNum={currentMaster.episode}/>
  });

  const getPageHeading = (episodeNum) => {
    if (episodeNum === 6) {
      return `GAME OVER`
    } else {
      return `Scores After Episode ${currentMaster.episode}`
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="c--white">{getPageHeading(currentMaster.episode)}</h1>
        <article className="App-logo-container">
          <img src={coolDragon} alt="Flying dragon animation that changes colors" className="App-logo"/>
        </article>
      </header>
      <main>
        {leaderboardComponents}
      </main>
      <footer className="Bonus">
        <article className="w--100p">
          <h4 className="c--white">Who kills the Night King?</h4>
          <h6 className="c--white">{ARYA}</h6>
          <article className="Footer-img-container">
            <img src={nightKingKiller} alt="Arya killing The Night King" className="w--100p" />
          </article>
        </article>
        <article className="w--100p">
          <h4 className="c--white">Who holds the Iron Throne?</h4>
          <h6 className="c--white">{CERSEI}</h6>
          <article className="Footer-img-container">
            <img src={ironThroneSitter} alt="Cersei rocking the Iron Throne" className="w--100p" />
          </article>
        </article>
      </footer>
    </div>
  );
}

export default App;
