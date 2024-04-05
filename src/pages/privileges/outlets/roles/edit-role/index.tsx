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
  });
  /* 
  useEffect(() => {
    getData("linix-roles")
      .then((data) => {
        if (Array.isArray(data) && data !== null && data !== undefined) {
          const rol: IRol = data.find((itemRol) => itemRol.k_Rol === rol_id);
          setEditData((prev) => ({ ...prev, ...rol }));
        }
      })
      .catch((error) => {
        console.info(error.message);
      });
  }, [rol_id]);
 */

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

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  console.log(editData, "data que se envia para renderizar");

  const valuesGeneralInformation = {
    roleName: editData.k_Rol,
    description: editData.n_Uso,
    aplication: editData.k_Tipcon,
  };

  console.log(valuesGeneralInformation, "valors para general informacin");

  return (
    <EditRoleUI
      data={valuesGeneralInformation}
      onTabChange={handleTabChange}
      selectedTab={selectedTab}
      dataTabs={Tabs}
      smallScreen={smallScreen}
      loading={loading}
      /*  
      handleTabChange={handleTabChange}
      editData={editData}
      handleSubmit={handleSubmit}
      controlModal={controlModal}
      handleDataChange={handleDataChange}
      handleCloseModal={handleCloseModal}
      handleContinueTab={handleContinueTab} */
    />
  );
};
