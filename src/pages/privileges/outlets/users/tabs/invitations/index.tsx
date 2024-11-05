import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Table } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { getInvitations } from "@services/invitations/getInvitations";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { RenderMessage } from "@components/feedback/RenderMessage";

import {
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { actionsConfigInvitation } from "./config/dataInvitation";
import { IMessageState } from "../../types/forms.types";
import { deleteInvitationMessages } from "./DeleteInvitation/config/deleteInvitation.config";
import { IDeleteForMessage } from "../users/types";
import { LinparContext } from "@src/context/AppContext";

interface InvitationsTabProps {
  searchText: string;
}

function InvitationsTab(props: InvitationsTabProps) {
  const { searchText } = props;
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: "",
    successfulDiscard: false,
  });
  const [loading, setLoading] = useState(true);
  const [invitations, setInvitations] = useState<IInvitationsEntry[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 850px)");
  const { user } = useAuth0();
  const { linparData } = useContext(LinparContext);
  const linixInvitationsData = async () => {
    if (!user) return;
    if (invitations.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getInvitations(
          linparData.businessUnit.businessUnitPublicCode
        );
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
    const messageType = idDeleted.successfulDiscard
      ? deleteInvitationMessages.success
      : deleteInvitationMessages.failed;

    setMessage({
      visible: true,
      data: messageType,
    });
  }, [idDeleted]);

  const handleCloseMessage = () => {
    setMessage({
      visible: false,
    });

    const filterDiscardPublication = invitations.filter(
      (invitations) => invitations.invitationId !== idDeleted.id
    );
    idDeleted.successfulDiscard && setInvitations(filterDiscardPublication);
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
            setIsHovered,
            smallScreen,
            setIdDeleted
          )}
          breakpoints={invitationsTableBreakpoints}
          filter={searchText}
          modalTitle="Invitación"
        />
      )}
      {idDeleted && idDeleted.id && message.visible && (
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
