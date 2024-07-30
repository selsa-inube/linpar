import { environment } from "@src/config/environment";

import { Option } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";

import { mapSelectLinixUseCaseApiToEntities } from "./mappers";

const getSelectLinixUseCase = async (): Promise<Option[]> => {
  const requestUrl = `${environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS}/enumerators/dmitipusec`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "GetEnum",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    const normalizedUser = Array.isArray(data)
      ? mapSelectLinixUseCaseApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getSelectLinixUseCase };
