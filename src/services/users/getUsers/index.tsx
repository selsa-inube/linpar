import { environment } from "@src/config/environment";

import { mapUsersApiToEntities } from "./mappers";
import { IGeneralInformationUsersForm } from "../users.types";

const getUsers = async (): Promise<IGeneralInformationUsersForm[]> => {
  const requestUrl = `${environment.ICLIENT_API_URL_QUERY_USERS_PROCESS}/usuario-full`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
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
      ? mapUsersApiToEntities(data)
      : [];

    return normalizedUser;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getUsers };
