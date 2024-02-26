import { useState } from "react";
import { UseCasesUI } from "./interface";

function UseCases() {
  const [searchUseCase, setSearchText] = useState("");
  const [showMenu] = useState(false);

  const handleSearchUseCase = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <UseCasesUI
      searchUseCase={searchUseCase}
      handleSearchUseCase={handleSearchUseCase}
      showMenu={showMenu}
    />
  );
}

export { UseCases };
