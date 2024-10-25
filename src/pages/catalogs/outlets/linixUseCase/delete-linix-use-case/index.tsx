import { useContext, useState } from "react";

import { functionById } from "@mocks/utils/dataMock.service";
import { LinparContext } from "@context/AppContext";

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
  const { linparData } = useContext(LinparContext);
  const handleLinixUseCase = () => {
    setLoading(true);
    const data = deleteUseCase(
      linixUseCase,
      nameLinixuseCase,
      linparData.businessUnit.businessUnitPublicCode
    );
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
  const elem = document.getElementById("actionModal");
  if (elem) {
    elem.parentNode!.removeChild(elem);
  }

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
      nameLinixuseCase={nameLinixuseCase}
    />
  );
};
