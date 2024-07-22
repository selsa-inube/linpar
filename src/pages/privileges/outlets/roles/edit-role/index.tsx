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
import { getRoles } from "@src/services/roles/getRoles";

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
  const [dataEditRoleLinixForm, setDataEditRoleLinixForm] =
    useState<IFormAddRole>({
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

  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const [selectedTab, setSelectedTab] = useState(
    stepsAddRol.generalInformation.label
  );

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const [linixRoles, setLinixRoles] = useState<Record<string, unknown>[]>([]);
  const [rolesEdit, setRolesEdit] = useState<IRol[]>([]);
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
  const generalInformationData = rolesEdit.find((data) => data.id === roleID);
  // const [editData, setEditData] = useState<IRol>({
  //   i_Activo: "Y",
  //   k_Rol: 0,
  //   k_Tipcon: "",
  //   n_Rol: "",
  //   n_Uso: "",
  //   k_Aplica: "",
  //   cuentasAuxiliaresPorRol: [],
  //   casosDeUsoPorRol: [],
  //   reglasDeNegocioPorRol: [],
  //   tareasCrediboardPorRol: [],
  //   tiposDeMovimientoContablePorRol: [],
  // });

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

  useEffect(() => {
    rolesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Promise.all([
      aplication(),
      typesOfMovements(),
      businessRulesFull(),
      crediboardsTasks(),
      rolesuseCases(),
    ]).then(() => {
      setLoading(true);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [k_Rol]);

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
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  const crediboardsTasks = () => {
    if (!user) return;
    if (crediboardTasks.length === 0) {
      setLoading(true);
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
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        });
    }
  };

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const editGeneral = generalInformationData;

  return (
    <EditRoleUI
      rolesEdit={editGeneral!}
      dataEditRoleLinixForm={dataEditRoleLinixForm}
      linixRoles={linixRoles}
      onTabChange={handleTabChange}
      selectedTab={selectedTab}
      dataTabs={Tabs}
      smallScreen={smallScreen}
      loading={loading}
      id={roleID || 0}
    />
  );
};
