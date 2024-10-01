import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { getLinixUseCase } from "@services/linixUseCase/getLinixUseCase";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import {
  LinixUseCaseUI,
  SelectedDataFunction,
  HandleClickFunction,
} from "./interface";
import { IDeleteForMessage, UseCase } from "./types";

import { deleteUserMessages } from "./delete-linix-use-case/config/deleteLinixUseCase.config";

function LinixUseCase() {
  const [searchUseCase, setSearchUseCase] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [linixUseCases, setLinixUseCases] = useState<UseCase[]>([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: "",
    successfulDiscard: false,
  });
  const { user } = useAuth0();

  const linixUseCaseData = async () => {
    if (!user) return;
    if (linixUseCases.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getLinixUseCase();
        setLinixUseCases(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixUseCaseData();
  }, [user]);

  useEffect(() => {
    const messageType = idDeleted.successfulDiscard
      ? deleteUserMessages.success
      : deleteUserMessages.failed;
    setMessage({
      visible: true,
      data: messageType,
    });
  }, [idDeleted]);

  const handleSearchUseCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUseCase(event.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
    const filterRecordRemoved = linixUseCases.filter(
      (linixUseCases) => linixUseCases.k_Usecase !== idDeleted.id
    );

    idDeleted.successfulDiscard && setLinixUseCases(filterRecordRemoved);
  };

  const handleClick: HandleClickFunction = (id: string) => {
    linixUseCases.find((useCase) => useCase.k_Usecase === id);
  };

  const selectedData: SelectedDataFunction = (k_Usecase: string) =>
    linixUseCases.find((linixUseCase) => linixUseCase.k_Usecase === k_Usecase)!;

  return (
    <LinixUseCaseUI
      message={message}
      searchUseCase={searchUseCase}
      handleSearchUseCase={handleSearchUseCase}
      showMenu={showMenu}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseSectionMessage={handleCloseSectionMessage}
      linixUseCases={linixUseCases}
      loading={loading}
      handleClick={handleClick}
      selectedData={selectedData}
      showOpenModal={showModal}
      setIdDeleted={setIdDeleted}
      idDeleted={idDeleted.id}
      onCloseModal={handleCloseModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

export { LinixUseCase };
