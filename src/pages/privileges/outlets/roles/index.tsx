import { useState, useEffect } from "react";

import { getAll } from "@src/mocks/utils/dataMock.service";
import { IRol } from "@src/pages/privileges/outlets/roles/types";

import { RolesUI } from "./interface";

import { deleteItemData } from "@mocks/utils/dataMock.service";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";

export function Roles() {
  const [searchRole, setSearchRole] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [linixRoles, setLinixRoles] = useState<IRol[]>([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  useEffect(() => {
    getAll("linix-roles")
      .then((data) => {
        if (data !== null) {
          setLinixRoles(data as IRol[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
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

  const handleDeleteRole = async (k_role: string) => {
    const params = {
      key: "k_Rol",
      nameDB: "linix-roles",
      identifier: k_role,
    };

    await deleteItemData(params)
      .then(() => {
        setMessage({
          visible: true,
          data: generalMessage.success,
        });
      })
      .catch((error) => {
        setMessage({
          visible: true,
          data: generalMessage.failed,
        });
        console.info(error.message);
      })
      .finally(() => {});
  };

  const handleCloseSectionDeleteMessage = () => {
    setMessage({
      visible: false,
    });
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
      message={message}
      onDeleteRole={handleDeleteRole}
      onCloseSectionMessage={handleCloseSectionDeleteMessage}
    />
  );
}
