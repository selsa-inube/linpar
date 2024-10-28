import { useContext, useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { DeletePositionUI } from "./interface";
import { deletePositionModal } from "./config/deletePositions.config";
import { deletePosition } from "./utils";
import { IDeleteForMessage } from "../types";
import { LinparContext } from "@src/context/AppContext";

interface IDeletePositionProps {
  deletePositionModal: typeof deletePositionModal;
  setIdDeleted: (show: IDeleteForMessage) => void;
  handleDeletePosition: (props: functionById) => Promise<unknown>;
  namePosition: string;
  linixPosition: string;
}

export const DeletePosition = (props: IDeletePositionProps) => {
  const { deletePositionModal, namePosition, linixPosition, setIdDeleted } =
    props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { linparData } = useContext(LinparContext);
  const handeletePosition = () => {
    setLoading(true);
    const data = deletePosition(
      linixPosition,
      linparData.businessUnit.businessUnitPublicCode
    );
    data
      .then(() => {
        setIdDeleted({
          id: linixPosition,
          successfulDiscard: true,
        });
      })
      .catch((error) => {
        console.error(error);
        setIdDeleted({
          id: linixPosition,
          successfulDiscard: false,
        });
      });

    setLoading(false);
    setShowModal(false);
  };

  return (
    <DeletePositionUI
      deletePositionModal={deletePositionModal}
      handleDeletePosition={handeletePosition}
      hover={isHovered}
      loading={loading}
      namePosition={namePosition}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
