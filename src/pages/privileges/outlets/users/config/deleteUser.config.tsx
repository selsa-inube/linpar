import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { IActionConfig } from "./types";
const deleteUserModal = {
  delete: {
    title: "Eliminar Usuario",
    description: ({ code }: IActionConfig) =>
      `¿Está seguro de que desea eliminar al usuario ${code}?`,
    actionText: "Eliminar",
    appearance: "remove",
  },
};

const deleteUserMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: ({ code }: IActionConfig) =>
      `Hemos eliminado con éxito al usuario ${code}.`,
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ code }: IActionConfig) =>
      `Hemos presentado problemas eliminando al usuario ${code}.`,
    appearance: "remove",
  },
};

export { deleteUserMessages, deleteUserModal };
