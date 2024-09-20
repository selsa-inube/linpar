const editRoleConfig = [
  {
    id: 1,
    title: "Editar rol",
    description: "Editar la información del rol",
    route: "/catalags/roles/edit",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/catalags",
        label: "Catálogos Generales",
        id: "/catalags",
        isActive: false,
      },
      {
        path: "/catalags/roles",
        label: "roles",
        id: "/catalags/roles",
        isActive: false,
      },
      {
        path: "/catalags/roles/edit",
        label: "Editar rol",
        id: "/catalags/roles/edit",
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
