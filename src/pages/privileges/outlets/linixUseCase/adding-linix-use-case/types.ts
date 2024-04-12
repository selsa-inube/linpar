import { FormikProps } from "formik";

import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

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

export type IHandleChangeFormData =
  | IGeneralInformation
  | IClientServerButton
  | IAssignmentFormEntry[];
