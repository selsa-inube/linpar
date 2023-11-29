import { MdOutlineDelete } from "react-icons/md";
import { Button, Icon } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteUserModal } from "../../../config/deleteUser.config";
import { IGeneralInformationEntry } from "../../../types/forms.types";
import { IDeleteUserModal } from "./types";

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
        <Icon
          icon={<MdOutlineDelete />}
          onClick={handleShowModal}
          appearance="primary"
          cursorHover
        />
      )}

      {showModal && DeleteUserModal({ user, closeModal, handleDeleteUser })}
    </>
  );
}

export { DeleteUserUI };
