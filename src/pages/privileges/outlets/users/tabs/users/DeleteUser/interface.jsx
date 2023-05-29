import { deleteUserModal } from "../../../config/deleteUser.config";
import { MdOutlineDelete } from "react-icons/md";
import { StyledIconDelete } from "./styles";
import { DecisionModal } from "@components/feedback/DecisionModal";

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
  const { user, showModal, handleShowModal, handleDeleteUser, closeModal } =
    props;
  return (
    <>
      <StyledIconDelete>
        <MdOutlineDelete onClick={handleShowModal} />
      </StyledIconDelete>
      {showModal && DeleteUserModal(user, closeModal, handleDeleteUser)}
    </>
  );
}

export { DeleteUserUI };
