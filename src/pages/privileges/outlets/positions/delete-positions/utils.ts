import { deletePositions } from "@services/positions/deletePositions";
import { IdeletePositions } from "@services/positions/deletePositions/types";

const deletePosition = async (
  linixPosition: string,
  businessUnitPublicCode: string
): Promise<boolean> => {
  let confirmationDelete = true;
  const linixPositionsData: IdeletePositions = {
    k_Grupo: linixPosition,
    removalJustification: "Lincon",
  };
  try {
    await deletePositions(linixPositionsData, businessUnitPublicCode);
  } catch (error) {
    confirmationDelete = false;
    throw error;
  }

  return confirmationDelete;
};

export { deletePosition };
