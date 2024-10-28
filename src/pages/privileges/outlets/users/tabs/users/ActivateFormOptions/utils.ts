import { IactiveUsers } from "@services/users/pacthUsers/types";
import { activeUsers } from "@services/users/pacthUsers";

const activatePositions = async (
  id: string,
  active: string,
  businessUnitPublicCode: string
): Promise<boolean> => {
  let confirmationActive = true;
  const usersData: IactiveUsers = {
    k_Usuari: id,
    i_Activo: active,
  };
  try {
    await activeUsers(usersData, businessUnitPublicCode);
  } catch (error) {
    confirmationActive = false;
    throw error;
  }

  return confirmationActive;
};

export { activatePositions };
