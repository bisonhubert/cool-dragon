import React from 'react';
import Entry from '../entries/Entry.jsx';

import './Leaderboard.css';
import '../../typography.css';

import { getEntriesForLeaderboard } from '../../helpers/scoring.js'
import { BRAVA } from '../../helpers/constants.js';
import { masterEntries, playerEntries } from '../entries/entryData';
import { PRICE_PER_ENTRY } from '../../helpers/constants.js';

function Leaderboard(props) {
  const calculatePot = (numEntries, pricePerEntry) => numEntries * pricePerEntry

  const entries = playerEntries.filter(entry => {
    return entry.leaderboard.toLowerCase() === props.boardName.toLowerCase()
  });

  const sortedEntries = getEntriesForLeaderboard(masterEntries, entries)

  const entryComponents = sortedEntries.map((entry, indx) => {
    return <Entry key={indx + 1} entry={entry} />
  });

  return (
    <div className="Leaderboard">
      <article>
        <table>
          <caption>
            <h2 className="c--white">{props.boardName} Leaderboard</h2>
            <h3 className="c--white">Pot: ${calculatePot(sortedEntries.length, PRICE_PER_ENTRY)}</h3>
          </caption>
          <thead>
            <tr>
              <th><h4>Rank</h4></th>
              <th><h4>Player</h4></th>
              <th><h4>Score</h4></th>
              <th><h4>Entry Doc</h4></th>
            </tr>
          </thead>
          {entryComponents}
        </table>
      </article>
    </div>
  );
}

export default Leaderboard;
