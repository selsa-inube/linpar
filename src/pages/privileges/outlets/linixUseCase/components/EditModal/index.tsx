import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { editUserTabsConfig } from "@pages/privileges/outlets/users/edit-user/config/editUserTabs.config";
import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";
import { linixUseCases } from "@mocks/privileges/linixUseCases/LinixUseCases.mock";
import { getAll } from "@mocks/utils/dataMock.service";

import { EditUserUI } from "./interface";
import { UseCase } from "../../types";
import { dataToAssignmentFormEntry } from "../../adding-linix-use-case";
import { IFormAddLinixUseCase } from "../../adding-linix-use-case/types";

export interface IGeneralInformation {
  generalInformation: { entries: UseCase | undefined };
}
function EditCaseLinix() {
  const { user_id } = useParams<{ user_id: string }>();

  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });

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

  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    editUserTabsConfig.generalInformation.id
  );

  const [editData, setEditData] = useState<{
    [key: string]: { [key: string]: unknown };
  }>({
    generalInformation: { entries: getUserInformation() },
  });

  const [csOptions, setCsOptions] = useState<Record<string, unknown>[]>([]);
  const [webOptions, setWebOptions] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    getAll("documents")
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
    getAll("web-options")
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
    getAll("clients-server")
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
    getAll("web-options")
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
    getAll("clients-server")
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
    getAll("clients-server")
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
  }, []);

  function getUserInformation() {
    return linixUseCases.find((linixUseCase) => linixUseCase.id === user_id);
  }

  const handleSubmit = (values: IAssignmentFormEntry[]) => {
    const editKey = Object.entries(editUserTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (editKey) {
      setEditData((prevEditData) => ({
        ...prevEditData,
        [editKey]: { entries: values },
      }));
    }

    setCurrentFormHasChanges(false);
  };

  const handleTabChange = (tabId: string) => {
    setControlModal(
      currentFormHasChanges ? { show: true, continueTab: tabId } : controlModal
    );
    setSelectedTab(currentFormHasChanges ? selectedTab : tabId);
  };

  const handleCloseModal = () => {
    setControlModal((prevControlModal) => ({
      ...prevControlModal,
      show: false,
    }));
  };

  const handleDataChange = (hasChanges: boolean) => {
    setCurrentFormHasChanges(hasChanges);
  };

  const handleContinueTab = () => {
    setCurrentFormHasChanges(false);
    setSelectedTab(controlModal.continueTab);
  };

  return (
    <EditUserUI
      selectedTab={selectedTab}
      formData={formData}
      handleTabChange={handleTabChange}
      editData={editData}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      webOptions={webOptions}
      handleContinueTab={handleContinueTab}
      csOptions={csOptions}
    />
  );
}

export { EditCaseLinix };
