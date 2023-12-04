import { MdOutlineDelete } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteUserModal } from "../../../config/deleteUser.config";
import { IGeneralInformationEntry } from "../../../types/forms.types";
import { IDeleteUserModal } from "./types";
import { useState } from "react";

interface DeleteUserUIProps {
  user: IGeneralInformationEntry;
  showModal: boolean;
  handleShowModal: () => void;
  handleDeleteUser: () => void;
  closeModal: () => void;
  showComplete: boolean;
}

function DeleteUserModal(props: IDeleteUserModal) {
  const { user, closeModal, handleDeleteUser } = props;
  let messageType = EMessageType.DELETE;
  const { title, description, actionText, appearance } =
    deleteUserModal[messageType];

  return (
    <DecisionModal
      title={title}
      description={description(user)}
      appearance={appearance}
      actionText={actionText}
      closeModal={closeModal}
      handleClick={handleDeleteUser}
    />
  );
}

function DeleteUserUI(props: DeleteUserUIProps) {
  const {
    user,
    showModal,
    handleShowModal,
    handleDeleteUser,
    closeModal,
    showComplete,
  } = props;
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

      {showModal && DeleteUserModal({ user, closeModal, handleDeleteUser })}
    </>
  );
}

export { DeleteUserUI };
