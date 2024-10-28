import { environment } from "@src/config/environment";

import { IactiveUsers } from "./types";
import { IGeneralInformationUsersForm } from "../users.types";
import { mapUsersActiveEntityToApi } from "./mappers";

const activeUsers = async (
  activeUser: IactiveUsers,
  businessUnitPublicCode: string
): Promise<IGeneralInformationUsersForm | undefined> => {
  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE}/usuarios`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "CambiarEstadoUsuario",
        "X-Business-Unit": businessUnitPublicCode,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapUsersActiveEntityToApi(activeUser)),
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
      const errorMessage = `Error al activar el usuario: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to activate user:", error);
    throw error;
  }
};

export { activeUsers };
