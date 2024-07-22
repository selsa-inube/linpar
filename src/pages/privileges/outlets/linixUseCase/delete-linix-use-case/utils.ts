import { deleteLinixUseCase } from "@services/linixUseCase/deleteLinixUseCase";
import { IdeleteLinixUseCase } from "@services/linixUseCase/deleteLinixUseCase/types";

const deleteUseCase = async (
  linixUseCase: string,
  nameLinixuseCase: string
): Promise<boolean> => {
  let confirmationDelete = true;
  const linixUseCaseData: IdeleteLinixUseCase = {
    k_Usecase: linixUseCase,
    n_Usecase: nameLinixuseCase,
    removalJustification: "Lincon",
  };
  try {
    await deleteLinixUseCase(linixUseCaseData);
  } catch (error) {
    confirmationDelete = false;
    throw error;
  }

  return confirmationDelete;
};

export { deleteUseCase };
