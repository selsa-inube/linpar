import { enviroment } from "@src/config/environment";
import { IRol } from "@src/pages/privileges/outlets/roles/types";
import { mapRolesEntityToApi } from "./mappers";

const addRoles = async (roles: IRol): Promise<IRol | undefined> => {
  const requestUrl = `${enviroment.ICLIENT_API_URL_PERSISTENCE_POST}/roles`;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-Action": "AgregarRol",
        "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
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
      const errorMessage = `Error al crear caso de uso linix. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to add linix use case:", error);
    throw error;
  }
};

export { addRoles };
