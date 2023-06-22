import { Button } from "@inube/design-system";
import { MdModeEdit } from "react-icons/md";
import { StyledLink } from "./styles";

function EditUser(props) {
  const { entry, showComplete } = props;
  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdModeEdit size={18} />}
          type="link"
          path={`edit/${entry.id}`}
          variant="none"
          appearance="secondary"
          spacing="compact"
        >
          Edit
        </Button>
      ) : (
        <StyledLink to={`edit/${entry.id}`}>
          <MdModeEdit />
        </StyledLink>
      )}
    </>
  );
}

export { EditUser };
