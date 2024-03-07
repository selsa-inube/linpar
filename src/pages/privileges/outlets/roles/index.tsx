import { useState } from "react";
import { roles } from "@mocks/privileges/roles/rolesData.muck";

import { RolesUI } from "./interface";

export function Roles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchRoles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredRoles = roles.filter(
    (role) =>
      role.code.toString().includes(searchTerm) ||
      role.nameRoles.toLowerCase().includes(searchTerm) ||
      role.aplicaicionRoles.toLowerCase().includes(searchTerm)
  );

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
      entries={filteredRoles}
      searchRole={searchTerm}
    />
  );
}
