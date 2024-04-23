const editLinixUseCaseConfig = [
  {
    id: 1,
    title: "Agregar un caso de uso",
    description: "Completa la información para agregar un caso de uso",
    route: "/privileges/linixUseCase/adding-linix-use-case",
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
        path: "/privileges/linixUseCase",
        label: "Casos de uso Linix",
        id: "/privileges/linixUseCase",
        isActive: false,
      },
      {
        path: `/privileges/linixUseCase/edit/:edit_id`,
        label: "Editar caso de uso",
        id: "/privileges/linixUseCase/edit",
        isActive: true,
      },
    ],
  },
];

export { editLinixUseCaseConfig };
