import { useState } from "react";
import { ResendInvitationUI } from "./interface";
import { IInvitation } from "../types";

interface ResendInvitationProps {
  invitation: IInvitation[];
  handleResendInvitation: (invitation?: IInvitation[]) => void;
  showComplete: boolean;
}

function ResendInvitation(props: ResendInvitationProps) {
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
