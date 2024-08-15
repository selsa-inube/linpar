import { IactivePositions } from "./types";

const mapPositionsActiveEntityToApi = (
  activeRol: IactivePositions
): Record<string, string | number | object> => {
  return {
    k_Grupo: String(activeRol.k_Grupo),
    i_Activo: String(activeRol.i_Activo),
    modifyJustification: "Lincon",
  };
};

export { mapPositionsActiveEntityToApi };
