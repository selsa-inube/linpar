import { UseCase } from "@pages/catalogs/outlets/linixUseCase/types";

import { environment } from "@config/environment";
import { mapLinixUseCaseEntityToApi } from "./mappers";

const addLinixUseCase = async (
  linixUseCase: UseCase,
  businessUnit: string
): Promise<UseCase | undefined> => {
  const requestUrl = `${environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_PERSISTENCE_PROCESS}/casos-de-uso`;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-Action": "AgregarCasoDeUso",
        "X-Business-Unit": businessUnit,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapLinixUseCaseEntityToApi(linixUseCase)),
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
      const errorMessage = `Error al crear caso de uso linix. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to add linix use case:", error);
    throw error;
  }
};

export { addLinixUseCase };
