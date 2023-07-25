import { useState } from "react";
import { ResendInvitationUI } from "./interface";
import { IGeneralInformationEntry } from "../../../types/forms.types";

interface ResendInvitationProps {
  invitation: IGeneralInformationEntry;
  handleResendInvitation: () => void;
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
export type { ResendInvitationProps };
