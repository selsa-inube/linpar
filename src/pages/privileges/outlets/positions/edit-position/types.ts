interface IRolByPosition {
  k_Rol: string;
}

export interface position {
  k_Grupo: string;
  n_Grupo: string;
  n_Uso: string;
  rolesPorCargo: IRolByPosition[];
}

export interface IControlModal {
  show: boolean;
  continueTab: string;
}

export interface IGeneralInformation {
  generalInformation: { entries: position | undefined };
}
