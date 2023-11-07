import { Button } from "@inube/design-system";
import { MdModeEdit } from "react-icons/md";
import { StyledLink } from "./styles";
import { IGeneralInformationEntry } from "../../../types/forms.types";

interface EditUserProps {
  entry: IGeneralInformationEntry;
  showComplete: boolean;
}
function EditUser(props: EditUserProps) {
  const { entry, showComplete } = props;
  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdModeEdit size={18} />}
          type="link"
          path={`edit/${entry.id}`}
          variant="none"
          appearance="gray"
          spacing="compact"
        >
          Editar
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
