import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { getDownloadableFormats } from "@services/linixUseCase/downloadableFormats";
import { getWebOptionsFormats } from "@services/webOptions";
import { getWebReportsFormats } from "@services/linixUseCase/reportsWeb";
import { getReportsClientServerFormats } from "@services/linixUseCase/reportsClientServer";
import { getSelectLinixUseCase } from "@services/linixUseCase/selectLinixUseCase";
import { Option } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";
import { getClientServerMenuOptionFormats } from "@services/linixUseCase/clientServerMenuOption";
import { getLinixUseCase } from "@services/linixUseCase/getLinixUseCase";
import { LinparContext } from "@context/AppContext";

import { EditUserUI } from "./interface";
import {
  IFormAddLinixUseCase,
  IHandleChangeFormData,
} from "../adding-linix-use-case/types";
import { dataToAssignmentFormEntry } from "../adding-linix-use-case";
import { UseCase } from "../types";
import { editLinixUseCaseTabsConfig } from "./config/editUseCaseTabs.config";

import { editLinixUseCases } from "./utils";
import { generalMessage } from "../adding-linix-use-case/config/messages.config";

function EditCaseLinix() {
  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });

  const { k_Usecase } = useParams();

  const initialGeneralFormState = {
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
        k_option_button: "",
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
  };

  const [formData, setFormData] = useState<IFormAddLinixUseCase>(
    initialGeneralFormState
  );
  const [downloadableDocuments, setDownloadableDocuments] = useState<
    Record<string, unknown>[]
  >([]);
  const originalDataEditLinixUseCaseForm = useRef<IFormAddLinixUseCase | null>(
    null
  );
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);

  const [selectedTab, setSelectedTab] = useState(
    editLinixUseCaseTabsConfig.generalInformation.id
  );

  const [webReports, setWebReports] = useState<Record<string, unknown>[]>([]);
  const [selectLinixUseCase, setSelectLinixUseCase] = useState<Option[]>([]);
  const [csOptions, setCsOptions] = useState<Record<string, unknown>[]>([]);
  const [webOptions, setWebOptions] = useState<Record<string, unknown>[]>([]);
  const [csReports, setCsReports] = useState<Record<string, unknown>[]>([]);
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [linixUseCasesEdit, setLinixUseCasesEdit] = useState<UseCase[]>([]);
  const [csOptionsChange, setCSOptionsChange] = useState<
    IAssignmentFormEntry[]
  >([]);
  const [csOptionsButtons] = useState<Record<string, unknown>[]>([]);

  const generalInformationData = linixUseCasesEdit.find(
    (data) => data.id === k_Usecase
  );
  const { linparData } = useContext(LinparContext);
  const [optionId, setOptionId] = useState<string>("");

  useEffect(() => {
    if (generalInformationData) {
      setFormData((prevFormData: IFormAddLinixUseCase) => ({
        ...prevFormData,
        clientServerButton: {
          isValid: true,
          values: {
            k_option_button: String(generalInformationData.k_option_button),
          },
        },
      }));
      originalDataEditLinixUseCaseForm.current = {
        ...originalDataEditLinixUseCaseForm.current!,
        clientServerButton: {
          isValid: true,
          values: {
            k_option_button: String(generalInformationData.k_option_button),
          },
        },
      };
    }
  }, [generalInformationData]);

  useEffect(() => {
    linixUseCaseData();
  }, []);
  useEffect(() => {
    usersData();
  }, []);

  useEffect(() => {
    Promise.all([
      webOptionsData(),
      webReportsData(),
      clientServerReports(),
      clientServerMenuOption(),
      clientSelectLinixUseCase(),
    ]).then(() => {
      setLoading(true);
    });
  }, []);

  const linixUseCaseData = async () => {
    if (!user) return;
    if (linixUseCasesEdit.length === 0) {
      setLoading(true);
      getLinixUseCase(linparData.businessUnit.businessUnitPublicCode)
        .then((data) => {
          if (data !== null) {
            setLinixUseCasesEdit(data as UseCase[]);
            const generalData = data.find((data) => data.id === k_Usecase);
            setFormData((prevFormData: IFormAddLinixUseCase) => ({
              ...prevFormData,
              generalInformation: {
                isValid: true,
                values: {
                  k_Usecase: String(generalData?.k_Usecase) || "",
                  n_Usecase: String(generalData?.n_Usecase) || "",
                  n_Descrip: String(generalData?.n_Descrip) || "",
                  i_Tipusec: String(generalData?.i_Tipusec) || "",
                  k_Funcio: String(generalData?.k_Funcio) || "",
                  k_Opcion: String(generalData?.k_Opcion) || "",
                },
              },
            }));
            originalDataEditLinixUseCaseForm.current = {
              ...originalDataEditLinixUseCaseForm.current!,
              generalInformation: {
                isValid: true,
                values: {
                  k_Usecase: String(generalData?.k_Usecase) || "",
                  n_Usecase: String(generalData?.n_Usecase) || "",
                  n_Descrip: String(generalData?.n_Descrip) || "",
                  i_Tipusec: String(generalData?.i_Tipusec) || "",
                  k_Funcio: String(generalData?.k_Funcio) || "",
                  k_Opcion: String(generalData?.k_Opcion) || "",
                },
              },
            };
          }
        })
        .catch((error) => {
          console.error("Error fetching general Information:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const usersData = () => {
    if (!user) return;
    if (downloadableDocuments.length === 0) {
      setLoading(true);
      getDownloadableFormats(
        k_Usecase || "1",
        linparData.businessUnit.businessUnitPublicCode
      )
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
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
            originalDataEditLinixUseCaseForm.current = {
              ...originalDataEditLinixUseCaseForm.current!,
              downloadableDocuments: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "id",
                  valueLabel: "value",
                  isActiveLabel: "i_Privi",
                }),
              },
            };
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
      getWebOptionsFormats(
        k_Usecase || "1",
        linparData.businessUnit.businessUnitPublicCode
      )
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
            originalDataEditLinixUseCaseForm.current = {
              ...originalDataEditLinixUseCaseForm.current!,
              webOptions: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Funcio",
                  valueLabel: "n_Funcio",
                  isActiveLabel: "i_Privi",
                }),
              },
            };
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
      getWebReportsFormats(
        k_Usecase || "1",
        linparData.businessUnit.businessUnitPublicCode
      )
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
            originalDataEditLinixUseCaseForm.current = {
              ...originalDataEditLinixUseCaseForm.current!,
              webReports: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Report",
                  valueLabel: "n_Report",
                  isActiveLabel: "i_Privi",
                }),
              },
            };
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
      getReportsClientServerFormats(
        k_Usecase || "1",
        linparData.businessUnit.businessUnitPublicCode
      )
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
            originalDataEditLinixUseCaseForm.current = {
              ...originalDataEditLinixUseCaseForm.current!,
              clientServerReports: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Nforma",
                  valueLabel: "n_Descri",
                  isActiveLabel: "i_Privi",
                }),
              },
            };
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
      getClientServerMenuOptionFormats(
        k_Usecase || "1",
        linparData.businessUnit.businessUnitPublicCode
      )
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
            originalDataEditLinixUseCaseForm.current = {
              ...originalDataEditLinixUseCaseForm.current!,
              clientServerOptions: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as unknown as Record<string, unknown>[],
                  idLabel: "k_Opcion",
                  valueLabel: "DESCRIPCION",
                  isActiveLabel: "i_Privi",
                }),
              },
            };
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
        const newUsers = await getSelectLinixUseCase(
          linparData.businessUnit.businessUnitPublicCode
        );
        setSelectLinixUseCase(newUsers);
      } catch (error) {
        console.info(error);
      }
    }
  };

  const handleTabChange = (tabId: string) => {
    setControlModal({ show: true, continueTab: tabId });
    setSelectedTab(tabId);
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
  const navigate = useNavigate();
  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/catalogs/linixUseCase");
  };
  const editGeneral = generalInformationData;

  const handleUpdateFormData = async (values: IHandleChangeFormData) => {
    const stepKey = Object.entries(editLinixUseCaseTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (stepKey === "clientServerOptions") {
      const previousActiveOption = Object.values(values).find(
        (option: any) => option.isActive
      );

      const newOptionsForms = await getClientServerMenuOptionFormats(
        previousActiveOption?.id as string,
        linparData.businessUnit.businessUnitPublicCode
      );

      const previousActiveOptionByID = (id: any) =>
        newOptionsForms.find((option: any) => option.k_Opcion === id);

      const hasOpcionChanged = (id: any) => {
        const options = Object.values(values);
        return options.find((option: any) => option.k_Opcion !== id);
      };

      if (hasOpcionChanged(previousActiveOption?.id)) {
        const previousOption = previousActiveOptionByID(
          previousActiveOption?.id
        );
        if (previousOption) {
          setOptionId(previousOption.CODIGO_OPCION as string);
          setFormData((prevFormData: any) => ({
            ...prevFormData,
            generalInformation: {
              ...prevFormData.generalInformation,
              values: {
                ...prevFormData.generalInformation.values,
                k_Funcio: previousOption.CODIGO_OPCION,
              },
              isValid: false,
            },
          }));
        }
      } else {
        setOptionId("AH");
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          generalInformation: {
            ...prevFormData.generalInformation,
            values: {
              ...prevFormData.generalInformation.values,
              k_Funcio: "",
            },
            isValid: false,
          },
        }));
      }

      setFormData((prevFormData: IFormAddLinixUseCase) => ({
        ...prevFormData,
        clientServerButton: {
          ...prevFormData.clientServerButton,
          values: {
            k_option_button: "",
          },
          isValid: false,
        },
      }));
    }

    if (stepKey) {
      setFormData((prevFormData: IFormAddLinixUseCase) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  const handleReset = () => {
    setFormData(originalDataEditLinixUseCaseForm.current!);
    setCurrentFormHasChanges(false);
  };

  const onSubmit = () => {
    setLoading(true);
    const addnewdata = editLinixUseCases(
      formData,
      linparData.businessUnit.businessUnitPublicCode,
      csOptionsChange
    );
    addnewdata
      .then(() => {
        setMessage({
          visible: true,
          data: generalMessage.success,
        });
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: generalMessage.failed,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const userCardData = formData && {
    code: formData.generalInformation.values.k_Usecase,
    username: formData.generalInformation.values.n_Usecase,
    type: formData.generalInformation.values.i_Tipusec,
    description: formData.generalInformation.values.n_Descrip,
  };

  const sortByIsActive = (arrays: any[]) => {
    arrays.forEach((array: any[]) =>
      array.sort(
        (a: { isActive: number }, b: { isActive: number }) =>
          b.isActive - a.isActive
      )
    );
  };
  sortByIsActive([
    formData.clientServerOptions.values,
    formData.webOptions.values,
    formData.clientServerReports.values,
    formData.webReports.values,
    formData.downloadableDocuments.values,
  ]);

  return (
    <EditUserUI
      handleReset={handleReset}
      linixUseCasesEdit={editGeneral!}
      selectLinixUseCase={selectLinixUseCase}
      onCloseSectionMessage={handleCloseSectionMessage}
      loading={loading}
      selectedTab={selectedTab}
      formData={formData}
      handleTabChange={handleTabChange}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      webOptions={webOptions}
      handleContinueTab={handleContinueTab}
      csOptions={csOptions}
      id={k_Usecase || "1"}
      currentFormHasChanges={currentFormHasChanges}
      setCsOptionsChange={setCSOptionsChange}
      csOptionsChange={csOptionsChange}
      filterNForma={
        optionId ? optionId : (generalInformationData?.k_Funcio as string)
      }
      csOptionsButtons={csOptionsButtons}
      message={message}
      handleUpdateFormData={handleUpdateFormData}
      onSubmit={onSubmit}
      userCardData={userCardData}
    />
  );
}

export { EditCaseLinix };
