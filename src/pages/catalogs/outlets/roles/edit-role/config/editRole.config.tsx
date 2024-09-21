const editRoleConfig = [
  {
    id: 1,
    title: "Editar rol",
    description: "Editar la información del rol",
    route: "/catalogs/roles/edit",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/catalogs",
        label: "Catálogos Generales",
        id: "/catalogs",
        isActive: false,
      },
      {
        path: "/catalogs/roles",
        label: "roles",
        id: "/catalogs/roles",
        isActive: false,
      },
      {
        path: "/catalogs/roles/edit",
        label: "Editar rol",
        id: "/catalogs/roles/edit",
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
