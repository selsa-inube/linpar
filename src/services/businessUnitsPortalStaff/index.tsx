import { environment } from "@config/environment";
import { IBusinessUnitsPortalStaff } from "./types";
import { mapBusinessUnitsPortalStaffToEntity } from "./mappers";

const getBusinessUnitsPortalStaff = async (
  publicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const requestUrl = `${environment.IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE}/business-units-portal-staff/${userAccount}/${publicCode}`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchBusinessUnitsForAnOfficerLinpar",
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

    return data.map((item: Record<string, string | number | object>) =>
      mapBusinessUnitsPortalStaffToEntity(item)
    );
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getBusinessUnitsPortalStaff };
