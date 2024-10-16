import { useContext, useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";
import { LinparContext } from "@context/AppContext";
import { deleteRolModal } from "./config/deleteRol.config";
import { DeleteRoleUI } from "./interface";

import { IDeleteForMessage } from "../types";
import { deleteRol } from "./utils";

interface IDeleteRoleProps {
  deleteRolModal: typeof deleteRolModal;
  setIdDeleted: (show: IDeleteForMessage) => void;
  handleDeleteRol: (props: functionById) => Promise<unknown>;
  nameRol: string;
  rol: number;
}

export const DeleteRole = (props: IDeleteRoleProps) => {
  const { deleteRolModal, nameRol, rol, setIdDeleted } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { linparData } = useContext(LinparContext);
  const handleDelete = () => {
    setLoading(true);
    const data = deleteRol(
      rol,
      nameRol,
      linparData.businessUnit.businessUnitPublicCode
    );
    data
      .then(() => {
        setIdDeleted({
          id: rol,
          successfulDiscard: true,
        });
      })
      .catch((error) => {
        console.error(error);
        setIdDeleted({
          id: rol,
          successfulDiscard: false,
        });
      });

    setLoading(false);
    setShowModal(false);
  };

  return (
    <DeleteRoleUI
      deleteRolModal={deleteRolModal}
      handleDeleteRol={handleDelete}
      hover={isHovered}
      loading={loading}
      nameRol={nameRol}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
