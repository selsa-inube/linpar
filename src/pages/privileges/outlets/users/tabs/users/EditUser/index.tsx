import { MdModeEdit } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";

import { IGeneralInformationEntry } from "../../../types/forms.types";
import { StyledLink } from "./styles";

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
          <Icon appearance="gray" size="20px" icon={<MdModeEdit />} />
        </StyledLink>
      )}
    </>
  );
}

export { EditUser };
