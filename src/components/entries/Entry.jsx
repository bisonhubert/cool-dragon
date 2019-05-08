// TODO (Bison): get player rank
// TODO (Bison): capitalize props.entry.playerName

import React from 'react';

function Entry(props) {
  return (
    <div className="Entry">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
            <th>Entry Doc</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.entry.rank}</td>
            <td>{props.entry.playerName}</td>
            <td>{props.entry.score}</td>
            <td>
              <a href="{props.entry.entry_doc}"
                 target="_blank"
                 rel="noopener noreferrer">Entry</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Entry;
