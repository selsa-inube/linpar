import { MdOutlineDelete } from "react-icons/md";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { Icon } from "@inubekit/icon";
import { deleteInvitationModal } from "./config/deleteInvitation.config";

interface DeleteLinixInvitationUIProps {
  deleteInvitationModal: typeof deleteInvitationModal;
  handleDeleteLinixInvitation: () => void;
  hover: boolean;
  loading: boolean;
  nameLinixInvitation: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeleteLinixInvitationUI = (
  props: DeleteLinixInvitationUIProps
) => {
  const {
    deleteInvitationModal,
    handleDeleteLinixInvitation,
    hover,
    loading,
    nameLinixInvitation,
    setHover,
    setShowModal,
    showModal,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteInvitationModal[messageType!];

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
          size="16px"
        />
      </div>
      {showModal && (
        <DecisionModal
          title={title}
          description={description(nameLinixInvitation)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteLinixInvitation}
        />
      )}
    </>
  );
};
