import { useState } from "react";

import { functionById } from "@src/mocks/utils/dataMock.service";

import { deleteLinixUseCaseModal } from "./config/deleteLinixUseCase.config";
import { DeleteLinixUseCaseUI } from "./interface";
import { deleteUseCase } from "./utils";
import { IDeleteForMessage } from "../types";

interface IDeleteLinixUseCaseProps {
  deleteLinixUseCaseModal: typeof deleteLinixUseCaseModal;
  setIdDeleted: (show: IDeleteForMessage) => void;
  handleDeleteLinixUseCase: (props: functionById) => Promise<unknown>;
  nameLinixuseCase: string;
  linixUseCase: string;
}

export const DeleteLinixUseCase = (props: IDeleteLinixUseCaseProps) => {
  const {
    deleteLinixUseCaseModal,
    nameLinixuseCase,
    linixUseCase,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLinixUseCase = () => {
    setLoading(true);
    const data = deleteUseCase(linixUseCase, nameLinixuseCase);
    data
      .then(() => {
        setIdDeleted({
          id: linixUseCase,
          successfulDiscard: true,
        });
      })
      .catch((error) => {
        console.error(error);
        setIdDeleted({
          id: linixUseCase,
          successfulDiscard: false,
        });
      });

    setLoading(false);
    setShowModal(false);
  };

  return (
    <DeleteLinixUseCaseUI
      deleteLinixUseCaseModal={deleteLinixUseCaseModal}
      handleDeleteLinixUseCase={handleLinixUseCase}
      hover={isHovered}
      loading={loading}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
      linixUseCase={linixUseCase}
    />
  );
};
