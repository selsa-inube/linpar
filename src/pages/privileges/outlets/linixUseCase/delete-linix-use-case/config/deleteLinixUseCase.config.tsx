import { EAppearance } from "@src/types/colors.types";

export const deleteLinixUseCaseModal = {
  delete: {
    title: "Eliminar Caso de Uso",
    description: (k_Usecase: string) =>
      `¿Está seguro de que desea eliminar el Caso de Uso ${k_Usecase}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};
