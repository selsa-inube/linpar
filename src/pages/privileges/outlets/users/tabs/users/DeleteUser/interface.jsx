import { decisionModalConfig } from "../../../config/deleteUser.config";
import { MdOutlineDelete } from "react-icons/md";
import { StyledIconDelete } from "./styles";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";

function DeleteUserModal(user, closeModal, handleConfirmDelete) {
  let messageType = "delete";
  const { title, description, actionText, appearance } =
    decisionModalConfig[messageType];

  return (
    <DecisionModal
      title={title}
      description={description(user)}
      appearance={appearance}
      actionText={actionText}
      closeModal={closeModal}
      handleClick={handleConfirmDelete}
    />
  );
}

function DeleteUserUI(props) {
  const { user, showModal, handleShowModal, handleConfirmDelete, closeModal } =
    props;
  return (
    <>
      <form>
        <StyledIconDelete>
          <MdOutlineDelete onClick={handleShowModal} />
        </StyledIconDelete>
      </form>
      {showModal && DeleteUserModal(user, closeModal, handleConfirmDelete)}
    </>
  );
}

export { DeleteUserUI };
