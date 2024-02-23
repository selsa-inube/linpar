import { useState } from "react";
import { UseCasesUI } from "./interface";

function UseCases() {
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  return (
    <UseCasesUI
      searchText={searchText}
      handleSearchText={handleSearchText}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
    />
  );
}

export { UseCases };
