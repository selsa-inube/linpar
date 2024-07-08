import { enviroment } from "@src/config/environment";
import { UseCase } from "@pages/privileges/outlets/linixUseCase/types";
import { IdeleteLinixUseCase } from "./types";
import { mapLinixUseCaseDeleteEntityToApi } from "./mappers";

const deleteLinixUseCase = async (
  deleteLinixUseCase: IdeleteLinixUseCase
): Promise<UseCase | undefined> => {
  const requestUrl = `${enviroment.ICLIENT_API_URL_PERSISTENCE_POST}/casos-de-uso`;

  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "X-Action": "EliminarCasoDeUso",
        "X-Business-Unit": enviroment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(
        mapLinixUseCaseDeleteEntityToApi(deleteLinixUseCase)
      ),
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
      const errorMessage = `Error al eliminar el Caso de Uso. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to delete Caso de Uso:", error);
    throw error;
  }
};

export { deleteLinixUseCase };
