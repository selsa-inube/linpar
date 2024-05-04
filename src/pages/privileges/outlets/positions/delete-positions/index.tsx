import { useState } from "react";
import { functionById } from "@mocks/utils/dataMock.service";
import { deletePositionModal } from "./config/deletePositions.config";
import { DeletePositionUI } from "./interface";
import { IMessageState } from "../../users/types/forms.types";
import { generalMessage } from "./config/messages.config";
interface IDeletePositionProps {
  linixPosition: string;
  deletePosition: typeof deletePositionModal;
  handleDeletePosition: (props: functionById) => Promise<unknown>;
}

export const DeletePosition = (props: IDeletePositionProps) => {
  const { linixPosition, deletePosition, handleDeletePosition } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const handleOnclick = async () => {
    await handleDeletePosition({
      key: "k_Grupo",
      nameDB: "linix-positions",
      identifier: linixPosition,
    });
    setShowModal(false);
    setLoading(true);
    setMessage({
      visible: true,
      data: generalMessage.success,
    });
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <DeletePositionUI
      showModal={showModal}
      linixPosition={linixPosition}
      deletePosition={deletePosition}
      hover={isHovered}
      message={message}
      loading={loading}
      setShowModal={setShowModal}
      setHover={setIsHovered}
      handleDeletePosition={handleOnclick}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
};
