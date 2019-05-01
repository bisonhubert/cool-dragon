import React from 'react';

import Entry from '../entries/Entry.jsx';
// ? why can't my function below access imports in this global scope?

function Leaderboard(props) {
  const getCurrentMasterEntry = (props) => {
    // current masterList is for the most recent episode
    // ? how to leverage constants in this function so i can get the episode list
    return props.masterEntries[props.masterEntries.length - 1]
  }

  // const calculateAlive = () => {

  // }

  // const calculateDead = () => {

  // }

  // const calculateWhiteWalker = () => {

  // }

  // const calculateBonuses = () => {

  // }

  // const scorePlayerEntry = () => {

  // }

  // const scorePlayerEntries = () => {

  // }

  // const groupAndRankPlayersByScore = () => {

  // }

  const entryComponents = props.entries.map(entry => <Entry entry={entry} key={entry.player} />);
  const masterEntry = getCurrentMasterEntry(props);
  // debugger;

  return (
    <div className="Leaderboard">
      {entryComponents}
    </div>
  );
}

export default Leaderboard;
