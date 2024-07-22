import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { deleteLinixUsersModal } from "./config/deleteLinixUsers.config";
import { DeleteLinixUserUI } from "./interface";

interface IDeleteLinixUserProps {
  deleteLinixUsersModal: typeof deleteLinixUsersModal;
  setIdDeleted: (show: string) => void;
  handleDeleteLinixUser: (props: functionById) => Promise<unknown>;
  nameLinixuser: string;
  linixUsers: string;
}

export const DeleteLinixUsers = (props: IDeleteLinixUserProps) => {
  const {
    deleteLinixUsersModal,
    handleDeleteLinixUser,
    nameLinixuser,
    linixUsers,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnclick = async () => {
    await handleDeleteLinixUser({
      key: "k_Usuari",
      nameDB: "linix-users",
      identifier: linixUsers,
    });
    setShowModal(false);
    setLoading(true);
    setIdDeleted(linixUsers);
  };

  return (
    <DeleteLinixUserUI
      deleteLinixUsersModal={deleteLinixUsersModal}
      handleDeleteLinixUser={handleOnclick}
      hover={isHovered}
      loading={loading}
      nameLinixuser={nameLinixuser}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
