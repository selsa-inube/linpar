import {
  decisionModalConfig,
  sectionMessageConfig,
} from "./config/deleteUser.config";
import { MdOutlineDelete } from "react-icons/md";
import { StyledIconDelete } from "./styles";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

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

function DeleteUserMessages(user, closeMessage) {
  let messageType = "success";

  const { title, description, icon, appearance } =
    sectionMessageConfig[messageType];

  return (
    <SectionMessage
      title={title}
      description={description(user)}
      icon={icon}
      appearance={appearance}
      duration={2000}
      closeSectionMessage={closeMessage}
    />
  );
}

function DeleteUserUI(props) {
  const {
    user,
    showModal,
    showMessage,
    handleShowModal,
    handleConfirmDelete,
    closeModal,
    closeMessage,
  } = props;
  return (
    <>
      <StyledIconDelete>
        <MdOutlineDelete cursor="pointer" onClick={handleShowModal} />
      </StyledIconDelete>
      {showModal && DeleteUserModal(user, closeModal, handleConfirmDelete)}
      {showMessage && DeleteUserMessages(user, closeMessage)}
    </>
  );
}

export { DeleteUserUI };
