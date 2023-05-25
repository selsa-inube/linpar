import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { StyledLink } from "./styles";

function CompleteInvitation(props) {
  const { invitation } = props;

  return (
    <StyledLink
      status={invitation.status}
      to={
        invitation.status === "Pending" && `complete-register/${invitation.id}`
      }
    >
      <MdOutlineAssignmentTurnedIn />
    </StyledLink>
  );
}
export { CompleteInvitation };
