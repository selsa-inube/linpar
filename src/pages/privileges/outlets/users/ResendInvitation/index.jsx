import { useState } from "react";
import { ResendInvitationUI } from "./interface";

function ResendInvitation(props) {
  const { user } = props;
  const [showResendInvModal, setShowResendInvModal] = useState(false);
  const [showResendInvMessage, setShowResendInvMessage] = useState(false);

  const handleToggleModal = () => {
    setShowResendInvModal(!showResendInvModal);
  };

  const handleToggleMessage = () => {
    setShowResendInvMessage(!showResendInvMessage);
  };

  const resendInvitationUser = () => {
    handleToggleMessage();
  };
  return (
    <ResendInvitationUI
      showResendInvModal={showResendInvModal}
      handleToggleModal={handleToggleModal}
      resendInvitationUser={resendInvitationUser}
      user={user}
      showResendInvMessage={showResendInvMessage}
      handleToggleMessage={handleToggleMessage}
    />
  );
}

export { ResendInvitation };
