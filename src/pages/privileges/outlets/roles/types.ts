import { IGeneralInformationForm } from "./add-role/forms/GeneralInformationForm";

interface ICasosDeUsoPorRol {
  k_Rol: number;
  k_Usecase: string;
}
interface ICuentasAuxiliaresPorRol {
  i_Tipent: string;
  k_Codcta: string;
  k_Rol: number;
}

interface IReglasDeNegocioPorRol {
  k_Regla: "string";
  k_Rol: number;
}

interface ITareasCrediboardPorRol {
  k_Rol: number;
  tarea: "string";
}

export interface IRol {
  i_Activo: "Y" | "N";
  k_Rol: string;
  k_Tipcon: string;
  n_Rol: string;
  n_Uso: string;
  casosDeUsoPorRol?: ICasosDeUsoPorRol[];
  cuentasAuxiliaresPorRol?: ICuentasAuxiliaresPorRol[];
  reglasDeNegocioPorRol?: IReglasDeNegocioPorRol[];
  tareasCrediboardPorRol?: ITareasCrediboardPorRol[];
}

export interface IStep {
  id: number;
  label: string;
  description: string;
}

interface IGeneralInformation {
  isValid: boolean;
  values: IGeneralInformationForm;
}

interface IAncillaryAccounts {
  isValid: boolean;
  values: IAncillaryAccountsForm;
}

interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

export interface IInitialiceFormRole {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IOptionInitialiceForm {
  values: IInitialiceFormRole[];
}

export interface IFormAddRole {
  generalInformation: IGeneralInformation;
  ancillaryAccounts: IAncillaryAccounts;
  transactionTypes: IOptionInitialiceForm;
  businessRules: IOptionInitialiceForm;
  useCases: IOptionInitialiceForm;
}
