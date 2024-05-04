import { useState } from "react";

import { updateActive } from "@mocks/utils/dataMock.service";

import { ActivateRoleUI } from "./interface";
import { activateUserModal } from "../../users/config/activateUser.config";

export interface IDataActivateOption {
  id: string;
  active: boolean;
}

interface IActivateRoleProps<T extends IDataActivateOption> {
  handleActivate: () => void;
  showComplete: boolean;
  data: T;
  activateModalConfig: typeof activateUserModal;
}

export function ActivateRole<T extends IDataActivateOption>(
  props: IActivateRoleProps<T>
) {
  const { data, showComplete, activateModalConfig } = props;
  const [showActivateRoleModal, setShowActivateRoleModal] = useState(false);

  const handleActivateDeactivateRole = async () => {
    const params = {
      key: "k_Rol",
      nameDB: "linix-roles",
      identifier: props.data.id,
      editData: { i_Activo: !props.data.active ? "Y" : "N" },
      toggleI_Activo: true,
    };

    try {
      await updateActive(params);
    } catch (error) {
      console.error("Error inesperado:", error);
    }

    setShowActivateRoleModal(false);
  };

  const handleToggleModal = () => {
    setShowActivateRoleModal(!showActivateRoleModal);
  };

  return (
    <ActivateRoleUI
      active={data.active}
      showActivateRole={showActivateRoleModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      handleActivateRole={handleActivateDeactivateRole}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
    />
  );
}
