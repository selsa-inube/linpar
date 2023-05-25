import { MdModeEdit } from "react-icons/md";
import { StyledLink } from "./styles";

function EditUser(props) {
  const { entry } = props;
  return (
    <StyledLink to={`edit/${entry.id}`}>
      <MdModeEdit />
    </StyledLink>
  );
}

export { EditUser };
