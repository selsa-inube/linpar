import { useState } from "react";
import { DeleteInvitationUI } from "./interface";

function DeleteInvitation(props) {
  const { handleDelete } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <DeleteInvitationUI
      handleRemoveInvitation={handleDelete}
      toggleModal={toggleModal}
      showModal={showModal}
    />
  );
}

export { DeleteInvitation };
