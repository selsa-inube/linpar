const usersBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 850px)", totalColumns: 4 },
  { breakpoint: "(max-width: 680px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const usersTitlesConfig = [
  {
    id: "username",
    titleName: "Nombre de usuario",
    priority: 0,
  },
  {
    id: "code",
    titleName: "Código",
    priority: 2,
  },
  {
    id: "userID",
    titleName: "Identificación",
    priority: 1,
  },
  {
    id: "position",
    titleName: "Cargo",
    priority: 3,
  },
];

export { usersBreakPointsConfig, usersTitlesConfig };
