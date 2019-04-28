import React from 'react';

import Entry from '../entries/Entry.jsx';
import entryData from '../entries/entryData.js';

function Leaderboard() {
  const entryComponents = entryData.map(entry => <Entry player={entry.player} />);

  return (
    <div className="Leaderboard">
      <header>
        <table>
          {entryComponents}
        </table>
      </header>
    </div>
  );
}

export default Leaderboard;
