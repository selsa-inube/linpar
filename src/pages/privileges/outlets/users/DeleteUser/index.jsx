import { MdOutlineDelete } from "react-icons/md";
import { StyledIconDelete } from "./styles";
import { createPortal } from "react-dom";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

import {
  decisionModalConfig,
  sectionMessageConfig,
} from "./config/deleteUser.config";
import { useState } from "react";

function DeleteUser(props) {
  const { user, handleDeleteTableRow } = props;
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  const handleConfirmDelete = () => {
    handleShowMessage();
    handleDeleteTableRow(user.id);
  };

  function renderModal() {
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

  function renderMessages() {
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

  return (
    <>
      <StyledIconDelete>
        <MdOutlineDelete cursor="pointer" onClick={handleShowModal} />
      </StyledIconDelete>
      {showMessage && renderMessages()}
      {showModal &&
        createPortal(renderModal(), document.getElementById("decision"))}
    </>
  );
}

export { DeleteUser };
