import { EAppearance } from "@src/types/colors.types";

export const deleteRolModal = {
  delete: {
    title: "Eliminar Rol",
    description: (n_Rol: string) =>
      `¿Está seguro de que desea eliminar el rol ${n_Rol}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};
