// Constants
// ________________________________________________
const ARYA = 'Arya'
const DROGON = 'Drogon'
const EDD = 'Edd'
const POD = 'Podrick'



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



// White Walker / Wight
// ________________________________________________
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
