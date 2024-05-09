import { useState } from "react";

import { ActivateFormOptionsUI } from "./interface";
import { activateUserModal } from "../../users/config/activateUser.config";

export interface IDataActivateOption {
  k_Usuari: string;
  i_Activo: string;
}

interface IActivateFormOptionsProps<T extends IDataActivateOption> {
  handleActivate: () => void;
  showComplete: boolean;
  data: T;
  activateModalConfig: typeof activateUserModal;
}

export function ActivateFormOptions<T extends IDataActivateOption>(
  props: IActivateFormOptionsProps<T>
) {
  const { data, handleActivate, showComplete, activateModalConfig } = props;
  const [showActivateUserModal, setShowActivateUserModal] = useState(false);

  const handleToggleModal = () => {
    setShowActivateUserModal(!showActivateUserModal);
  };

  return (
    <ActivateFormOptionsUI
      i_Activo={data.i_Activo}
      showActivateOptions={showActivateUserModal}
      k_Usuari={data.k_Usuari}
      handleToggleModal={handleToggleModal}
      handleActivateOptions={handleActivate}
      showComplete={showComplete}
      activateModalConfig={activateModalConfig}
    />
  );
}
