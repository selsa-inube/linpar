import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "./forms/GeneralInformationForm";

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

export interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}

export interface IFormAddPositionRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
}
