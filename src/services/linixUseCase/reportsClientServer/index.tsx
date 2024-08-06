import { environment } from "@src/config/environment";
import { mapReportsClientServerFormatsApiToEntities } from "./mappers";

const getReportsClientServerFormats = async (
  k_Usecase: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;

  const requestUrl = `${environment.ICLIENT_API_URL_QUERY_PROCESS}/casos-de-uso/${k_Usecase}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: environment.REALM,
      "X-Action": "SearchReportesCsPorCasoDeUsoFull",
      "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
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
          `Error al obtener los reportes clientes servidor: ${res.status}`
        );
      }

      const data = await res.json();

      const normalizedReportsClientServerFormats = Array.isArray(data)
        ? mapReportsClientServerFormatsApiToEntities(data)
        : [];

      return normalizedReportsClientServerFormats;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        throw new Error(
          `Todos los intentos fallaron. No se pudieron obtener los reportes clientes servidor: ${error.message}`
        );
      }
    }
  }

  return [];
};

export { getReportsClientServerFormats };
