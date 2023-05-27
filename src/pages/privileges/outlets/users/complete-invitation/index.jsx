import { CompleteInvitationUI } from "./interface";
import { useParams } from "react-router-dom";
import { invitationEntriesDataMock } from "../../../../../mocks/apps/privileges/invitations.mock";

function CompleteInvitation() {
  const { invitation_id } = useParams();
  const invitationId = parseInt(invitation_id);
  const invitation = invitationEntriesDataMock.find(
    (invitation) => invitation.id === invitationId
  );
  const subjectCardData = {
    Nombre: invitation?.username || "",
    Identificación: invitation?.userID || "",
    Correo: invitation?.mail || "",
    Invitación: invitation?.invitationDate || "",
  };
  return <CompleteInvitationUI subjectCardData={subjectCardData} />;
}

export { CompleteInvitation };
