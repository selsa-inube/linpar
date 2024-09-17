import { IactiveUsers } from "./types";

const mapUsersActiveEntityToApi = (
  activUser: IactiveUsers
): Record<string, string | number | object> => {
  return {
    k_Usuari: String(activUser.k_Usuari),
    i_Activo: String(activUser.i_Activo),
  };
};

export { mapUsersActiveEntityToApi };
