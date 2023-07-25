import { EMessageType } from "@src/types/messages.types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { finishAssistedMessagesConfig } from "./complete-invitation/config/completeInvitation.config";
import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import UsersUI from "./interface";
import { IUsersMessage } from "./types/users.types";

function Users() {
  const [isSelected, setIsSelected] = useState<string>();
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const location = useLocation();

  useEffect(() => {
    if (location.state?.tab) {
      setIsSelected(location.state.tab);
      if (location.state?.messageType && location.state?.username) {
        handleShowMessage(location.state.messageType, location.state.username);
      }
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

  const handleShowMessage = (messageType: EMessageType, username: string) => {
    const { title, description, appearance, icon } =
      finishAssistedMessagesConfig[messageType];

    setMessage({
      visible: true,
      title,
      description: description(username),
      icon,
      appearance,
    });
  };

  const handleCloseMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <UsersUI
      isSelected={isSelected || privilegeUserTabsConfig.privilegesUsers.id}
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
