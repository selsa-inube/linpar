import { FormikProps } from "formik";
import localforage from "localforage";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import { UseCase } from "../types";

export interface DataToAssignmentFormEntryProps {
  dataOptions: Record<string, unknown>[];
  idLabel: string;
  valueLabel: string;
  isActiveLabel: string;
}

export interface IFormAddLinixUseCaseRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformation>>;
}

export interface IGeneralInformation {
  n_Usecase: string;
  n_Descrip: string;
  i_Tipusec: string;
  k_Funcio: string;
  k_Opcion: string;
}

export interface IClientServerButton {
  csButtonOption: string;
}

export interface IFormAddLinixUseCase {
  generalInformation: {
    isValid: boolean;
    values: IGeneralInformation;
  };
  clientServerButton: {
    isValid: boolean;
    values: IClientServerButton;
  };
  downloadableDocuments: {
    values: IAssignmentFormEntry[];
  };
  webReports: {
    values: IAssignmentFormEntry[];
  };
  webOptions: {
    values: IAssignmentFormEntry[];
  };
  clientServerReports: {
    values: IAssignmentFormEntry[];
  };
  clientServerOptions: {
    values: IAssignmentFormEntry[];
  };
}

export const saveLinixUseCase = (addLinixUseCase: IFormAddLinixUseCase) => {
  const { generalInformation, clientServerButton } = addLinixUseCase;

  const newLinixUseCase: UseCase = {
    id: "",
    k_Usecase: "",
    n_Usecase: generalInformation.values.n_Usecase,
    n_Descrip: generalInformation.values.n_Descrip,
    a_Publicc: "",
    i_Tipusec: generalInformation.values.i_Tipusec,
    k_Ncampo: clientServerButton.values.csButtonOption,
    k_Nforma: generalInformation.values.k_Opcion,
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

export type IHandleChangeFormData =
  | IGeneralInformation
  | IClientServerButton
  | IAssignmentFormEntry[];
