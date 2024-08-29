export interface IDeleteForMessage {
  id: string;
  successfulDiscard: boolean;
}

interface OpcionesCsPorCasoDeUso {
  k_Opcion: string;
}

interface OpcionesPortalWebPorCasoDeUso {
  k_Funcio: string;
}

interface ReportesCsPorCasoDeUso {
  k_Nforma: string;
}

interface ReportesWebPorCasoDeUso {
  k_Report: string;
}

interface TiposDeDocumentoPorCasoDeUso {
  k_Docume: string;
}

export interface IInitialiceFormLinixUseCase {
  id: string;
  value: string;
  isActive: boolean;
}

interface UseCase {
  id?: string;
  a_Publicc?: string;
  i_Tipusec: string;
  k_Ncampo?: string;
  k_Nforma?: string;
  k_Usecase?: string;
  n_Descrip?: string;
  n_Usecase?: string;
  k_Funcio?: string;
  k_Opcion?: string;
  k_option_button?: string;
  opcionesCsPorCasoDeUso?: OpcionesCsPorCasoDeUso[];
  opcionesPortalWebPorCasoDeUso?: OpcionesPortalWebPorCasoDeUso[];
  reportesCsPorCasoDeUso?: ReportesCsPorCasoDeUso[];
  reportesWebPorCasoDeUso?: ReportesWebPorCasoDeUso[];
  tiposDeDocumentoPorCasoDeUso?: TiposDeDocumentoPorCasoDeUso[];
  modifyJustification?: string;
}

export type {
  UseCase,
  OpcionesCsPorCasoDeUso,
  OpcionesPortalWebPorCasoDeUso,
  ReportesCsPorCasoDeUso,
  ReportesWebPorCasoDeUso,
  TiposDeDocumentoPorCasoDeUso,
};

export interface IActions {
  k_action: number;
  n_action: string;
  i_active: "Y" | "N";
}
