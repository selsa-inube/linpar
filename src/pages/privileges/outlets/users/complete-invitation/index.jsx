import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";
import { useParams } from "react-router-dom";
import { CompleteInvitationUI } from "./interface";

function CompleteInvitation() {
  const { invitation_id } = useParams();

  function getInvitationInformation() {
    const invitationId = parseInt(invitation_id);
    return invitationEntriesDataMock.find(
      (invitation) => invitation.id === invitationId
    );
  }

  const invitation = getInvitationInformation();

  return <CompleteInvitationUI invitation={invitation} />;
}

export { CompleteInvitation };
