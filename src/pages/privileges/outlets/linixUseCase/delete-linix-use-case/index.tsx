import { useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";

import {
  deleteLinixUseCaseModal,
  deleteUserMessages,
} from "./config/deleteLinixUseCase.config";
import { DeleteLinixUseCaseUI } from "./interface";
import { IMessageState } from "../../users/types/forms.types";
import { IMessage } from "@src/types/messages.types";
import { EAppearance } from "@src/types/colors.types";

interface IDeleteLinixUseCaseProps {
  linixUseCase: string;
  handleDeleteLinixUseCase: (props: functionById) => Promise<unknown>;
  deleteLinixUseCaseModal: typeof deleteLinixUseCaseModal;
}

const initialMessageState: IMessage = {
  show: false,
  title: "",
  description: "",
  icon: <></>,
  appearance: "" as EAppearance,
};

export const DeleteLinixUseCase = (props: IDeleteLinixUseCaseProps) => {
  const { linixUseCase, handleDeleteLinixUseCase, deleteLinixUseCaseModal } =
    props;

  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
    data: initialMessageState,
  });

  const handleOnclick = async () => {
    await handleDeleteLinixUseCase({
      key: "k_Usecase",
      nameDB: "linix-use-cases",
      identifier: linixUseCase,
    });
    setShowModal(false);
    setMessage({
      visible: true,
      data: deleteUserMessages.success,
    });
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      data: initialMessageState,
    });
  };

  return (
    <DeleteLinixUseCaseUI
      showModal={showModal}
      setShowModal={setShowModal}
      linixUseCase={linixUseCase}
      handleDeleteLinixUseCase={handleOnclick}
      deleteLinixUseCaseModal={deleteLinixUseCaseModal}
      hover={isHovered}
      message={message}
      setHover={setIsHovered}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
};
