import { environment } from "@config/environment";
import { IGeneralInformationUsersForm } from "../users.types";
import { mapEditUsersEntityToApi } from "./mappers";

const editUsers = async (
  editUser: IGeneralInformationUsersForm
): Promise<IGeneralInformationUsersForm | undefined> => {
  const requestUrl = `${environment.IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE}/usuarios`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "ModificarUsuario",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapEditUsersEntityToApi(editUser)),
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
      const errorMessage = `Error al modificar usuarios. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to edit usuarios:", error);
    throw error;
  }
};

export { editUsers };
