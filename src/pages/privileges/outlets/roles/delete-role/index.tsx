import { useState } from "react";

import { functionById } from "@src/mocks/utils/dataMock.service";

import { deleteRolModal } from "./config/deleteRol.config";
import { DeleteRoleUI } from "./interface";

interface IDeleteRoleProps {
  rol: string;
  handleDeleteRol: (props: functionById) => Promise<unknown>;
  deleteRolModal: typeof deleteRolModal;
}

export const DeleteRole = (props: IDeleteRoleProps) => {
  const { rol, handleDeleteRol, deleteRolModal } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DeleteRoleUI
      showModal={showModal}
      setShowModal={setShowModal}
      rol={rol}
      handleDeleteRol={handleDeleteRol}
      deleteRolModal={deleteRolModal}
      hover={isHovered}
      setHover={setIsHovered}
    />
  );
};
