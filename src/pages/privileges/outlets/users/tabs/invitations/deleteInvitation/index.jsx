import { useState } from "react";
import DeleteInvitationUI from "./interface";

function DeleteInvitation(props) {
  const { invitation, onRemoveInvitation } = props;
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const handleRemoveInvitation = () => {
    toggleMessage();
    onRemoveInvitation(invitation.id);
  };

  return (
    <DeleteInvitationUI
      handleRemoveInvitation={handleRemoveInvitation}
      toggleModal={toggleModal}
      toggleMessage={toggleMessage}
    />
  );
}

export { DeleteInvitation };
