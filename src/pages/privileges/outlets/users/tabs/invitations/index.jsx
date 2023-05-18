import { useState } from "react";
import { MdOutlineAssignmentTurnedIn, MdShortcut } from "react-icons/md";
import { Table } from "../../../../../../components/data/Table";
import { SectionMessage } from "../../../../../../components/feedback/SectionMessage";
import { invitationEntriesDataMock } from "../../../../../../mocks/apps/privileges/invitations.mock";
import {
  deleteInvitationUserMessageConfig,
  invitationBreakpointsConfig,
  invitationTitlesConfig,
} from "../../config/invitationsTable.config";
import { DeleteInvitation } from "./DeleteInvitation";

const initialMessageState = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "",
};

export default function InvitationsTab(props) {
  const { searchText } = props;
  const [message, setMessage] = useState(initialMessageState);
  const [invitations, setInvitations] = useState(invitationEntriesDataMock);

  const invitationActionsConfig = [
    {
      id: 1,
      actionName: "Complete",
      content: <MdOutlineAssignmentTurnedIn />,
      type: "secondary",
    },
    {
      id: 2,
      actionName: "Resend",
      content: <MdShortcut />,
      type: "primary",
    },
    {
      id: 3,
      actionName: "Delete",
      content: (entry) => (
        <DeleteInvitation invitation={entry} handleDelete={handleDelete} />
      ),
      type: "remove",
    },
  ];

  const handleDelete = (invitation) => {
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
      deleteInvitationUserMessageConfig[responseType];

    handleShowMessage(
      title,
      description(invitation.username),
      icon,
      appearance
    );
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

  const onCloseMessage = () => {
    setMessage(initialMessageState);
  };

  return (
    <>
      <Table
        titles={invitationTitlesConfig}
        entries={invitations}
        actions={invitationActionsConfig}
        breakPoints={invitationBreakpointsConfig}
        filter={searchText}
      />
      {message.show && (
        <SectionMessage
          title={message.title}
          description={message.description}
          icon={message.icon}
          appearance={message.appearance}
          duration={2000}
          closeSectionMessage={onCloseMessage}
        />
      )}
    </>
  );
}
