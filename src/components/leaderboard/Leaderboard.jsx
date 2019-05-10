import React from 'react';
import Entry from '../entries/Entry.jsx';

import '../../typography.css';

import { getEntriesForLeaderboard, getFinalLeaderboardString } from '../../helpers/scoring.js'
import { masterEntries, playerEntries } from '../entries/entryData';
import { PRICE_PER_ENTRY } from '../../helpers/constants.js';

function Leaderboard(props) {
  const calculatePot = (numEntries, pricePerEntry) => numEntries * pricePerEntry

  const entries = playerEntries.filter(entry => {
    return entry.leaderboard.toLowerCase() === props.boardName.toLowerCase()
  });

  const leaderboardEntries = getEntriesForLeaderboard(masterEntries, entries)
  const leaderboardPot = calculatePot(leaderboardEntries.length, PRICE_PER_ENTRY);

  const entryComponents = leaderboardEntries.map((entry, indx) => {
    return <Entry key={indx + 1} entry={entry} episodeNum={props.episodeNum} />
  });

  const getLeaderboardHeading = (leaderboardEntries, leaderboardPot) => {
    if (props.episodeNum === 6) {
      return getFinalLeaderboardString(props.boardName, leaderboardEntries, leaderboardPot);
    } else {
      return `${props.boardName} Leaderboard`
    }
  }

  const getLeaderboardPotDiv = () => {
    if (props.episodeNum !== 6) {
      return <h3 className="c--white">Pot: ${leaderboardPot}</h3>
    }
  }

  const getEndgameAttr = () => {
    if (props.episodeNum === 6) { return 'endgame' }
  }

  return (
    <div className="Leaderboard">
      <article>
        <table>
          <caption className={getEndgameAttr()}>
            <h2 className="c--white">{getLeaderboardHeading(leaderboardEntries, leaderboardPot)}</h2>
            {getLeaderboardPotDiv()}
          </caption>
          <thead>
            <tr>
              <th><h4 className="c--yellow">Rank</h4></th>
              <th><h4 className="c--blue">Player</h4></th>
              <th><h4 className="c--green">Score</h4></th>
              <th><h4 className="c--pink">Entry</h4></th>
            </tr>
          </thead>
          {entryComponents}
        </table>
      </article>
    </div>
  );
}

export default Leaderboard;
