import { useState, useEffect } from "react";

import { getData } from "@mocks/utils/dataMock.service";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

import { stepsAddingLinixUseCase } from "./config/addingLinixUseCase.config";
import { AddingLinixUseCaseUI } from "./interface";

interface DataToAssignmentFormEntryProps {
  dataOptions: Record<string, unknown>[];
  idLabel: string;
  valueLabel: string;
  isActiveLabel: string;
}

export function dataToAssignmentFormEntry(
  props: DataToAssignmentFormEntryProps
) {
  const { dataOptions, idLabel, valueLabel, isActiveLabel } = props;
  return dataOptions.map((dataOption) => ({
    value: String(dataOption[valueLabel]),
    isActive: Boolean(dataOption[isActiveLabel] === "Y"),
    id: String(dataOption[idLabel]),
  }));
}

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
    values: IAssignmentFormEntry[];
  };
  webReports: {
    values: IAssignmentFormEntry[];
  };
  webOptions: {
    values: IAssignmentFormEntry[];
  };
  clientServerReports: {
    values: IAssignmentFormEntry[];
  };
  clientServerOptions: {
    values: IAssignmentFormEntry[];
  };
}

export type IHandleChangeFormData =
  | IGeneralInformation
  | IClientServerButton
  | IAssignmentFormEntry[];

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
          setFormData((prevFormData: IFormAddLinixUseCase) => ({
            ...prevFormData,
            clientServerOptions: {
              values: dataToAssignmentFormEntry({
                dataOptions: data as Record<string, unknown>[],
                idLabel: "CODIGO_OPCION",
                valueLabel: "DESCRIPCION",
                isActiveLabel: "asignado",
              }),
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching linix-use-cases:", error.message);
      });

    getData("clients-server")
      .then((data) => {
        if (data !== null) {
          setFormData((prevFormData: IFormAddLinixUseCase) => ({
            ...prevFormData,
            clientServerReports: {
              values: dataToAssignmentFormEntry({
                dataOptions: data as Record<string, unknown>[],
                idLabel: "CODIGO_OPCION",
                valueLabel: "DESCRIPCION",
                isActiveLabel: "asignado",
              }),
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching linix-use-cases:", error.message);
      });

    getData("web-options")
      .then((data) => {
        if (data !== null) {
          setWebOptions(data as Record<string, unknown>[]);
          setFormData((prevFormData: IFormAddLinixUseCase) => ({
            ...prevFormData,
            webOptions: {
              values: dataToAssignmentFormEntry({
                dataOptions: data as Record<string, unknown>[],
                idLabel: "K_opcion",
                valueLabel: "Nombre_opcion",
                isActiveLabel: "asignado",
              }),
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching web-options:", error.message);
      });
    getData("documents")
      .then((data) => {
        if (data !== null) {
          setFormData((prevFormData: IFormAddLinixUseCase) => ({
            ...prevFormData,
            downloadableDocuments: {
              values: dataToAssignmentFormEntry({
                dataOptions: data as Record<string, unknown>[],
                idLabel: "CODIGO",
                valueLabel: "NOMBRE",
                isActiveLabel: "asignado",
              }),
            },
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching linix-use-cases:", error.message);
      });
    getData("web-options")
      .then((data) => {
        if (data !== null) {
          setFormData((prevFormData: IFormAddLinixUseCase) => ({
            ...prevFormData,
            webReports: {
              values: dataToAssignmentFormEntry({
                dataOptions: data as Record<string, unknown>[],
                idLabel: "K_opcion",
                valueLabel: "Nombre_opcion",
                isActiveLabel: "asignado",
              }),
            },
          }));
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
      if (stepKey === "generalInformation") {
        const updatedData: IFormAddLinixUseCase = {
          ...formData,
        };
        Object.assign(updatedData[stepKey].values, values);
        Object.assign(
          updatedData.webOptions.values,
          formData.webOptions.values.map((option) =>
            option.id === (values as IGeneralInformation).k_Funcio
              ? { ...option, isActive: true }
              : option
          )
        );
        Object.assign(
          updatedData.clientServerOptions.values,
          formData.clientServerOptions.values.map((option) =>
            option.id === (values as IGeneralInformation).k_Opcion
              ? { ...option, isActive: true }
              : option
          )
        );
      } else {
        setFormData((prevFormData: IFormAddLinixUseCase) => ({
          ...prevFormData,
          [stepKey]: { values: values },
        }));
      }
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
