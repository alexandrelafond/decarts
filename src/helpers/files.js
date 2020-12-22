const TYPE = {
  SCULPTURE: "Sculpture",
  PAINTING: "Toile",
} 

const MEDIUMS = {
  OIL: "Huile",
  ACRYLIC: "Acrylique",
}

/* {
  fileName: "",
  artist: {
    name: "",
    origin: "",
    birthYear: ,
    deathYear: "-",
  },
  info: {
    type: TYPE.,
    title: "",
    year: ,
    medium: MEDIUMS.,
    frame: ,
    sizes: {
      withoutFrame: {
      width: ,
      height: ,
      },
      withFrame: {
      width: ,
      height: ,
      },
    },
  },
  price: {
    worth: "",
    asked: "",
  },
  sold: ,
}, */

const files = [
  {
    fileName: "N° 1",
    artist: {
      name: "Andris Leimanis",
      origin: "Lettonie",
      birthYear: 1938,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Montreal at Dusk",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 30,
        height: 40,
        },
        withFrame: {
        width: 40,
        height: 50,
        },
      },
    },
    price: {
      worth: "6 000",
      asked: "4 500",
    },
    sold: false,
  },
  {
    fileName: "N° 2",
    artist: {
      name: "Jean-Pierre Lafrance",
      origin: "Québec",
      birthYear: 1943,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le jour de la nuit",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 48,
        height: 48,
        },
        withFrame: {
        width: 50,
        height: 50,
        },
      },
    },
    price: {
      worth: "7 200",
      asked: "4 900",
    },
    sold: false,
  },
  {
    fileName: "N° 3",
    artist: {
      name: "Vladimir Horik",
      origin: "Québec",
      birthYear: 1939,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le moulin de l'Île aux Coudres",
      year: 1999,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 36,
        height: 42,
        },
        withFrame: {
        width: 45,
        height: 51,
        },
      },
    },
    price: {
      worth: "6 900",
      asked: "5 500",
    },
    sold: false,
  },
  {
    fileName: "N° 4",
    artist: {
      name: "Alexis Arts",
      origin: "Hollande - Québec",
      birthYear: 1940,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Lever de soleil",
      year: 1993,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 36,
        },
        withFrame: {
        width: 34,
        height: 46,
        },
      },
    },
    price: {
      worth: "4 800",
      asked: "3 900",
    },
    sold: false,
  },
  {
    fileName: "N° 5",
    artist: {
      name: "St-Gilles",
      origin: "Québec",
      birthYear: 1956,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Port de Lund",
      year: 2002,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 36,
        },
        withFrame: {
        width: 33,
        height: 45,
        },
      },
    },
    price: {
      worth: "3 800",
      asked: "3 000",
    },
    sold: false,
  },
  {
    fileName: "N° 6",
    artist: {
      name: "H. Poirier",
      origin: "Québec",
      birthYear: 1946,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Travaux publics",
      year: 1998,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 30,
        height: 40,
        },
        withFrame: {
        width: 40,
        height: 50,
        },
      },
    },
    price: {
      worth: "5 000",
      asked: "3 500",
    },
    sold: false,
  },
  {
    fileName: "N° 7",
    artist: {
      name: "Normand Hudon",
      origin: "Québec",
      birthYear: 1929,
      deathYear: 1997,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Coin de rue",
      year: 1989,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 30,
        },
        withFrame: {
        width: 30,
        height: 36,
        },
      },
    },
    price: {
      worth: "25 000",
      asked: "19 500",
    },
    sold: false,
  },
  {
    fileName: "N° 8",
    artist: {
      name: "Francesco Lacurto",
      origin: "Québec",
      birthYear: 1908,
      deathYear: 2001,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Portrait du peintre Gérard Faulkner",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 30,
        height: 24,
        },
        withFrame: {
        width: 38,
        height: 32,
        },
      },
    },
    price: {
      worth: "12 000",
      asked: "9 500",
    },
    sold: false,
  },
  {
    fileName: "N° 9",
    artist: {
      name: "André Bertounesque",
      origin: "France - Québec",
      birthYear: 1937,
      deathYear: 2005,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Cour de Provence",
      year: 1999,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 40,
        height: 30,
        },
        withFrame: {
        width: 57,
        height: 38,
        },
      },
    },
    price: {
      worth: "8 000",
      asked: "6 400",
    },
    sold: false,
  },
  {
    fileName: "N° 10",
    artist: {
      name: "Bruno Côté",
      origin: "Québec",
      birthYear: 1940,
      deathYear: 2010,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Fin d'été",
      year: 20044,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 36,
        height: 30,
        },
        withFrame: {
        width: 44,
        height: 38,
        },
      },
    },
    price: {
      worth: "9 000",
      asked: "7 200",
    },
    sold: false,
  },
  {
    fileName: "N° 11",
    artist: {
      name: "Yvette Boulanger",
      origin: "Québec",
      birthYear: 1932,
      deathYear: 2015,
    },
    info: {
      type: TYPE.PAINTING,
      title: "À l'abri des froids de l'automne",
      year: 1992,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 20,
        },
        withFrame: {
        width: 34,
        height: 30,
        },
      },
    },
    price: {
      worth: "5 000",
      asked: "3 900",
    },
    sold: false,
  },
  {
    fileName: "N° 12",
    artist: {
      name: "Vladimir Horik",
      origin: "Québec",
      birthYear: 1939,
      deathYear:"-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Au bord de la rivière en Charlevoix",
      year: 1997,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 30,
        height: 15,
        },
        withFrame: {
        width: 38,
        height: 24,
        },
      },
    },
    price: {
      worth: "4 000",
      asked: "3 200",
    },
    sold: false,
  },
  {
    fileName: "N° 13",
    artist: {
      name: "Vladimir Horik",
      origin: "Québec",
      birthYear: 1939,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Bouquet de juillet de mon jardin",
      year: 1996,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 28,
        },
        withFrame: {
        width: 30,
        height: 24,
        },
      },
    },
    price: {
      worth: "4 000",
      asked: "3 200",
    },
    sold: false,
  },
  {
    fileName: "N° 14",
    artist: {
      name: "Chantal Angers",
      origin: "Québec",
      birthYear: "Inconnue",
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Astréa",
      year: 2006,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 40,
        height: 8,
        },
        withFrame: {
        width: 42,
        height: 10,
        },
      },
    },
    price: {
      worth: "900",
      asked: "720",
    },
    sold: false,
  },
  {
    fileName: "N° 15",
    artist: {
      name: "Umberto Bruni",
      origin: "Québec",
      birthYear: 1914,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Temps des lilas",
      year: 1996,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 20,
        },
        withFrame: {
        width: 32,
        height: 28,
        },
      },
    },
    price: {
      worth: "12 000",
      asked: "9 500",
    },
    sold: false,
  },
  {
    fileName: "N° 16",
    artist: {
      name: "Jacques Barbeau",
      origin: "Québec",
      birthYear: 1934,
      deathYear: 2017,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Les finissantes",
      year: 2003,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 20,
        height: 24,
        },
        withFrame: {
        width: 26,
        height: 34,
        },
      },
    },
    price: {
      worth: "1 500",
      asked: "1 200",
    },
    sold: false,
  },
  {
    fileName: "N° 17",
    artist: {
      name: "Louise Lauzon",
      origin: "Québec",
      birthYear: 1956,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Léonie",
      year: 2003,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 30,
        height: 24,
        },
        withFrame: {
        width: 36,
        height: 30,
        },
      },
    },
    price: {
      worth: "1 600",
      asked: "1 250",
    },
    sold: false,
  },
  {

    fileName: "No° 19",
    artist: {
      name: "Normand Hudon",
      origin: "Québec",
      birthYear: 1929,
      deathYear: 1997,
    },
    info: {
      type: TYPE.PAINTING,
      title: "La ville",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 24,
        height: 12,
        },
        withFrame: {
        width: 33,
        height: 20.5,
        },
      },
    },
    price: {
      worth: "10 000",
      asked: "8 000",
    },
    sold: false,
  },
  {
    fileName: "N° 20",
    artist: {
      name: "Jeannine Bourret",
      origin: "Québec",
      birthYear: "Inconnue",
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Sans titre",
      year: 1999,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 18,
        height: 14,
        },
        withFrame: {
        width: 24,
        height: 20,
        },
      },
    },
    price: {
      worth: "1 000",
      asked: "800",
    },
    sold: false,
  },
  {
    fileName: "N° 21",
    artist: {
      name: "Marcel Favreau",
      origin: "Québec",
      birthYear: 1921,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le moulin Ouellette St-Jean-Port-Joli",
      year: 19744,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 28,
        height: 24,
        },
        withFrame: {
        width: 24,
        height: 30,
        },
      },
    },
    price: {
      worth: "6 000",
      asked: "4 800",
    },
    sold: false,
  },
  {
    fileName: "N° 22",
    artist: {
      name: "Jean-Paul Lapointe",
      origin: "Québec",
      birthYear: 1935,
      deathYear: 2007,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Village St-Charles",
      year: "Inconnue",
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 20,
        height: 24,
        },
        withFrame: {
        width: 26,
        height: 30,
        },
      },
    },
    price: {
      worth: "1 200",
      asked: "950",
    },
    sold: false,
  },
  {
    fileName: "N° 23",
    artist: {
      name: "Yves du John Der",
      origin: "Saskatchewan",
      birthYear: "1926",
      deathYear: "1996",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La Tourest",
      year: 1994,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 20,
        height: 24,
        },
        withFrame: {
        width: 26,
        height: 30,
        },
      },
    },
    price: {
      worth: "4 800",
      asked: "3 900",
    },
    sold: false,
  },
  {
    fileName: "N° 24",
    artist: {
      name: "Gérard Faulkner",
      origin: "Québec",
      birthYear: 1927,
      deathYear: "1992",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Chemin de l'Estrie",
      year: 1991,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 28,
        height: 24,
        },
        withFrame: {
        width: 24,
        height: 30,
        },
      },
    },
    price: {
      worth: "1 200",
      asked: "950",
    },
    sold: false,
  },
  {
    fileName: "N° 25",
    artist: {
      name: "Bruno Côté",
      origin: "Québec",
      birthYear: 1940,
      deathYear: "2010",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le torrent",
      year: 2004,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 20,
        height: 24,
        },
        withFrame: {
        width: 26,
        height: 30,
        },
      },
    },
    price: {
      worth: "6 000",
      asked: "4 800",
    },
    sold: false,
  },
  {
    fileName: "N° 26",
    artist: {
      name: "Pauline Paquin",
      origin: "Québec",
      birthYear: 1952,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Fin d'après-midi",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 18,
        height: 24,
        },
        withFrame: {
        width: 24,
        height: 30,
        },
      },
    },
    price: {
      worth: "3 900",
      asked: "3 000",
    },
    sold: false,
  },
  {
    fileName: "N° 27",
    artist: {
      name: "Guy Legaré",
      origin: "Québec",
      birthYear: 1941,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Les Tourterelles",
      year: "Inconnue",
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
        width: 16,
        height: 24,
        },
        withFrame: {
        width: 22,
        height: 30,
        },
      },
    },
    price: {
      worth: "1 200",
      asked: "950",
    },
    sold: false,
  },
]

export default files
