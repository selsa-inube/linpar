import {
  UseCase,
  UseCaseResponse,
} from "@src/pages/privileges/outlets/linixUseCase/types";

import { enviroment } from "@src/config/environment";
import {
  mapLinixUseCaseApiToEntity,
  mapLinixUseCaseEntityToApi,
} from "./mappers";

const addLinixUseCase = async (
  linixUseCase: UseCase
): Promise<UseCaseResponse | undefined> => {
  const requestUrl = `${enviroment.ICLIENT_API_URL_PERSISTENCE_POST}/casos-de-uso`;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-Action": "AgregarCasoDeUso",
        "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
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

    return mapLinixUseCaseApiToEntity(data);
  } catch (error) {
    console.error("Failed to add linix use case:", error);
    throw error;
  }
};

export { addLinixUseCase };
