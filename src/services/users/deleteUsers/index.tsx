import { environment } from "@config/environment";

import { IdeleteUsers } from "./types";
import { IGeneralInformationUsersForm } from "../users.types";
import { mapUsersDeleteEntityToApi } from "./mappers";

const deleteUsers = async (
  deleteUsers: IdeleteUsers,
  businessUnitPublicCode: string
): Promise<IGeneralInformationUsersForm | undefined> => {
  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE}/usuarios`;

  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "X-Action": "EliminarUsuario",
        "X-Business-Unit": businessUnitPublicCode,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapUsersDeleteEntityToApi(deleteUsers)),
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
      const errorMessage = `Error al eliminar el usuario: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to delete usuario:", error);
    throw error;
  }
};

export { deleteUsers };
