const useCasesBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 837px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const titlesOptions = [
  {
    id: "k_usecase",
    titleName: "Código",
    priority: 0,
  },

  {
    id: "n_usecase",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "i_tipusec",
    titleName: "Tipo",
    priority: 2,
  },
];

export { useCasesBreakPointsConfig, titlesOptions };
