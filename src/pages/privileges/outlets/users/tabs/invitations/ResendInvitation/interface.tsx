import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button, Icon } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { resendInvitationModal } from "../../../config/resendInvitationUser.config";
import { useState } from "react";
import { IInvitationsEntry } from "@src/services/users/invitation.types";

interface ResendInvitationUIProps {
  showResendInvModal: boolean;
  toggleModal: () => void;
  resendInvitationUser: () => void;
  invitation: IInvitationsEntry;
  showComplete: boolean;
}

function ResendInvitationUI(props: ResendInvitationUIProps) {
  const {
    showResendInvModal,
    toggleModal,
    resendInvitationUser,
    invitation,
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
          handleClick={resendInvitationUser}
        />
      )}
    </>
  );
}

export { ResendInvitationUI };
