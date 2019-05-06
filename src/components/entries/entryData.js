import * as constants from '../../helpers/constants.js';

const playerEntries = [
  {
    playerName: 'aggie',
    entry_doc: 'https://docs.google.com/document/d/1d0Fa3IBL_mgt-M2TB9BxxbqWVSXSQzbEbdKk71UZWZs/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [constants.TYRION,constants.SANSA,constants.BRAN,constants.SAM,constants.BRONN,constants.MISSANDEI,],
    dead: [constants.JON_SNOW,constants.DAENERYS,constants.CERSEI,constants.ARYA,constants.JAMIE,constants.THEON,constants.DAVOS,constants.MOUNTAIN,constants.VARYS,constants.JORAH,constants.MELISANDRE,constants.EURON,constants.HOUND,constants.YARA,constants.DAARIO,constants.JAQEN,constants.BERIC,constants.MEERA,constants.PODRICK,constants.GILLY,constants.SAM_JR,constants.LYANNA,constants.ELLARIA,constants.QYBURN,constants.ROBIN,constants.HOT_PIE,constants.NIGHT_KING,constants.YOHN,constants.HARRY,constants.ALYS,constants.WOLKAN,constants.DROGON,constants.RHAEGAL,constants.VISERION,constants.GHOST,],
    whiteWalker: [constants.BRIENNE,constants.TORMUND,constants.GENDRY,constants.GREY_WORM,constants.EDD,constants.QHONO,],
    bonuses: [constants.JON_SNOW,constants.SANSA]
  },
  {
    playerName: 'bison',
    entry_doc: 'https://docs.google.com/document/d/1QEXTfXrk4KaDbkPJ3_v33no7EPSMr5PEjWNlSb3x5Ns/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [constants.JON_SNOW,constants.DAENERYS,constants.TYRION,constants.SANSA,constants.ARYA,constants.SAM,constants.VARYS,constants.BRONN,constants.TORMUND,constants.YARA,constants.MISSANDEI,constants.JAQEN,constants.PODRICK,constants.GILLY,constants.SAM_JR,constants.HOT_PIE,constants.DROGON,constants.GHOST,],
    whiteWalker: [constants.CERSEI,constants.BRIENNE,constants.THEON,constants.MOUNTAIN,constants.JORAH,constants.GREY_WORM,constants.LYANNA,constants.ELLARIA,constants.EDD,constants.YOHN,constants.ALYS,constants.WOLKAN,constants.QHONO,],
    dead: [constants.BRAN,constants.JAMIE,constants.DAVOS,constants.MELISANDRE,constants.EURON,constants.HOUND,constants.GENDRY,constants.DAARIO,constants.BERIC,constants.MEERA,constants.QYBURN,constants.ROBIN,constants.NIGHT_KING,constants.HARRY,constants.RHAEGAL,constants.VISERION,],
    bonuses: [constants.JON_SNOW,undefined]
  },
  {
    playerName: 'bison',
    entry_doc: 'https://docs.google.com/document/d/17sy3lUjmRPJLCgbgtpyvZtH3UufCy0omlG7gLSrcLxQ/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [constants.JON_SNOW,constants.DAENERYS,constants.TYRION,constants.SANSA,constants.ARYA,constants.SAM,constants.VARYS,constants.BRONN,constants.TORMUND,constants.YARA,constants.MISSANDEI,constants.JAQEN,constants.PODRICK,constants.GILLY,constants.SAM_JR,constants.HOT_PIE,constants.DROGON,constants.GHOST,],
    whiteWalker: [constants.CERSEI,constants.BRIENNE,constants.THEON,constants.MOUNTAIN,constants.JORAH,constants.GREY_WORM,constants.LYANNA,constants.ELLARIA,constants.EDD,constants.YOHN,constants.ALYS,constants.WOLKAN,constants.QHONO,],
    dead: [constants.BRAN,constants.JAMIE,constants.DAVOS,constants.MELISANDRE,constants.EURON,constants.HOUND,constants.GENDRY,constants.DAARIO,constants.BERIC,constants.MEERA,constants.QYBURN,constants.ROBIN,constants.NIGHT_KING,constants.HARRY,constants.RHAEGAL,constants.VISERION,],
    bonuses: [constants.JON_SNOW,undefined]
  },
  {
    playerName: 'justin',
    entry_doc: 'https://docs.google.com/document/d/1zdDzI08bH3NkpMhUmQah7q3exgkEEm4c8hbhUL3LK34/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'zac',
    entry_doc: 'https://docs.google.com/document/d/1zc9PYviOgtMDveB_tA-flVgithZWQalBXTn_EnnovEA/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'meg #2',
    entry_doc: 'https://docs.google.com/document/d/1YUtP8Cr8nEJOrDreEeyS8V2i2SUyCgtphtg-YN9hK_M/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'george',
    entry_doc: 'https://docs.google.com/document/d/1En62FKHMgvr-q1JwpAGABf1PoLR3P9iJfnG1lKaS3T4/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'meg #1',
    entry_doc: 'https://docs.google.com/document/d/1Je4OFAh5bqMihIC_-55gmtLENVoPjB7dR4ReAdsJ5ks/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'kayla',
    entry_doc: 'https://docs.google.com/document/d/1HgNUJJI1_HAtzqZvhJmYJ6NlXe0NZK5FLcIuSS5gqMA/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'min',
    entry_doc: 'https://docs.google.com/document/d/1boi9ySSbVhudy493YOF5ppB92016Wn00dPtAG6_Ku24/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'kate #3',
    entry_doc: 'https://docs.google.com/document/d/1aPxLXpAAOUNzw0NhM_1TfUcoxUM1cVm3nw-5tFQJq1M/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'kate #4',
    entry_doc: 'https://docs.google.com/document/d/1GaE0oI3vJzkHtkR9BNFmDJ4wHxFOM9KGuWG7AKFpIU4/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'meg #3',
    entry_doc: 'https://docs.google.com/document/d/1Ue1xJS5wVW-AEWvqBlfPoKbhEj9jNpEvCJn6hWt2Ujg/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'kate #1',
    entry_doc: 'https://docs.google.com/document/d/1hF3ogN_OWA4JooZzcoBT9Ke1qDm-FUNAYzUphMc9lkU/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'kate #2',
    entry_doc: 'https://docs.google.com/document/d/1rxBVbadYHrk-467XgwOYHaLvTOWfXXh4TlUKb9aUm7Y/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'meg #4',
    entry_doc: 'https://docs.google.com/document/d/1n1f9RVgUvHnOD6KZ1FEWiIjDc9eKOkci37_0AWMBlwk/edit?usp=sharing',
    leaderboard: constants.BRAVA,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'vanessa',
    entry_doc: 'https://docs.google.com/document/d/1o4VyvQL6kxCi7bRJuRDOWIargWkL_ca1R0AQWfpcJ_Q/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'will',
    entry_doc: 'https://docs.google.com/document/d/1fohq8mrvrNlm9YClZZ4TsrhIuXuxoXIib8wXti93yEg/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'suzan',
    entry_doc: 'https://docs.google.com/document/d/19n6hjBemxU_1cLHje5k0_rFn60XKgqHveGchw60DRz8/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'tomas',
    entry_doc: 'https://docs.google.com/document/d/1PWvSkO45iQ9prvyg5oGs8TLqE2qGN31fSg1sZUQbGI0/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'ana',
    entry_doc: 'https://docs.google.com/document/d/13ilc0g9FydWbgVLgz-jrgDk4Rxca6-bxFw4gfV2Mhyk/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
  {
    playerName: 'keally',
    entry_doc: 'https://docs.google.com/document/d/1HT9rW-B3lIYeZg46_60uHe9AkW03I3RIAnkbkrk-cIU/edit?usp=sharing',
    leaderboard: constants.HOMIES,
    alive: [],
    dead: [],
    whiteWalker: [],
    bonuses: []
  },
]

const masterEntries = [
  {
    episode: 3,
    alive: [
      constants.JON_SNOW,
      constants.DAENERYS,
      constants.CERSEI,
      constants.TYRION,
      constants.SANSA,
      constants.ARYA,
      constants.BRAN,
      constants.JAMIE,
      constants.BRIENNE,
      constants.SAM,
      constants.DAVOS,
      constants.MOUNTAIN,
      constants.VARYS,
      constants.EURON,
      constants.HOUND,
      constants.BRONN,
      constants.TORMUND,
      constants.GENDRY,
      constants.YARA,
      constants.GREY_WORM,
      constants.MISSANDEI,
      constants.DAARIO,
      constants.JAQEN,
      constants.MEERA,
      constants.PODRICK,
      constants.GILLY,
      constants.SAM_JR,
      constants.ELLARIA,
      constants.QYBURN,
      constants.ROBIN,
      constants.HOT_PIE,
      constants.YOHN,
      constants.HARRY,
      constants.ALYS,
      constants.WOLKAN,
      constants.DROGON,
      constants.RHAEGAL,
      constants.GHOST,
    ],
    dead: [
      constants.THEON,
      constants.JORAH,
      constants.MELISANDRE,
      constants.NIGHT_KING,
      constants.VISERION,
      constants.BERIC,
    ],
    whiteWalker: [
      constants.QHONO,
      constants.LYANNA,
      constants.EDD,
    ],
    bonuses: [constants.BONUS_1,constants.CERSEI,]
  },
  {
    episode: 4,
    alive: [
      constants.JON_SNOW,
      constants.DAENERYS,
      constants.CERSEI,
      constants.TYRION,
      constants.SANSA,
      constants.ARYA,
      constants.BRAN,
      constants.JAMIE,
      constants.BRIENNE,
      constants.SAM,
      constants.DAVOS,
      constants.MOUNTAIN,
      constants.VARYS,
      constants.EURON,
      constants.HOUND,
      constants.BRONN,
      constants.TORMUND,
      constants.GENDRY,
      constants.YARA,
      constants.GREY_WORM,
      constants.DAARIO,
      constants.JAQEN,
      constants.MEERA,
      constants.PODRICK,
      constants.GILLY,
      constants.SAM_JR,
      constants.ELLARIA,
      constants.QYBURN,
      constants.ROBIN,
      constants.HOT_PIE,
      constants.YOHN,
      constants.HARRY,
      constants.ALYS,
      constants.WOLKAN,
      constants.DROGON,
      constants.GHOST,
    ],
    dead: [
      constants.THEON,
      constants.JORAH,
      constants.MELISANDRE,
      constants.NIGHT_KING,
      constants.VISERION,
      constants.BERIC,
      constants.MISSANDEI,
      constants.RHAEGAL,
    ],
    whiteWalker: [
      constants.QHONO,
      constants.LYANNA,
      constants.EDD,
    ],
    bonuses: [constants.BONUS_1,constants.CERSEI,]
  },
  // {
  //   episode: 5,
  //   alive: [],
  //   dead: [],
  //   whiteWalker: [],
  //   bonuses: []
  // },
  // {
  //   episode: 6,
  //   alive: [],
  //   dead: [],
  //   whiteWalker: [],
  //   bonuses: []
  // },
]

export {masterEntries, playerEntries};
