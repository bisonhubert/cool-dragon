import React from 'react';

function Entry(props) {
  console.log(props.player)
  console.log(props.score)
  return (
    <div>
      <tr className="Entry">
        <td>{props.entry.player.toUpperCase()}</td>
        <td>{props.entry.score}</td>
        <td>
          <a href={props.entry.entry_doc_href}
             target="_blank"
             rel="noopener">Entry</a>
        </td>
      </tr>
    </div>
  );
}

export default Entry;
