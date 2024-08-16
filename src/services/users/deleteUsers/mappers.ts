import { IdeleteUsers } from "./types";

const mapUsersDeleteEntityToApi = (
  deleteUsers: IdeleteUsers
): Record<string, string | number | object> => {
  return {
    removalJustification: String(deleteUsers.removalJustification),
    k_Usuari: String(deleteUsers.k_Usuari),
  };
};

export { mapUsersDeleteEntityToApi };
