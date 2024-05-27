import { useState } from "react";

import { functionById } from "@src/mocks/utils/dataMock.service";

import { deleteLinixUseCaseModal } from "./config/deleteLinixUseCase.config";
import { DeleteLinixUseCaseUI } from "./interface";

interface IDeleteLinixUseCaseProps {
  deleteLinixUseCaseModal: typeof deleteLinixUseCaseModal;
  setIdDeleted: (show: string) => void;
  handleDeleteLinixUseCase: (props: functionById) => Promise<unknown>;
  nameLinixuseCase: string;
  linixUseCase: string;
}

export const DeleteLinixUseCase = (props: IDeleteLinixUseCaseProps) => {
  const {
    deleteLinixUseCaseModal,
    handleDeleteLinixUseCase,
    nameLinixuseCase,
    linixUseCase,
    setIdDeleted,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnclick = async () => {
    await handleDeleteLinixUseCase({
      key: "k_Usecase",
      nameDB: "linix-use-cases",
      identifier: linixUseCase,
    });
    setShowModal(false);
    setLoading(true);
    setIdDeleted(linixUseCase);
  };

  return (
    <DeleteLinixUseCaseUI
      deleteLinixUseCaseModal={deleteLinixUseCaseModal}
      handleDeleteLinixUseCase={handleOnclick}
      hover={isHovered}
      loading={loading}
      nameLinixuseCase={nameLinixuseCase}
      setHover={setIsHovered}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
