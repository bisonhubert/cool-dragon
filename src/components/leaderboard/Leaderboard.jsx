import React from 'react';

import Entry from '../entries/Entry.jsx';
// import { getCurrentMasterEntry } from '../../helpers/scoring.js'

function Leaderboard(props) {
  const entryComponents = props.entries.map(entry => <Entry entry={entry} key={entry.player} />);
  // const masterEntry = getCurrentMasterEntry(props);
  // debugger;

  return (
    <div className="Leaderboard">
      {entryComponents}
    </div>
  );
}

export default Leaderboard;
