import { CompleteInvitationUI } from "./interface";
import { useParams } from "react-router-dom";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";

function CompleteInvitation() {
  const { invitation_id } = useParams();

  function getInvitationInformation() {
    const invitationId = parseInt(invitation_id);
    return invitationEntriesDataMock.find(
      (invitation) => invitation.id === invitationId
    );
  }

  const invitation = getInvitationInformation();

  if (!invitation) {
    return <div>Invitation not found</div>;
  }

  return <CompleteInvitationUI invitation={invitation} />;
}

export { CompleteInvitation };
