import { useState } from "react";
import { RolesUI } from "./interface";

export function Roles() {
  const [searchRole, setSearchRole] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchRoles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRole(event.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };
  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <RolesUI
      searchRole={searchRole}
      handleSearchRole={handleSearchRoles}
      showMenu={showMenu}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
    />
  );
}
