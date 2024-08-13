import { environment } from "@src/config/environment";
import { IRol } from "@src/pages/privileges/outlets/roles/types";
import { mapRolesUseCaseApiToEntities } from "./mapper";

const getRoles = async (): Promise<IRol[]> => {
  try {
    const queryParams = new URLSearchParams({
      sort: "n_Rol",
    });
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "QueryAllRoles",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const requestUrl = `${
      environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS
    }/roles?${queryParams.toString()}`;

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    const normalizedUser = Array.isArray(data)
      ? mapRolesUseCaseApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getRoles };
