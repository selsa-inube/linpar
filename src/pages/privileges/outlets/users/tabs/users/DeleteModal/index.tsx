import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { deleteLinixUsersModal } from "./config/deleteLinixUsers.config";
import { DeleteLinixUserUI } from "./interface";
import { deleteUser } from "./utils";
import { IDeleteForMessage } from "../types";

interface IDeleteLinixUserProps {
  deleteLinixUsersModal: typeof deleteLinixUsersModal;
  setIdDeleted: (show: IDeleteForMessage) => void;
  handleDeleteLinixUser: (props: functionById) => Promise<unknown>;
  nameLinixuser: string;
  linixUsers: string;
}

export const DeleteLinixUsers = (props: IDeleteLinixUserProps) => {
  const { deleteLinixUsersModal, nameLinixuser, linixUsers, setIdDeleted } =
    props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handeleteUsers = () => {
    setLoading(true);
    const data = deleteUser(linixUsers);
    data
      .then(() => {
        setIdDeleted({
          id: linixUsers,
          successfulDiscard: true,
        });
      })
      .catch((error) => {
        console.error(error);
        setIdDeleted({
          id: linixUsers,
          successfulDiscard: false,
        });
      });

    setLoading(false);
    setShowModal(false);
  };

  return (
    <DeleteLinixUserUI
      deleteLinixUsersModal={deleteLinixUsersModal}
      handleDeleteLinixUser={handeleteUsers}
      hover={isHovered}
      loading={loading}
      nameLinixuser={nameLinixuser}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
