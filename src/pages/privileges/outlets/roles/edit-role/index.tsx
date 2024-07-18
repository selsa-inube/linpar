import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";
import { useAuth0 } from "@auth0/auth0-react";
import { getBusinessRulesByRoleFormats } from "@services/roles/businessRulesByRole";
import { getCreditboardTasksByRole } from "@src/services/roles/creditboardTasksByRole";
import { getUseCaseByRole } from "@services/roles/useCasesByRole";
import { getAplicationRoles } from "@services/roles/aplicationRoles";
import { getRolFormats } from "@services/roles/ tipoDeMovimientoPorRol";
import { stepsAddRol } from "../add-role/config/addRol.config";
import { EditRoleUI } from "./interface";
import { IFormAddRole, IRol } from "../types";
import { dataToAssignmentFormEntry } from "../../linixUseCase/adding-linix-use-case";
import { initialValuesAddRol } from "../add-role/config/initialValues";

const Tabs = Object.values(stepsAddRol)
  .filter((item) => item.label !== "Verificación")
  .map((stepAddRole) => ({
    id: stepAddRole.label,
    label: stepAddRole.label,
    isDisabled: false,
  }));

export const EditRole = () => {
  const { k_Rol } = useParams();

  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const [selectedTab, setSelectedTab] = useState(
    stepsAddRol.generalInformation.label
  );

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const [linixRoles, setLinixRoles] = useState<Record<string, unknown>[]>([]);
  const [crediboardTasks, setCrediboardTask] = useState<
    Record<string, unknown>[]
  >([]);

  const [businessRules, setBusinessRules] = useState<Record<string, unknown>[]>(
    []
  );
  const [useCases, setUseCases] = useState<Record<string, unknown>[]>([]);
  const [transactionTypes, setTypesOfmovement] = useState<
    Record<string, unknown>[]
  >([]);

  const [dataEditRoleLinixForm, setDataEditRoleLinixForm] =
    useState<IFormAddRole>({
      generalInformation: {
        isValid: true,
        values: {
          roleName:
            initialValuesAddRol.generalInformation.values.roleName.trim(),
          description:
            initialValuesAddRol.generalInformation.values.description.trim(),
          application:
            initialValuesAddRol.generalInformation.values.application.trim(),
          applicationId:
            initialValuesAddRol.generalInformation.values.applicationId.trim(),
        },
      },
      ancillaryAccounts: {
        isValid: false,
        values: {
          officialSector:
            initialValuesAddRol.ancillaryAccounts.values.officialSector.trim(),
          commercialSector:
            initialValuesAddRol.ancillaryAccounts.values.commercialSector.trim(),
          solidaritySector:
            initialValuesAddRol.ancillaryAccounts.values.solidaritySector.trim(),
        },
      },
      transactionTypes: {
        isValid: false,
        values: [],
      },
      businessRules: {
        values: [],
      },
      crediboardTasks: {
        values: [],
      },
      useCases: {
        values: [],
      },
    });
  const [editData, setEditData] = useState<IRol>({
    i_Activo: "Y",
    k_Rol: 0,
    k_Tipcon: "",
    n_Rol: "",
    n_Uso: "",
    k_Aplica: "",
    cuentasAuxiliaresPorRol: [],
    casosDeUsoPorRol: [],
    reglasDeNegocioPorRol: [],
    tareasCrediboardPorRol: [],
    tiposDeMovimientoContablePorRol: [],
  });

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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const typesOfMovements = () => {
    if (!user) return;
    if (transactionTypes.length === 0) {
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
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const businessRulesFull = () => {
    if (!user) return;
    if (businessRules.length === 0) {
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
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const crediboardsTasks = () => {
    if (!user) return;
    if (crediboardTasks.length === 0) {
      getCreditboardTasksByRole(k_Rol || "1")
        .then((data) => {
          if (data !== null) {
            setCrediboardTask(data as Record<string, unknown>[]);
            setDataEditRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              crediboardTasks: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "id",
                  valueLabel: "value",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const rolesuseCases = () => {
    if (!user) return;
    if (useCases.length === 0) {
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
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    setLoading(true);

    Promise.all([
      aplication(),
      typesOfMovements(),
      businessRulesFull(),
      crediboardsTasks(),
      rolesuseCases(),
    ]).then(() => {
      setLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [k_Rol]);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const valuesGeneralInformation = {
    roleName: editData.n_Rol,
    description: editData.n_Uso,
    applicationId: editData.k_Aplica,
  };

  const valuesAncillaryAccounts = {
    officialSector: editData?.cuentasAuxiliaresPorRol?.[0]?.k_Codcta || "",
    commercialSector: editData?.cuentasAuxiliaresPorRol?.[1]?.k_Codcta || "",
    solidaritySector: editData?.cuentasAuxiliaresPorRol?.[2]?.k_Codcta || "",
  };

  const handleUpdateDataSwitchstep = (values: IRol[]) => {
    const stepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.label === selectedTab
    )?.[0];

    if (stepKey) {
      setEditData((prevFormData) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  const roleCardData = editData && {
    code: (editData as { k_Rol: number }).k_Rol,
    username: (editData as { n_Rol: string }).n_Rol,
  };

  return (
    <EditRoleUI
      dataEditRoleLinixForm={dataEditRoleLinixForm}
      linixRoles={linixRoles}
      roleCardData={roleCardData}
      data={valuesGeneralInformation}
      onTabChange={handleTabChange}
      selectedTab={selectedTab}
      dataTabs={Tabs}
      editData={editData}
      smallScreen={smallScreen}
      loading={loading}
      k_Rol={k_Rol || "1"}
      valuesAncillaryAccounts={valuesAncillaryAccounts}
      handleUpdateDataSwitchstep={handleUpdateDataSwitchstep}
    />
  );
};
