import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

export const deleteLinixUsersModal = {
  delete: {
    title: "Eliminar Usuario",
    description: (k_Usuari: string) =>
      `¿Está seguro de que desea eliminar el Usuario ${k_Usuari}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};

export const deleteUserMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: "Hemos eliminado con éxito el usuario ",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title:
      "¡Tuvimos problemas para eliminar el usuario, por favor intenta nuevamente!",
    description: "Tuvimos problemas para eliminar",
    appearance: EAppearance.ERROR,
  },
};
