// TODO (Bison): make this a table
// TODO (Bison): get player rank
// TODO (Bison): capitalize props.entry.playerName

import React from 'react';

function Entry(props) {
  const computeRank = entry => {
    // TODO (Bison): compute rank
    return 1
  }

  return (
    <div className="Entry">
      <article className="col">
        <h4>Rank: {computeRank(props.entry)}</h4>
      </article>
      <article className="col">
        <h4>Player: {props.entry.playerName}</h4>
      </article>
      <article className="col">
        <h4>Score: {props.entry.score}</h4>
      </article>
      <article className="col">
        <a href={props.entry.entry_doc}
             target="_blank"
             rel="noopener noreferrer">Entry</a>
      </article>
    </div>
  );
}

export default Entry;
