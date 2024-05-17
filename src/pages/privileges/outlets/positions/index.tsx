import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";

import { PositionsUI } from "./interface";
import { IPosition } from "./add-position/types";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

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

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };
  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      showMenu={showMenu}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      searchPosition={searchPosition}
      linixPosition={positions}
      loading={loading}
    />
  );
}
