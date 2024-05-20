import { EAppearance } from "@src/types/colors.types";

export const deleteInvitationModal = {
  delete: {
    title: "Eliminar invitación",
    description: (userName: string) =>
      `¿Está seguro de que desea eliminar la invitación de ${userName}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};
