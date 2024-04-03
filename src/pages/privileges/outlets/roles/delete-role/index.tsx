import { useState } from "react";

import { deleteRolModal } from "./config/deleteRol.config";
import { DeleteRoleUI } from "./interface";

interface IDeleteRoleProps {
  rol: string;
  handleDeleteRol?: () => void;
  deleteRolModal: typeof deleteRolModal;
}

export const DeleteRole = (props: IDeleteRoleProps) => {
  const { rol, handleDeleteRol, deleteRolModal } = props;

  const [showModal, setShowModal] = useState(false);

  return (
    <DeleteRoleUI
      showModal={showModal}
      setShowModal={setShowModal}
      rol={rol}
      handleDeleteRol={handleDeleteRol}
      deleteRolModal={deleteRolModal}
    />
  );
};
