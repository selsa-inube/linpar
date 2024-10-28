import { environment } from "@config/environment";
import { IStaffPortalByBusinessManager } from "./types";
import { mapResendApiToEntities } from "./mappers";

const getStaffPortalByBusinessManager = async (): Promise<
  IStaffPortalByBusinessManager[]
> => {
  const requestUrl = `${environment.IVITE_ISAAS_QUERY_PROCESS_SERVICE}/staff-portals-by-business-manager`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchAllStaffPortalsByBusinessManager",
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
      ? mapResendApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getStaffPortalByBusinessManager };
