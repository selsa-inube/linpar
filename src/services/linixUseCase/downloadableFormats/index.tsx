import { environment } from "@src/config/environment";
import { mapDownloadableFormatsApiToEntities } from "./mappers";

const getDownloadableFormats = async (
  k_Usecase: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;

  const requestUrl = `${environment.ICLIENT_API_URL_QUERY}/casos-de-uso/${k_Usecase}`;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

      const options: RequestInit = {
        method: "GET",
        headers: {
          Realm: environment.REALM,
          "X-Action": "SearchTiposDeDocumentoPorCasoDeUsoFull",
          "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
          "Content-type": "application/json; charset=UTF-8",
        },
        signal: controller.signal,
      };

      const res = await fetch(requestUrl, options);

      clearTimeout(timeoutId);

      if (res.status === 204) {
        return [];
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          `Error al obtener los formatos descargables: ${res.status}`
        );
      }

      const normalizedDownloadableFormats = Array.isArray(data)
        ? mapDownloadableFormatsApiToEntities(data)
        : [];

      return normalizedDownloadableFormats;
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(
          "Todos los intentos fallaron. No se pudieron obtener los formatos descargables."
        );
      }
    }
  }

  return [];
};

export { getDownloadableFormats };
