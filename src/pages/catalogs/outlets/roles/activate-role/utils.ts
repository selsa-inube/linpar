import { activeRoles } from "@services/roles/activeRole";
import { IactiveRoles } from "@services/roles/activeRole/types";

const activeRole = async (id: number, active: string): Promise<boolean> => {
  let confirmationActive = true;
  const rolData: IactiveRoles = {
    k_Rol: id,
    i_Activo: active,
    modifyJustification: "Lincon",
  };
  try {
    await activeRoles(rolData);
  } catch (error) {
    confirmationActive = false;
    throw error;
  }

  return confirmationActive;
};

export { activeRole };
