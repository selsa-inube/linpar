import { environment, retries, timeout } from "@config/environment";
import { mapWebOptionsFormatsApiToEntities } from "./mappers";

const getWebOptionsFormats = async (
  k_Usecase: string,
  businessUnit: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = retries;
  const fetchTimeout = timeout;

  const requestUrl = `${environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS}/casos-de-uso/${k_Usecase}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: environment.REALM,
      "X-Action": "SearchOpcionesWebPorCasoDeUsoFull",
      "X-Business-Unit": businessUnit,
      "Content-type": "application/json; charset=UTF-8",
    },
  };

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
        throw new Error(`Error al obtener los casos de uso: ${res.status}`);
      }

      const data = await res.json();

      const normalizedWebOptionsFormats = Array.isArray(data)
        ? mapWebOptionsFormatsApiToEntities(data)
        : [];

      return normalizedWebOptionsFormats;
    } catch (error) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        if (error instanceof Error) {
          throw new Error(
            `Todos los intentos fallaron. No se pudieron obtener las Opciones Web: ${error.message}`
          );
        }
      }
    }
  }

  return [];
};

export { getWebOptionsFormats };
