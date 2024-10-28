import { environment, retries, timeout } from "@config/environment";
import { mapRolesPorCargoApiToEntities } from "./mappers";

const getRolesPorCargo = async (
  k_Rol: string,
  businessUnitPublicCode: string
): Promise<Record<string, unknown>[]> => {
  const maxRetries = retries;
  const fetchTimeout = timeout;

  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_URL_QUERY_POCESS_SERVICE}/cargos/roles-por-cargo-full/${k_Rol}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      Realm: environment.REALM,
      "X-Action": "QueryRolesPorCargoFull",
      "X-Business-Unit": businessUnitPublicCode,
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
        throw new Error(`Error al obtener los RolesPorCargos: ${res.status}`);
      }

      const data = await res.json();

      const normalizedRolesPorCargoFullFormats = Array.isArray(data)
        ? mapRolesPorCargoApiToEntities(data)
        : [];

      return normalizedRolesPorCargoFullFormats;
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (attempt === maxRetries) {
        throw new Error(
          `Todos los intentos fallaron. No se pudieron obtener los RolesPorCargos: ${error.message}`
        );
      }
    }
  }

  return [];
};

export { getRolesPorCargo };
