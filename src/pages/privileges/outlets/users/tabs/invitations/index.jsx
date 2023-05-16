import { useState } from "react";
import { Table } from "../../../../../../components/data/Table";
import { SectionMessage } from "../../../../../../components/feedback/SectionMessage";
import { invitationEntriesDataMock } from "../../../../../../mocks/apps/privileges/invitations.mock";
import {
  deleteInvitationUserMessageConfig,
  invitationActionsConfig,
  invitationBreakpointsConfig,
  invitationTitlesConfig,
} from "../../config/invitationsTable.config";

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

  const handleChangeInvitation = (invitation, action) => {
    let responseType = "success";
    try {
      switch (action) {
        case "removeInvitation":
          setInvitations((prevInvitations) =>
            prevInvitations.filter(
              (oldInvitation) => invitation.id !== oldInvitation.id
            )
          );
          break;
        default:
          break;
      }
    } catch (error) {
      responseType = "failed";
    }

    const { icon, title, description, appearance } =
      deleteInvitationUserMessageConfig[responseType];

    setMessage({
      show: true,
      title,
      description: description(invitation.username),
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
        onTriggerAction={handleChangeInvitation}
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
