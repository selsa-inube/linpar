import { useState } from "react";
import { DeleteInvitationUI } from "./interface";

function DeleteInvitation(props) {
  const { handleDelete } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRemoveInvitation = (e) => {
    handleDelete();
  };
  return (
    <DeleteInvitationUI
      handleRemoveInvitation={handleRemoveInvitation}
      toggleModal={toggleModal}
      showModal={showModal}
    />
  );
}

export { DeleteInvitation };
