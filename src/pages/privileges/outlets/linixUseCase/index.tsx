import { useEffect, useState } from "react";

import { getData } from "@src/mocks/utils/dataMock.service";

import {
  LinixUseCaseUI,
  SelectedDataFunction,
  HandleClickFunction,
} from "./interface";
import { UseCase } from "./types";

function LinixUseCase() {
  const [searchUseCase, setSearchUseCase] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [linixUseCases, setLinixUseCases] = useState<UseCase[]>([]);

  useEffect(() => {
    getData("linix-use-cases")
      .then((data) => {
        if (data !== null) {
          setLinixUseCases(data as UseCase[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchUseCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUseCase(event.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleClick: HandleClickFunction = (id: string) => {
    linixUseCases.find((useCase) => useCase.id === id);
  };

  const selectedData: SelectedDataFunction = (k_Usecase: string) =>
    linixUseCases.find((linixUseCase) => linixUseCase.k_Usecase === k_Usecase)!;

  return (
    <LinixUseCaseUI
      searchUseCase={searchUseCase}
      handleSearchUseCase={handleSearchUseCase}
      showMenu={showMenu}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      linixUseCases={linixUseCases}
      loading={loading}
      handleClick={handleClick}
      selectedData={selectedData}
    />
  );
}

export { LinixUseCase };
