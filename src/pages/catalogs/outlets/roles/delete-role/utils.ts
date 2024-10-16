import { deleteRoles } from "@services/roles/deleteRoles";
import { IdeleteRoles } from "@services/roles/deleteRoles/types";

const deleteRol = async (
  rol: number,
  nameRol: string,
  rolesBusinessUnit: string
): Promise<boolean> => {
  let confirmationDelete = true;
  const rolData: IdeleteRoles = {
    k_Rol: rol,
    n_Rol: nameRol,
    removalJustification: "Lincon",
  };
  try {
    await deleteRoles(rolData, rolesBusinessUnit);
  } catch (error) {
    confirmationDelete = false;
    throw error;
  }

  return confirmationDelete;
};

export { deleteRol };
