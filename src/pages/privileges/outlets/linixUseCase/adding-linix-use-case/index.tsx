import { useState, useEffect } from "react";

import { getData } from "@mocks/utils/dataMock.service";

import { stepsAddingLinixUseCase } from "./config/addingLinixUseCase.config";
import { AddingLinixUseCaseUI } from "./interface";
import {
  TiposDeDocumentoPorCasoDeUso,
  ReportesWebPorCasoDeUso,
  OpcionesPortalWebPorCasoDeUso,
  ReportesCsPorCasoDeUso,
  OpcionesCsPorCasoDeUso,
} from "../types";

export interface IGeneralInformation {
  n_Usecase: string;
  n_Descrip: string;
  i_Tipusec: string;
  k_Funcio: string;
  k_Opcion: string;
}

export interface IClientServerButton {
  csButtonOption: string;
}

export interface IFormAddLinixUseCase {
  generalInformation: {
    isValid: boolean;
    values: IGeneralInformation;
  };
  clientServerButton: {
    isValid: boolean;
    values: IClientServerButton;
  };
  downloadableDocuments: {
    values: TiposDeDocumentoPorCasoDeUso[];
  };
  webReports: {
    values: ReportesWebPorCasoDeUso[];
  };
  webOptions: {
    values: OpcionesPortalWebPorCasoDeUso[];
  };
  clientServerReports: {
    values: ReportesCsPorCasoDeUso[];
  };
  clientServerOptions: {
    values: OpcionesCsPorCasoDeUso[];
  };
}

export type IHandleChangeFormData =
  | IGeneralInformation
  | IClientServerButton
  | TiposDeDocumentoPorCasoDeUso[]
  | ReportesWebPorCasoDeUso[]
  | OpcionesPortalWebPorCasoDeUso[]
  | ReportesCsPorCasoDeUso[]
  | OpcionesCsPorCasoDeUso[];

function AddingLinixUseCase() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddingLinixUseCase.generalInformation.id
  );
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<IFormAddLinixUseCase>({
    generalInformation: {
      isValid: false,
      values: {
        n_Usecase: "",
        n_Descrip: "",
        i_Tipusec: "",
        k_Funcio: "",
        k_Opcion: "",
      },
    },
    clientServerButton: {
      isValid: false,
      values: {
        csButtonOption: "",
      },
    },
    downloadableDocuments: {
      values: [],
    },
    webReports: {
      values: [],
    },
    webOptions: {
      values: [],
    },
    clientServerReports: {
      values: [],
    },
    clientServerOptions: {
      values: [],
    },
  });

  const [csOptions, setCsOptions] = useState<Record<string, unknown>[]>([]);
  const [webOptions, setWebOptions] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    getData("clients-server")
      .then((data) => {
        if (data !== null) {
          setCsOptions(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching linix-use-cases:", error.message);
      });

    getData("web-options")
      .then((data) => {
        if (data !== null) {
          setWebOptions(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching web-options:", error.message);
      });
  }, []);

  const handleUpdateFormData = (values: IHandleChangeFormData) => {
    const stepKey = Object.entries(stepsAddingLinixUseCase).find(
      ([, config]) => config.id === currentStep
    )?.[0];
    if (stepKey) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  const handleNextStep = (step: number) => {
    setCurrentStep(step + 1);
  };

  const handlePrevStep = (step: number) => {
    setCurrentStep(step - 1);
  };

  const handleCompleteInvitation = () => {
    return;
  };

  const handleToggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <AddingLinixUseCaseUI
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
      currentStep={currentStep}
      handleToggleModal={handleToggleModal}
      handleCompleteInvitation={handleCompleteInvitation}
      showModal={showModal}
      formData={formData}
      handleUpdateFormData={handleUpdateFormData}
      csOptions={csOptions}
      webOptions={webOptions}
    />
  );
}

export { AddingLinixUseCase };
