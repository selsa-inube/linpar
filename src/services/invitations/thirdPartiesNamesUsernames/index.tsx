import { environment, retries, timeout } from "@config/environment";
import { mapthirdPartyUsersFormatsApiToEntities } from "./mappers";

const getSearchAllTercero = async (): Promise<Record<string, unknown>[]> => {
  const maxRetries = retries;
  const fetchTimeout = timeout;

  const queryParams = new URLSearchParams({
    i_Natura: "N",
    fields: "n_Nombr1,n_Nombr2,n_Apell1,n_Apell2,a_Numnit",
  });
  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: environment.REALM,
      "X-Action": "SearchAllTercero",
      "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const requestUrl = `${
    environment.IVITE_TERCEROS_QUERY_PROCESS_SERVICE
  }/terceros?i_Natura=N&${queryParams.toString()}`;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

    const optionsWithSignal: RequestInit = {
      ...options,
      signal: controller.signal,
    };

    try {
      const res = await fetch(requestUrl, optionsWithSignal);

      clearTimeout(timeoutId);

      if (res.status === 204) {
        return [];
      }

      if (!res.ok) {
        throw new Error(`Error al obtener los usuarios: ${res.status}`);
      }

      const data = await res.json();

      const normalizedReportsClientServerFormats = Array.isArray(data)
        ? mapthirdPartyUsersFormatsApiToEntities(data)
        : [];

      return normalizedReportsClientServerFormats;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        throw new Error(
          `Todos los intentos fallaron. No se pudieron obtener los usuarios: ${error.message}`
        );
      }
    }
  }

  return [];
};

export { getSearchAllTercero };
