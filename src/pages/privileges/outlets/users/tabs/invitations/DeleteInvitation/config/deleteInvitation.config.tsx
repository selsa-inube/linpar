import { MdOutlineSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

export const deleteInvitationModal = {
  delete: {
    title: "Eliminar Caso de Uso",
    description: (k_Usecase: string) =>
      `¿Está seguro de que desea eliminar el Caso de Uso ${k_Usecase}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};

export const deleteInvitationMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: "Hemos eliminado con éxito la invtacion ",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "Ups, algo ha salido mal!",
    description:
      "Tuvimos problemas para eliminar la invitación, por favor intenta nuevamente",
    appearance: EAppearance.ERROR,
  },
};
