import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import { deleteLinixUseCaseModal } from "./config/deleteLinixUseCase.config";
import { DeleteLinixUseCaseUI } from "./interface";

interface IDeleteLinixUseCaseProps {
  linixUseCase: string;
  handleDeleteLinixUseCase: (props: functionById) => Promise<unknown>;
  deleteLinixUseCaseModal: typeof deleteLinixUseCaseModal;
}

export const DeleteLinixUseCase = (props: IDeleteLinixUseCaseProps) => {
  const { linixUseCase, handleDeleteLinixUseCase, deleteLinixUseCaseModal } =
    props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnclick = async () => {
    await handleDeleteLinixUseCase({
      key: "k_Usecase",
      nameDB: "linix-use-cases",
      identifier: linixUseCase,
    });
    setShowModal(false);
  };

  return (
    <DeleteLinixUseCaseUI
      showModal={showModal}
      setShowModal={setShowModal}
      linixUseCase={linixUseCase}
      handleDeleteLinixUseCase={handleOnclick}
      deleteLinixUseCaseModal={deleteLinixUseCaseModal}
      hover={isHovered}
      setHover={setIsHovered}
    />
  );
};
