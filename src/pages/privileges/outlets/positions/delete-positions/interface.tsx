import { MdOutlineDelete } from "react-icons/md";

import { Icon } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deletePositionModal } from "./config/deletePositions.config";

interface DeletePositionUIProps {
  deletePositionModal: typeof deletePositionModal;
  handleDeletePosition: () => void;
  hover: boolean;
  loading: boolean;
  namePosition: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeletePositionUI = (props: DeletePositionUIProps) => {
  const {
    deletePositionModal,
    handleDeletePosition,
    hover,
    loading,
    namePosition,
    setHover,
    setShowModal,
    showModal,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deletePositionModal[messageType!];

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Icon
          icon={<MdOutlineDelete />}
          onClick={() => setShowModal(true)}
          appearance={hover ? "primary" : "dark"}
          cursorHover
        />
      </div>
      {showModal && (
        <DecisionModal
          title={title}
          description={description(namePosition)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeletePosition}
        />
      )}
    </>
  );
};
