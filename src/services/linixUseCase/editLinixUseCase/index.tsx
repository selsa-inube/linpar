import { UseCase } from "@src/pages/privileges/outlets/linixUseCase/types";

import { environment } from "@src/config/environment";
import { mapEditLinixUseCaseEntityToApi } from "./mapper";

const editLinixUseCase = async (
  editUseCase: UseCase
): Promise<UseCase | undefined> => {
  const requestUrl = `${environment.ICLIENT_API_URL_PERSISTENCE_POST}/casos-de-uso`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "ModificarCasoDeUso",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapEditLinixUseCaseEntityToApi(editUseCase)),
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
      const errorMessage = `Error al modificar caso de uso linix. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to edit linix use case:", error);
    throw error;
  }
};

export { editLinixUseCase };
