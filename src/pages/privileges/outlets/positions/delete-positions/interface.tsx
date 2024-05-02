import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";

import { deletePositionModal } from "./config/deletePositions.config";
import { RenderMessage } from "@src/components/feedback/RenderMessage";
import { IMessageState } from "../../users/types/forms.types";

interface DeletePositionUIProps {
  showModal: boolean;
  linixPosition: string;
  deletePosition: typeof deletePositionModal;
  hover: boolean;
  message: IMessageState;
  loading: boolean;
  setShowModal: (show: boolean) => void;
  handleDeletePosition: () => void;
  setHover: (hover: boolean) => void;
  handleCloseSectionMessage: () => void;
}

export const DeletePositionUI = (props: DeletePositionUIProps) => {
  const {
    showModal,
    linixPosition,
    deletePosition,
    hover,
    message,
    loading,
    setShowModal,
    handleDeletePosition,
    setHover,
    handleCloseSectionMessage,
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
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeletePosition}
        />
      )}
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleCloseSectionMessage}
        />
      )}
    </>
  );
};
