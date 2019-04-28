import React from 'react';
import './App.css';

import Leaderboard from './components/leaderboard/Leaderboard';

// import icon from './images/cool-dragon-2.gif';
// import entries from './entries/master-entries.csv'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Leaderboard</h1>
        <Leaderboard />
      </header>
    </div>
  );
}

export default App;
