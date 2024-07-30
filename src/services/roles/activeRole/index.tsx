import { environment } from "@src/config/environment";
import { IRol } from "@pages/privileges/outlets/roles/types";
import { IactiveRoles } from "./types";
import { mapRolesActiveEntityToApi } from "./mappers";

const activeRoles = async (
  activeRol: IactiveRoles
): Promise<IRol | undefined> => {
  const requestUrl = `${environment.ICLIENT_API_URL_PERSISTENCE_POST}/roles`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "ModificarEstadoRol",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapRolesActiveEntityToApi(activeRol)),
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
      const errorMessage = `Error al eliminar el rol. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to delete roles:", error);
    throw error;
  }
};

export { activeRoles };
