import React from 'react';

import Entry from '../entries/Entry.jsx';

function Leaderboard(props) {
  const entryComponents = props.entries.map(entry => <Entry entry={entry} />);

  return (
    <div className="Leaderboard">
      {entryComponents}
    </div>
  );
}

export default Leaderboard;
