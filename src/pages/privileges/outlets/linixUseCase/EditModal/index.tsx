import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IAssignmentFormEntry } from "@pages/privileges/outlets/users/types/forms.types";

import { EditUserUI } from "./interface";
import { IFormAddLinixUseCase } from "../adding-linix-use-case/types";
import { dataToAssignmentFormEntry } from "../adding-linix-use-case";
import { UseCase } from "../types";
import { editLinixUseCaseTabsConfig } from "./config/editUseCaseTabs.config";
import { getDownloadableFormats } from "@src/services/linixUseCase/downloadableFormats";
import { getWebOptionsFormats } from "@src/services/webOptions";
import { getWebReportsFormats } from "@src/services/linixUseCase/reportsWeb";
import { getReportsClientServerFormats } from "@src/services/linixUseCase/reportsClientServer";
import { getSelectLinixUseCase } from "@src/services/linixUseCase/selectLinixUseCase";
import { Option } from "@src/pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";
import { useAuth0 } from "@auth0/auth0-react";
import { getClientServerMenuOptionFormats } from "@src/services/linixUseCase/clientServerMenuOption";
import { getLinixUseCase } from "@src/services/linixUseCase/getLinixUseCase";
import { formSelectOptionId } from "../config/dataUseCases.config";

export interface IGeneralInformation {
  generalInformation: { entries: UseCase | undefined };
}
function EditCaseLinix() {
  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });

  const { k_Usecase } = useParams();

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
      isValid: false,
      values: [],
    },
    webReports: {
      isValid: false,
      values: [],
    },
    webOptions: {
      isValid: false,
      values: [],
    },
    clientServerReports: {
      isValid: false,
      values: [],
    },
    clientServerOptions: {
      isValid: false,
      values: [],
    },
  });

  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    editLinixUseCaseTabsConfig.generalInformation.id
  );

  const [webReports, setWebReports] = useState<Record<string, unknown>[]>([]);
  const [selectLinixUseCase, setSelectLinixUseCase] = useState<Option[]>([]);
  const [csOptions, setCsOptions] = useState<Record<string, unknown>[]>([]);
  const [webOptions, setWebOptions] = useState<Record<string, unknown>[]>([]);
  const [downloadableDocuments, setDownloadableDocuments] = useState<
    Record<string, unknown>[]
  >([]);
  const [csReports, setCsReports] = useState<Record<string, unknown>[]>([]);
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [linixUseCasesEdit, setLinixUseCasesEdit] = useState<UseCase[]>([]);
  const [csOptionsChange, setCSOptionsChange] = useState<
    IAssignmentFormEntry[]
  >([]);

  function generalInformationData() {
    return linixUseCasesEdit.find(
      (data) =>
        data.id === k_Usecase && {
          n_Usecase: data.n_Usecase,
          n_Descrip: data.n_Descrip,
          i_Tipusec: formSelectOptionId(data.i_Tipusec || ""),
          k_Funcio: data.k_Funcio,
          k_Opcion: data.k_Opcion,
        }
    );
  }
  const [editData, setEditData] = useState<{
    [key: string]: { [key: string]: unknown };
  }>({
    generalInformation: { entries: generalInformationData() },
  });

  const linixUseCaseData = async () => {
    if (!user) return;
    if (linixUseCasesEdit.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getLinixUseCase();
        setLinixUseCasesEdit(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixUseCaseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Promise.all([
      webOptionsData(),
      usersData(),
      webReportsData(),
      clientServerReports(),
      clientServerMenuOption(),
      clientSelectLinixUseCase(),
    ]).then(() => {
      setLoading(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const usersData = () => {
    if (!user) return;
    if (downloadableDocuments.length === 0) {
      setLoading(true);
      getDownloadableFormats(k_Usecase || "1")
        .then((data) => {
          if (data !== null) {
            setDownloadableDocuments(
              data as unknown as Record<string, unknown>[]
            );
            setFormData((prevFormData: IFormAddLinixUseCase) => ({
              ...prevFormData,
              downloadableDocuments: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "id",
                  valueLabel: "value",
                  isActiveLabel: "isActive",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching:", error.message);
        });
    }
  };

  const webOptionsData = () => {
    if (!user) return;
    if (webOptions.length === 0) {
      getWebOptionsFormats(k_Usecase || "1")
        .then((data) => {
          if (data !== null) {
            setWebOptions(data as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddLinixUseCase) => ({
              ...prevFormData,
              webOptions: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Funcio",
                  valueLabel: "n_Funcio",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };
  const webReportsData = () => {
    if (!user) return;
    if (webReports.length === 0) {
      setLoading(true);
      getWebReportsFormats(k_Usecase || "1")
        .then((data) => {
          if (data !== null) {
            setWebReports(data as unknown as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddLinixUseCase) => ({
              ...prevFormData,
              webReports: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Report",
                  valueLabel: "n_Report",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  const clientServerReports = () => {
    if (!user) return;
    if (csReports.length === 0) {
      setLoading(true);
      getReportsClientServerFormats(k_Usecase || "1")
        .then((data) => {
          if (data !== null) {
            setCsReports(data as unknown as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddLinixUseCase) => ({
              ...prevFormData,
              clientServerReports: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Nforma",
                  valueLabel: "n_Descri",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  const clientServerMenuOption = () => {
    if (!user) return;
    if (csOptions.length === 0) {
      setLoading(true);
      getClientServerMenuOptionFormats(k_Usecase || "1")
        .then((data) => {
          if (data !== null) {
            setCsOptions(data as unknown as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddLinixUseCase) => ({
              ...prevFormData,
              clientServerOptions: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Opcion",
                  valueLabel: "DESCRIPCION",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  const clientSelectLinixUseCase = async () => {
    if (!user) return;
    if (selectLinixUseCase.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getSelectLinixUseCase();
        setSelectLinixUseCase(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = (values: IAssignmentFormEntry[]) => {
    const editKey = Object.entries(editLinixUseCaseTabsConfig).find(
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

  const prueba = generalInformationData();

  //const bodyForPatch: any = [];

  const handleSubmitAssignmentForm = (changes: IAssignmentFormEntry[]) => {
    //Incluir un reducer para garantizar que doble click no daña el funcionamiento
    const bodyForPatch: any = [];
    changes.forEach((change) => {
      const changeForPatch = {
        transactionOperation: change.isActive ? "Insert" : "Delete",
        k_Report: change.id,
      };
      bodyForPatch.push(changeForPatch);
    });
  };

  return (
    <EditUserUI
      linixUseCasesEdit={prueba!}
      selectLinixUseCase={selectLinixUseCase}
      loading={loading}
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
      id={k_Usecase || "1"}
      setCsOptionsChange={setCSOptionsChange}
      csOptionsChange={csOptionsChange}
      handleSubmitAssignmentForm={handleSubmitAssignmentForm}
    />
  );
}

export { EditCaseLinix };
