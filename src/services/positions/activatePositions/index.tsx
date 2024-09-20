import { environment } from "@config/environment";
import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";
import { IactivePositions } from "./types";
import { mapPositionsActiveEntityToApi } from "./mappers";

const activePositions = async (
  activePositions: IactivePositions
): Promise<IPosition | undefined> => {
  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE}/cargos`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "CambiarEstadoCargo",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapPositionsActiveEntityToApi(activePositions)),
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch (error) {
      throw new Error("Failed to parse response JSON");
    }

    if (!res.ok) {
      const errorMessage = `Error al eliminar el Cargo: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to delete cargo:", error);
    throw error;
  }
};

export { activePositions };
