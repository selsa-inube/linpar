import { useState } from "react";
import { deleteUserModal } from "../../users/config/deleteUser.config";
import { DeleteFormOptionsUI } from "./interface";

export interface IDataDeleteOption {
  id: string;
}

interface IDeleteFormOptionsProps<T extends IDataDeleteOption> {
  showComplete: boolean;
  data: T;
  linuxUseCaseModalConfig: typeof deleteUserModal;
}

export function DeleteFormOptions<T extends IDataDeleteOption>(
  props: IDeleteFormOptionsProps<T>
) {
  const { data, showComplete, linuxUseCaseModalConfig } = props;
  const [showDeletModal, setShowActivateModal] = useState(false);

  const handleToggleModal = () => {
    setShowActivateModal(!showDeletModal);
  };

  return (
    <DeleteFormOptionsUI
      showActivateOptions={showDeletModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      showComplete={showComplete}
      linuxUseCaseModalConfig={linuxUseCaseModalConfig}
    />
  );
}
