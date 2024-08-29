import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { dataToAssignmentFormEntry } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case";
import { getUsers } from "@services/users/getUsers";
import { getSucursales } from "@services/users/sucursales";
import { getProyectos } from "@services/users/proyectos";
import { getUnidadesPresupuestales } from "@services/users/unidadesPresupuestales";
import { getNomina } from "@services/users/nomina";
import { getPositions } from "@services/users/getPositons";
import {
  IFormAddUsers,
  IGeneralInformationUsersForm,
  IHandleChangeFormData,
} from "@services/users/users.types";

import { EditUserUI } from "./interface";
import { editUsersData } from "./utils";
import { generalMessage } from "./config/messages.config";
import { editLinixUserTabsConfig } from "./config/editUsersTabs.config";

function EditUsers() {
  const [controlModal, setControlModal] = useState({
    show: false,
    continueTab: "",
  });

  const { k_Usuari } = useParams();
  const [loading, setLoading] = useState(false);
  const initialGeneralFormState = {
    generalInformation: {
      isValid: false,
      values: {
        k_Usuari: "",
        n_Usuari: "",
        k_Grupo: "",
        n_Grupo: "",
        a_Numnit: "",
        i_Activo: "",
      },
    },

    branches: {
      isValid: false,
      values: [],
    },
    projectsOrEvents: {
      isValid: false,
      values: [],
    },
    events: {
      isValid: false,
      values: [],
    },
    aidBudgetUnits: {
      isValid: false,
      values: [],
    },
    payrolls: {
      isValid: false,
      values: [],
    },
  };
  const [formData, setFormData] = useState<IFormAddUsers>(
    initialGeneralFormState
  );
  const { user } = useAuth0();
  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);
  const [usersEdit, setUsersEdit] = useState<IGeneralInformationUsersForm[]>(
    []
  );
  const generalInformationData = usersEdit.find((data) => data.id === k_Usuari);

  const originalDataEditUserForm = useRef<IFormAddUsers | null>(null);

  const [branches, setBranches] = useState<Record<string, unknown>[]>([]);
  const [csOptionsChange, setCSOptionsChange] = useState<
    IAssignmentFormEntry[]
  >([]);
  const [projects, setProjects] = useState<Record<string, unknown>[]>([]);
  const [positions, setPositions] = useState<Record<string, unknown>[]>([]);
  const [aidBudgetUnits, setAidBudgetUnits] = useState<
    Record<string, unknown>[]
  >([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [payrolls, setPayrolls] = useState<Record<string, unknown>[]>([]);
  const [selectedTab, setSelectedTab] = useState(
    editLinixUserTabsConfig.generalInformation.id
  );
  useEffect(() => {
    linixUsersCaseData();
  }, []);
  useEffect(() => {
    cargosData();
  }, []);

  useEffect(() => {
    Promise.all([
      branchesData(),
      projectsData(),
      aidBudgetUnitsData(),
      payrollsData(),
    ]).then(() => {
      setLoading(true);
    });
  }, []);

  const linixUsersCaseData = async () => {
    if (!user) return;
    if (usersEdit.length === 0) {
      setLoading(true);
      getUsers()
        .then((data) => {
          if (data !== null) {
            setUsersEdit(data as IGeneralInformationUsersForm[]);
            const generalData = data.find((data) => data.id === k_Usuari);
            setFormData((prevFormData: IFormAddUsers) => ({
              ...prevFormData,
              generalInformation: {
                isValid: true,
                values: {
                  k_Usuari: String(generalData?.k_Usuari) || "",
                  n_Usuari: String(generalData?.n_Usuari) || "",
                  k_Grupo: String(generalData?.k_Grupo) || "",
                  n_Grupo: String(generalData?.n_Grupo) || "",
                  a_Numnit: String(generalData?.a_Numnit) || "",
                  i_Activo: String(generalData?.i_Activo) || "",
                },
              },
            }));
            originalDataEditUserForm.current = {
              ...originalDataEditUserForm.current!,
              generalInformation: {
                isValid: true,
                values: {
                  k_Usuari: String(generalData?.k_Usuari) || "",
                  n_Usuari: String(generalData?.n_Usuari) || "",
                  k_Grupo: String(generalData?.k_Grupo) || "",
                  n_Grupo: String(generalData?.n_Grupo) || "",
                  a_Numnit: String(generalData?.a_Numnit) || "",
                  i_Activo: String(generalData?.i_Activo) || "",
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
  const cargosData = () => {
    if (!user) return;
    if (positions.length === 0) {
      setLoading(true);
      getPositions()
        .then((newUsers) => {
          setPositions(newUsers);
        })
        .catch((error) => {
          console.info(error);
        });
    }
  };

  const branchesData = () => {
    if (!user) return;
    if (branches.length === 0) {
      getSucursales(k_Usuari || "1")
        .then((data) => {
          if (data !== null) {
            setBranches(data as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddUsers) => ({
              ...prevFormData,
              branches: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Sucurs",
                  valueLabel: "n_Sucurs",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
            originalDataEditUserForm.current = {
              ...originalDataEditUserForm.current!,
              branches: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Sucurs",
                  valueLabel: "n_Sucurs",
                  isActiveLabel: "i_Privil",
                }),
              },
            };
          }
        })
        .catch((error) => {
          console.error("Error fetching branches:", error.message);
        });
    }
  };

  const projectsData = () => {
    if (!user) return;
    if (projects.length === 0) {
      getProyectos(k_Usuari || "1")
        .then((data) => {
          if (data !== null) {
            setProjects(data as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddUsers) => ({
              ...prevFormData,
              projectsOrEvents: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Numdoc",
                  valueLabel: "k_Tipodr",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
            originalDataEditUserForm.current = {
              ...originalDataEditUserForm.current!,
              projectsOrEvents: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Numdoc",
                  valueLabel: "k_Tipodr",
                  isActiveLabel: "i_Privil",
                }),
              },
            };
          }
        })
        .catch((error) => {
          console.error("Error fetching projects:", error.message);
        });
    }
  };
  const aidBudgetUnitsData = () => {
    if (!user) return;
    if (aidBudgetUnits.length === 0) {
      getUnidadesPresupuestales(k_Usuari || "1")
        .then((data) => {
          if (data !== null) {
            setAidBudgetUnits(data as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddUsers) => ({
              ...prevFormData,
              aidBudgetUnits: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Unidad",
                  valueLabel: "n_Unidad",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
            originalDataEditUserForm.current = {
              ...originalDataEditUserForm.current!,
              aidBudgetUnits: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Unidad",
                  valueLabel: "n_Unidad",
                  isActiveLabel: "i_Privil",
                }),
              },
            };
          }
        })
        .catch((error) => {
          console.error("Error fetching aidBudgetUnits:", error.message);
        });
    }
  };

  const payrollsData = () => {
    if (!user) return;
    if (payrolls.length === 0) {
      getNomina(k_Usuari || "1")
        .then((data) => {
          if (data !== null) {
            setPayrolls(data as Record<string, unknown>[]);
            setFormData((prevFormData: IFormAddUsers) => ({
              ...prevFormData,
              payrolls: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Tipnom",
                  valueLabel: "n_Tipnom",
                  isActiveLabel: "i_Privil",
                }),
              },
            }));
            originalDataEditUserForm.current = {
              ...originalDataEditUserForm.current!,
              payrolls: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Tipnom",
                  valueLabel: "n_Tipnom",
                  isActiveLabel: "i_Privil",
                }),
              },
            };
          }
        })
        .catch((error) => {
          console.error("Error fetching aidBudgetUnits:", error.message);
        });
    }
  };
  const handleSubmit = (values: IAssignmentFormEntry[]) => {
    const editKey = Object.entries(editLinixUserTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (editKey) {
      setFormData({
        ...formData,
        [editKey]: { values },
      });
    }

    setCurrentFormHasChanges(false);
  };

  const navigate = useNavigate();
  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/privileges/users");
  };
  const editGeneral = generalInformationData;

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
  const handleUpdateFormData = (values: IHandleChangeFormData) => {
    const stepKey = Object.entries(editLinixUserTabsConfig).find(
      ([, config]) => config.id === selectedTab
    )?.[0];

    if (stepKey) {
      setFormData((prevFormData: IFormAddUsers) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };
  const handleReset = () => {
    setFormData(originalDataEditUserForm.current!);
    setCurrentFormHasChanges(false);
  };

  const onSubmit = () => {
    setLoading(true);
    const addnewdata = editUsersData(formData, csOptionsChange);
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

  return (
    <EditUserUI
      usersEdit={editGeneral!}
      selectedTab={selectedTab}
      formData={formData}
      message={message}
      handleTabChange={handleTabChange}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      handleContinueTab={handleContinueTab}
      id={k_Usuari || ""}
      currentFormHasChanges={currentFormHasChanges}
      positions={positions}
      loading={loading}
      handleReset={handleReset}
      onSubmit={onSubmit}
      onCloseSectionMessage={handleCloseSectionMessage}
      handleUpdateFormData={handleUpdateFormData}
      csOptionsChange={csOptionsChange}
      setCsOptionsChange={setCSOptionsChange}
    />
  );
}

export { EditUsers };
