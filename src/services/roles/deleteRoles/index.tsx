import { environment } from "@src/config/environment";
import { IRol } from "@src/pages/privileges/outlets/roles/types";

import { IdeleteRoles } from "./types";
import { mapRolesDeleteEntityToApi } from "./mappers";

const deleteRoles = async (
  deletedRol: IdeleteRoles
): Promise<IRol | undefined> => {
  const requestUrl = `${environment.ICLIENT_API_URL_PERSISTENCE_POST}/roles`;

  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "X-Action": "EliminarRol",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapRolesDeleteEntityToApi(deletedRol)),
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

export { deleteRoles };
