import { enviroment } from "@src/config/environment";
import { mapReportsWebFormatsApiToEntities } from "./mappers";
import { IAssignmentFormEntry } from "@src/pages/privileges/outlets/users/types/forms.types";

const getReportsWebFormats = async (
  k_Usecase: string
): Promise<IAssignmentFormEntry[]> => {
  const maxRetries = 5;
  const fetchTimeout = 3000;

  const requestUrl = `${enviroment.ICLIENT_API_URL_QUERY_PROCESS}/casos-de-uso/${k_Usecase}`;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), fetchTimeout);

      const options: RequestInit = {
        method: "GET",
        headers: {
          Realm: enviroment.REALM,
          "X-Action": "SearchReportesWebPorCasoDeUsoFull",
          "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
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
        throw new Error(`Error al obtener los casos de uso: ${res.status}`);
      }

      const normalizedReportsWebFormats = Array.isArray(data)
        ? mapReportsWebFormatsApiToEntities(data)
        : [];

      return normalizedReportsWebFormats;
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error("Todos los intentos fallaro.");
      }
    }
  }

  return [];
};

export { getReportsWebFormats };
