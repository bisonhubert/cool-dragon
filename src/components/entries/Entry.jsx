import React from 'react';

function Entry(props) {
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  const getFirstPlaceRank = () => {
    if (props.episodeNum === 6 && props.entry.rank === 1) { return <span role="img" aria-label="trophy">🏆</span>}
    return props.entry.rank
  }

  return (
    <tbody className="Entry">
      <tr>
        <td><h5 className="c--yellow">{getFirstPlaceRank()}</h5></td>
        <td><h5 className="c--blue">{capitalizeFirstLetter(props.entry.playerName)}</h5></td>
        <td><h5 className="c--green">{props.entry.score}</h5></td>
        <td><a href={props.entry.entry_doc}
             target="_blank"
             rel="noopener noreferrer"><h5 className="link__c--pink"><span role="img" aria-label="paper and pencil">📝</span></h5>
        </a></td>
      </tr>
    </tbody>
  );
}

export default Entry;
