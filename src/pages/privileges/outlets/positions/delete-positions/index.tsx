import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { DeletePositionUI } from "./interface";
import { deletePositionModal } from "./config/deletePositions.config";

interface IDeletePositionProps {
  deletePositionModal: typeof deletePositionModal;
  setIdDeleted: (show: string) => void;
  handleDeletePosition: (props: functionById) => Promise<unknown>;
  namePosition: string;
  linixPosition: string;
}

export const DeletePosition = (props: IDeletePositionProps) => {
  const {
    deletePositionModal,
    handleDeletePosition,
    namePosition,
    linixPosition,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnclick = async () => {
    await handleDeletePosition({
      key: "k_Grupo",
      nameDB: "linix-positions",
      identifier: linixPosition,
    });
    setShowModal(false);
    setLoading(true);
    setIdDeleted(linixPosition);
  };

  return (
    <DeletePositionUI
      deletePositionModal={deletePositionModal}
      handleDeletePosition={handleOnclick}
      hover={isHovered}
      loading={loading}
      namePosition={namePosition}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
