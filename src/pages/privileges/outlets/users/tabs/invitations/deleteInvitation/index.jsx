import { useState } from "react";
import { deleteInvitationUserMessageConfig } from "../../../config/invitationsTable.config";
import { DeleteInvitationUI } from "./interface";

function DeleteInvitation(props) {
  const { invitation, handleChangeInvitation, handleMessage } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleRemoveInvitation = () => {
    let responseType = "success";
    try {
      handleChangeInvitation(invitation, true);
    } catch (e) {
      responseType = "failed";
    }

    const { icon, title, description, appearance } =
      deleteInvitationUserMessageConfig[responseType];

    handleMessage(title, description(invitation.username), icon, appearance);
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
