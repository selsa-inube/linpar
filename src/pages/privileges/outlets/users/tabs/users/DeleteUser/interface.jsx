import { DecisionModal } from "@components/feedback/DecisionModal";
import { Button } from "@inube/design-system";
import { MdOutlineDelete } from "react-icons/md";
import { deleteUserModal } from "../../../config/deleteUser.config";
import { StyledIconDelete } from "./styles";

function DeleteUserModal(user, closeModal, handleDeleteUser) {
  let messageType = "delete";
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

function DeleteUserUI(props) {
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
        >
          Delete
        </Button>
      ) : (
        <StyledIconDelete>
          <MdOutlineDelete onClick={handleShowModal} />
        </StyledIconDelete>
      )}

      {showModal && DeleteUserModal(user, closeModal, handleDeleteUser)}
    </>
  );
}

export { DeleteUserUI };
