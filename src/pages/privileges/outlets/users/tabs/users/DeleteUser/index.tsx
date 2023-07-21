import { useState } from "react";
import { DeleteUserUI } from "./interface";
import { IGeneralInformationEntry } from "../../../types/forms.types";

interface DeleteUserProps {
  user: IGeneralInformationEntry;
  handleDeleteUser: () => void;
  showComplete: boolean;
}

function DeleteUser(props: DeleteUserProps) {
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
