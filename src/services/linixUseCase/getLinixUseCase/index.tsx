import { environment } from "@src/config/environment";
import { mapLinixUseCaseApiToEntities } from "./mapper";
import { UseCase } from "@src/pages/privileges/outlets/linixUseCase/types";

const getLinixUseCase = async (): Promise<UseCase[]> => {
  try {
    const queryParams = new URLSearchParams({
      sort: "n_Usecase",
    });
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchAllCasoDeUso",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const requestUrl = `${
      environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS
    }/casos-de-uso?${queryParams.toString()}`;

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    const normalizedUser = Array.isArray(data)
      ? mapLinixUseCaseApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getLinixUseCase };
