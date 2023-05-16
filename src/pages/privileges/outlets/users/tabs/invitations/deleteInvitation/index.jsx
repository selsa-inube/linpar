import { useRef, useState } from "react";
import { DeleteInvitationUI } from "./interface";

function DeleteInvitation(props) {
  const { invitation, handleTriggerAction } = props;
  const [showModal, setShowModal] = useState(false);
  const deleteFormRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRemoveInvitation = (e) => {
    e.preventDefault();
    handleTriggerAction(invitation, "removeInvitation");
  };

  const handleConfirmModal = () => {
    deleteFormRef.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };

  return (
    <DeleteInvitationUI
      handleRemoveInvitation={handleRemoveInvitation}
      toggleModal={toggleModal}
      showModal={showModal}
      deleteFormRef={deleteFormRef}
      handleConfirmModal={handleConfirmModal}
    />
  );
}

export { DeleteInvitation };
