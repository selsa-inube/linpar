import { useState } from "react";
import { DeleteUserUI } from "./interface";

function DeleteUser(props) {
  const { user, handleDeleteUser, showComplete } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <DeleteUserUI
      user={user}
      showModal={showModal}
      handleShowModal={handleShowModal}
      handleDeleteUser={handleDeleteUser}
      closeModal={closeModal}
      showComplete={showComplete}
    />
  );
}

export { DeleteUser };
