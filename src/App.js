import React from 'react';
import './App.css';

// TODO (Bison): import only masterEntries, playerEntries and filter before passing to each leaderboard
// TODO (Bison): calculate pot of leaderboard from within leaderboard using counter
// TODO (Bison): include master entry at the bottom of the file, below bonuses
import { bravaEntries, homieEntries, masterEntries, playerEntries } from './components/entries/entryData';
import { BRAVA, HOMIES } from './helpers/constants.js';
import Leaderboard from './components/leaderboard/Leaderboard';

import nightKingKiller from './images/arya-night-king-2.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article className="w-100p">
          <h2>Brava Leaderboard</h2>
          <h3>Pot: $75</h3>
          <Leaderboard entries={bravaEntries} masterEntries={masterEntries} playerEntries={playerEntries} leaderboard={BRAVA} />
        </article>
        <article className="w-100p">
          <h2>Homies Leaderboard</h2>
          <h3>Pot: $30</h3>
          <Leaderboard entries={homieEntries} masterEntries={masterEntries} playerEntries={playerEntries} leaderboard={HOMIES} />
        </article>
        <article className="w-100p">
          <h4>Who kills the Night King?</h4>
          <img src={nightKingKiller} alt="Arya killing The Night King" />
        </article>
        <article className="w-100p">
          <h4>Who holds the Iron Throne at the end?</h4>
          <h5>dunno yet</h5>
        </article>
      </header>
    </div>
  );
}

export default App;
