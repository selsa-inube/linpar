export const editPositionTabsConfig = {
  generalInformation: {
    id: "informacion-general",
    label: "Información general",
    isDisabled: false,
  },
  rolesPorCargos: {
    id: "roles",
    label: "Roles",
    isDisabled: false,
  },
};

export const editPositionConfig = [
  {
    id: 1,
    title: "  Editar cargo",
    description: "Completa la información para editar cargo",
    route: "/privileges/positions/add-position",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/positions",
        label: "Cargos",
        id: "/privileges/positions",
        isActive: false,
      },
      {
        path: "/privileges/positions/edit",
        label: "Editar cargo",
        id: "/privileges/positions/edit",
        isActive: true,
      },
    ],
  },
];

export const editPositionCardLabels = [
  {
    id: "code",
    titleName: "Código",
    priority: 0,
  },
  {
    id: "username",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "type",
    titleName: "Tipo",
    priority: 2,
  },
  {
    id: "description",
    titleName: "Descripicion",
    priority: 3,
  },
  {
    id: "csButton",
    titleName: "Opción botón cliente servidor",
    priority: 4,
  },
];
