const editUserOptionsConfig = {
  editUserPage: {
    id: 1,
    label: "Editar Usuario",
    description: "Editar las propiedades y privilegios del usuario",
    url: "/privileges/users/user edition",
  },
};

const EditUserContinueModalConfig = {
  title: "Continuar sin guardar",
  description:
    "¿Seguro que desea salir? cualquier cambio no guardado se perderá",
  actionText: "Continuar",
  appearance: "confirm",
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
  editUserOptionsConfig,
  EditUserContinueModalConfig,
  editUserSubjectCardLabels,
};
