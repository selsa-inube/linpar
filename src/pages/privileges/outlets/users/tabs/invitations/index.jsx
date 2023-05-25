import { useState } from "react";
import { MdOutlineDelete, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Table } from "../../../../../../components/data/Table";
import { invitationEntriesDataMock } from "../../../../../../mocks/apps/privileges/invitations.mock";
import {
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";
import { ResendInvitation } from "./ResendInvitation";
import { resendInvitationMessages } from "../../../users/config/resendInvitationUser.config";
import { SectionMessage } from "../../../../../../components/feedback/SectionMessage";
import { CompleteInvitation } from "./complete-invitation";

const initialMessageState = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "",
};

export default function InvitationsTab(props) {
  const { searchText } = props;
  const [showResendInvMessage, setShowResendInvMessage] =
    useState(initialMessageState);
  const [invitations] = useState(invitationEntriesDataMock);

  const invitationsTableActions = [
    {
      id: 1,
      actionName: "Complete",
      content: (invitation) => <CompleteInvitation invitation={invitation} />,
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
      content: <MdOutlineDelete />,
      type: "remove",
    },
  ];

  const handleResendInvitation = (invitation) => {
    let messageType = "success";

    try {
      handleCloseResendMessage();
    } catch (error) {
      messageType = "failed";
    }

    const { title, description, icon, appearance } =
      resendInvitationMessages[messageType];

    resendInvitMessages(title, description(invitation), icon, appearance);
  };

  const resendInvitMessages = (title, description, icon, appearance) => {
    setShowResendInvMessage({
      show: true,
      title,
      description,
      icon,
      appearance,
    });
  };

  const handleCloseResendMessage = () => {
    setShowResendInvMessage(initialMessageState);
  };

  return (
    <>
      <Table
        titles={invitationsTableTitles}
        entries={invitations}
        actions={invitationsTableActions}
        breakPoints={invitationsTableBreakpoints}
        filter={searchText}
      />
      {showResendInvMessage.show && (
        <SectionMessage
          title={showResendInvMessage.title}
          description={showResendInvMessage.description}
          icon={showResendInvMessage.icon}
          appearance={showResendInvMessage.appearance}
          duration={2000}
          closeSectionMessage={handleCloseResendMessage}
        />
      )}
    </>
  );
}
