import { EAppearance } from "@src/types/colors.types";

const editLinixUsersConfig = [
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
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/users",
        label: "Usuarios Linix",
        id: "/privileges/users",
        isActive: false,
      },
      {
        path: "/catalogs/users/edit/:user_id",
        label: "Edicion de usuario",
        id: "/catalogs/users/edit",
        isActive: true,
      },
    ],
  },
];

const editUserContinueModalConfig = {
  title: "Continuar sin guardar",
  description:
    "¿Seguro que desea salir? cualquier cambio no guardado se perderá",
  actionText: "Continuar",
  appearance: EAppearance.SUCCESS,
};

const editLinixUserSubjectCardLabels = [
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

export {
  editLinixUsersConfig,
  editLinixUserSubjectCardLabels,
  editUserContinueModalConfig,
};
