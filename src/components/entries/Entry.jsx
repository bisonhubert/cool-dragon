import React from 'react';

function Entry(props) {
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <tbody className="Entry">
      <tr>
        <td><h5 className="c--yellow">{props.entry.rank}</h5></td>
        <td><h5 className="c--blue">{capitalizeFirstLetter(props.entry.playerName)}</h5></td>
        <td><h5 className="c--green">{props.entry.score}</h5></td>
        <td><a href="{props.entry.entry_doc}"
             target="_blank"
             rel="noopener noreferrer"><h5 className="link__c--pink">Entry</h5>
        </a></td>
      </tr>
    </tbody>
  );
}

export default Entry;
