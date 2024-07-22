import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { deleteInvitationModal } from "./config/deleteInvitation.config";
import { DeleteLinixInvitationUI } from "./interface";

interface IDeleteLinixInvitationProps {
  deleteLinixInvitationModal: typeof deleteInvitationModal;
  setIdDeleted: (show: string) => void;
  handleDeleteLinixInvitation: (props: functionById) => Promise<unknown>;
  nameLinixInvitation: string;
  linixInvitation: string;
}

export const DeleteLinixInvitation = (props: IDeleteLinixInvitationProps) => {
  const {
    deleteLinixInvitationModal,
    handleDeleteLinixInvitation,
    nameLinixInvitation,
    linixInvitation,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnclick = async () => {
    await handleDeleteLinixInvitation({
      key: "customerId",
      nameDB: "linix-invitations",
      identifier: linixInvitation,
    });
    setShowModal(false);
    setLoading(true);
    setIdDeleted(linixInvitation);
  };

  return (
    <DeleteLinixInvitationUI
      deleteInvitationModal={deleteLinixInvitationModal}
      handleDeleteLinixInvitation={handleOnclick}
      hover={isHovered}
      loading={loading}
      nameLinixInvitation={nameLinixInvitation}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
