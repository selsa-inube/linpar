import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import UsersUI from "./interface";

function Users() {
  const [isSelected, setIsSelected] = useState(
    privilegeUserTabsConfig.privilegesUsers.id
  );
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const tab = location.state?.tab;
    if (tab) {
      setIsSelected(tab);
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

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
    <UsersUI
      isSelected={isSelected}
      searchText={searchText}
      handleTabChange={handleTabChange}
      handleSearchText={handleSearchText}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
    />
  );
}

export { Users };
