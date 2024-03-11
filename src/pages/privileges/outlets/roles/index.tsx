import { useState } from "react";

import { RolesUI } from "./interface";

export function Roles() {
  const [searchRole, setSearchRole] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchRoles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRole(e.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };
  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <RolesUI
      handleSearchRole={handleSearchRoles}
      showMenu={showMenu}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      searchRole={searchRole}
    />
  );
}
