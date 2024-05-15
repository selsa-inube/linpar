import {
  Table,
  useMediaQuery,
  SectionMessage,
  Stack,
} from "@inube/design-system";
import { useEffect, useState } from "react";
import { EMessageType, IMessage } from "@src/types/messages.types";
import { EAppearance } from "@src/types/colors.types";
import { deleteItemData, getAll } from "@mocks/utils/dataMock.service";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IInvitationsEntry } from "@src/services/users/invitation.types";
import { resendInvitationMessages } from "../../config/resendInvitationUser.config";
import {
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { CompleteInvitationLink } from "./CompleteInvitationLink";
import { DeleteInvitation } from "./DeleteInvitation";
import { ResendInvitation } from "./ResendInvitation";
import { StyledMessageContainer } from "./styles";
import { deleteInvitationModal } from "./DeleteInvitation/config/deleteInvitation.config";

const initialMessageState: IMessage = {
  show: false,
  title: "",
  description: "",
  icon: <></>,
  appearance: "" as EAppearance,
};

interface InvitationsTabProps {
  searchText: string;
}

function InvitationsTab(props: InvitationsTabProps) {
  const { searchText } = props;
  const [message, setMessage] = useState(initialMessageState);
  const [loading, setLoading] = useState(true);
  const [invitations, setInvitations] = useState<IInvitationsEntry[]>([]);

  const smallScreen = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    getAll("linix-invitations")
      .then((data) => {
        if (data !== null) {
          setInvitations(data as IInvitationsEntry[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [invitations]);

  const invitationsTableActions = [
    {
      id: "1",
      actionName: "Completar",
      content: (invitation: IInvitationsEntry) => (
        <CompleteInvitationLink
          invitation={invitation}
          showComplete={smallScreen}
        />
      ),
      type: "gray",
    },
    {
      id: "2",
      actionName: "Reenviar",
      content: (invitation: IInvitationsEntry) => (
        <ResendInvitation
          invitation={invitation}
          handleResendInvitation={() => handleResendInvitation(invitation)}
          showComplete={smallScreen}
        />
      ),
      type: "primary",
    },
    {
      id: "3",
      actionName: "Eliminar",
      content: ({
        customerId,
        userName,
      }: {
        customerId: string;
        userName: string;
      }) => (
        <DeleteInvitation
          deleteInvitation={deleteInvitationModal}
          linixInvitation={customerId}
          userNameInvitation={userName}
          handleDeleteInvitation={deleteItemData}
        />
      ),
      type: "error",
    },
  ];

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
    const { title, description, icon, appearance } = message;
    setMessage({
      show: true,
      title,
      description,
      icon,
      appearance,
    });
  };

  const handleCloseMessage = () => {
    setMessage(initialMessageState);
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
          actions={invitationsTableActions}
          breakpoints={invitationsTableBreakpoints}
          filter={searchText}
          modalTitle="Invitación"
        />
      )}
      {message.show && (
        <StyledMessageContainer>
          <Stack justifyContent="flex-end" width="100%">
            <SectionMessage
              title={message.title}
              description={message.description}
              icon={message.icon}
              appearance={message.appearance}
              duration={4000}
              closeSectionMessage={handleCloseMessage}
            />
          </Stack>
        </StyledMessageContainer>
      )}
    </>
  );
}

export { InvitationsTab };
