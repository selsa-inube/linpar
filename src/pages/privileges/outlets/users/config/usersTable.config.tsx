const usersBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 837px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const usersTitlesConfig = [
  {
    id: "n_Usuari",
    titleName: "Nombre de usuario",
    priority: 0,
  },
  {
    id: "k_Usuari",
    titleName: "Código",
    priority: 2,
  },
  {
    id: "a_Numnit",
    titleName: "Identificación",
    priority: 1,
  },
  {
    id: "n_Grupo",
    titleName: "Cargo",
    priority: 3,
  },
];

export { usersBreakPointsConfig, usersTitlesConfig };
