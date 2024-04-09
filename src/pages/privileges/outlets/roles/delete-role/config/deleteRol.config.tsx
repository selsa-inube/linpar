import { EAppearance } from "@src/types/colors.types";

export const deleteRolModal = {
  delete: {
    title: "Eliminar Rol",
    description: (k_Rol: string) =>
      `¿Está seguro de que desea eliminar el rol ${k_Rol}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};
