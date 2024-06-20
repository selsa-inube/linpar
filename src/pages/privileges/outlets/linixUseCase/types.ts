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
  a_Publicc: string;
  i_Tipusec: string;
  k_Ncampo: string;
  k_Nforma: string;
  k_Usecase: string;
  n_Descrip: string;
  n_Usecase: string;
  opcionesCsPorCasoDeUso?: OpcionesCsPorCasoDeUso[];
  opcionesPortalWebPorCasoDeUso?: OpcionesPortalWebPorCasoDeUso[];
  reportesCsPorCasoDeUso?: ReportesCsPorCasoDeUso[];
  reportesWebPorCasoDeUso?: ReportesWebPorCasoDeUso[];
  tiposDeDocumentoPorCasoDeUso?: TiposDeDocumentoPorCasoDeUso[];
  id?: string;
}

interface UseCaseResponse {
  a_Publicc: string;
  i_Tipusec: string;
  k_Usecase: string;
  n_Camprv: string;
  n_Descrip: string;
  n_Usecase: string;
  opcionesCsPorCasoDeUso: [
    {
      k_Opcion: string;
      k_Usecase: string;
    }
  ];
  opcionesPortalWebPorCasoDeUso: [
    {
      k_Funcio: string;
      k_Usecase: string;
    }
  ];
  reportesCsPorCasoDeUso: [
    {
      k_Nforma: string;
      k_Usecase: string;
    }
  ];
  reportesWebPorCasoDeUso: [
    {
      k_Report: string;
      k_Usecase: string;
    }
  ];
  tiposDeDocumentoPorCasoDeUso: [
    {
      k_Docume: string;
      k_Usecase: string;
    }
  ];
}

export type {
  UseCase,
  OpcionesCsPorCasoDeUso,
  OpcionesPortalWebPorCasoDeUso,
  ReportesCsPorCasoDeUso,
  ReportesWebPorCasoDeUso,
  TiposDeDocumentoPorCasoDeUso,
  UseCaseResponse,
};

export interface IActions {
  k_action: number;
  n_action: string;
  i_active: "Y" | "N";
}
