import { environment } from "@config/environment";
import { ICuentasAuxiliaresPorRol } from "@pages/catalogs/outlets/roles/types";
import { mapRolesCuentasAuxiliaresApiToEntities } from "./mappers";

const getRolesCuentasAuxiliares = async (): Promise<
  ICuentasAuxiliaresPorRol[]
> => {
  const requestUrl = `${environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS}/roles`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "QueryAllCuentasAuxiliaresPorRol",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    const normalizedUser = Array.isArray(data)
      ? mapRolesCuentasAuxiliaresApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getRolesCuentasAuxiliares };
