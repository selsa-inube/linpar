import { useState } from "react";

import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import UsersUI from "./interface";

function Users() {
  const [isSelected, setIsSelected] = useState(
    privilegeUserTabsConfig.privilegesUsers.id
  );
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleMenuInvitation = () => {
    setShowMenu(!showMenu);
  };

  return (
    <UsersUI
      isSelected={isSelected}
      searchText={searchText}
      handleTabChange={handleTabChange}
      handleSearchText={handleSearchText}
      showMenu={showMenu}
      handleMenuInvitation={handleMenuInvitation}
    />
  );
}

export { Users };
