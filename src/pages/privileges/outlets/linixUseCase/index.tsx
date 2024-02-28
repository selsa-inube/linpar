import { useState } from "react";
import { LinixUseCaseUI } from "./interface";

function LinixUseCase() {
  const [searchUseCase, setSearchUseCase] = useState("");
  const [showMenu] = useState(false);

  const handleSearchUseCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUseCase(event.target.value);
  };
  return (
    <LinixUseCaseUI
      searchUseCase={searchUseCase}
      handleSearchUseCase={handleSearchUseCase}
      showMenu={showMenu}
    />
  );
}

export { LinixUseCase };
