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

export { editUserOptionsConfig, EditUserContinueModalConfig };
