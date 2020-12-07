const MEDIUMS = {
  OIL: "Huile",
  ACRYLIC: "Acrylique",
}

const files = [
  {
    number: 1,
    artist: {
      name: "Andris Leimanis",
      origin: "Lettonie",
      birthYear: 1938,
      deathYear: null,
    },
    fileName: "_L104589",
    painting: {
      title: "Montreal at Dusk",
      year: 1990,
    },
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 6000,
      asked: 4500,
    },
    sold: false,
  },
  {
    number: 2,
    artist: {
      name: "Jean-Pierre Lafrance",
      origin: "Québec",
      birthYear: 1943,
      deathYear: null,
    },
    painting: {
      title: "Le jour de la nuit",
      year: 1990,
    },
    fileName: "_L104591",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 7200,
      asked: 4900,
    },
    sold: false,
  },
  {
    number: 3,
    artist: {
      name: "Vladimir Horik",
      origin: "Québec",
      birthYear: 1939,
      deathYear: null,
    },
    painting: {
      title: "Le moulin de l’Ile aux Coudres",
      year: 1999,
    },
    fileName: "_L104593",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 6900,
      asked: 5500,
    },
    sold: false,
  },
  {
    number: 4,
    artist: {
      name: "Alexis Arts",
      origin: "Hollande - Québec",
      birthYear: 1940,
      deathYear: null,
    },
    painting: {
      title: "Lever de soleil",
      year: 1993,
    },
    fileName: "_L104595",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 4800,
      asked: 3900,
    },
    sold: false,
  },
  {
    number: 5,
    artist: {
      name: "St-Gilles",
      origin: "Québec",
      birthYear: 1940,
      deathYear: null,
    },
    painting: {
      title: "Port de Lund",
      year: 2002,
    },
    fileName: "_L104596",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 3800,
      asked: 3000,
    },
    sold: false,
  },
  {
    number: 6,
    artist: {
      name: "Marcel H. Poirier",
      origin: "Québec",
      birthYear: 1946,
      deathYear: null,
    },
    painting: {
      title: "Travaux publics",
      year: 1998,
    },
    fileName: "_L104598",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 5000,
      asked: 3500,
    },
    sold: false,
  },
  {
    number: 7,
    artist: {
      name: "Normand Hudon",
      origin: "Québec",
      birthYear: 1929,
      deathYear: 1997,
    },
    painting: {
      title: "Coin de rue",
      year: 1989,
    },
    fileName: "_L104599",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 25000,
      asked: 19500,
    },
    sold: false,
  },
  {
    number: 8,
    artist: {
      name: "Francesco Iacurto",
      origin: "Québec",
      birthYear: 1908,
      deathYear: 2001,
    },
    painting: {
      title: "Portrait du peintre Gérard Faulkner",
      year: 1990,
    },
    fileName: "_L104606",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 12000,
      asked: 9500,
    },
    sold: false,
  },
  {
    number: 9,
    artist: {
      name: "André Bertounesque",
      origin: "France - Québec",
      birthYear: 1937,
      deathYear: 2005,
    },
    painting: {
      title: "Cour de Provence",
      year: 1999,
    },
    fileName: "_L104609",
    medium: MEDIUMS.ACRYLIC,
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
    price: {
      worth: 8000,
      asked: 6400,
    },
    sold: false,
  },
  {
    number: 10,
    artist: {
      name: "Bruno Côté",
      origin: "Québec",
      birthYear: 1940,
      deathYear: 2010,
    },
    painting: {
      title: "Fin d’été",
      year: 2004,
    },
    fileName: "_L104611",
    medium: MEDIUMS.OIL,
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
    price: {
      worth: 9000,
      asked: 7200,
    },
    sold: false,
  },
]

export default files
