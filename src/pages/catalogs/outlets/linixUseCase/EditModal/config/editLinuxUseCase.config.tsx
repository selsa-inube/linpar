const editLinixUseCaseConfig = [
  {
    id: 1,
    title: "Agregar un caso de uso",
    description: "Completa la información para agregar un caso de uso",
    route: "/catalogs/linixUseCase/adding-linix-use-case",
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
        path: "/catalogs/linixUseCase",
        label: "Casos de uso Linix",
        id: "/catalogs/linixUseCase",
        isActive: false,
      },
      {
        path: `/catalogs/linixUseCase/edit/:edit_id`,
        label: "Editar caso de uso",
        id: "/catalogs/linixUseCase/edit",
        isActive: true,
      },
    ],
  },
];

const editLinixUseCaseSubjectCardLabels = [
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

export { editLinixUseCaseConfig, editLinixUseCaseSubjectCardLabels };
