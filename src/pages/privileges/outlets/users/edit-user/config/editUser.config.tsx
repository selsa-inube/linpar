import { EAppearance } from "@src/types/colors.types";

const editUserOptionsConfig = {
  editUserPage: {
    id: 1,
    label: "Editar Usuario",
    description: "Editar las propiedades y privilegios del usuario",
    url: "/privileges/users/user edition",
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
        path: "/users",
        label: "Usuarios",
        id: "/users",
        isActive: false,
      },
      {
        path: "/userEdition",
        label: "user edition",
        id: "/userEdition",
        isActive: true,
      },
    ],
  },
};

const editUserContinueModalConfig = {
  title: "Continuar sin guardar",
  description:
    "¿Seguro que desea salir? cualquier cambio no guardado se perderá",
  actionText: "Continuar",
  appearance: EAppearance.SUCCESS,
};

const editUserSubjectCardLabels = [
  {
    id: "username",
    titleName: "Nombre",
    priority: 0,
  },
  {
    id: "userID",
    titleName: "Identificación",
    priority: 1,
  },
  {
    id: "code",
    titleName: "Código",
    priority: 2,
  },
  {
    id: "position",
    titleName: "Rol",
    priority: 3,
  },
];

export {
  editUserContinueModalConfig,
  editUserOptionsConfig,
  editUserSubjectCardLabels,
};
