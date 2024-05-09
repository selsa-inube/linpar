import {
  Table,
  useMediaQuery,
  SectionMessage,
  Stack,
} from "@inube/design-system";
import { useState } from "react";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { EMessageType, IMessage } from "@src/types/messages.types";
import { EAppearance } from "@src/types/colors.types";
import { IInvitationsEntry } from "@src/services/users/invitation.types";
import { resendInvitationMessages } from "../../config/resendInvitationUser.config";
import {
  deleteInvitationMessagesConfig,
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { CompleteInvitationLink } from "./CompleteInvitationLink";
import { DeleteInvitation } from "./DeleteInvitation";
import { ResendInvitation } from "./ResendInvitation";
import { StyledMessageContainer } from "./styles";

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
  const [invitations, setInvitations] = useState(invitationEntriesDataMock);

  const smallScreen = useMediaQuery("(max-width: 850px)");

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
      content: (invitation: IInvitationsEntry) => (
        <DeleteInvitation
          handleDelete={() => deleteInvitation(invitation)}
          showComplete={smallScreen}
        />
      ),
      type: "error",
    },
  ];

  const deleteInvitation = (invitation: IInvitationsEntry) => {
    // Create fetch request here...
    let responseType = EMessageType.SUCCESS;

    try {
      setInvitations((prevInvitations) =>
        prevInvitations.filter(
          (oldInvitation) =>
            invitation.invitationId !== oldInvitation.invitationId
        )
      );
    } catch (error) {
      responseType = EMessageType.FAILED;
    }

    const { icon, title, description, appearance } =
      deleteInvitationMessagesConfig[responseType];

    handleShowMessage({
      title,
      description: description(invitation.userName),
      icon,
      appearance,
    });
  };

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
      <Table
        id="portal"
        titles={invitationsTableTitles}
        entries={invitations}
        actions={invitationsTableActions}
        breakpoints={invitationsTableBreakpoints}
        filter={searchText}
        modalTitle="Invitación"
      />
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
