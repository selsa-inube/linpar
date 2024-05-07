import { MdOutlineDelete } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";
import { IGeneralInformationEntry } from "../../../types/forms.types";
import { useState } from "react";

interface DeleteUserUIProps {
  user: IGeneralInformationEntry;
  showModal: boolean;
  handleShowModal: () => void;
  handleDeleteUser: () => void;
  closeModal: () => void;
  showComplete: boolean;
}

function DeleteUserUI(props: DeleteUserUIProps) {
  const { showComplete, handleShowModal } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {showComplete ? (
        <Button
          iconBefore={<MdOutlineDelete />}
          onClick={handleShowModal}
          variant="none"
          appearance="error"
          spacing="compact"
        >
          Eliminar
        </Button>
      ) : (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Icon
            icon={<MdOutlineDelete />}
            onClick={handleShowModal}
            appearance={isHovered ? "primary" : "dark"}
            parentHover={isHovered ? true : false}
            cursorHover
          />
        </div>
      )}
    </>
  );
}

export { DeleteUserUI };
