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
      entry_doc: entry.entry_doc,
      score: scorePlayerEntry(masterEntry, entry)
    }
  });
}

export const sortEntriesByScore = scoredEntries => {
  return scoredEntries.sort((entry1, entry2) => {
    return entry2.score-entry1.score;
  });
}

export const rankEntries = sortedEntries => {
  let rank = 1, prevIndx = 0, playerTieCount = 1;
  return sortedEntries.map((entry, indx) => {
    if (indx !== 0 && sortedEntries[prevIndx].score === entry.score) { playerTieCount++ }
    if (indx !== 0 && sortedEntries[prevIndx].score !== entry.score) {
      if (playerTieCount !== 1) {
        rank += playerTieCount
        playerTieCount = 1
      } else {
        rank++
      }
    }
    entry['rank'] = rank
    prevIndx = indx
    return entry
  });
}

export const getEntriesForLeaderboard = (masterEntries, playerEntries) => {
  const currentMaster = getCurrentMaster(masterEntries),
        scoredEntries = getScoredPlayerEntries(currentMaster, playerEntries),
        sortedEntries = sortEntriesByScore(scoredEntries);
        return rankEntries(sortedEntries);
}

const getWinnersOfLeaderboard = rankedEntries => {
  return rankedEntries.filter(entry => {
    return entry.rank === 1
  });
}

const getWinnersStr = rankedEntries => {
  let winnersStr;
  const winners = getWinnersOfLeaderboard(rankedEntries),
        capitalizePlayerName = str => str.charAt(0).toUpperCase() + str.slice(1);
  winners.forEach((winner, indx) => {
    if (indx > 0) {
      winnersStr += ` & ${capitalizePlayerName(winner.playerName)}`
    } else {
      winnersStr = capitalizePlayerName(winner.playerName)
    }
  });
  return winnersStr;
}

const computeWinnerPayout = (winnerStr, leaderboardPot) => {
  const winnerCount = winnerStr.split('&').length;
  if (winnerCount > 1) { return `$${leaderboardPot / winnerCount}` }
  return `$${leaderboardPot}`;
}

export const getFinalLeaderboardString = (boardName, rankedEntries, leaderboardPot) => {
  const winnerStr = getWinnersStr(rankedEntries),
        winnerPayout = computeWinnerPayout(winnerStr, leaderboardPot);
  return `Congratulations ${winnerStr}! You just won ${winnerPayout}!!`;
}
