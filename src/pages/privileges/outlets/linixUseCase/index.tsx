import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { getLinixUseCase } from "@services/linixUseCase/getLinixUseCase";

import {
  LinixUseCaseUI,
  SelectedDataFunction,
  HandleClickFunction,
} from "./interface";
import { IDeleteForMessage, UseCase } from "./types";
import { IMessageState } from "../users/types/forms.types";
import { deleteUserMessages } from "./delete-linix-use-case/config/deleteLinixUseCase.config";

function LinixUseCase() {
  const [searchUseCase, setSearchUseCase] = useState("");
  const [showMenu, setShowMenu] = useState(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const messageType = idDeleted.successfulDiscard
      ? deleteUserMessages.success
      : deleteUserMessages.failed;

    const filterRecordRemoved = linixUseCases.filter(
      (linixUseCases) => linixUseCases.k_Usecase !== idDeleted.id
    );

    idDeleted.successfulDiscard && setLinixUseCases(filterRecordRemoved);

    filterRecordRemoved &&
      setMessage({
        visible: true,
        data: messageType,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDeleted]);

  const handleSearchUseCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUseCase(event.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  const handleClick: HandleClickFunction = (id: string) => {
    linixUseCases.find((useCase) => useCase.k_Usecase === id);
  };

  const selectedData: SelectedDataFunction = (k_Usecase: string) =>
    linixUseCases.find((linixUseCase) => linixUseCase.k_Usecase === k_Usecase)!;
  console.log(idDeleted, "deleted");
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
      setIdDeleted={setIdDeleted}
      idDeleted={idDeleted.id}
    />
  );
}

export { LinixUseCase };
