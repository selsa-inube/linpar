const editRoleConfig = [
  {
    id: 1,
    title: "Editar rol",
    description: "Editar la información del rol",
    route: "/privileges/roles/edit",
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
        path: "/privileges/roles",
        label: "roles",
        id: "/privileges/roles",
        isActive: false,
      },
      {
        path: "/privileges/roles/edit",
        label: "Editar rol",
        id: "/privileges/roles/edit",
        isActive: true,
      },
    ],
  },
];

const editRoleCardLabels = [
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

export { editRoleConfig, editRoleCardLabels };
