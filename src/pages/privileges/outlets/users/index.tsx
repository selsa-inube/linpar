import { useEffect, useState } from "react";

import { IMessage } from "@src/types/messages.types";
import { useLocation } from "react-router-dom";
import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import UsersUI from "./interface";
import { IUsersMessage } from "./types/users.types";

function Users() {
  const [isSelected, setIsSelected] = useState(
    privilegeUserTabsConfig.privilegesUsers.id
  );
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message && location.state?.tab) {
      setIsSelected(location.state.tab);
      handleShowMessage(location.state.message);
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  const handleShowMessage = (message: IMessage) => {
    setMessage({
      visible: true,
      title: message.title,
      description: message.description,
      icon: message.icon,
      appearance: message.appearance,
    });
  };

  const handleCloseMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <UsersUI
      isSelected={isSelected}
      searchText={searchText}
      handleTabChange={handleTabChange}
      handleSearchText={handleSearchText}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      message={message}
      handleCloseMessage={handleCloseMessage}
    />
  );
}

export { Users };
