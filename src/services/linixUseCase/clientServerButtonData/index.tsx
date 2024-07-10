import { enviroment } from "@src/config/environment";
import { mapClientServerButtonDataFormatsApiToEntities } from "./mappers";

const getClientServerButtonDataFormats = async (
  id: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;

  const requestUrl = `${enviroment.ICLIENT_API_URL_QUERY_PROCESS}/formas-y-reportes/${id}/campos`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: enviroment.REALM,
      "X-Action": "SearchAllBotonesPorFormaCs",
      "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
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
        throw new Error(
          `Error al obtener los botones del cliente: ${res.status}`
        );
      }

      const data = await res.json();

      const normalizedClientServerButtonDataFormats = Array.isArray(data)
        ? mapClientServerButtonDataFormatsApiToEntities(data)
        : [];

      return normalizedClientServerButtonDataFormats;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        throw new Error(
          `Todos los intentos fallaron. No se pudieron obtener los botones del cliente: ${error.message}`
        );
      }
    }
  }

  return [];
};

export { getClientServerButtonDataFormats };
