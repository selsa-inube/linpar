import { MdOutlineDelete } from "react-icons/md";
import { Icon, Stack } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "../../../types/forms.types";
import { deleteInvitationModal } from "./config/deleteInvitation.config";

interface DeleteInvitationUIProps {
  deleteInvitation: typeof deleteInvitationModal;
  hover: boolean;
  userNameInvitation: string;
  loading: boolean;
  message: IMessageState;
  showModal: boolean;
  handleCloseSectionMessage: () => void;
  handleRemoveInvitation: () => void;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
}

function DeleteInvitationUI(props: DeleteInvitationUIProps) {
  const {
    deleteInvitation,
    hover,
    userNameInvitation,
    loading,
    message,
    showModal,
    handleCloseSectionMessage,
    handleRemoveInvitation,
    setHover,
    setShowModal,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteInvitation[messageType];

  return (
    <>
      <Stack
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Icon
          icon={<MdOutlineDelete />}
          onClick={() => setShowModal(true)}
          appearance={hover ? "primary" : "dark"}
          cursorHover
        />
      </Stack>

      {showModal && (
        <DecisionModal
          title={title}
          description={description(userNameInvitation)}
          loading={loading}
          actionText={actionText}
          closeModal={() => setShowModal(false)}
          handleClick={handleRemoveInvitation}
          appearance={appearance}
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
}

export { DeleteInvitationUI };
