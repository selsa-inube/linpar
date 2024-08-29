import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

export interface Ibranches {
  k_Sucurs: string;
}

export interface Iproyects {
  k_Numdoc: string;
  k_Tipodr?: string;
}

export interface IunidadesPresupuestalesDeAuxilios {
  k_Unidad: string;
}

export interface ItiposDeNomina {
  k_Tipnom: string;
}
export interface IGeneralInformation {
  id?: string;
  k_Usuari: string;
  n_Usuari: string;
  k_Grupo: string;
  n_Grupo: string;
  a_Numnit?: string;
  i_Activo?: string;
}

export interface IGeneralInformationUsersForm {
  id?: string;
  k_Usuari: string;
  n_Usuari: string;
  k_Grupo: string;
  n_Grupo: string;
  a_Numnit?: string;
  i_Activo?: string;
  modifyJustification?: string;
  sucursales?: Ibranches[];
  proyectosOEventos?: Iproyects[];
  unidadesPresupuestalesDeAuxilios?: IunidadesPresupuestalesDeAuxilios[];
  tiposDeNomina?: ItiposDeNomina[];
}

export interface IFormAddUsers {
  generalInformation: {
    isValid: boolean;
    values: IGeneralInformationUsersForm;
  };
  branches: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  projectsOrEvents: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  events: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  aidBudgetUnits: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
  payrolls: {
    isValid: boolean;
    values: IAssignmentFormEntry[];
  };
}

export type IHandleChangeFormData =
  | IGeneralInformation
  | IAssignmentFormEntry[];

export interface IFormsUsers {
  generalInformation: { entries?: IGeneralInformationUsersForm };
  branches: { entries: IAssignmentFormEntry[] };
  projects: { entries: IAssignmentFormEntry[] };
  events: { entries: IAssignmentFormEntry[] };
  aidBudgetUnits: { entries: IAssignmentFormEntry[] };
  payrolls: { entries: IAssignmentFormEntry[] };
}
