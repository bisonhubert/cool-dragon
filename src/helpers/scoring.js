// TODO (Bison): separate each function out into its own file and test file inside a folder
export const getCurrentMaster = masterEntries => masterEntries[masterEntries.length - 1];

export const scoreAlive = (masterEntry, playerEntry) => {
  if (masterEntry.alive.length === 0) { return 0 }
  const distinctMasterLiving = [...new Set(masterEntry.alive)],
        correctAlive = playerEntry.alive.filter(char => distinctMasterLiving.includes(char));
  return [...new Set(correctAlive)].length
}

export const scoreDead = (masterEntry, playerEntry) => {
  if (masterEntry.dead.length === 0 && masterEntry.whiteWalker.length == 0) { return 0 }
  const distinctMasterDead = [...new Set(masterEntry.dead.concat(masterEntry.whiteWalker))],
        guessedDead = [...new Set(playerEntry.whiteWalker.concat(playerEntry.dead))],
        correctDead = guessedDead.filter(char => distinctMasterDead.includes(char));
  return [...new Set(correctDead)].length
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

export const scorePlayerEntry = () => {

}

export const scorePlayerEntries = () => {

}

export const groupAndRankPlayersByScore = () => {

}

export const getEntriesForLeaderboard = () => {

}
