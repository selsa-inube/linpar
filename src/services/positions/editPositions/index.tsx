import { environment } from "@config/environment";
import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";
import { mapEditCargosEntityToApi } from "./mappers";

const editCargos = async (
  editCargos: IPosition,
  businessUnitPublicCode: string
): Promise<IPosition | undefined> => {
  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE}/cargos`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "ModificarCargo",
        "X-Business-Unit": businessUnitPublicCode,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapEditCargosEntityToApi(editCargos)),
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
      const errorMessage = `Error al modificar el Cargo: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to edit cargo:", error);
    throw error;
  }
};

export { editCargos };
