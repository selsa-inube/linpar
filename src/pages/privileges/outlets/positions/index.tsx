import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getPositions } from "@services/positions/getPositons";
import { PositionsUI } from "./interface";
import { IPosition } from "./add-position/types";
import { IMessageState } from "../users/types/forms.types";
import { generalMessage } from "./delete-positions/config/messages.config";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const [idDeleted, setIdDeleted] = useState("");

  const [positions, setPositions] = useState<IPosition[]>([]);
  const { user } = useAuth0();

  const linixPositionsData = async () => {
    if (!user) return;
    if (positions.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getPositions();
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
    const filterRecordRemoved = positions.filter(
      (positions) => positions.k_Grupo !== idDeleted
    );
    filterRecordRemoved &&
      setMessage({
        visible: true,
        data: generalMessage.success,
      });
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
      idDeleted={idDeleted}
      setIdDeleted={setIdDeleted}
    />
  );
}
