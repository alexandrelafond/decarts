const TYPE = {
  SCULPTURE: "Sculpture",
  PAINTING: "Toile",
}

const MEDIUMS = {
  OIL: "Huile",
  ACRYLIC: "Acrylique",
  PASTEL: "Pastel",
  MIXT: "Mixte",
  AQUA: "Aquarelle",
  BRONZE: "Bronze",
  ALBATRE: "Albâtre de Norvège",
  VERDITE: "Verdite",
  SERPENTINE: "Serpentine",
  JASPER: "Portland Blue Jasper et Or",
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
      asked: "3 750",
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
      asked: "3 600",
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
      worth: "9 500",
      asked: "6 500",
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
      asked: "3 600",
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
      worth: "4 685",
      asked: "3 500",
    },
    sold: false,
  },
  {
    fileName: "N° 6",
    artist: {
      name: "Marcel H. Poirier",
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
      worth: "4 200",
      asked: "2 500",
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
      worth: "27 000",
      asked: "17 500",
    },
    sold: false,
  },
  {
    fileName: "N° 8",
    artist: {
      name: "Francesco Iacurto",
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
      worth: "16 000",
      asked: "8 000",
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
      worth: "12 000",
      asked: "8 000",
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
      year: 2004,
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
      asked: "3 500",
    },
    sold: false,
  },
  {
    fileName: "N° 12",
    artist: {
      name: "Vladimir Horik",
      origin: "Québec",
      birthYear: 1939,
      deathYear: "-",
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
      worth: "3 600",
      asked: "2 400",
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
          height: 18,
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
      birthYear: null,
      deathYear: null,
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
      asked: "600",
    },
    sold: false,
  },
  {
    fileName: "N° 15",
    artist: {
      name: "Umberto Bruni",
      origin: "Québec",
      birthYear: 1914,
      deathYear: 2021,
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
      worth: "31 500",
      asked: "15 000",
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
      worth: "1 600",
      asked: "1 000",
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
    fileName: "N° 18",
    artist: {
      name: "Narcisse Poirier",
      origin: "Québec",
      birthYear: 1883,
      deathYear: "1984",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Bouquet de Lilas",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 20,
          height: 16,
        },
        withFrame: {
          width: 28,
          height: 24,
        },
      },
    },
    price: {
      worth: "1 800",
      asked: "1 500",
    },
    sold: false,
  },
  {
    fileName: "N° 19",
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
      worth: "11 500",
      asked: "8 000",
    },
    sold: false,
  },
  {
    fileName: "N° 20",
    artist: {
      name: "Jeannine Bourret",
      origin: "Québec",
      birthYear: null,
      deathYear: null,
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
      deathYear: "2020",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le moulin Ouellette St-Jean-Port-Joli",
      year: 1974,
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
      asked: "3 900",
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
      year: null,
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
      name: "John Der",
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
      worth: "3 600",
      asked: "2 400",
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
      name: "Irène Bernier",
      origin: "Québec",
      birthYear: 1942,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Nature morte au plat brisé",
      year: 1989,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 16,
        },
        withFrame: {
          width: 22,
          height: 26,
        },
      },
    },
    price: {
      worth: "1 200",
      asked: "800",
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
      worth: "3 400",
      asked: "2 500",
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
      year: null,
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
  {
    fileName: "N° 28",
    artist: {
      name: "Jean-Pierre Lafrance",
      origin: "Québec",
      birthYear: 1943,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Madame Fortin et son copain",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 36,
          height: 40,
        },
        withFrame: {
          width: 38,
          height: 42,
        },
      },
    },
    price: {
      worth: "5 250",
      asked: "2 950",
    },
    sold: false,
  },
  {
    fileName: "N° 29",
    artist: {
      name: "Andrée Marcoux",
      origin: "Québec",
      birthYear: 1966,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Fruits du soleil",
      year: "1998",
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 16,
          height: 20,
        },
        withFrame: {
          width: 24,
          height: 28,
        },
      },
    },
    price: {
      worth: "1 600",
      asked: "1 200",
    },
    sold: false,
  },
  {
    fileName: "N° 30",
    artist: {
      name: "Guy Legaré",
      origin: "Québec",
      birthYear: 1941,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La grève",
      year: 1991,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 20,
        },
        withFrame: {
          width: 18,
          height: 26,
        },
      },
    },
    price: {
      worth: "800",
      asked: "600",
    },
    sold: false,
  },
  {
    fileName: "N° 31",
    artist: {
      name: "Charlotte Lachapelle",
      origin: "France",
      birthYear: 1955,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La pêche",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 11.75,
          height: 13.5,
        },
        withFrame: {
          width: 20,
          height: 22,
        },
      },
    },
    price: {
      worth: "2 400",
      asked: "1 800",
    },
    sold: false,
  },
  {
    fileName: "N° 32",
    artist: {
      name: "Dragan Mihailovic",
      origin: "Serbie",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Il est trop tard, le jardin est rempli",
      year: 1995,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 13,
          height: 9,
        },
        withFrame: {
          width: 19,
          height: 15,
        },
      },
    },
    price: {
      worth: "2 400",
      asked: "1 800",
    },
    sold: false,
  },
  {
    fileName: "N° 33",
    artist: {
      name: "Richard Hétu",
      origin: "Québec",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La balade des Oiseleurs",
      year: 1992,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 10,
          height: 8,
        },
        withFrame: {
          width: 17,
          height: 15,
        },
      },
    },
    price: {
      worth: "2 200",
      asked: "1 800",
    },
    sold: false,
  },
  {
    fileName: "N° 34",
    artist: {
      name: "Paul Tex Lecor",
      origin: "Québec",
      birthYear: 1933,
      deathYear: "2017",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Au bout de la rue",
      year: null,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 16,
        },
        withFrame: {
          width: 21,
          height: 25,
        },
      },
    },
    price: {
      worth: "3 200",
      asked: "2 400",
    },
    sold: false,
  },
  {
    fileName: "N° 35",
    artist: {
      name: "Georges Boka",
      origin: "Canada",
      birthYear: 1939,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Sagesse",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 10,
          height: 8,
        },
        withFrame: {
          width: 20,
          height: 18,
        },
      },
    },
    price: {
      worth: "2 200",
      asked: "1 750",
    },
    sold: false,
  },
  {
    fileName: "N° 36",
    artist: {
      name: "Georges Boka",
      origin: "Canada",
      birthYear: 1939,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Adrien",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 10,
          height: 8,
        },
        withFrame: {
          width: 20,
          height: 18,
        },
      },
    },
    price: {
      worth: "2 200",
      asked: "1 750",
    },
    sold: false,
  },
  {
    fileName: "N° 37",
    artist: {
      name: "Yves du Poirier",
      origin: "Québec",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le quêteux du village vient de passer",
      year: 2002,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 10,
        },
        withFrame: {
          width: 16,
          height: 14,
        },
      },
    },
    price: {
      worth: "1 250",
      asked: "1 000",
    },
    sold: true,
  },
  {
    fileName: "N° 38",
    artist: {
      name: "Arto Yusbasiyan",
      origin: "Istamboul",
      birthYear: 1948,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Richmond Stree East - Toronto",
      year: 1992,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 8,
          height: 10,
        },
        withFrame: {
          width: 15,
          height: 17,
        },
      },
    },
    price: {
      worth: "2 800",
      asked: "1 850",
    },
    sold: false,
  },
  {
    fileName: "N° 39",
    artist: {
      name: "Dragan Mihailovic",
      origin: "Serbie",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Nature généreuse",
      year: 2003,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 14,
          height: 11,
        },
        withFrame: {
          width: 20,
          height: 17,
        },
      },
    },
    price: {
      worth: "2 400",
      asked: "1 800",
    },
    sold: false,
  },
  {
    fileName: "N° 40",
    artist: {
      name: "Dragan Mihailovic",
      origin: "Serbie",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Balade",
      year: 1987,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 11,
          height: 7.5,
        },
        withFrame: {
          width: 18,
          height: 15,
        },
      },
    },
    price: {
      worth: "1 800",
      asked: "1 350",
    },
    sold: false,
  },
  {
    fileName: "N° 41",
    artist: {
      name: "Louise Lauzon",
      origin: "Québec",
      birthYear: 1956,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Piafs",
      year: 2003,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 7,
          height: 5,
        },
        withFrame: {
          width: 13,
          height: 11,
        },
      },
    },
    price: {
      worth: "600",
      asked: "500",
    },
    sold: false,
  },
  {
    fileName: "N° 42",
    artist: {
      name: "Dragan Mihailovic",
      origin: "Serbie",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Une chaîne de toits",
      year: null,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 10,
          height: 2.5,
        },
        withFrame: {
          width: 15,
          height: 7.5,
        },
      },
    },
    price: {
      worth: "800",
      asked: "500",
    },
    sold: false,
  },
  {
    fileName: "N° 43",
    artist: {
      name: "Dragan Mihailovic",
      origin: "Serbie",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Je ne suis rien d'un épouvantail",
      year: null,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 8,
          height: 2.5,
        },
        withFrame: {
          width: 12.5,
          height: 5.5,
        },
      },
    },
    price: {
      worth: "750",
      asked: "500",
    },
    sold: false,
  },
  {
    fileName: "N° 44",
    artist: {
      name: "Dragan Mihailovic",
      origin: "Serbie",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La petite curieuse",
      year: null,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 8,
          height: 2.5,
        },
        withFrame: {
          width: 13,
          height: 7.5,
        },
      },
    },
    price: {
      worth: "750",
      asked: "500",
    },
    sold: false,
  },
  {
    fileName: "N° 45",
    artist: {
      name: "Margaret Buriko",
      origin: "Tashme, Colombie-Britanique",
      birthYear: null,
      deathYear: null,
    },
    info: {
      type: TYPE.PAINTING,
      title: "La bergerie",
      year: 1998,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 8,
          height: 10,
        },
        withFrame: {
          width: 14,
          height: 16,
        },
      },
    },
    price: {
      worth: "600",
      asked: "450",
    },
    sold: false,
  },
  {
    fileName: "N° 46",
    artist: {
      name: "Louis Tremblay",
      origin: "Québec",
      birthYear: 1949,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La rivière Malbaie",
      year: 1990,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 8,
          height: 10,
        },
        withFrame: {
          width: 16,
          height: 18,
        },
      },
    },
    price: {
      worth: "900",
      asked: "700",
    },
    sold: false,
  },
  {
    fileName: "N° 47",
    artist: {
      name: "Francisque Laurent",
      origin: "France",
      birthYear: 1890,
      deathYear: "1958",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le pont, Paris",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 13,
          height: 10,
        },
        withFrame: {
          width: 14,
          height: 16,
        },
      },
    },
    price: {
      worth: "1 600",
      asked: "1 200",
    },
    sold: false,
  },
  {
    fileName: "N° 48",
    artist: {
      name: "Normand Hudon",
      origin: "Québec",
      birthYear: 1929,
      deathYear: "1997",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Les trois étoiles",
      year: 1989,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 16,
        },
        withFrame: {
          width: 18,
          height: 23,
        },
      },
    },
    price: {
      worth: "7 500",
      asked: "5 000",
    },
    sold: false,
  },
  {
    fileName: "N° 49",
    artist: {
      name: "Paula Iacob",
      origin: "Bucarest",
      birthYear: 1932,
      deathYear: "2015",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Sous une pluie d'étoiles",
      year: 1997,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 14,
        },
        withFrame: {
          width: 18,
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
    fileName: "N° 50",
    artist: {
      name: "Jean-Pierre Lafrance",
      origin: "Québec",
      birthYear: 1943,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Au seuil de l'escalier",
      year: 1989,
      medium: MEDIUMS.MIXT,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 36,
          height: 24,
        },
        withFrame: {
          width: 37,
          height: 25,
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
    fileName: "N° 51",
    artist: {
      name: "Horace Champagne",
      origin: "Québec",
      birthYear: 1937,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "A moment of absolute peace, Lake O'Hara",
      year: 1995,
      medium: MEDIUMS.PASTEL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 22,
          height: 30,
        },
        withFrame: {
          width: 29,
          height: 37,
        },
      },
    },
    price: {
      worth: "9 200",
      asked: "6 000",
    },
    sold: false,
  },
  {
    fileName: "N° 52",
    artist: {
      name: "Zeljko Seles",
      origin: "Podravina",
      birthYear: 1954,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Vivre l'hiver",
      year: 2001,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 16,
          height: 24,
        },
        withFrame: {
          width: 24,
          height: 32,
        },
      },
    },
    price: {
      worth: "4 500",
      asked: "3 000",
    },
    sold: false,
  },
  {
    fileName: "N° 53",
    artist: {
      name: "Horace Champagne",
      origin: "Québec",
      birthYear: 1937,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Le funiculaire",
      year: 1989,
      medium: MEDIUMS.PASTEL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 29,
          height: 22,
        },
        withFrame: {
          width: 36,
          height: 30,
        },
      },
    },
    price: {
      worth: "9 200",
      asked: "6 000",
    },
    sold: false,
  },
  {
    fileName: "N° 54",
    artist: {
      name: "Horace Champagne",
      origin: "Québec",
      birthYear: 1937,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Summertime Still Life",
      year: 1992,
      medium: MEDIUMS.PASTEL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 24,
          height: 18,
        },
        withFrame: {
          width: 31,
          height: 25,
        },
      },
    },
    price: {
      worth: "6 500",
      asked: "4 000",
    },
    sold: false,
  },
  {
    fileName: "N° 55",
    artist: {
      name: "Jean-Pierre Lafrance",
      origin: "Québec",
      birthYear: 1943,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Un seul but",
      year: 1989,
      medium: MEDIUMS.MIXT,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 15,
          height: 19,
        },
        withFrame: {
          width: 22,
          height: 26,
        },
      },
    },
    price: {
      worth: "2 500",
      asked: "1 900",
    },
    sold: false,
  },
  {
    fileName: "N° 56",
    artist: {
      name: "Andrée McNab",
      origin: "Québec",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Nocturne",
      year: 1995,
      medium: MEDIUMS.MIXT,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 11,
          height: 14,
        },
        withFrame: {
          width: 16,
          height: 19,
        },
      },
    },
    price: {
      worth: "600",
      asked: "400",
    },
    sold: false,
  },
  {
    fileName: "N° 57",
    artist: {
      name: "Luigi Tiengo",
      origin: "Italie-Québec",
      birthYear: 1926,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Indian Summer",
      year: null,
      medium: MEDIUMS.AQUA,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 16,
        },
        withFrame: {
          width: 19,
          height: 23,
        },
      },
    },
    price: {
      worth: "1 600",
      asked: "1 200",
    },
    sold: false,
  },
  {
    fileName: "N° 58",
    artist: {
      name: "Ginette Laplante",
      origin: "Québec",
      birthYear: null,
      deathYear: null,
    },
    info: {
      type: TYPE.PAINTING,
      title: "Au petit trot!",
      year: 1947,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 24,
          height: 12,
        },
        withFrame: {
          width: 30,
          height: 18,
        },
      },
    },
    price: {
      worth: "1 500",
      asked: "1 125",
    },
    sold: false,
  },
  {
    fileName: "N° 59",
    artist: {
      name: "Claudette Castonguay",
      origin: "Québec",
      birthYear: 1949,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Les jours heureux",
      year: null,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 18,
          height: 36,
        },
        withFrame: {
          width: 20,
          height: 38,
        },
      },
    },
    price: {
      worth: "1 800",
      asked: "1 350",
    },
    sold: false,
  },
  {
    fileName: "N° 60",
    artist: {
      name: "Claudette Castonguay",
      origin: "Québec",
      birthYear: 1949,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Un air de fête",
      year: null,
      medium: MEDIUMS.ACRYLIC,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 24,
          height: 36,
        },
        withFrame: {
          width: 26,
          height: 38,
        },
      },
    },
    price: {
      worth: "2 400",
      asked: "1 800",
    },
    sold: false,
  },
  {
    fileName: "N° 61",
    artist: {
      name: "Jean-Pierre Lafrance",
      origin: "Québec",
      birthYear: 1943,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Croquis de recherche",
      year: 1990,
      medium: MEDIUMS.MIXT,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 16,
          height: 12,
        },
        withFrame: {
          width: 25,
          height: 20.5,
        },
      },
    },
    price: {
      worth: "1 800",
      asked: "1 200",
    },
    sold: false,
  },
  {
    fileName: "N° 62",
    artist: {
      name: "Pauline Paquin",
      origin: "Québec",
      birthYear: 1952,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Un seul roulé",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 11.25,
          height: 9.25,
        },
        withFrame: {
          width: 20,
          height: 10,
        },
      },
    },
    price: {
      worth: "1 250",
      asked: "1 000",
    },
    sold: false,
  },
  {
    fileName: "N° 63",
    artist: {
      name: "Marcel Favreau",
      origin: "Québec",
      birthYear: 1921,
      deathYear: "2020",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Sur le mont St-Bruno",
      year: 1986,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 9.5,
          height: 11.5,
        },
        withFrame: {
          width: 15.5,
          height: 17.5,
        },
      },
    },
    price: {
      worth: "1 200",
      asked: "600",
    },
    sold: false,
  },
  {
    fileName: "N° 64",
    artist: {
      name: "André L'archevêque",
      origin: "Québec",
      birthYear: 1923,
      deathYear: "2015",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Reflets",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 8,
          height: 10,
        },
        withFrame: {
          width: 16,
          height: 18,
        },
      },
    },
    price: {
      worth: "1 500",
      asked: "1 000",
    },
    sold: false,
  },
  {
    fileName: "N° 65",
    artist: {
      name: "Françoise Delamare Papion",
      origin: "France",
      birthYear: 1931,
      deathYear: "2012",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Dans un jardin",
      year: null,
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 12,
          height: 10,
        },
        withFrame: {
          width: 15,
          height: 13,
        },
      },
    },
    price: {
      worth: "1 200",
      asked: "900",
    },
    sold: false,
  },
  {
    fileName: "N° 66",
    artist: {
      name: "Pauline Paquin",
      origin: "Québec",
      birthYear: 1952,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "La limonade la plus fraîche en ville",
      year: null,
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
      worth: "2 800",
      asked: "1 750",
    },
    sold: false,
  },
  {
    fileName: "N° 67",
    artist: {
      name: "Jenny Hellers",
      origin: "Québec",
      birthYear: 1958,
      deathYear: "-",
    },
    info: {
      type: TYPE.PAINTING,
      title: "Inconnu",
      year: "Inconnu",
      medium: MEDIUMS.OIL,
      frame: true,
      sizes: {
        withoutFrame: {
          width: 27,
          height: 21,
        },
        withFrame: {
          width: 36,
          height: 30,
        },
      },
    },
    price: {
      worth: "1 800",
      asked: "1 350",
    },
    sold: false,
  },
  {
    fileName: "N° S01",
    artist: {
      name: "Bruno Luna",
      origin: "Mexique",
      birthYear: 1963,
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Don Cuco",
      year: 1997,
      medium: MEDIUMS.BRONZE,
      sizes: {
        width: 16,
        length: 16,
        height: 31,
      },
    },
    price: {
      worth: "5 600",
      asked: "4 500",
    },
    sold: false,
  },
  {
    fileName: "N° S02",
    artist: {
      name: "Pierre Chouinard",
      origin: "Québec",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Neptune",
      year: null,
      medium: MEDIUMS.ALBATRE,
      sizes: {
        width: 5,
        length: 7,
        height: 19,
      },
    },
    price: {
      worth: "1 750",
      asked: "1 350",
    },
    sold: false,
  },
  {
    fileName: "N° S03",
    artist: {
      name: "Hélène Labrie",
      origin: "Québec",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "BCBG 1/8",
      year: null,
      medium: MEDIUMS.BRONZE,
      sizes: {
        width: 5.5,
        length: 9,
        height: 19,
      },
    },
    price: {
      worth: "7 800",
      asked: "4 500",
    },
    sold: false,
  },
  {
    fileName: "N° S04",
    artist: {
      name: "James Tandi",
      origin: "Zimbabwe",
      birthYear: 1956,
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Shona Chef",
      year: 2000,
      medium: MEDIUMS.VERDITE,
      sizes: {
        width: 7,
        length: 9,
        height: 16,
      },
    },
    price: {
      worth: "7 500",
      asked: "6 000",
    },
    sold: false,
  },
  {
    fileName: "N° S05",
    artist: {
      name: "James Tandi",
      origin: "Zimbabwe",
      birthYear: 1956,
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Shona Princess",
      year: 2000,
      medium: MEDIUMS.VERDITE,
      sizes: {
        width: 7,
        length: 9,
        height: 16,
      },
    },
    price: {
      worth: "7 500",
      asked: "6 000",
    },
    sold: false,
  },
  {
    fileName: "N° S06",
    artist: {
      name: "Artiste Shona",
      origin: "Zimbabwe",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Rhino",
      year: "2005",
      medium: MEDIUMS.VERDITE,
      sizes: {
        width: 5,
        length: 8,
        height: 16,
      },
    },
    price: {
      worth: "1 500",
      asked: "1 150",
    },
    sold: false,
  },
  {
    fileName: "N° S07",
    artist: {
      name: "Thomas Tandi",
      origin: "Zimbabwe",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Trois éléphants",
      year: 2004,
      medium: MEDIUMS.VERDITE,
      sizes: {
        width: 5.5,
        length: 6,
        height: 10.5,
      },
    },
    price: {
      worth: "1 250",
      asked: "950",
    },
    sold: false,
  },
  {
    fileName: "N° S08",
    artist: {
      name: "Thomas Tandi",
      origin: "Zimbabwe",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Portrait de chef",
      year: 2007,
      medium: MEDIUMS.SERPENTINE,
      sizes: {
        width: 5,
        length: 6,
        height: 11.5,
      },
    },
    price: {
      worth: "1 250",
      asked: "950",
    },
    sold: false,
  },
  {
    fileName: "N° S09",
    artist: {
      name: "Farae Tandi",
      origin: "Zimbabwe",
      birthYear: "-",
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Chef",
      year: 2007,
      medium: MEDIUMS.VERDITE,
      sizes: {
        width: 5,
        length: 5,
        height: 10,
      },
    },
    price: {
      worth: "1 250",
      asked: "950",
    },
    sold: false,
  },
  {
    fileName: "N° S10",
    artist: {
      name: "Paul D. Wegner",
      origin: "États-Unis",
      birthYear: 1950,
      deathYear: "-",
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "Jazz 117/300",
      year: 1993,
      medium: MEDIUMS.BRONZE,
      sizes: {
        width: 7,
        length: 4,
        height: 9.5,
      },
    },
    price: {
      worth: "4 500",
      asked: "3 200",
    },
    sold: false,
  },
  {
    fileName: "N° S11",
    artist: {
      name: "Genius of Wedgwood",
      origin: "Egypte",
      birthYear: null,
      deathYear: null,
    },
    info: {
      type: TYPE.SCULPTURE,
      title: "The Canopic Vase 87/200",
      year: 1997,
      medium: MEDIUMS.JASPER,
      sizes: {
        width: 7,
        length: 3.9,
        height: 9.5,
      },
    },
    price: {
      worth: "18 500",
      asked: "12 500",
    },
    sold: false,
  },
]

export default files
