import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Table } from "@inube/design-system";
import { useMediaQuery } from "@inube/design-system";
import { EMessageType, IMessage } from "@src/types/messages.types";
import { getInvitations } from "@services/invitations/getInvitations";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { RenderMessage } from "@components/feedback/RenderMessage";

import {
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { resendInvitationMessages } from "../../config/resendInvitationUser.config";
import { actionsConfigInvitation } from "./config/dataInvitation";

import { IMessageState } from "../../types/forms.types";
import { deleteInvitationMessages } from "./DeleteInvitation/config/deleteInvitation.config";

interface InvitationsTabProps {
  searchText: string;
}

function InvitationsTab(props: InvitationsTabProps) {
  const { searchText } = props;
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [idDeleted, setIdDeleted] = useState("");
  const [loading, setLoading] = useState(true);
  const [invitations, setInvitations] = useState<IInvitationsEntry[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 850px)");
  const { user } = useAuth0();
  const linixInvitationsData = async () => {
    if (!user) return;
    if (invitations.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getInvitations();
        setInvitations(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixInvitationsData();
  }, [user]);

  useEffect(() => {
    const filterRecordRemoved = invitations.filter(
      (invitations) => invitations.customerId !== idDeleted
    );
    filterRecordRemoved &&
      setMessage({
        visible: true,
        data: deleteInvitationMessages.success,
      });
  }, [idDeleted]);

  const handleResendInvitation = (invitation: IInvitationsEntry) => {
    let messageType = EMessageType.SUCCESS;

    try {
      handleCloseMessage();
    } catch (error) {
      messageType = EMessageType.FAILED;
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

  const handleShowMessage = (message: IMessage) => {
    setMessage({
      visible: true,
      data: message,
    });
  };

  const handleCloseMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <Table
          id="portal"
          titles={invitationsTableTitles}
          entries={invitations}
          actions={actionsConfigInvitation(
            isHovered,
            handleResendInvitation,
            setIsHovered,
            smallScreen,
            setIdDeleted
          )}
          breakpoints={invitationsTableBreakpoints}
          filter={searchText}
          modalTitle="Invitación"
        />
      )}
      {idDeleted && message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseMessage}
          onMessageClosed={handleCloseMessage}
        />
      )}
    </>
  );
}

export { InvitationsTab };
