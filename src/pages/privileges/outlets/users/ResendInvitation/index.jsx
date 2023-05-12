import { useState } from "react";
import { ResendInvitationUI } from "./interface";

function ResendInvitation(props) {
  const { user } = props;
  const [showResendInvModal, setShowResendInvModal] = useState(false);
  const [showResendInvMessage, setShowResendInvMessage] = useState(false);

  const handleOpenModal = () => {
    setShowResendInvModal(true);
  };

  const handleCloseModal = () => {
    setShowResendInvModal(false);
  };

  const handleOpenMessage = () => {
    setShowResendInvMessage(true);
  };
  const handleClosenMessage = () => {
    setShowResendInvMessage(false);
  };

  const resendInvitationUser = () => {
    handleOpenMessage();
  };
  return (
    <ResendInvitationUI
      showResendInvModal={showResendInvModal}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      resendInvitationUser={resendInvitationUser}
      user={user}
      showResendInvMessage={showResendInvMessage}
      handleCloseMessage={handleClosenMessage}
    />
  );
}

export { ResendInvitation };
