import { IGeneralInformationUsersForm } from "../users.types";

const mapUserApiToEntity = (
  users: Record<string, string | number | object>
): IGeneralInformationUsersForm => {
  const builUsers: IGeneralInformationUsersForm = {
    id: String(users.k_Usuari),
    k_Usuari: String(users.k_Usuari),
    n_Usuari: String(users.n_Usuari),
    k_Grupo: String(users.k_Grupo),
    n_Grupo: String(users.n_Grupo),
    a_Numnit: String(users.a_Numnit),
    i_Activo: String(users.i_Activo),
  };
  return builUsers;
};

const mapUsersApiToEntities = (
  users: Record<string, string | number | object>[]
): IGeneralInformationUsersForm[] => {
  return users.map(mapUserApiToEntity);
};
export { mapUsersApiToEntities, mapUserApiToEntity };
