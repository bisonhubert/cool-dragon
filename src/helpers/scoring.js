// TODO (Bison): separate each function out into its own file and test file inside a folder
export const getCurrentMaster = masterEntries => masterEntries[masterEntries.length - 1];

export const scoreAlive = (masterEntry, playerEntry) => {
  if (masterEntry.alive.length === 0) { return 0 }
  const distinctMasterLiving = [...new Set(masterEntry.alive)],
        correctAlive = playerEntry.alive.filter(char => distinctMasterLiving.includes(char));
  return [...new Set(correctAlive)] ? [...new Set(correctAlive)].length : 0
}

export const scoreDead = (masterEntry, playerEntry) => {
  if (masterEntry.dead.length === 0 && masterEntry.whiteWalker.length == 0) { return 0 }
  const distinctMasterDead = [...new Set(masterEntry.dead.concat(masterEntry.whiteWalker))],
        guessedDead = [...new Set(playerEntry.whiteWalker.concat(playerEntry.dead))],
        correctDead = guessedDead.filter(char => distinctMasterDead.includes(char));
  return [...new Set(correctDead)] ? [...new Set(correctDead)].length : 0
}

export const scoreSinglePointVariant = (masterEntry, playerEntry) => {
  return scoreAlive(masterEntry, playerEntry) + scoreDead(masterEntry, playerEntry)
}

export const scorePlusTwoMinusOneVariant = (masterEntry, playerEntry) => {
  const distinctMasterWight = [...new Set(masterEntry.whiteWalker)],
        distinctPlayerWight = [...new Set(playerEntry.whiteWalker)],
        correctWight = distinctPlayerWight.filter(char => distinctMasterWight.includes(char)),
        incorrectWight = distinctPlayerWight.filter(char => !distinctMasterWight.includes(char));
  return correctWight.length * 2 - incorrectWight.length
}

export const scoreBonusQuestions = (masterEntry, playerEntry) => {
  let score = 0;
  for (let i = 0; i <= masterEntry.bonuses.length; i++) {
    if (masterEntry.bonuses[i] && playerEntry.bonuses[i]) {
      if (masterEntry.bonuses[i].toLowerCase() === playerEntry.bonuses[i].toLowerCase()) {
        score += 5
      }
    }
  }
  return score
}

export const scorePlayerEntry = (masterEntry, playerEntry) => {
  const aliveDeadScore = scoreSinglePointVariant(masterEntry, playerEntry),
        wightScore = scorePlusTwoMinusOneVariant(masterEntry, playerEntry),
        bonusScore = scoreBonusQuestions(masterEntry, playerEntry);
  return aliveDeadScore + wightScore + bonusScore
}

export const getScoredPlayerEntries = (masterEntry, playerEntries) => {
  return playerEntries.map(entry => {
    return {
      player: entry.player,
      leaderboard: entry.leaderboard,
      entry_doc: entry.entry_doc_href,
      score: scorePlayerEntry(masterEntry, entry)
    }
  });
}

const sortEntriesByScore = scoredEntries => {
  return scoredEntries.sort((entry1, entry2) => {
    return entry2.score-entry1.score;
  });
}

const sortGroupedRankByName = groupedRank => {
  return groupedRank.sort(function(p1, p2){
    if(p1.player < p2.player) { return -1; }
    if(p1.player > p2.player) { return 1; }
    return 0;
  })
}

const groupEntriesByScore = sortedEntries => {
  // in [ {... score: 57}, {... score: 99}, {... score 6}, {... score 57} ]
  // out [[{... score: 99}], [{... score: 57}, {... score: 57}], [{... score 6}]]
  let groupedEntries = [],
      groupedRank = [];
  sortedEntries.forEach((entry, indx) => {
    if (groupedRank.length === 0) {
      groupedRank.push(entry)
    } else {
      if (groupedRank[0].score === entry.score) {
        groupedRank.push(entry)
      } else {
        const sortedGroupedRank = sortGroupedRankByName(groupedRank);
        groupedEntries.push(sortedGroupedRank)
        groupedRank = [entry]
      }
    }
    if (indx === sortedEntries.length - 1) {
      groupedEntries.push(groupedRank)
    }
  });
  return groupedEntries
}

export const groupAndRankScoredEntries = scoredEntries => {
  const sortedEntries = sortEntriesByScore(scoredEntries);
  return groupEntriesByScore(sortedEntries)
}
