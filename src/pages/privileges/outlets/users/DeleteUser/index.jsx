import { DeleteUserUI } from "./interface";
import { useState } from "react";

function DeleteUser(props) {
  const { user, handleChangeDeleteUser, HandleShowMessage } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    HandleShowMessage();
    handleChangeDeleteUser(user, true);
  };

  return (
    <DeleteUserUI
      user={user}
      showModal={showModal}
      handleShowModal={handleShowModal}
      handleConfirmDelete={handleConfirmDelete}
      closeModal={closeModal}
    ></DeleteUserUI>
  );
}

export { DeleteUser };
