import { useState } from "react";
import { roles } from "@mocks/privileges/roles/rolesData.muck";

import { RolesUI } from "./interface";

export function Roles() {
  const [searchRole, setSearchRole] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchRoles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRole(e.target.value);
  };

  const filteredRoles = roles.filter(
    (role) =>
      role.code.toString().includes(searchRole) ||
      role.nameRoles.toLowerCase().includes(searchRole) ||
      role.aplicaicionRoles.toLowerCase().includes(searchRole)
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
      searchRole={searchRole}
    />
  );
}
