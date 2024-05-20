import { useState, useEffect } from "react";

import { getAll } from "@src/mocks/utils/dataMock.service";
import { IRol } from "@src/pages/privileges/outlets/roles/types";

import { RolesUI } from "./interface";

export function Roles() {
  const [searchRole, setSearchRole] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [linixRoles, setLinixRoles] = useState<IRol[]>([]);

  useEffect(() => {
    getAll("linix-roles")
      .then((data) => {
        if (data !== null) {
          setLinixRoles(data as IRol[]);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [linixRoles]);

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
      linixRoles={linixRoles}
      loading={loading}
    />
  );
}
