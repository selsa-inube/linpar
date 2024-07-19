import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";

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

  useEffect(() => {
    getAll("linix-positions")
      .then((data) => {
        if (data !== null) {
          setPositions(data as IPosition[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [positions]);

  useEffect(() => {
    const filterRecordRemoved = positions.filter(
      (positions) => positions.k_Grupo !== idDeleted
    );
    filterRecordRemoved &&
      setMessage({
        visible: true,
        data: generalMessage.success,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
