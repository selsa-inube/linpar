import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "./forms/GeneralInformationForm";
import { IAssignmentFormEntry } from "../../users/types/forms.types";

export const titleButtonTextAssited = {
  before: "Anterior",
  after: "Siguiente",
  finish: "Enviar",
};

export interface IPositions {
  i_Activo: "Y" | "N";
  k_Grupo: string;
  n_Grupo: string;
  n_Uso: string;
}

export interface IStep {
  id: number;
  label: string;
  description: string;
}

export interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  roles: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  roles: React.RefObject<FormikProps<IOptionInitialiceEntry[]>>;
}

export type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry
  | IAssignmentFormEntry[];
