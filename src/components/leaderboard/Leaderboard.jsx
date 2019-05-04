import React from 'react';
import Entry from '../entries/Entry.jsx';

import { getEntriesForLeaderboard } from '../../helpers/scoring.js'
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
  })

  return (
    <div className="Leaderboard">
      <h2>{props.boardName} Leaderboard</h2>
      <h3>Pot: ${calculatePot(sortedEntries.length, PRICE_PER_ENTRY)}</h3>
      {entryComponents}
    </div>
  );
}

export default Leaderboard;
