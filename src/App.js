import React from 'react';
import './App.css';

import Leaderboard from './components/leaderboard/Leaderboard';

import { bravaEntries, homieEntries } from './components/entries/entryData';
// import icon from './images/cool-dragon-2.gif';
// import entries from './entries/master-entries.csv'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article>
          <h2>Brava Leaderboard</h2>
          <h3>Pot: $75</h3>
          <Leaderboard entries={bravaEntries} />
        </article>
        <article>
          <h2>Homies Leaderboard</h2>
          <h3>Pot: $30</h3>
          <Leaderboard entries={homieEntries} />
        </article>
        <article>
          <h4>Who kills the Night King?</h4>
          <h5>dunno yet</h5>
        </article>
        <article>
          <h4>Who holds the Iron Throne at the end?</h4>
          <h5>dunno yet</h5>
        </article>
      </header>
    </div>
  );
}

export default App;
