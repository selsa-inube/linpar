import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";

import { deletePositionModal } from "./config/deletePositions.config";

interface DeletePositionUIProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  linixPosition: string;
  handleDeletePosition: () => void;
  deletePosition: typeof deletePositionModal;
  hover: boolean;
  setHover: (hover: boolean) => void;
}

export const DeletePositionUI = (props: DeletePositionUIProps) => {
  const {
    showModal,
    setShowModal,
    linixPosition,
    handleDeletePosition,
    deletePosition,
    hover,
    setHover,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deletePosition[messageType!];

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
          description={description(linixPosition)}
          actionText={actionText}
          appearance={appearance}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeletePosition}
        />
      )}
    </>
  );
};
