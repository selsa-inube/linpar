import { StyledIconResend } from "./styles";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import {
  resendInvitationUserConfig,
  messageResendInvUserConfig,
} from "../config/resendInvitationUser.config";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function renderMessages(user, handleCloseMessage, showResendInvMessage) {
  let messageType;
  if (showResendInvMessage) {
    messageType = "success";
  } else {
    messageType = "failed";
  }

  const { title, description, icon, appearance } =
    messageResendInvUserConfig[messageType];
  return (
    <SectionMessage
      title={title}
      description={
        typeof description === "function" ? description(user) : description
      }
      icon={icon}
      appearance={appearance}
      duration={2500}
      closeSectionMessage={handleCloseMessage}
    />
  );
}

function ResendInvitationUI(props) {
  const {
    showResendInvModal,
    handleOpenModal,
    handleCloseModal,
    resendInvitationUser,
    user,
    showResendInvMessage,
    handleCloseMessage,
  } = props;
  const { title, description, textAction, appearance } =
    resendInvitationUserConfig["invitation"];

  return (
    <>
      <StyledIconResend>
        <MdOutlineLibraryAddCheck onClick={handleOpenModal} />
      </StyledIconResend>

      {showResendInvModal && (
        <DecisionModal
          title={title}
          description={description(user)}
          actionText={textAction}
          appearance={appearance}
          closeModal={handleCloseModal}
          handleClick={resendInvitationUser}
        />
      )}

      {showResendInvMessage &&
        renderMessages(user, handleCloseMessage, showResendInvMessage)}
    </>
  );
}

export { ResendInvitationUI };
