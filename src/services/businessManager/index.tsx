import { environment } from "@config/environment";
import { IBusinessmanagers } from "./types";
import { mapResendApiToEntity } from "./mappers";

const getBusinessmanagers = async (
  businessManagerId: string
): Promise<IBusinessmanagers> => {
  const requestUrl = `${environment.IVITE_ISAAS_QUERY_PROCESS_SERVICE}/business-managers/${businessManagerId}`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchByIdBusinessManager",
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const res = await fetch(requestUrl, options);
    if (res.status === 204) {
      return {} as IBusinessmanagers;
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    return mapResendApiToEntity(data);
  } catch (error) {
    console.error(error);
  }

  return {} as IBusinessmanagers;
};

export { getBusinessmanagers };
