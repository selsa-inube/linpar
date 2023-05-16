import { StyledIconResend } from "./styles";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import {
  resendInvitationModal,
  resendInvitationMessages,
} from "../../config/resendInvitationUser.config";
import { DecisionModal } from "../../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../../components/feedback/SectionMessage";

function renderMessages(user, toggleSectionMessage, showResendInvMessage) {
  let messageType;
  if (showResendInvMessage) {
    messageType = "success";
  } else {
    messageType = "failed";
  }

  const { title, description, icon, appearance } =
    resendInvitationMessages[messageType];
  return (
    <SectionMessage
      title={title}
      description={description(user)}
      icon={icon}
      appearance={appearance}
      duration={2500}
      closeSectionMessage={toggleSectionMessage}
    />
  );
}

function ResendInvitationUI(props) {
  const {
    showResendInvModal,
    toggleModal,
    resendInvitationUser,
    user,
    showResendInvMessage,
    toggleSectionMessage,
  } = props;
  const { title, description, textAction, appearance } = resendInvitationModal;

  return (
    <>
      <StyledIconResend>
        <MdOutlineLibraryAddCheck onClick={toggleModal} />
      </StyledIconResend>

      {showResendInvModal && (
        <DecisionModal
          title={title}
          description={description(user)}
          actionText={textAction}
          appearance={appearance}
          closeModal={toggleModal}
          handleClick={resendInvitationUser}
        />
      )}

      {showResendInvMessage &&
        renderMessages(user, toggleSectionMessage, showResendInvMessage)}
    </>
  );
}

export { ResendInvitationUI };
