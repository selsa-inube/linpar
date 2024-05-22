import { useState, useEffect } from "react";

import { getAll } from "@src/mocks/utils/dataMock.service";
import { IRol } from "@src/pages/privileges/outlets/roles/types";

import { RolesUI } from "./interface";
import { IMessageState } from "../users/types/forms.types";
import { generalMessage } from "./config/messages.config";

export function Roles() {
  const [searchRole, setSearchRole] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [linixRoles, setLinixRoles] = useState<IRol[]>([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [idDeleted, setIdDeleted] = useState("");

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

  useEffect(() => {
    const filterRecordRemoved = linixRoles.filter(
      (linixRol) => linixRol.k_Rol !== idDeleted
    );
    filterRecordRemoved &&
      setMessage({
        visible: true,
        data: generalMessage.success,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idDeleted]);

  const handleSearchRoles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRole(e.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <RolesUI
      message={message}
      handleSearchRole={handleSearchRoles}
      linixRoles={linixRoles}
      loading={loading}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      idDeleted={idDeleted}
      searchRole={searchRole}
      setIdDeleted={setIdDeleted}
      showMenu={showMenu}
    />
  );
}
