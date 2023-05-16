import { DeleteUserUI } from "./interface";
import { sectionMessageConfig } from "../../config/deleteUser.config";
import { useState } from "react";

function DeleteUser(props) {
  const { user, handleChangeDeleteUser, handleMessage } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    let responseType = "success";
    try {
      handleChangeDeleteUser(user, true);
    } catch (e) {
      responseType = "failed";
    }

    const { icon, title, description, appearance } =
      sectionMessageConfig[responseType];

    handleMessage(title, description(user.code), icon, appearance);
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
