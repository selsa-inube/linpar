import { DeleteUserUI } from "./interface";
import { useState } from "react";

function DeleteUser(props) {
  const { user, handleDeleteUser } = props;
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
    />
  );
}

export { DeleteUser };
