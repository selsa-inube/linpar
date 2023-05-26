import { StyledIconResend } from "./styles";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { resendInvitationModal } from "../../../config/resendInvitationUser.config";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";

function ResendInvitationUI(props) {
  const { showResendInvModal, toggleModal, resendInvitationUser, invitation } =
    props;
  const { title, description, textAction, appearance } = resendInvitationModal;

  return (
    <>
      <StyledIconResend>
        <MdOutlineLibraryAddCheck onClick={toggleModal} />
      </StyledIconResend>

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
