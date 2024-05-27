import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { DeleteRoleUI } from "./interface";
import { deleteRolModal } from "../../roles/delete-role/config/deleteRol.config";

interface IDeleteRoleProps {
  deleteRolModal: typeof deleteRolModal;
  setIdDeleted: (show: string) => void;
  handleDeleteRol: (props: functionById) => Promise<unknown>;
  nameRol: string;
  linixPosition: string;
}

export const DeletePosition = (props: IDeleteRoleProps) => {
  const {
    deleteRolModal,
    handleDeleteRol,
    nameRol,
    linixPosition,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnclick = async () => {
    await handleDeleteRol({
      key: "k_Grupo",
      nameDB: "linix-positions",
      identifier: linixPosition,
    });
    setShowModal(false);
    setLoading(true);
    setIdDeleted(linixPosition);
  };

  return (
    <DeleteRoleUI
      deleteRolModal={deleteRolModal}
      handleDeleteRol={handleOnclick}
      hover={isHovered}
      loading={loading}
      nameRol={nameRol}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
