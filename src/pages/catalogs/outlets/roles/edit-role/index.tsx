import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";
import { useAuth0 } from "@auth0/auth0-react";
import { getBusinessRulesByRoleFormats } from "@services/roles/businessRulesByRole";

import { getUseCaseByRole } from "@services/roles/useCasesByRole";
import { getAplicationRoles } from "@services/roles/aplicationRoles";
import { getRolFormats } from "@services/roles/tipoDeMovimientoPorRol";
import { getRoles } from "@services/roles/getRoles";
import { getRolesCuentasAuxiliares } from "@services/roles/queryAllCuentasAuxiliares";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { stepsAddRol } from "../add-role/config/addRol.config";
import { EditRoleUI } from "./interface";
import {
  ICuentasAuxiliaresPorRol,
  IFormAddRole,
  IHandleChangeFormData,
  IRol,
} from "../types";

import { editDataRoles } from "./utils";

import { generalMessage } from "../config/messages.config";
import { dataToAssignmentFormEntry } from "../../linixUseCase/adding-linix-use-case";

const Tabs = Object.values(stepsAddRol)
  .filter((item) => item.label !== "Verificación")
  .map((stepAddRole) => ({
    id: stepAddRole.label,
    label: stepAddRole.label,
    isDisabled: false,
  }));

export const EditRole = () => {
  const { k_Rol } = useParams();
  const roleID = Number(k_Rol);

  const initialFormState = {
    generalInformation: {
      isValid: false,
      values: {
        n_Rol: "",
        description: "",
        application: "",
        applicationId: "",
      },
    },
    ancillaryAccounts: {
      isValid: false,
      values: {
        officialSector: "",
        commercialSector: "",
        solidaritySector: "",
      },
    },
    transactionTypes: {
      isValid: false,
      values: [],
    },
    businessRules: {
      values: [],
    },
    useCases: {
      values: [],
    },
  };

  const [dataEditRoleLinixForm, setDataEditRoleLinixForm] =
    useState<IFormAddRole>(initialFormState);
  const originalDataEditRoleLinixForm = useRef<IFormAddRole | null>(null);

  const [loading, setLoading] = useState(false);
  const { user } = useAuth0();
  const [selectedTab, setSelectedTab] = useState(
    stepsAddRol.generalInformation.label
  );

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const [linixRoles, setLinixRoles] = useState<Record<string, unknown>[]>([]);
  const [rolesEdit, setRolesEdit] = useState<IRol[]>([]);
  const [rolesEditCuantasA, setRolesEditCuantasA] = useState<
    ICuentasAuxiliaresPorRol[]
  >([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const [currentFormHasChanges, setCurrentFormHasChanges] = useState(false);
  const [csOptionsChange, setCSOptionsChange] = useState<
    IAssignmentFormEntry[]
  >([]);
  const [businessRules, setBusinessRules] = useState<Record<string, unknown>[]>(
    []
  );
  const [useCases, setUseCases] = useState<Record<string, unknown>[]>([]);
  const [transactionTypes, setTypesOfmovement] = useState<
    Record<string, unknown>[]
  >([]);
  const generalInformationData = rolesEdit.find((data) => data.id === roleID);

  useEffect(() => {
    rolesData();
    rolesCuentasAuxiliares();
  }, []);

  useEffect(() => {
    Promise.all([
      typesOfMovements(),
      businessRulesFull(),
      rolesuseCases(),
      aplication(),
    ]).then(() => {
      setLoading(true);
    });
  }, [k_Rol]);

  const rolesData = async () => {
    if (!user) return;
    if (rolesEdit.length === 0) {
      setLoading(true);
      getRoles()
        .then((data) => {
          if (data !== null) {
            setRolesEdit(data as IRol[]);
            const generalData = data.find((data) => data.id === roleID);
            setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              generalInformation: {
                isValid: true,
                values: {
                  k_Rol: Number(generalData?.k_Rol) || 0,
                  n_Rol: String(generalData?.n_Rol) || "",
                  description: String(generalData?.n_Uso) || "",
                  application: String(generalData?.k_Aplica) || "",
                  applicationId: String(generalData?.k_Aplica) || "",
                },
              },
            }));
            originalDataEditRoleLinixForm.current = {
              ...originalDataEditRoleLinixForm.current!,
              generalInformation: {
                isValid: true,
                values: {
                  k_Rol: Number(generalData?.k_Rol) || 0,
                  n_Rol: String(generalData?.n_Rol) || "",
                  description: String(generalData?.n_Uso) || "",
                  application: String(generalData?.k_Aplica) || "",
                  applicationId: String(generalData?.k_Aplica) || "",
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

  const rolesCuentasAuxiliares = async () => {
    if (!user) return;
    if (rolesEditCuantasA.length === 0) {
      setLoading(true);
      getRolesCuentasAuxiliares()
        .then((data) => {
          if (data !== null) {
            setRolesEditCuantasA(data as ICuentasAuxiliaresPorRol[]);
            const generalData = data.filter((data) => data.id === roleID);
            const commercialSector = generalData.find(
              (data) => data.i_Tipent === "C"
            );
            const officialSector = generalData.find(
              (data) => data.i_Tipent === "O"
            );
            const solidaritySector = generalData.find(
              (data) => data.i_Tipent === "S"
            );

            setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              ancillaryAccounts: {
                isValid: true,
                values: {
                  k_Rol: Number(generalData[0]?.k_Rol) || 0,
                  commercialSector: String(commercialSector?.k_Codcta) || "",
                  officialSector: String(officialSector?.k_Codcta) || "",
                  solidaritySector: String(solidaritySector?.k_Codcta) || "",
                },
              },
            }));

            originalDataEditRoleLinixForm.current = {
              ...originalDataEditRoleLinixForm.current!,
              ancillaryAccounts: {
                isValid: true,
                values: {
                  k_Rol: Number(generalData[0]?.k_Rol) || 0,
                  commercialSector: String(commercialSector?.k_Codcta) || "",
                  officialSector: String(officialSector?.k_Codcta) || "",
                  solidaritySector: String(solidaritySector?.k_Codcta) || "",
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

  const aplication = () => {
    if (!user) return;
    if (linixRoles.length === 0) {
      setLoading(true);
      getAplicationRoles()
        .then((newUsers) => {
          setLinixRoles(newUsers);
        })
        .catch((error) => {
          console.info(error);
        });
    }
  };

  const typesOfMovements = () => {
    if (!user) return;
    if (transactionTypes.length === 0) {
      setLoading(true);
      getRolFormats(k_Rol || "1")
        .then((data) => {
          if (data !== null) {
            setTypesOfmovement(data as Record<string, unknown>[]);
            setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              transactionTypes: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "CODIGO",
                  valueLabel: "NOMBRE",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
            originalDataEditRoleLinixForm.current = {
              ...originalDataEditRoleLinixForm.current!,
              transactionTypes: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "CODIGO",
                  valueLabel: "NOMBRE",
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

  const businessRulesFull = () => {
    if (!user) return;
    if (businessRules.length === 0) {
      setLoading(true);
      getBusinessRulesByRoleFormats(k_Rol || "1")
        .then((data) => {
          if (data !== null) {
            setBusinessRules(data as Record<string, unknown>[]);
            setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              businessRules: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Regla",
                  valueLabel: "n_Regla",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
            originalDataEditRoleLinixForm.current = {
              ...originalDataEditRoleLinixForm.current!,
              businessRules: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Regla",
                  valueLabel: "n_Regla",
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

  const rolesuseCases = () => {
    if (!user) return;
    if (useCases.length === 0) {
      setLoading(true);
      getUseCaseByRole(k_Rol || "1")
        .then((data) => {
          if (data !== null) {
            setUseCases(data as Record<string, unknown>[]);
            setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              useCases: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Usecase",
                  valueLabel: "n_Usecase",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
            originalDataEditRoleLinixForm.current = {
              ...originalDataEditRoleLinixForm.current!,
              useCases: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Usecase",
                  valueLabel: "n_Usecase",
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

  const navigate = useNavigate();
  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    navigate("/catalogs/roles");
  };

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const handleDataChange = (hasChanges: boolean) => {
    setCurrentFormHasChanges(hasChanges);
  };

  const handleUpdateFormData = (values: IHandleChangeFormData) => {
    const stepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.label === selectedTab
    )?.[0];

    if (stepKey) {
      setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  const handleReset = () => {
    setDataEditRoleLinixForm(originalDataEditRoleLinixForm.current!);
    setCurrentFormHasChanges(false);
  };

  const onSubmit = () => {
    setLoading(true);
    const addnewdata = editDataRoles(
      dataEditRoleLinixForm,
      rolesEditCuantasA,
      csOptionsChange,
      roleID
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

  const roleCardData = dataEditRoleLinixForm && {
    code: dataEditRoleLinixForm.generalInformation.values.k_Rol,
    username: dataEditRoleLinixForm.generalInformation.values.n_Rol,
  };

  return (
    <EditRoleUI
      handleReset={handleReset}
      currentFormHasChanges={currentFormHasChanges}
      roleCardData={roleCardData}
      setCsOptionsChange={setCSOptionsChange}
      csOptionsChange={csOptionsChange}
      handleDataChange={handleDataChange}
      handleUpdateFormData={handleUpdateFormData}
      onCloseSectionMessage={handleCloseSectionMessage}
      rolesEdit={generalInformationData!}
      dataEditRoleLinixForm={dataEditRoleLinixForm}
      linixRoles={linixRoles}
      onTabChange={handleTabChange}
      selectedTab={selectedTab}
      dataTabs={Tabs}
      smallScreen={smallScreen}
      loading={loading}
      id={roleID || 0}
      message={message}
      onSubmit={onSubmit}
    />
  );
};
