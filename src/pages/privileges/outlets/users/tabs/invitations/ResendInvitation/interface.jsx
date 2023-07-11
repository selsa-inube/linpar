import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { resendInvitationModal } from "../../../config/resendInvitationUser.config";
import { StyledIconResend } from "./styles";

function ResendInvitationUI(props) {
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
          handleClick={toggleModal}
          variant="none"
          appearance="secondary"
          spacing="compact"
        >
          Reenviar
        </Button>
      ) : (
        <StyledIconResend>
          <MdOutlineShortcut onClick={toggleModal} />
        </StyledIconResend>
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
