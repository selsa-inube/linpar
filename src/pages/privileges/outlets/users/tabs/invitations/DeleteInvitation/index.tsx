import { useState } from "react";
import { DeleteInvitationUI } from "./interface";

interface DeleteInvitationProps {
  handleDelete: () => void;
  showComplete: boolean;
}

function DeleteInvitation(props: DeleteInvitationProps) {
  const { handleDelete, showComplete } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <DeleteInvitationUI
      handleRemoveInvitation={handleDelete}
      toggleModal={toggleModal}
      showModal={showModal}
      showComplete={showComplete}
    />
  );
}

export { DeleteInvitation };
