// Constants
// ________________________________________________
const ARYA = 'Arya',
      BRONN = 'Bronn',
      DROGON = 'Drogon',
      EDD = 'Edd',
      GILLY = 'Gilly',
      MISSANDEI = 'Missandei',
      POD = 'Podrick',
      RHAEGAL = 'Rhaegal',
      TORMUND = 'Tormund',
      VARYS = 'Varys'



// Living Entries
// ________________________________________________
export const aryaAlive = {
  alive: [ARYA],
  dead: [],
  whiteWalker: []
}

export const aryaDupAlive = {
  alive: [ARYA, ARYA],
  dead: [],
  whiteWalker: []
}

export const aryaPodAlive = {
  alive: [ARYA, POD],
  dead: [],
  whiteWalker: []
}

export const drogonAlive = {
  alive: [DROGON],
  dead: [],
  whiteWalker: []
}

export const drogonPodAlive = {
  alive: [DROGON, POD],
  dead: [],
  whiteWalker: []
}

export const drogonPodDupAlive = {
  alive: [DROGON, DROGON, POD, POD],
  dead: [],
  whiteWalker: []
}

export const podAlive = {
  alive: [POD],
  dead: [],
  whiteWalker: []
}

export const aliveLongList = {
  alive: [ARYA, BRONN, DROGON, EDD, GILLY, MISSANDEI, POD, RHAEGAL, TORMUND, VARYS],
  dead: [],
  whiteWalker: []
}



// Dead Entries
// ________________________________________________

export const aryaDead = {
  alive: [],
  dead: [ARYA],
  whiteWalker: []
}

export const aryaDupDead = {
  alive: [],
  dead: [ARYA, ARYA],
  whiteWalker: []
}

export const aryaPodDead = {
  alive: [],
  dead: [ARYA, POD],
  whiteWalker: []
}

export const drogonDead = {
  alive: [],
  dead: [DROGON],
  whiteWalker: []
}

export const drogonPodDead = {
  alive: [],
  dead: [DROGON, POD],
  whiteWalker: []
}

export const drogonPodDupDead = {
  alive: [],
  dead: [DROGON, DROGON, POD, POD],
  whiteWalker: []
}

export const podDead = {
  alive: [],
  dead: [POD],
  whiteWalker: []
}

export const eddPodDead = {
  alive: [],
  dead: [EDD, POD],
  whiteWalker: []
}

export const deadLongList = {
  alive: [],
  dead: [ARYA, BRONN, DROGON, EDD, GILLY, MISSANDEI, POD, RHAEGAL, TORMUND, VARYS],
  whiteWalker: []
}



// White Walker / Wight
// ________________________________________________
export const noWight = {
  whiteWalker: []
}

export const eddWight = {
  whiteWalker: [EDD]
}

export const eddPodWight = {
  alive: [],
  dead: [EDD, POD],
  whiteWalker: [EDD, POD]
}

export const eddPodWightImpliedDead = {
  alive: [],
  dead: [],
  whiteWalker: [EDD, POD]
}



// Dead and Alive Entries
// ________________________________________________
export const aryaAlivePodDead = {
  alive: [ARYA],
  dead: [POD],
  whiteWalker: []
}

export const aryaDeadPodAlive = {
  alive: [POD],
  dead: [ARYA],
  whiteWalker: []
}

export const aryaPodAliveDrogonDead = {
  alive: [ARYA, POD],
  dead: [DROGON],
  whiteWalker: []
}

export const aryaPodDeadDrogonAlive = {
  alive: [DROGON],
  dead: [ARYA, POD],
  whiteWalker: []
}

export const aryaPodDrogonAliveEddDead = {
  alive: [ARYA, POD, DROGON],
  dead: [EDD],
  whiteWalker: []
}

export const eddAliveAryaPodDrogonDead = {
  alive: [EDD],
  dead: [ARYA, POD, DROGON],
  whiteWalker: []
}

export const aryaPodDrogonAliveEddDeadDup = {
  alive: [ARYA, POD, DROGON, DROGON],
  dead: [EDD, EDD],
  whiteWalker: []
}

export const eddAliveAryaPodDrogonDeadDup = {
  alive: [EDD, EDD],
  dead: [ARYA, POD, DROGON, DROGON],
  whiteWalker: []
}



// Dead, Alive, and White Walker / Wight Entries
// ________________________________________________
export const aryaAlivePodDeadDrogonWight = {
  alive: [ARYA],
  dead: [POD, DROGON],
  whiteWalker: [DROGON]
}

export const drogonAliveAryaDeadEddPodWight = {
  alive: [DROGON],
  dead: [ARYA, EDD, POD],
  whiteWalker: [EDD, POD]
}



// Alive, White Walker / Wight, and Implied Dead Entries
// note: a character is implied dead if selected as wight / ww
// ________________________________________________
export const aryaAliveDrogonDeadWightImplied = {
  alive: [ARYA],
  dead: [],
  whiteWalker: [DROGON]
}

export const drogonAliveAryaDeadEddPodWightPodImplied = {
  alive: [DROGON],
  dead: [ARYA, EDD],
  whiteWalker: [EDD, POD]
}

export const drogonAliveAryaDeadEddPodWightBothImplied = {
  alive: [DROGON],
  dead: [ARYA],
  whiteWalker: [EDD, POD]
}

export const drogonAliveAryaDeadEddPodWightBothImpliedDup = {
  alive: [DROGON],
  dead: [ARYA],
  whiteWalker: [EDD, EDD, POD, POD]
}



// Bonus Questions
// ________________________________________________
export const noBonusAnswered = {
  bonuses: [undefined, undefined]
}

export const bothBonusArya = {
  bonuses: [ARYA, ARYA]
}

export const firstBonusArya = {
  bonuses: [ARYA, undefined]
}

export const secondBonusArya = {
  bonuses: [undefined, ARYA]
}

export const bonus1AryaBonus2Pod = {
  bonuses: [ARYA, POD]
}

export const extraBonusArya = {
  bonuses: [ARYA, ARYA, ARYA]
}


// Empty Entries
// ________________________________________________
export const entryEp1 = {
  episode: 1,
  alive: [],
  dead: [],
  whiteWalker: []
}

export const entryEp2 = {
  episode: 2,
  alive: [],
  dead: [],
  whiteWalker: []
}

export const singleEntry = [
  entryEp1
]

export const multipleEntries = [
  entryEp1,
  entryEp2
]

export const multipleEntriesReverse = [
  entryEp2,
  entryEp1
]



// Single Entries
// ________________________________________________
export const entry1 = {
  alive: [ARYA],
  dead: [BRONN],
  whiteWalker: [BRONN],
  bonuses: [EDD]
}

export const entry2 = {
  alive: [ARYA],
  dead: [BRONN],
  whiteWalker: [DROGON],
  bonuses: [EDD]
}

export const entry3 = {
  alive: [ARYA, GILLY],
  dead: [BRONN, MISSANDEI],
  whiteWalker: [BRONN, MISSANDEI],
  bonuses: [EDD, RHAEGAL]
}

export const entry4 = {
  alive: [ARYA, GILLY],
  dead: [],
  whiteWalker: [BRONN, MISSANDEI],
  bonuses: [EDD, RHAEGAL]
}

export const entry5 = {
  alive: [ARYA, BRONN],
  dead: [DROGON],
  whiteWalker: [DROGON],
  bonuses: [undefined, DROGON]
}

export const entry6 = {
  alive: [],
  dead: [],
  whiteWalker: [],
  bonuses: []
}



// Complete Entries
// ________________________________________________
export const masterEntries1 = [
  {
    episode: 3,
    alive: [ARYA, VARYS],
    dead: [GILLY, RHAEGAL],
    whiteWalker: [GILLY, MISSANDEI],
    bonuses: [undefined, BRONN]
  }
]

export const masterEntries2 = [
  {
    episode: 3,
    alive: [ARYA, VARYS],
    dead: [GILLY, RHAEGAL],
    whiteWalker: [GILLY, MISSANDEI],
    bonuses: [POD, undefined]
  },
  {
    episode: 4,
    alive: [GILLY, RHAEGAL],
    dead: [ARYA, VARYS, POD, MISSANDEI],
    whiteWalker: [TORMUND, MISSANDEI],
    bonuses: [DROGON, DROGON]
  }
]

export const playerEntries1 = [
  {
    playerName: 'bison',
    entry_doc: 'docBison',
    leaderboard: 'homies',
    alive: [ARYA, VARYS],
    dead: [GILLY, RHAEGAL],
    whiteWalker: [TORMUND, MISSANDEI],
    bonuses: [undefined, ARYA]
  },
  {
    playerName: 'vanessa',
    entry_doc: 'docVanessa',
    leaderboard: 'homies',
    alive: [GILLY, RHAEGAL],
    dead: [ARYA, VARYS],
    whiteWalker: [ARYA, TORMUND, EDD],
    bonuses: [EDD, BRONN]
  },
  {
    playerName: 'toad',
    entry_doc: 'docToad',
    leaderboard: 'homies',
    alive: [GILLY, RHAEGAL],
    dead: [ARYA, EDD],
    whiteWalker: [ARYA, TORMUND, EDD],
    bonuses: [DROGON, DROGON]
  }
]

export const playerEntriesTie1 = [
  {
    playerName: 'bison',
    entry_doc: 'docBison',
    leaderboard: 'homies',
    alive: [ARYA, VARYS],
    dead: [GILLY, RHAEGAL],
    whiteWalker: [TORMUND, MISSANDEI],
    bonuses: [undefined, ARYA]
  },
  {
    playerName: 'vanessa',
    entry_doc: 'docVanessa',
    leaderboard: 'homies',
    alive: [GILLY, RHAEGAL],
    dead: [ARYA, VARYS],
    whiteWalker: [ARYA, TORMUND, EDD],
    bonuses: [EDD, BRONN]
  },
  {
    playerName: 'toad',
    entry_doc: 'docToad',
    leaderboard: 'homies',
    alive: [GILLY, RHAEGAL],
    dead: [ARYA, EDD],
    whiteWalker: [ARYA, TORMUND, EDD],
    bonuses: [DROGON, DROGON]
  },
  {
    playerName: 'toadTie',
    entry_doc: 'docToadTie',
    leaderboard: 'homies',
    alive: [GILLY, RHAEGAL],
    dead: [ARYA, EDD],
    whiteWalker: [ARYA, TORMUND, EDD],
    bonuses: [DROGON, DROGON]
  }
]



// Scored Entries
export const scoredEntries1 = [
  { playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 },
  { playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
  { playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 }
]

export const scoredEntriesTie1 = [
  { playerName: 'bison', leaderboard: 'homies', entry_doc: 'docBison', score: 6 },
  { playerName: 'toadTie', leaderboard: 'homies', entry_doc: 'docToadTie', score: 14 },
  { playerName: 'vanessa', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
  { playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 }
]

export const scoredEntriesTie2 = [
  { playerName: 'vanessa1', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
  { playerName: 'bison2', leaderboard: 'homies', entry_doc: 'docBison', score: 6 },
  { playerName: 'toadTie', leaderboard: 'homies', entry_doc: 'docToadTie', score: 14 },
  { playerName: 'vanessa2', leaderboard: 'homies', entry_doc: 'docVanessa', score: 5 },
  { playerName: 'toad', leaderboard: 'homies', entry_doc: 'docToad', score: 14 },
  { playerName: 'bison1', leaderboard: 'homies', entry_doc: 'docBison', score: -6 },
]
