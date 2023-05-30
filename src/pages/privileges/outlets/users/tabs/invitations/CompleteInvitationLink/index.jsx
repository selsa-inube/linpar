import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { StyledLink } from "./styles";

function CompleteInvitationLink(props) {
  const { invitation } = props;

  return (
    <StyledLink
      status={invitation.status}
      to={
        invitation.status === "Pending" &&
        `complete-invitation/${invitation.id}`
      }
    >
      <MdOutlineAssignmentTurnedIn />
    </StyledLink>
  );
}
export { CompleteInvitationLink };
