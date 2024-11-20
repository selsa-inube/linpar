import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { IDeleteForMessage, IRol } from "@pages/catalogs/outlets/roles/types";
import { getRoles } from "@services/roles/getRoles";
import { getAplicationRoles } from "@services/roles/aplicationRoles";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { LinparContext } from "@context/AppContext";
import { RolesUI } from "./interface";

import { generalMessage } from "./config/messages.config";
import { useFlag } from "@inubekit/flag";
import { EAppearance } from "@src/types/colors.types";

export function Roles() {
  const [searchRole, setSearchRole] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [linixRolesAplication, setLinixRolesAplication] = useState<
    Record<string, unknown>[]
  >([]);
  const [linixRoles, setLinixRoles] = useState<IRol[]>([]);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: 0,
    successfulDiscard: false,
  });
  const { addFlag } = useFlag();
  const { user } = useAuth0();
  const { linparData } = useContext(LinparContext);
  const linixRolesData = async () => {
    if (!user) return;
    if (linixRoles.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getRoles(
          linparData.businessUnit.businessUnitPublicCode
        );
        setLinixRoles(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixRolesData();
  }, [user]);
  const aplication = () => {
    if (!user) return;
    if (linixRolesAplication.length === 0) {
      setLoading(true);
      getAplicationRoles(linparData.businessUnit.businessUnitPublicCode)
        .then((newUsers) => {
          setLinixRolesAplication(newUsers);
        })
        .catch((error) => {
          console.info(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const dataAplication = (id: string) => {
    return linixRolesAplication.find((aplication) => aplication.k_Aplica === id)
      ?.n_Aplica;
  };
  useEffect(() => {
    aplication();
  }, [user]);

  useEffect(() => {
    if (idDeleted.id) {
      if (idDeleted.successfulDiscard) {
        addFlag({
          title: generalMessage.success.title,
          description: generalMessage.success.description,
          appearance: EAppearance.SUCCESS,
          duration: 5000,
        });
        setTimeout(() => {
          const filterDiscardPublication = linixRoles.filter(
            (roles) => roles.id !== idDeleted.id
          );

          setLinixRoles(filterDiscardPublication);
        }, 5000);
      } else {
        addFlag({
          title: generalMessage.failed.title,
          description: generalMessage.failed.description,
          appearance: EAppearance.DANGER,
          duration: 5000,
        });
      }
    }
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
    const filterDiscardPublication = linixRoles.filter(
      (roles) => roles.id !== idDeleted.id
    );

    idDeleted.successfulDiscard && setLinixRoles(filterDiscardPublication);
  };

  return (
    <RolesUI
      dataAplication={dataAplication}
      message={message}
      handleSearchRole={handleSearchRoles}
      linixRoles={linixRoles}
      loading={loading}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      idDeleted={idDeleted.id}
      searchRole={searchRole}
      setIdDeleted={setIdDeleted}
      showMenu={showMenu}
      catalogName="catalogosgeneraleslinix"
    />
  );
}
