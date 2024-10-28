import { useContext, useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { deleteInvitationModal } from "./config/deleteInvitation.config";
import { DeleteLinixInvitationUI } from "./interface";
import { deleteInvitations } from "./utils";
import { IDeleteForMessage } from "../../users/types";
import { LinparContext } from "@src/context/AppContext";

interface IDeleteLinixInvitationProps {
  deleteLinixInvitationModal: typeof deleteInvitationModal;
  setIdDeleted: (show: IDeleteForMessage) => void;
  handleDeleteLinixInvitation: (props: functionById) => Promise<unknown>;
  nameLinixInvitation: string;
  linixInvitation: string;
}

export const DeleteLinixInvitation = (props: IDeleteLinixInvitationProps) => {
  const {
    deleteLinixInvitationModal,
    nameLinixInvitation,
    linixInvitation,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { linparData } = useContext(LinparContext);

  const handeleteLinixInvitation = () => {
    setLoading(true);
    const data = deleteInvitations(
      linixInvitation,
      linparData.businessUnit.businessUnitPublicCode
    );
    data
      .then(() => {
        setIdDeleted({
          id: linixInvitation,
          successfulDiscard: true,
        });
      })
      .catch((error) => {
        console.error(error);
        setIdDeleted({
          id: linixInvitation,
          successfulDiscard: false,
        });
      });

    setLoading(false);
    setShowModal(false);
  };

  return (
    <DeleteLinixInvitationUI
      deleteInvitationModal={deleteLinixInvitationModal}
      handleDeleteLinixInvitation={handeleteLinixInvitation}
      hover={isHovered}
      loading={loading}
      nameLinixInvitation={nameLinixInvitation}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
