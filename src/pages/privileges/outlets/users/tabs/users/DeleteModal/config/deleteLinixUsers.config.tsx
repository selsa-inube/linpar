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
    description: (id: string) =>
      `Hemos eliminado con éxito el Caso de Uso ${id}.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: (id: string) =>
      `Hemos presentado problemas eliminando el Caso de Uso ${id}.`,
    appearance: EAppearance.ERROR,
  },
};
