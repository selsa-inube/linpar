import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

const mapPositionsEntityToApi = (
  position: IPosition
): Record<string, string | number | object> => {
  return {
    n_Grupo: String(position.n_Grupo),
    n_Uso: String(position.n_Uso),
    rolesPorCargo: Object(position.rolesPorCargo),
  };
};

export { mapPositionsEntityToApi };
