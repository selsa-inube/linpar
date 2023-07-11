import { useState } from "react";
import { ResendInvitationUI } from "./interface";

function ResendInvitation(props) {
  const { invitation, handleResendInvitation, showComplete } = props;
  const [showResendInvModal, setShowResendInvModal] = useState(false);

  const toggleModal = () => {
    setShowResendInvModal(!showResendInvModal);
  };

  const resendInvitationUser = () => {
    handleResendInvitation();
  };
  return (
    <ResendInvitationUI
      showResendInvModal={showResendInvModal}
      toggleModal={toggleModal}
      resendInvitationUser={resendInvitationUser}
      invitation={invitation}
      showComplete={showComplete}
    />
  );
}

export { ResendInvitation };
