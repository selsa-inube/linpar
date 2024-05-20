import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";
import { IGeneralInformationEntry } from "@src/services/users/users.types";

const deleteUserModal = {
  delete: {
    title: "Eliminar",
    description: (k_Usuari: string) =>
      `¿Está seguro de que desea eliminar al usuario ${k_Usuari}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};
const deleteUserMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: (k_Usuari: string) =>
      `Hemos eliminado con éxito al usuario ${k_Usuari}.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ k_Usuari }: IGeneralInformationEntry) =>
      `Hemos presentado problemas eliminando al usuario ${k_Usuari}.`,
    appearance: EAppearance.ERROR,
  },
};
export { deleteUserMessages, deleteUserModal };
