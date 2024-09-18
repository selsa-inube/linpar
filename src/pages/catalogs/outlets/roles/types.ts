import { FormikProps } from "formik";

import { IAncillaryAccountsForm } from "./components/AncillaryAccountsForm";
import { EMessageType, IMessage } from "@src/types/messages.types";

export interface IAssignmentFormEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IMessageState {
  visible: boolean;
  data?: IMessage;
  type?: EMessageType;
}

export interface IDeleteForMessage {
  id: number;
  successfulDiscard: boolean;
}

export interface ICasosDeUsoPorRol {
  k_Rol?: number;
  k_Usecase: string;
}
export interface ICuentasAuxiliaresPorRol {
  id?: number;
  k_Rol?: number;
  i_Tipent: string;
  k_Codcta: string;
}

export interface IReglasDeNegocioPorRol {
  k_Regla: string;
  k_Rol?: number;
}

export interface ITiposDeMovimientoContablePorRol {
  k_Rol?: number;
  k_Tipmov: string;
  n_Tipmov?: string;
}

export interface IRol {
  id?: number;
  modifyJustification?: string;
  i_Activo: string;
  k_Rol?: number;
  k_Tipcon: string;
  n_Rol: string;
  n_Uso: string;
  k_Aplica: string;
  casosDeUsoPorRol?: ICasosDeUsoPorRol[];
  cuentasAuxiliaresPorRol?: ICuentasAuxiliaresPorRol[];
  reglasDeNegocioPorRol?: IReglasDeNegocioPorRol[];
  tiposDeMovimientoContablePorRol?: ITiposDeMovimientoContablePorRol[];
}

export interface IFormAddRoleRef {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationForm>>;
  ancillaryAccounts: React.RefObject<FormikProps<IAncillaryAccountsForm>>;
}

export interface IStep {
  id: number;
  label: string;
  description: string;
}

export interface IGeneralInformationForm {
  k_Rol?: number;
  n_Rol: string;
  description: string;
  application: string;
  applicationId: string;
}
interface IGeneralInformation {
  isValid: boolean;
  values: IGeneralInformationForm;
}

interface IAncillaryAccounts {
  isValid: boolean;
  values: IAncillaryAccountsForm;
}

export interface IInitialiceFormRole {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IOptionInitialiceForm {
  isValid?: boolean;
  values: IInitialiceFormRole[];
}

export interface IFormAddRole {
  generalInformation: IGeneralInformation;
  ancillaryAccounts: IAncillaryAccounts;
  transactionTypes: IOptionInitialiceForm;
  businessRules: IOptionInitialiceForm;
  useCases: IOptionInitialiceForm;
}

export type IHandleChangeFormData =
  | IGeneralInformationForm
  | IAncillaryAccountsForm
  | IAssignmentFormEntry[];
