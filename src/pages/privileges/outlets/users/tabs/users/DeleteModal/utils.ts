import { IdeleteUsers } from "@services/users/deleteUsers/types";
import { deleteUsers } from "@services/users/deleteUsers";

const deleteUser = async (linixUsers: string): Promise<boolean> => {
  let confirmationDelete = true;
  const linixUsersData: IdeleteUsers = {
    k_Usuari: linixUsers,
    removalJustification: "Lincon",
  };
  try {
    await deleteUsers(linixUsersData);
  } catch (error) {
    confirmationDelete = false;
    throw error;
  }

  return confirmationDelete;
};

export { deleteUser };
