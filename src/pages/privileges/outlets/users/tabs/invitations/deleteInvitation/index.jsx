import { useState } from "react";
import DeleteInvitationUI from "./interface";

function DeleteInvitation(props) {
  const { invitation, handleChangeInvitation } = props;
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
    handleChangeInvitation(invitation, true);
  };

  return (
    <DeleteInvitationUI
      handleRemoveInvitation={handleRemoveInvitation}
      toggleModal={toggleModal}
      toggleMessage={toggleMessage}
      showMessage={showMessage}
      showModal={showModal}
      invitation={invitation}
    />
  );
}

export { DeleteInvitation };
