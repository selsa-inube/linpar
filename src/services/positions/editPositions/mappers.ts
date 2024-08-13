import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

const mapEditCargosEntityToApi = (
  editCargo: IPosition
): Record<string, string | number | object> => {
  return {
    modifyJustification: "Cambio",
    n_Grupo: String(editCargo.n_Grupo),
    n_Uso: String(editCargo.n_Uso),
    k_Grupo: String(editCargo.k_Grupo),
  };
};

export { mapEditCargosEntityToApi };
