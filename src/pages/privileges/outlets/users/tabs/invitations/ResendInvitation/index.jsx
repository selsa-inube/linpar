import { useState } from "react";
import { ResendInvitationUI } from "./interface";

function ResendInvitation(props) {
  const { user, handleResendInvitation } = props;
  const [showResendInvModal, setShowResendInvModal] = useState(false);

  const toggleModal = () => {
    setShowResendInvModal(!showResendInvModal);
  };

  const resendInvitationUser = () => {
    handleResendInvitation(user);
  };
  return (
    <ResendInvitationUI
      showResendInvModal={showResendInvModal}
      toggleModal={toggleModal}
      resendInvitationUser={resendInvitationUser}
      user={user}
    />
  );
}

export { ResendInvitation };
