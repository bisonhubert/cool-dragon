import * as fixtures from './fixtures.js';
import * as scoring from './scoring.js'

test('getCurrentMaster returns latest entry', () => {
  expect(scoring.getCurrentMaster(fixtures.singleEntry)).toBe(fixtures.singleEntry[0]);
  expect(scoring.getCurrentMaster(fixtures.multipleEntries)).toBe(fixtures.multipleEntries[fixtures.multipleEntries.length - 1]);
  expect(scoring.getCurrentMaster(fixtures.multipleEntriesReverse)).toBe(fixtures.multipleEntriesReverse[fixtures.multipleEntriesReverse.length - 1]);
});

test('scoreAlive returns 0 when no characters are alive', () => {
  expect(scoring.scoreAlive(fixtures.entryEp1, fixtures.entryEp1)).toBe(0);
  expect(scoring.scoreAlive(fixtures.entryEp1, fixtures.aryaAlive)).toBe(0);
});

test('scoreAlive returns 0 when no characters match living master entry', () => {
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.podAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.aryaPodAlive, fixtures.drogonAlive)).toBe(0);
});

test("scoreAlive scores a point for every correct guess in player's alive column", () => {
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.aryaAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.aryaPodAlive, fixtures.drogonPodAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.aryaPodAlive, fixtures.aryaPodAlive)).toBe(2);
  expect(scoring.scoreAlive(fixtures.aliveLongList, fixtures.aliveLongList)).toBe(fixtures.aliveLongList.alive.length);
});

test('scoreAlive does not count white walker characters as alive', () => {
  expect(scoring.scoreAlive(fixtures.aryaAlivePodDeadDrogonWight, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.aryaAliveDrogonDeadWightImplied, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.drogonAliveAryaDeadEddPodWight, fixtures.drogonPodAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.drogonPodAlive)).toBe(1);
});

test('scoreAlive only counts distinct living characters in any entry', () => {
  expect(scoring.scoreAlive(fixtures.aryaDupAlive, fixtures.aryaAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonPodDupAlive, fixtures.drogonAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonPodDupAlive, fixtures.drogonPodAlive)).toBe(2);
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.aryaDupAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonAlive, fixtures.drogonPodDupAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonPodAlive, fixtures.drogonPodDupAlive)).toBe(2);
});

test('scoreDead returns 0 points when no characters are dead', () => {
  expect(scoring.scoreDead(fixtures.entryEp1, fixtures.entryEp1)).toBe(0);
  expect(scoring.scoreDead(fixtures.entryEp1, fixtures.aryaDead)).toBe(0);
});

test('scoreDead scores 0 points when no characters match dead master entry', () => {
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.podDead)).toBe(0);
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.drogonDead)).toBe(0);
  expect(scoring.scoreDead(fixtures.aryaPodDead, fixtures.drogonDead)).toBe(0);
});

test("scoreDead scores a point for every correct guess in player's dead column", () => {
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.aryaDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.aryaPodDead, fixtures.drogonPodDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.aryaPodDead, fixtures.aryaPodDead)).toBe(2);
  expect(scoring.scoreDead(fixtures.deadLongList, fixtures.deadLongList)).toBe(fixtures.deadLongList.dead.length);
});

test('scoreDead only counts distinct dead characters in any entry', () => {
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.aryaDupDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDupDead, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDupDead, fixtures.drogonPodDead)).toBe(2);
  expect(scoring.scoreDead(fixtures.aryaDupDead, fixtures.aryaDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonDead, fixtures.drogonPodDupDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDead, fixtures.drogonPodDupDead)).toBe(2);
});

test('scoreDead counts white walker characters as dead', () => {
  expect(scoring.scoreDead(fixtures.aryaAlivePodDeadDrogonWight, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonDead, fixtures.aryaAliveDrogonDeadWightImplied)).toBe(1);
  expect(scoring.scoreDead(fixtures.aryaAliveDrogonDeadWightImplied, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.aryaAliveDrogonDeadWightImplied, fixtures.drogonPodDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDead, fixtures.aryaAliveDrogonDeadWightImplied)).toBe(1);
  expect(scoring.scoreDead(fixtures.eddPodDead, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
  expect(scoring.scoreDead(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.eddPodDead)).toBe(2);
  expect(scoring.scoreDead(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.eddPodWight)).toBe(2);
  expect(scoring.scoreDead(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.eddPodWightImpliedDead)).toBe(2);
  expect(scoring.scoreDead(fixtures.eddPodDead, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
  expect(scoring.scoreDead(fixtures.eddPodWight, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
  expect(scoring.scoreDead(fixtures.eddPodWightImpliedDead, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
});

test('scoreSinglePointVariant returns 0 points when no characters are alive or dead', () => {
  expect(scoring.scoreSinglePointVariant(fixtures.entryEp1, fixtures.entryEp1)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.entryEp1, fixtures.aryaAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.entryEp1, fixtures.aryaDead)).toBe(0);
});

test('scoreSinglePointVariant scores 0 points when no characters match living or dead master entry', () => {
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlive, fixtures.podAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlive, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodAlive, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDead, fixtures.podDead)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDead, fixtures.drogonDead)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDead, fixtures.drogonDead)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlivePodDead, fixtures.podAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlivePodDead, fixtures.aryaDead)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDeadPodAlive, fixtures.aryaAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDeadPodAlive, fixtures.podDead)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlivePodDead, fixtures.aryaDeadPodAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDeadPodAlive, fixtures.aryaAlivePodDead)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodAliveDrogonDead, fixtures.aryaPodDeadDrogonAlive)).toBe(0);
});

test("scoreSinglePointVariant scores a point for every correct guess in player's alive/dead column", () => {
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlive, fixtures.aryaAlive)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodAlive, fixtures.drogonPodAlive)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodAlive, fixtures.aryaPodAlive)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDead, fixtures.aryaDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDead, fixtures.drogonPodDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDead, fixtures.aryaPodDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlivePodDead, fixtures.aryaAlivePodDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodAliveDrogonDead, fixtures.aryaPodAliveDrogonDead)).toBe(3);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDrogonAliveEddDead, fixtures.aryaPodAlive)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDrogonAliveEddDead, fixtures.drogonPodAlive)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.eddAliveAryaPodDrogonDead, fixtures.aryaPodDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.eddAliveAryaPodDrogonDead, fixtures.drogonPodDead)).toBe(2);
});

test('scoreSinglePointVariant only counts distinct characters in any entry', () => {
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDupAlive, fixtures.aryaAlive)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonPodDupAlive, fixtures.drogonAlive)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonPodDupAlive, fixtures.drogonPodAlive)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDead, fixtures.aryaDupDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonDead, fixtures.drogonPodDupDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonPodDead, fixtures.drogonPodDupDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDrogonAliveEddDeadDup, fixtures.aryaPodDrogonAliveEddDead)).toBe(4);
  expect(scoring.scoreSinglePointVariant(fixtures.eddAliveAryaPodDrogonDeadDup, fixtures.eddAliveAryaPodDrogonDead)).toBe(4);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlive, fixtures.aryaDupAlive)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonAlive, fixtures.drogonPodDupAlive)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonPodAlive, fixtures.drogonPodDupAlive)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaDupDead, fixtures.aryaDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonPodDupDead, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonPodDupDead, fixtures.drogonPodDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaPodDrogonAliveEddDead, fixtures.aryaPodDrogonAliveEddDeadDup)).toBe(4);
  expect(scoring.scoreSinglePointVariant(fixtures.eddAliveAryaPodDrogonDead, fixtures.eddAliveAryaPodDrogonDeadDup)).toBe(4);
});

test('scoreSinglePointVariant counts white walker characters as dead and not alive', () => {
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAlivePodDeadDrogonWight, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.aryaAliveDrogonDeadWightImplied, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.eddPodDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.eddPodWight)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.eddPodWightImpliedDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonDead, fixtures.aryaAlivePodDeadDrogonWight)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonDead, fixtures.aryaAliveDrogonDeadWightImplied)).toBe(1);
  expect(scoring.scoreSinglePointVariant(fixtures.eddPodDead, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.eddPodWight, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.eddPodWightImpliedDead, fixtures.drogonAliveAryaDeadEddPodWightBothImplied)).toBe(2);
});

test('scoreSinglePointVariant does not count duplicate implied dead guesses', () => {
  expect(scoring.scoreSinglePointVariant(fixtures.drogonAliveAryaDeadEddPodWightBothImpliedDup, fixtures.eddPodWight)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.drogonAliveAryaDeadEddPodWightBothImpliedDup, fixtures.eddPodWightImpliedDead)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.eddPodWight, fixtures.drogonAliveAryaDeadEddPodWightBothImpliedDup)).toBe(2);
  expect(scoring.scoreSinglePointVariant(fixtures.eddPodWightImpliedDead, fixtures.drogonAliveAryaDeadEddPodWightBothImpliedDup)).toBe(2);
})

test('scorePlusTwoMinusOneVariant scores 2 points for a correct white walker guess', () => {
  expect(scoring.scorePlusTwoMinusOneVariant(fixtures.noWight, fixtures.noWight)).toBe(0);
  expect(scoring.scorePlusTwoMinusOneVariant(fixtures.eddWight, fixtures.eddWight)).toBe(2);
  expect(scoring.scorePlusTwoMinusOneVariant(fixtures.eddPodWight, fixtures.eddPodWight)).toBe(4);
})

test('scorePlusTwoMinusOneVariant subtracts 1 point for an incorrect white walker guess', () => {
  expect(scoring.scorePlusTwoMinusOneVariant(fixtures.noWight, fixtures.eddWight)).toBe(-1);
  expect(scoring.scorePlusTwoMinusOneVariant(fixtures.noWight, fixtures.eddPodWight)).toBe(-2);
  expect(scoring.scorePlusTwoMinusOneVariant(fixtures.eddWight, fixtures.eddPodWight)).toBe(1);
})

test('scoreBonusQuestions scores 0 points if bonus questions are not answered correctly', () => {
  expect(scoring.scoreBonusQuestions(fixtures.noBonusAnswered, fixtures.noBonusAnswered)).toBe(0);
  expect(scoring.scoreBonusQuestions(fixtures.noBonusAnswered, fixtures.firstBonusAnswered)).toBe(0);
  expect(scoring.scoreBonusQuestions(fixtures.noBonusAnswered, fixtures.secondBonusAnswered)).toBe(0);
  expect(scoring.scoreBonusQuestions(fixtures.noBonusAnswered, fixtures.bothBonusSame)).toBe(0);
})

test('scoreBonusQuestions scores 5 points if one bonus question is answered correctly', () => {
  expect(scoring.scoreBonusQuestions(fixtures.firstBonusArya, fixtures.firstBonusArya)).toBe(5);
  expect(scoring.scoreBonusQuestions(fixtures.secondBonusArya, fixtures.secondBonusArya)).toBe(5);
  expect(scoring.scoreBonusQuestions(fixtures.bothBonusArya, fixtures.firstBonusArya)).toBe(5);
  expect(scoring.scoreBonusQuestions(fixtures.bothBonusArya, fixtures.secondBonusArya)).toBe(5);
  expect(scoring.scoreBonusQuestions(fixtures.bothBonusArya, fixtures.bonus1AryaBonus2Pod)).toBe(5);
  expect(scoring.scoreBonusQuestions(fixtures.bonus1AryaBonus2Pod, fixtures.bothBonusArya)).toBe(5);
})

test('scoreBonusQuestions scores 10 points if both bonus questions are answered correctly', () => {
  expect(scoring.scoreBonusQuestions(fixtures.bothBonusArya, fixtures.bothBonusArya)).toBe(10);
  expect(scoring.scoreBonusQuestions(fixtures.bonus1AryaBonus2Pod, fixtures.bonus1AryaBonus2Pod)).toBe(10);
})

test("scoreBonusQuestions doesn't score more than 10 points", () => {
  expect(scoring.scoreBonusQuestions(fixtures.bothBonusArya, fixtures.extraBonusArya)).toBe(10);
})

test('scorePlayerEntry correctly scores a single entry', () => {
  expect(scoring.scorePlayerEntry(fixtures.entry1, fixtures.entry1)).toBe(9);
  expect(scoring.scorePlayerEntry(fixtures.entry2, fixtures.entry2)).toBe(10);
  expect(scoring.scorePlayerEntry(fixtures.entry3, fixtures.entry3)).toBe(18);
  expect(scoring.scorePlayerEntry(fixtures.entry4, fixtures.entry4)).toBe(18);
  expect(scoring.scorePlayerEntry(fixtures.entry5, fixtures.entry4)).toBe(-1);
})

test('getScoredPlayerEntries should return modeled entry object', () => {
  expect(scoring.getScoredPlayerEntries(fixtures.masterEntries1[0], fixtures.playerEntries1)).toEqual(
    [
      { playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 },
      { playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 2 },
      { playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: -3 }
    ]
  );
  expect(scoring.getScoredPlayerEntries(fixtures.masterEntries2[1], fixtures.playerEntries1)).toEqual(
    [
      { playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 },
      { playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
      { playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 }
    ]
  );
  expect(scoring.getScoredPlayerEntries(fixtures.masterEntries2[1], fixtures.playerEntriesTie1)).toEqual(
    [
      { playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 },
      { playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
      { playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 },
      { playerName: 'toadTie', leaderboard: 'homies', entry_doc: 'docToadTie', score: 14 }
    ]
  );
})

test('groupAndRankScoredEntries collects entries by score in descending order', () => {
  expect(scoring.groupAndRankScoredEntries(fixtures.scoredEntries1)).toEqual(
    [
      [{ playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 }],
      [{ playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 }],
      [{ playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 }]
    ],
  );
})

test('groupAndRankScoredEntries sorts tied entries by name in ascending order', () => {
  expect(scoring.groupAndRankScoredEntries(fixtures.scoredEntriesTie1)).toEqual(
    [
      [{ playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 },
       { playerName: 'toadTie', leaderboard: 'homies', entry_doc: 'docToadTie', score: 14 }],
      [{ playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 }],
      [{ playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 }]
    ],
  );
  expect(scoring.groupAndRankScoredEntries(fixtures.scoredEntriesTie2)).toEqual(
    [
      [{ playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 },
       { playerName: 'toadTie', leaderboard: 'homies', entry_doc: 'docToadTie', score: 14 }],
      [{ playerName: 'bison2', leaderboard: 'homies', entry_doc: 'docBison', score: 6 }],
      [{ playerName: 'vanessa1', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
       { playerName: 'vanessa2', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 }],
      [{ playerName: 'bison1', leaderboard: 'homies', entry_doc: 'docBison', score: -6 }]
    ],
  );
})
