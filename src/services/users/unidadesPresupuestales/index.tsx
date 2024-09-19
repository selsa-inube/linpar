import { environment, retries, timeout } from "@config/environment";
import { mapUnidadesPresupuestalesFormatsApiToEntities } from "./mappers";

const getUnidadesPresupuestales = async (
  k_Usu: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = retries;
  const fetchTimeout = timeout;

  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_URL_QUERY_POCESS_SERVICE}/usuarios/${k_Usu}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: environment.REALM,
      "X-Action": "QueryUnidadesPresupuestalesDeAuxilioByUsuarioFull",
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
          `Error al obtener los Unidades Presupuestales: ${res.status}`
        );
      }

      const data = await res.json();

      const normalizedWebReportsFormats = Array.isArray(data)
        ? mapUnidadesPresupuestalesFormatsApiToEntities(data)
        : [];

      return normalizedWebReportsFormats;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        throw new Error(
          `Todos los intentos fallaron. No se pudieron obtener Unidades Presupuestales: ${error.message}`
        );
      }
    }
  }

  return [];
};

export { getUnidadesPresupuestales };
