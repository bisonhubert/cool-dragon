import * as constants from './constants.js'

const bravaEntries = [
  { player: 'justin',
    score: '35',
    rank: '1',
    entry_doc_href: 'https://docs.google.com/document/d/1zdDzI08bH3NkpMhUmQah7q3exgkEEm4c8hbhUL3LK34/edit?usp=sharing'
  },
  { player: 'zac',
    score: '25',
    rank: '2',
    entry_doc_href: 'https://docs.google.com/document/d/1zc9PYviOgtMDveB_tA-flVgithZWQalBXTn_EnnovEA/edit?usp=sharing'
  },
  { player: 'meg #2',
    score: '23',
    rank: '3',
    entry_doc_href: 'https://docs.google.com/document/d/1YUtP8Cr8nEJOrDreEeyS8V2i2SUyCgtphtg-YN9hK_M/edit?usp=sharing'
  },
  { player: 'aggie',
    score: '18',
    rank: '4',
    entry_doc_href: 'https://docs.google.com/document/d/1d0Fa3IBL_mgt-M2TB9BxxbqWVSXSQzbEbdKk71UZWZs/edit?usp=sharing'
  },
  { player: 'george',
    score: '17',
    rank: '5',
    entry_doc_href: 'https://docs.google.com/document/d/1En62FKHMgvr-q1JwpAGABf1PoLR3P9iJfnG1lKaS3T4/edit?usp=sharing'
  },
  { player: 'meg #1',
    score: '17',
    rank: '5',
    entry_doc_href: 'https://docs.google.com/document/d/1Je4OFAh5bqMihIC_-55gmtLENVoPjB7dR4ReAdsJ5ks/edit?usp=sharing'
  },
  { player: 'bison',
    score: '17',
    rank: '5',
    entry_doc_href: 'https://docs.google.com/document/d/1QEXTfXrk4KaDbkPJ3_v33no7EPSMr5PEjWNlSb3x5Ns/edit?usp=sharing'
  },
  { player: 'kayla',
    score: '13',
    rank: '8',
    entry_doc_href: 'https://docs.google.com/document/d/1HgNUJJI1_HAtzqZvhJmYJ6NlXe0NZK5FLcIuSS5gqMA/edit?usp=sharing'
  },
  { player: 'min',
    score: '13',
    rank: '8',
    entry_doc_href: 'https://docs.google.com/document/d/1boi9ySSbVhudy493YOF5ppB92016Wn00dPtAG6_Ku24/edit?usp=sharing'
  },
  { player: 'kate #3',
    score: '9',
    rank: '10',
    entry_doc_href: 'https://docs.google.com/document/d/1aPxLXpAAOUNzw0NhM_1TfUcoxUM1cVm3nw-5tFQJq1M/edit?usp=sharing'
  },
  { player: 'kate #4',
    score: '7',
    rank: '11',
    entry_doc_href: 'https://docs.google.com/document/d/1GaE0oI3vJzkHtkR9BNFmDJ4wHxFOM9KGuWG7AKFpIU4/edit?usp=sharing'
  },
  { player: 'meg #3',
    score: '7',
    rank: '11',
    entry_doc_href: 'https://docs.google.com/document/d/1Ue1xJS5wVW-AEWvqBlfPoKbhEj9jNpEvCJn6hWt2Ujg/edit?usp=sharing'
  },
  { player: 'kate #1',
    score: '5',
    rank: '13',
    entry_doc_href: 'https://docs.google.com/document/d/1hF3ogN_OWA4JooZzcoBT9Ke1qDm-FUNAYzUphMc9lkU/edit?usp=sharing'
  },
  { player: 'kate #2',
    score: '5',
    rank: '13',
    entry_doc_href: 'https://docs.google.com/document/d/1rxBVbadYHrk-467XgwOYHaLvTOWfXXh4TlUKb9aUm7Y/edit?usp=sharing'
  },
  { player: 'meg #4',
    score: '-7',
    rank: '15',
    entry_doc_href: 'https://docs.google.com/document/d/1n1f9RVgUvHnOD6KZ1FEWiIjDc9eKOkci37_0AWMBlwk/edit?usp=sharing'
  },
]

const homieEntries = [
  { player: 'vanessa',
    score: '28',
    rank: '1',
    entry_doc_href: 'https://docs.google.com/document/d/1o4VyvQL6kxCi7bRJuRDOWIargWkL_ca1R0AQWfpcJ_Q/edit?usp=sharing'
  },
  { player: 'bison',
    score: '23',
    rank: '2',
    entry_doc_href: 'https://docs.google.com/document/d/17sy3lUjmRPJLCgbgtpyvZtH3UufCy0omlG7gLSrcLxQ/edit?usp=sharing'
  },
  { player: 'will',
    score: '20',
    rank: '3',
    entry_doc_href: 'https://docs.google.com/document/d/1fohq8mrvrNlm9YClZZ4TsrhIuXuxoXIib8wXti93yEg/edit?usp=sharing'
  },
  { player: 'suzan',
    score: '20',
    rank: '4',
    entry_doc_href: 'https://docs.google.com/document/d/19n6hjBemxU_1cLHje5k0_rFn60XKgqHveGchw60DRz8/edit?usp=sharing'
  },
  { player: 'tomas',
    score: '17',
    rank: '5',
    entry_doc_href: 'https://docs.google.com/document/d/1PWvSkO45iQ9prvyg5oGs8TLqE2qGN31fSg1sZUQbGI0/edit?usp=sharing'
  },
  { player: 'ana',
    score: '11',
    rank: '6',
    entry_doc_href: 'https://docs.google.com/document/d/13ilc0g9FydWbgVLgz-jrgDk4Rxca6-bxFw4gfV2Mhyk/edit?usp=sharing'
  },
  { player: 'keally',
    score: '4',
    rank: '7',
    entry_doc_href: 'https://docs.google.com/document/d/1HT9rW-B3lIYeZg46_60uHe9AkW03I3RIAnkbkrk-cIU/edit?usp=sharing'
  },
]

const masterEntries = [
  {
    episode: 8,
    entry: {
      alive: [
        constants.ALYS,
        constants.ARYA,
        constants.BRAN,
        constants.BRONN,
        constants.BRIENNE,
        constants.CERSEI,
        constants.DROGON,
        constants.ELLARIA,
        constants.DAARIO,
        constants.DAENERYS,
        constants.DAVOS,
        constants.EURON,
        constants.GENDRY,
        constants.GHOST,
        constants.GILLY,
        constants.GREY_WORM,
        constants.HARRY,
        constants.HOT_PIE,
        constants.HOUND,
        constants.JAMIE,
        constants.JAQEN,
        constants.JON_SNOW,
        constants.MEERA,
        constants.MISSANDEI,
        constants.MOUNTAIN,
        constants.PODRICK,
        constants.QYBURN,
        constants.RHAEGAL,
        constants.ROBIN,
        constants.SAM,
        constants.SAM_JR,
        constants.SANSA,
        constants.TORMUND,
        constants.TYRION,
        constants.VARYS,
        constants.WOLKAN,
        constants.YARA,
        constants.YOHN,
      ],
      dead: [
        constants.BERIC,
        constants.EDD,
        constants.JORAH,
        constants.LYANNA,
        constants.MELISANDRE,
        constants.NIGHT_KING,
        constants.QHONO,
        constants.THEON,
        constants.VISERION
      ],
      whiteWalker: [
        constants.EDD,
        constants.LYANNA,
        constants.QHONO
      ],
      bonus1: constants.BONUS_1,
      bonus2: constants.BONUS_2,
    }
  },
]

const playerEntries = bravaEntries.concat(homieEntries)

export {bravaEntries, homieEntries, masterEntries, playerEntries};
