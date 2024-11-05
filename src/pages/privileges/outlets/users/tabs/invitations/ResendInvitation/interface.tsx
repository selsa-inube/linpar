import { useState } from "react";
import { MdOutlineShortcut } from "react-icons/md";
import { Button } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { Icon } from "@inubekit/icon";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { resendInvitationModal } from "../../../config/resendInvitationUser.config";
import { IMessageState } from "../../../types/forms.types";

interface ResendInvitationUIProps {
  showResendInvModal: boolean;
  toggleModal: () => void;
  invitation: IInvitationsEntry;
  showComplete: boolean;
  resendInvitation: (invitationId: IInvitationsEntry) => void;
  message: IMessageState;
  resendInvitationData: string | undefined;
  isLoadingResend: boolean;
  onCloseSectionMessage: () => void;
}

function ResendInvitationUI(props: ResendInvitationUIProps) {
  const {
    showResendInvModal,
    resendInvitation,
    toggleModal,
    onCloseSectionMessage,
    isLoadingResend,
    invitation,
    message,
    showComplete,
  } = props;
  const { title, description, textAction, appearance } = resendInvitationModal;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineShortcut size={18} />}
          onClick={toggleModal}
          variant="none"
          appearance="gray"
          spacing="compact"
          loading={isLoadingResend}
        >
          Reenviar
        </Button>
      ) : (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon
            appearance={isHovered ? "primary" : "dark"}
            parentHover={isHovered ? true : false}
            icon={<MdOutlineShortcut />}
            disabled={invitation.status === "Sent"}
            cursorHover
            onClick={toggleModal}
          />
        </div>
      )}

      {showResendInvModal && (
        <DecisionModal
          title={title}
          description={description(invitation)}
          actionText={textAction}
          appearance={appearance}
          closeModal={toggleModal}
          handleClick={() => resendInvitation(invitation)}
        />
      )}
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={onCloseSectionMessage}
          onMessageClosed={() => {}}
        />
      )}
    </>
  );
}

export { ResendInvitationUI };
