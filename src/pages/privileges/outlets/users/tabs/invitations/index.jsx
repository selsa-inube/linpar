import { useState } from "react";
import { Table } from "@components/data/Table";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";
import { resendInvitationMessages } from "../../../users/config/resendInvitationUser.config";
import {
  deleteInvitationMessagesConfig,
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { DeleteInvitation } from "./DeleteInvitation";
import { ResendInvitation } from "./ResendInvitation";
import { CompleteInvitationLink } from "./CompleteInvitationLink";

const initialMessageState = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "",
};

function InvitationsTab(props) {
  const { searchText } = props;
  const [message, setMessage] = useState(initialMessageState);
  const [invitations, setInvitations] = useState(invitationEntriesDataMock);

  const invitationsTableActions = [
    {
      id: 1,
      actionName: "Complete",
      content: (invitation) => (
        <CompleteInvitationLink invitation={invitation} />
      ),
      type: "secondary",
    },
    {
      id: 2,
      actionName: "Resend",
      content: (invitation) => (
        <ResendInvitation
          invitation={invitation}
          handleResendInvitation={() => handleResendInvitation(invitation)}
        />
      ),
      type: "primary",
    },
    {
      id: 3,
      actionName: "Delete",
      content: (invitation) => (
        <DeleteInvitation handleDelete={() => deleteInvitation(invitation)} />
      ),
      type: "remove",
    },
  ];

  const deleteInvitation = (invitation) => {
    // Create fetch request here...
    let responseType = "success";

    try {
      setInvitations((prevInvitations) =>
        prevInvitations.filter(
          (oldInvitation) => invitation.id !== oldInvitation.id
        )
      );
    } catch (error) {
      responseType = "failed";
    }

    const { icon, title, description, appearance } =
      deleteInvitationMessagesConfig[responseType];

    handleShowMessage(
      title,
      description(invitation.username),
      icon,
      appearance
    );
  };

  const handleResendInvitation = (invitation) => {
    let messageType = "success";

    try {
      handleCloseMessage();
    } catch (error) {
      messageType = "failed";
    }

    const { title, description, icon, appearance } =
      resendInvitationMessages[messageType];

    handleShowMessage(title, description(invitation), icon, appearance);
  };

  const handleShowMessage = (title, description, icon, appearance) => {
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
        titles={invitationsTableTitles}
        entries={invitations}
        actions={invitationsTableActions}
        breakPoints={invitationsTableBreakpoints}
        filter={searchText}
        modalTitle="Invitación"
      />
      {message.show && (
        <SectionMessage
          title={message.title}
          description={message.description}
          icon={message.icon}
          appearance={message.appearance}
          duration={2000}
          closeSectionMessage={handleCloseMessage}
        />
      )}
    </>
  );
}

export { InvitationsTab }
