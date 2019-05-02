// TODO (Bison): separate each function out into its own file and test file inside a folder
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

test('scoreDead returns 0 points when no characters are dead', () => {
  expect(scoring.scoreDead(fixtures.entryEp1, fixtures.entryEp1)).toBe(0);
  expect(scoring.scoreDead(fixtures.entryEp1, fixtures.aryaDead)).toBe(0);
});

test('scoreSinglePointVariant returns 0 points when no characters are alive or dead', () => {
  expect(scoring.scoreSinglePointVariant(fixtures.entryEp1, fixtures.entryEp1)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.entryEp1, fixtures.aryaAlive)).toBe(0);
  expect(scoring.scoreSinglePointVariant(fixtures.entryEp1, fixtures.aryaDead)).toBe(0);
});

test('scoreAlive returns 0 when no characters match living master entry', () => {
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.podAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.aryaPodAlive, fixtures.drogonAlive)).toBe(0);
});

test('scoreDead scores 0 points when no characters match dead master entry', () => {
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.podDead)).toBe(0);
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.drogonDead)).toBe(0);
  expect(scoring.scoreDead(fixtures.aryaPodDead, fixtures.drogonDead)).toBe(0);
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

test("scoreAlive scores a point for every correct guess in player's alive column", () => {
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.aryaAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.aryaPodAlive, fixtures.drogonPodAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.aryaPodAlive, fixtures.aryaPodAlive)).toBe(2);
  // TODO (Bison): long list of characters
});

test("scoreDead scores a point for every correct guess in player's dead column", () => {
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.aryaDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.aryaPodDead, fixtures.drogonPodDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.aryaPodDead, fixtures.aryaPodDead)).toBe(2);
  // TODO (Bison): long list of characters
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
  // TODO (Bison): long list of characters
});

test('scoreAlive only counts distinct living characters in any entry', () => {
  expect(scoring.scoreAlive(fixtures.aryaDupAlive, fixtures.aryaAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonPodDupAlive, fixtures.drogonAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonPodDupAlive, fixtures.drogonPodAlive)).toBe(2);
  expect(scoring.scoreAlive(fixtures.aryaAlive, fixtures.aryaDupAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonAlive, fixtures.drogonPodDupAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonPodAlive, fixtures.drogonPodDupAlive)).toBe(2);
});

test('scoreDead only counts distinct dead characters in any entry', () => {
  expect(scoring.scoreDead(fixtures.aryaDead, fixtures.aryaDupDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDupDead, fixtures.drogonDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDupDead, fixtures.drogonPodDead)).toBe(2);
  expect(scoring.scoreDead(fixtures.aryaDupDead, fixtures.aryaDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonDead, fixtures.drogonPodDupDead)).toBe(1);
  expect(scoring.scoreDead(fixtures.drogonPodDead, fixtures.drogonPodDupDead)).toBe(2);
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

test('scoreAlive does not count white walker characters as alive', () => {
  expect(scoring.scoreAlive(fixtures.aryaAlivePodDeadDrogonWight, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.aryaAliveDrogonDeadWightImplied, fixtures.drogonAlive)).toBe(0);
  expect(scoring.scoreAlive(fixtures.drogonAliveAryaDeadEddPodWight, fixtures.drogonPodAlive)).toBe(1);
  expect(scoring.scoreAlive(fixtures.drogonAliveAryaDeadEddPodWightBothImplied, fixtures.drogonPodAlive)).toBe(1);
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
