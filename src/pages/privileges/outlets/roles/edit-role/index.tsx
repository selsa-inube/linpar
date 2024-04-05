import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";

import { getData } from "@src/mocks/utils/dataMock.service";

import { stepsAddRol } from "../add-role/config/addRol.config";
import { EditRoleUI } from "./interface";
import { IRol } from "../types";

const Tabs = Object.values(stepsAddRol)
  .filter((item) => item.label !== "Verificación")
  .map((stepAddRole) => ({
    id: stepAddRole.label,
    label: stepAddRole.label,
    isDisabled: false,
  }));

export const EditRole = () => {
  const { rol_id } = useParams();

  const [loading, setLoading] = useState(true);

  const [selectedTab, setSelectedTab] = useState(
    stepsAddRol.generalInformation.label
  );

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const [editData, setEditData] = useState<IRol>({
    i_Activo: "Y",
    k_Rol: "",
    k_Tipcon: "",
    n_Rol: "",
    n_Uso: "",
    cuentasAuxiliaresPorRol: [],
    casosDeUsoPorRol: [],
    reglasDeNegocioPorRol: [],
    tareasCrediboardPorRol: [],
    tiposDeMovimientoContablePorRol: [],
  });

  useEffect(() => {
    setLoading(true);

    getData("linix-roles")
      .then((data) => {
        if (Array.isArray(data) && data !== null && data !== undefined) {
          const rol: IRol = data.find((itemRol) => itemRol.k_Rol === rol_id);
          setEditData(rol);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [rol_id]);

  useEffect(() => {
    getData("documents")
      .then((documentsFetch) => {
        if (
          Array.isArray(documentsFetch) &&
          documentsFetch !== null &&
          documentsFetch !== undefined
        ) {
          const documents = documentsFetch.map((document) => ({
            k_Tipmov: document.NOMBRE,
            k_Rol: document.CODIGO,
          }));
          setEditData((prevData) => ({
            ...prevData,
            tiposDeMovimientoContablePorRol: documents,
          }));
        }
      })
      .catch((error) => {
        console.error(error.message);
      });

    getData("web-options")
      .then((linixRolesFetch) => {
        if (
          Array.isArray(linixRolesFetch) &&
          linixRolesFetch !== null &&
          linixRolesFetch !== undefined
        ) {
          const documents = linixRolesFetch.map((linixRolFetch) => ({
            k_Rol: linixRolFetch.k_opcion,
            tarea: linixRolFetch.Nombre_opcion,
          }));
          setEditData((prevData) => ({
            ...prevData,
            tareasCrediboardPorRol: documents,
          }));
        }
      })
      .catch((error) => {
        console.error(error.message);
      });

    getData("linix-use-cases").then((linixRolesFetch) => {
      if (
        Array.isArray(linixRolesFetch) &&
        linixRolesFetch !== null &&
        linixRolesFetch !== undefined
      ) {
        const documents = linixRolesFetch.map((linixRolFetch) => ({
          k_Rol: linixRolFetch.k_Usecase,
          k_Usecase: linixRolFetch.n_Usecase,
        }));
        setEditData((prevData) => ({
          ...prevData,
          casosDeUsoPorRol: documents,
        }));
      }
    });
  }, []);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const valuesGeneralInformation = {
    roleName: editData.k_Rol,
    description: editData.n_Uso,
    aplication: editData.k_Tipcon,
  };

  const valuesAncillaryAccounts = {
    officialSector: editData?.cuentasAuxiliaresPorRol?.[0]?.k_Codcta,
    commercialSector: editData?.cuentasAuxiliaresPorRol?.[0]?.k_Codcta,
    solidaritySector: "",
  };

  const valuesTransactionTypes = editData?.tiposDeMovimientoContablePorRol?.map(
    (transactionTypes) => ({
      id: transactionTypes.k_Rol,
      value: transactionTypes.k_Tipmov,
      isActive: false,
    })
  );

  /*  const valuesBusinessRules = editData?.tareasCrediboardPorRol?.map(
    (businessRol) => ({
      id: businessRol.k_Rol,
      value: businessRol.tarea,
      isActive: false,
    })
  );
 */
  const valuesCreditboardTasks = editData?.tareasCrediboardPorRol?.map(
    (creditboardTask) => ({
      id: creditboardTask.k_Rol,
      value: creditboardTask.tarea,
      isActive: false,
    })
  );

  const valuesUseCases = editData?.casosDeUsoPorRol?.map((useCase) => ({
    id: useCase.k_Rol,
    value: useCase.k_Usecase,
    isActive: false,
  }));

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

  return (
    <EditRoleUI
      data={valuesGeneralInformation}
      onTabChange={handleTabChange}
      selectedTab={selectedTab}
      dataTabs={Tabs}
      smallScreen={smallScreen}
      loading={loading}
      valuesAncillaryAccounts={valuesAncillaryAccounts}
      valuesTransactionTypes={valuesTransactionTypes}
      handleUpdateDataSwitchstep={handleUpdateDataSwitchstep}
      //valuesBusinessRules={valuesBusinessRules}
      valuesUseCases={valuesUseCases}
      valuesCreditboardTasks={valuesCreditboardTasks}
    />
  );
};
