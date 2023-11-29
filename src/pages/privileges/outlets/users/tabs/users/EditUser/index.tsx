import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";

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
          iconBefore={<MdModeEdit />}
          type="link"
          path={`edit/${entry.id}`}
          variant="none"
          appearance="gray"
          spacing="compact"
        >
          Editar
        </Button>
      ) : (
        <Link to={`edit/${entry.id}`}>
          <Icon appearance="gray" size="20px" icon={<MdModeEdit />} />
        </Link>
      )}
    </>
  );
}

export { EditUser };
