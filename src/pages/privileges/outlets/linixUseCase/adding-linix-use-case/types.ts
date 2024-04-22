import { FormikProps } from "formik";

import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

export const titleButtonTextAssited = {
  before: "Anterior",
  after: "Siguiente",
  finish: "Enviar",
};

export interface DataToAssignmentFormEntryProps {
  dataOptions: Record<string, unknown>[];
  idLabel: string;
  valueLabel: string;
  isActiveLabel: string;
}

export interface IFormAddLinixUseCaseRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformation>>;
  clientServerButton: React.RefObject<FormikProps<IClientServerButton>>;
  downloadableDocuments: React.RefObject<FormikProps<IAssignmentFormEntry>>;
  webReports: React.RefObject<FormikProps<IAssignmentFormEntry>>;
  webOptions: React.RefObject<FormikProps<IAssignmentFormEntry>>;
  clientServerReports: React.RefObject<FormikProps<IAssignmentFormEntry>>;
  clientServerOptions: React.RefObject<FormikProps<IAssignmentFormEntry>>;
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
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  webReports: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  webOptions: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  clientServerReports: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  clientServerOptions: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
}

export type IHandleChangeFormData =
  | IGeneralInformation
  | IClientServerButton
  | IAssignmentFormEntry[];
