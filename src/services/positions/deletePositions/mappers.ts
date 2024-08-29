import { IdeletePositions } from "./types";

const mapPositionsDeleteEntityToApi = (
  deletePositions: IdeletePositions
): Record<string, string | number | object> => {
  return {
    removalJustification: String(deletePositions.removalJustification),
    eliminarCargo: [
      {
        k_Grupo: String(deletePositions.k_Grupo),
      },
    ],
  };
};

export { mapPositionsDeleteEntityToApi };
