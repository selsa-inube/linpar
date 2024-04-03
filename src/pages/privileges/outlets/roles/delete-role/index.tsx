import { useState } from "react";

import { deleteRolModal } from "./config/deleteRol.config";
import { DeleteRoleUI } from "./interface";

interface IDeleteRoleProps {
  rol: string;
  handleDeleteUser?: () => void;
  deleteRolModal: typeof deleteRolModal;
}

export const DeleteRole = (props: IDeleteRoleProps) => {
  const { rol, handleDeleteUser, deleteRolModal } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <DeleteRoleUI
      showModal={showModal}
      setShowModal={setShowModal}
      rol={rol}
      handleDeleteUser={handleDeleteUser}
      deleteRolModal={deleteRolModal}
    />
  );
};
