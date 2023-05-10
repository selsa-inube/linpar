import { useState } from "react";

import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import UsersUI from "./interface";

function Users() {
  const [isSelected, setIsSelected] = useState(
    privilegeUserTabsConfig.privilegesUsers.id
  );
  const [searchText, setSearchText] = useState("");

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <UsersUI
      isSelected={isSelected}
      searchText={searchText}
      handleTabChange={handleTabChange}
      handleSearchText={handleSearchText}
    />
  );
}

export { Users };
