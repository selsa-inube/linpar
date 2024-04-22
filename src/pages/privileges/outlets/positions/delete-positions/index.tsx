import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { deletePositionModal } from "./config/deletePositions.config";
import { DeletePositionUI } from "./interface";

interface IDeletePositionProps {
  linixPosition: string;
  handleDeletePosition: (props: functionById) => Promise<unknown>;
  deletePosition: typeof deletePositionModal;
}

export const DeletePosition = (props: IDeletePositionProps) => {
  const { linixPosition, deletePosition, handleDeletePosition } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnclick = async () => {
    await handleDeletePosition({
      key: "k_Grupo",
      nameDB: "linix-positions",
      identifier: linixPosition,
    });
    setShowModal(false);
  };

  return (
    <DeletePositionUI
      showModal={showModal}
      setShowModal={setShowModal}
      linixPosition={linixPosition}
      handleDeletePosition={handleOnclick}
      deletePosition={deletePosition}
      hover={isHovered}
      setHover={setIsHovered}
    />
  );
};
