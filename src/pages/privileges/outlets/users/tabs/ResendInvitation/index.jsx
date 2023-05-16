import { useState } from "react";
import { ResendInvitationUI } from "./interface";

function ResendInvitation(props) {
  const { user } = props;
  const [showResendInvModal, setShowResendInvModal] = useState(false);
  const [showResendInvMessage, setShowResendInvMessage] = useState(false);

  const toggleModal = () => {
    setShowResendInvModal(!showResendInvModal);
  };

  const toggleSectionMessage = () => {
    setShowResendInvMessage(!showResendInvMessage);
  };

  const resendInvitationUser = () => {
    toggleSectionMessage();
  };
  return (
    <ResendInvitationUI
      showResendInvModal={showResendInvModal}
      toggleModal={toggleModal}
      resendInvitationUser={resendInvitationUser}
      user={user}
      showResendInvMessage={showResendInvMessage}
      toggleSectionMessage={toggleSectionMessage}
    />
  );
}

export { ResendInvitation };
