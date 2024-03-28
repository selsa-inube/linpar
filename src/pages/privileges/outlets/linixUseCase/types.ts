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
  transactionOperation: string;
}

interface UseCase {
  id: string;
  k_Usecase: string;
  n_Usecase: string;
  n_Descrip: string;
  a_Publicc: string;
  i_Tipusec: string;
  k_Ncampo: string;
  k_Nforma: string;
  opcionesCsPorCasoDeUso?: OpcionesCsPorCasoDeUso[];
  opcionesPortalWebPorCasoDeUso?: OpcionesPortalWebPorCasoDeUso[];
  reportesCsPorCasoDeUso?: ReportesCsPorCasoDeUso[];
  reportesWebPorCasoDeUso?: ReportesWebPorCasoDeUso[];
  tiposDeDocumentoPorCasoDeUso?: TiposDeDocumentoPorCasoDeUso[];
}

export type {
  UseCase,
  OpcionesCsPorCasoDeUso,
  OpcionesPortalWebPorCasoDeUso,
  ReportesCsPorCasoDeUso,
  ReportesWebPorCasoDeUso,
  TiposDeDocumentoPorCasoDeUso,
};
