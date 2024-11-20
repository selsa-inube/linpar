import { environment } from "@config/environment";
import { IPortalStaff } from "./types";
import { mapOptionsByBusinessUnitsToEntities } from "./mappers";

const getStaffPortalByBusinessManager = async (
  staffPortalId: string,
  businessUnitPublicCode: string
): Promise<IPortalStaff[]> => {
  const queryParams = new URLSearchParams({
    staffPortalId: staffPortalId,
    businessUnitPublicCode: businessUnitPublicCode,
  });
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchOptionsStaffPortalByBusinessUnit",
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const requestUrl = `${
      environment.IVITE_ISAAS_QUERY_PROCESS_SERVICE
    }/staff-portals-by-business-manager?${queryParams.toString()}`;
    const res = await fetch(requestUrl, options);
    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    return mapOptionsByBusinessUnitsToEntities(data);
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getStaffPortalByBusinessManager };
