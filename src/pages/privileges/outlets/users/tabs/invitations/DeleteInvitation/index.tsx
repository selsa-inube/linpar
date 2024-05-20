import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";
import { generalMessage } from "@pages/privileges/outlets/roles/config/messages.config";

import { DeleteInvitationUI } from "./interface";
import { IMessageState } from "../../../types/forms.types";
import { deleteInvitationModal } from "./config/deleteInvitation.config";

interface DeleteInvitationProps {
  deleteInvitation: typeof deleteInvitationModal;
  linixInvitation: string;
  userNameInvitation: string;
  handleDeleteInvitation: (props: functionById) => Promise<unknown>;
}

function DeleteInvitation(props: DeleteInvitationProps) {
  const {
    deleteInvitation,
    linixInvitation,
    userNameInvitation,
    handleDeleteInvitation,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const handleOnclick = async () => {
    await handleDeleteInvitation({
      key: "customerId",
      nameDB: "linix-invitations",
      identifier: linixInvitation,
    });
    setShowModal(false);
    setLoading(true);
    setMessage({
      visible: true,
      data: generalMessage.success,
    });
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <DeleteInvitationUI
      deleteInvitation={deleteInvitation}
      hover={isHovered}
      userNameInvitation={userNameInvitation}
      loading={loading}
      message={message}
      showModal={showModal}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleRemoveInvitation={handleOnclick}
      setHover={setIsHovered}
      setShowModal={setShowModal}
    />
  );
}

export { DeleteInvitation };
