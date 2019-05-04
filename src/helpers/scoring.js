export const getCurrentMaster = masterEntries => masterEntries[masterEntries.length - 1];

export const scoreAlive = (masterEntry, playerEntry) => {
  if (masterEntry.alive.length === 0) { return 0 }
  const distinctMasterLiving = [...new Set(masterEntry.alive)],
        correctAlive = playerEntry.alive.filter(char => distinctMasterLiving.includes(char));
  return [...new Set(correctAlive)] ? [...new Set(correctAlive)].length : 0
}

export const scoreDead = (masterEntry, playerEntry) => {
  if (masterEntry.dead.length === 0 && masterEntry.whiteWalker.length === 0) { return 0 }
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
      playerName: entry.playerName,
      leaderboard: entry.leaderboard,
      entry_doc: entry.entry_doc_href,
      score: scorePlayerEntry(masterEntry, entry)
    }
  });
}

export const sortEntriesByScore = scoredEntries => {
  return scoredEntries.sort((entry1, entry2) => {
    return entry2.score-entry1.score;
  });
}

export const getEntriesForLeaderboard = (masterEntries, playerEntries) => {
  const currentMaster = getCurrentMaster(masterEntries),
        scoredEntries = getScoredPlayerEntries(currentMaster, playerEntries);
  return sortEntriesByScore(scoredEntries);
}
