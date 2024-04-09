import { useState } from "react";

import { deleteUserModal } from "@pages/privileges/outlets/users/config/deleteUser.config";

import { DeleteFormOptionsUI } from "./interface";

export interface IDataDeleteOption {
  id: string;
}

interface IDeleteFormOptionsProps<T extends IDataDeleteOption> {
  showComplete: boolean;
  data: T;
  modalConfig: typeof deleteUserModal;
}

export function DeleteFormOptions<T extends IDataDeleteOption>(
  props: IDeleteFormOptionsProps<T>
) {
  const { data, showComplete, modalConfig } = props;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleToggleModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <DeleteFormOptionsUI
      showActivateOptions={showDeleteModal}
      id={data.id}
      handleToggleModal={handleToggleModal}
      showComplete={showComplete}
      modalConfig={modalConfig}
    />
  );
}
