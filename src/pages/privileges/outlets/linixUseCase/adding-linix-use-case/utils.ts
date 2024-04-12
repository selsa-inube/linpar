import localforage from "localforage";
import { UseCase } from "../types";
import { IFormAddLinixUseCase } from "./types";

export const saveLinixUseCase = (addLinixUseCase: IFormAddLinixUseCase) => {
  const {
    generalInformation: { values: generalInformation },
    clientServerButton: { values: clientServerButton },
    webOptions: { values: webOptions },
  } = addLinixUseCase;
  const normalizeAncillaryAccounts = webOptions.filter(
    (webOption) => webOption.isActive === true
  );

  const newLinixUseCase: UseCase = {
    id: "",
    k_Usecase: "",
    n_Usecase: generalInformation.n_Usecase,
    n_Descrip: generalInformation.n_Descrip,
    a_Publicc: "",
    i_Tipusec: generalInformation.i_Tipusec,
    k_Ncampo: clientServerButton.csButtonOption,
    k_Nforma: generalInformation.k_Opcion,
    reportesWebPorCasoDeUso: normalizeAncillaryAccounts,
  };
  localforage.getItem("linix-use-cases").then((data) => {
    if (data) {
      localforage.setItem("linix-use-cases", [
        ...(data as UseCase[]),
        newLinixUseCase,
      ]);
    } else {
      localforage.setItem("linix-use-cases", [newLinixUseCase]);
    }
  });
};
