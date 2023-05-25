import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { StyledLink } from "./styles";

function CompleteInvitation(props) {
  const { user } = props;

  return (
    <StyledLink
      status={user.status}
      to={user.status === "Pending" && `complete-invitation/${user.id}`}
    >
      <MdOutlineAssignmentTurnedIn />
    </StyledLink>
  );
}
export { CompleteInvitation };
