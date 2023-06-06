import userNotFound from "@src/assets/images/ItemNotFound.png";

const userNotFoundConfig = {
  image: userNotFound,
  title: "¡Ups! Usuario no encontrado...",
  description:
    "El usuario no se encuentra en la base de datos, por favor modifique los parámetros de búsqueda.",
  buttonDescription: "Volver",
  route: "/privileges/users",
};

export { userNotFoundConfig };
