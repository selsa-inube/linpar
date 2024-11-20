import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getPositions } from "@services/positions/getPositons";
import { LinparContext } from "@src/context/AppContext";
import { useFlag } from "@inubekit/flag";
import { EAppearance } from "@src/types/colors.types";
import { PositionsUI } from "./interface";
import { IPosition } from "./add-position/types";
import { IMessageState } from "../users/types/forms.types";
import { generalMessage } from "./delete-positions/config/messages.config";
import { IDeleteForMessage } from "./types";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const [idDeleted, setIdDeleted] = useState<IDeleteForMessage>({
    id: "",
    successfulDiscard: false,
  });

  const [positions, setPositions] = useState<IPosition[]>([]);
  const { user } = useAuth0();
  const { addFlag } = useFlag();
  const { linparData } = useContext(LinparContext);
  const linixPositionsData = async () => {
    if (!user) return;
    if (positions.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getPositions(
          linparData.businessUnit.businessUnitPublicCode
        );
        setPositions(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    linixPositionsData();
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
          const filterRecordRemoved = positions.filter(
            (positions) => positions.k_Grupo !== idDeleted.id
          );
          setPositions(filterRecordRemoved);
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

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
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
    const filterRecordRemoved = positions.filter(
      (positions) => positions.k_Grupo !== idDeleted.id
    );

    idDeleted.successfulDiscard && setPositions(filterRecordRemoved);
  };

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      showMenu={showMenu}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      searchPosition={searchPosition}
      linixPosition={positions}
      loading={loading}
      message={message}
      idDeleted={idDeleted.id}
      setIdDeleted={setIdDeleted}
      catalogName="gestionprivilegios"
    />
  );
}
