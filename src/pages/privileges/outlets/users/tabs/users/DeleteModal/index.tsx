import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";
import { deleteLinixUsersModal } from "./config/deleteLinixUsers.config";
import { DeleteLinixUsersUI } from "./interface";

interface IDeleteLinixUsersProps {
  linixUsers: string;
  handleDeleteLinixUsers: (props: functionById) => Promise<unknown>;
  deleteLinixUsersModal: typeof deleteLinixUsersModal;
}

export const DeleteLinixUsers = (props: IDeleteLinixUsersProps) => {
  const { linixUsers, handleDeleteLinixUsers, deleteLinixUsersModal } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnclick = async () => {
    await handleDeleteLinixUsers({
      key: "k_Usuari",
      nameDB: "linix-users",
      identifier: linixUsers,
    });
    setShowModal(false);
  };

  return (
    <DeleteLinixUsersUI
      showModal={showModal}
      setShowModal={setShowModal}
      linixUsers={linixUsers}
      handleDeletelinixUsers={handleOnclick}
      deleteLinixUsersModal={deleteLinixUsersModal}
      hover={isHovered}
      setHover={setIsHovered}
    />
  );
};
