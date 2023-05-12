import { StyledIconResend } from "./styles";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import {
  resendInvitationUserConfig,
  messageResendInvUserConfig,
} from "../config/resendInvitationUser.config";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function renderMessages(user, handleToggleMessage, showResendInvMessage) {
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
      description={description(user)}
      icon={icon}
      appearance={appearance}
      duration={2500}
      closeSectionMessage={handleToggleMessage}
    />
  );
}

function ResendInvitationUI(props) {
  const {
    showResendInvModal,
    handleToggleModal,
    resendInvitationUser,
    user,
    showResendInvMessage,
    handleToggleMessage,
  } = props;
  const { title, description, textAction, appearance } =
    resendInvitationUserConfig["invitation"];

  return (
    <>
      <StyledIconResend>
        <MdOutlineLibraryAddCheck onClick={handleToggleModal} />
      </StyledIconResend>

      {showResendInvModal && (
        <DecisionModal
          title={title}
          description={description(user)}
          actionText={textAction}
          appearance={appearance}
          closeModal={handleToggleModal}
          handleClick={resendInvitationUser}
        />
      )}

      {showResendInvMessage &&
        renderMessages(user, handleToggleMessage, showResendInvMessage)}
    </>
  );
}

export { ResendInvitationUI };
