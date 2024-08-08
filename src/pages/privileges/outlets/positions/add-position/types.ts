import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../components/GeneralInformationForm";
import { IAssignmentFormEntry } from "../../users/types/forms.types";

export const titleButtonTextAssited = {
  before: "Anterior",
  after: "Siguiente",
  finish: "Enviar",
};
interface IRolByPosition {
  k_Rol: string;
}

export interface IPosition {
  id?: string;
  i_Activo?: string;
  k_Grupo: string;
  n_Grupo: string;
  n_Uso: string;
  rolesPorCargo?: IRolByPosition[];
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
  rolesPorCargos: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}

export type IHandleUpdateDataSwitchstep =
  | IGeneralInformationEntry
  | IAssignmentFormEntry[];
