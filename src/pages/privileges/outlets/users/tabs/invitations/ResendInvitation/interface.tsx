import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button, Icon } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { resendInvitationModal } from "../../../config/resendInvitationUser.config";
import { IGeneralInformationEntry } from "../../../types/forms.types";

interface ResendInvitationUIProps {
  showResendInvModal: boolean;
  toggleModal: () => void;
  resendInvitationUser: () => void;
  invitation: IGeneralInformationEntry;
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
        <Icon
          appearance={"dark"}
          icon={<MdOutlineShortcut />}
          disabled={invitation.status === "Sent"}
          cursorHover
          onClick={toggleModal}
        />
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
