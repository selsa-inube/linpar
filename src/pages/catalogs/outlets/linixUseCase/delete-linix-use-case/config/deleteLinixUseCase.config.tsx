import { MdOutlineSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

export const deleteLinixUseCaseModal = {
  delete: {
    title: "Eliminar Caso de Uso",
    description: (n_Usecase: string) =>
      `¿Está seguro de que desea eliminar el Caso de Uso ${n_Usecase}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};

export const deleteUserMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: "Hemos eliminado con éxito el Caso de Uso",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "Ups, algo ha salido mal!",
    description:
      "Tuvimos problemas para guardar cambios para el caso de uso ya que se encuentra agregado en Roles",
    appearance: EAppearance.ERROR,
  },
};
