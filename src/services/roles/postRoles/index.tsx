import { environment } from "@config/environment";
import { IRol } from "@pages/catalogs/outlets/roles/types";
import { mapRolesEntityToApi } from "./mappers";

const addRoles = async (
  roles: IRol,
  rolesBusinessUnit: string
): Promise<IRol | undefined> => {
  const requestUrl = `${environment.IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_PERSISTENCE_PROCESS}/roles`;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-Action": "AgregarRol",
        "X-Business-Unit": rolesBusinessUnit,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapRolesEntityToApi(roles)),
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch (error) {
      throw new Error("Failed to parse response JSON");
    }

    if (!res.ok) {
      const errorMessage = `Error al crear el rol. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to add roles:", error);
    throw error;
  }
};

export { addRoles };
