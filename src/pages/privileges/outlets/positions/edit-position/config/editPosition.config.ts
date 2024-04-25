export const editPositionTabsConfig = {
  generalInformation: {
    id: "informacion-general",
    label: "Información general",
    isDisabled: false,
  },
  roles: {
    id: "roles",
    label: "Roles",
    isDisabled: false,
  },
};

export const editPositionConfig = [
  {
    id: 1,
    title: "Agregar cargo",
    description: "Completa la información para agregar cargo",
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
