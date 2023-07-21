import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button } from "@inube/design-system";
import { MdOutlineDelete } from "react-icons/md";
import { deleteUserModal } from "../../../config/deleteUser.config";
import { StyledIconDelete } from "./styles";
import { IGeneralInformationEntry } from "../../../types/forms.types";
import { IDeleteUserModal } from "./types";
import { EMessageType } from "@src/types/messages.types";

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
          iconBefore={<MdOutlineDelete size={18} />}
          handleClick={handleShowModal}
          variant="none"
          appearance="remove"
          spacing="compact"
        >
          Eliminar
        </Button>
      ) : (
        <StyledIconDelete>
          <MdOutlineDelete onClick={handleShowModal} />
        </StyledIconDelete>
      )}

      {showModal && DeleteUserModal({ user, closeModal, handleDeleteUser })}
    </>
  );
}

export { DeleteUserUI };
