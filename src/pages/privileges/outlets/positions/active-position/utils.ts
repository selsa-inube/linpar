import { IactivePositions } from "@services/positions/activatePositions/types";
import { activePositions } from "@services/positions/activatePositions";

const activatePositions = async (
  id: string,
  active: string
): Promise<boolean> => {
  let confirmationActive = true;
  const positionsData: IactivePositions = {
    k_Grupo: id,
    i_Activo: active,
    modifyJustification: "Lincon",
  };
  try {
    await activePositions(positionsData);
  } catch (error) {
    confirmationActive = false;
    throw error;
  }

  return confirmationActive;
};

export { activatePositions };
