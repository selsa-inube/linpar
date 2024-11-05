export interface IInvitation {
  id?: string;
  email: string;
  userIdentification: string;
  phoneNumber: string;
  positionsId?: string;
  userName?: string;
  userAccountId?: string;
  invitationId?: string;
  customerId?: string;
  password?: string;
}

export interface Ibranches {
  k_Sucurs: string;
}

export interface Iproyects {
  k_Numdoc: string;
  k_Tipodr: string;
}

export interface IUnidadesPresupuestalesDeAuxilios {
  k_Unidad: string;
}

export interface ItiposDeNomina {
  k_Tipnom: string;
}

export interface IPayrollPayments {
  k_Nomina: string;
}

export interface IUser {
  invitationId?: string;
  modifyJustification?: string;
  a_Numnit: string;
  k_Grupo: string;
  k_Usuari: string;
  n_Usuari: string;
  o_Clave: string;
  sucursales?: Ibranches[];
  proyectosOEventos?: Iproyects[];
  unidadesPresupuestalesDeAuxilios?: IUnidadesPresupuestalesDeAuxilios[];
  tiposDeNomina?: ItiposDeNomina[];
  pagadoresDeNomina?: IPayrollPayments[];
}
export interface IInvitationsEntry {
  id?: string;
  customerId?: string;
  email: string;
  phoneNumber: string;
  publicCode?: string;
  status?: string;
  userIdentification: string;
  userName?: string;
  businessUnitPublicCode?: string;
  modifyJustification?: string;
  dateEnd?: string;
  dateStart?: string;
  invitationId?: string;
  password?: string;
  positionId?: string;
  position?: string;
  requestingUser?: string;
  userAccountId?: string;
  userData?: IUser;
  branches?: IOptionInitialiceEntry[];
  proyectsEvents?: IOptionInitialiceEntry[];
  aidBudgetUnits?: IOptionInitialiceEntry[];
  payrolls?: IOptionInitialiceEntry[];
}

export interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IFormCompleteInvitation {
  generalInformation: {
    isValid: boolean;
    values: IInvitationsEntry;
  };
  branches: { isValid: boolean; values: IOptionInitialiceEntry[] };
  proyectsEvents: { isValid: boolean; values: IOptionInitialiceEntry[] };
  aidBudgetUnits: { isValid: boolean; values: IOptionInitialiceEntry[] };
  payrolls: { isValid: boolean; values: IOptionInitialiceEntry[] };
  payrollPayments: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export type IHandleChangeFormData =
  | IInvitation
  | IInvitationsEntry
  | IOptionInitialiceEntry[];
