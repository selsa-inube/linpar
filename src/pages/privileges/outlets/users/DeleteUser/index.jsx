import { DeleteUserUI } from "./interface";
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

  const closeMessage = () => {
    setShowMessage(false);
  };

  const handleConfirmDelete = () => {
    setShowMessage(true);
    handleDeleteTableRow(user.id);
  };

  return (
    <DeleteUserUI
      user={user}
      showModal={showModal}
      showMessage={showMessage}
      handleShowModal={handleShowModal}
      handleConfirmDelete={handleConfirmDelete}
      closeModal={closeModal}
      closeMessage={closeMessage}
    ></DeleteUserUI>
  );
}

export { DeleteUser };
