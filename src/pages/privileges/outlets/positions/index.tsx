import { useState, useEffect } from "react";
import { getAll } from "@src/mocks/utils/dataMock.service";
import { PositionsUI } from "./interface";
import { IRol } from "../roles/types";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [linixPositions, setLinixPositions] = useState<IRol[]>([]);

  useEffect(() => {
    getAll("linix-roles")
      .then((data) => {
        if (data !== null) {
          setLinixPositions(data as IRol[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [linixPositions]);

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
      linixPosition={linixPositions}
      loading={loading}
    />
  );
}
