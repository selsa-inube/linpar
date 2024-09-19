import { environment } from "@config/environment";
import { mapPositionsApiToEntities } from "./mappers";

const getPositions = async (): Promise<Record<string, unknown>[]> => {
  try {
    const queryParams = new URLSearchParams({
      page: "1",
      per_page: "1000",
    });
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchAllCargos",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const requestUrl = `${
      environment.IPRIVILEGES_LINIX_API_URL_QUERY_POCESS_SERVICE
    }/cargos?${queryParams.toString()}`;
    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    const normalizedUser = Array.isArray(data)
      ? mapPositionsApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getPositions };
