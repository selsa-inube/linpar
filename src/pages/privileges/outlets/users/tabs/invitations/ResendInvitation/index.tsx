import { useContext, useState } from "react";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { ResendInvitationUI } from "./interface";
import { resendNotification } from "@src/services/invitations/resendNotification";
import { IMessageState } from "../../../types/forms.types";
import { EMessageType, IMessage } from "@src/types/messages.types";
import { resendInvitationMessages } from "../../../config/resendInvitationUser.config";
import { LinparContext } from "@src/context/AppContext";

interface ResendInvitationProps {
  invitation: IInvitationsEntry;
  showComplete: boolean;
}

function ResendInvitation(props: ResendInvitationProps) {
  const { invitation, showComplete } = props;
  const [showResendInvModal, setShowResendInvModal] = useState(false);
  const [isLoadingResend, setIsLoadingResend] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [resendInvitationData, setResendInvitationData] = useState<
    string | undefined
  >("");
  const { linparData } = useContext(LinparContext);

  const handleShowMessage = (message: IMessage) => {
    setMessage({
      visible: true,
      data: message,
    });
  };

  const resendInvitation = async () => {
    setIsLoadingResend(true);
    let messageType = EMessageType.SUCCESS;
    try {
      const newResend = await resendNotification(
        invitation?.invitationId || "",
        linparData.businessUnit.businessUnitPublicCode
      );
      setResendInvitationData(newResend);
    } catch (error) {
      console.info(error);
      messageType = EMessageType.FAILED;
    } finally {
      setIsLoadingResend(false);
    }

    const { title, description, icon, appearance } =
      resendInvitationMessages[messageType];

    handleShowMessage({
      title,
      description: description(invitation),
      icon,
      appearance,
    });
  };

  const toggleModal = () => {
    setShowResendInvModal(!showResendInvModal);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <ResendInvitationUI
      showResendInvModal={showResendInvModal}
      resendInvitationData={resendInvitationData}
      toggleModal={toggleModal}
      invitation={invitation}
      showComplete={showComplete}
      resendInvitation={resendInvitation}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      isLoadingResend={isLoadingResend}
    />
  );
}

export { ResendInvitation };
export type { ResendInvitationProps };
