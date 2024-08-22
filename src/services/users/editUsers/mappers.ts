import { IGeneralInformationUsersForm } from "../users.types";

const mapEditUsersEntityToApi = (
  editUsers: IGeneralInformationUsersForm
): Record<string, string | number | object> => {
  return {
    modifyJustification: "<string>",
    k_Usuari: String(editUsers.k_Usuari),
    n_Usuari: String(editUsers.n_Usuari),
    k_Grupo: String(editUsers.k_Grupo),
  };
};

export { mapEditUsersEntityToApi };
