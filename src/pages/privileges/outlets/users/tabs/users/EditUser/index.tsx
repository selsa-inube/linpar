import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";

import { IGeneralInformationEntry } from "../../../types/forms.types";
import { useState } from "react";

interface EditUserProps {
  entry: IGeneralInformationEntry;
  showComplete: boolean;
}
function EditUser(props: EditUserProps) {
  const { entry, showComplete } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineEdit size={18} />}
          type="link"
          path={`edit/${entry.id}`}
          variant="outline"
          appearance="dark"
          spacing="compact"
        >
          Editar
        </Button>
      ) : (
        <Link
          to={`edit/${entry.id}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon
            appearance={isHovered ? "primary" : "dark"}
            parentHover={isHovered ? true : false}
            cursorHover
            icon={<MdOutlineEdit />}
          />
        </Link>
      )}
    </>
  );
}

export { EditUser };
