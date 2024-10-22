import { environment, retries, timeout } from "@config/environment";
import { mapBusinessRulesByRoleFormatsApiToEntities } from "./mappers";

const getBusinessRulesByRoleFormats = async (
  k_Rol: string,
  rolesBusinessUnit: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = retries;
  const fetchTimeout = timeout;

  const requestUrl = `${environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS}/roles/${k_Rol}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: environment.REALM,
      "X-Action": "QueryReglasDeNegocioPorRolFull",
      "X-Business-Unit": rolesBusinessUnit,
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
        throw new Error(`Error al obtener los roles: ${res.status}`);
      }

      const data = await res.json();

      const normalizedRolFormats = Array.isArray(data)
        ? mapBusinessRulesByRoleFormatsApiToEntities(data)
        : [];

      return normalizedRolFormats;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        throw new Error(
          `Todos los intentos fallaron. No se pudieron obtener los roles: ${error.message}`
        );
      }
    }
  }

  return [];
};

export { getBusinessRulesByRoleFormats };
