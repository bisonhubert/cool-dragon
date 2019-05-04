import React from 'react';
// import Entry from '../entries/Entry.jsx';

// import { getEntriesForLeaderboard } from '../../helpers/scoring.js'
// import { masterEntries, playerEntries } from './components/entries/entryData';
// import { PRICE_PER_ENTRY } from './helpers/constants.js';

function Leaderboard(props) {
  // name leaderboard from props
  // calculate pot for leaderboard
  // map entries w/ props
  // const entryComponents = props.entries.map(entry => <Entry entry={entry} key={entry.player} />);


  // const entries = playerEntries.filter(entry => entry.leaderboard === props.boardName)
  // const sortedEntries = getEntriesForLeaderboard(masterEntries, playerEntries)
  // const calculatePot = (numEntries, pricePerEntry) => numEntries * pricePerEntry



  return (
    <div className="Leaderboard">
      <h1>{props.boardName}</h1>
    </div>
  );
}

export default Leaderboard;
