import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

export const deleteLinixUsersModal = {
  delete: {
    title: "Eliminar Caso de Uso",
    description: (k_Usecase: string) =>
      `¿Está seguro de que desea eliminar el Caso de Uso ${k_Usecase}?`,
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
    description: " ",
    appearance: EAppearance.ERROR,
  },
};
