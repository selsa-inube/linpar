import { EMessageType } from "@src/types/messages.types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { SurfacesUI } from "./interface";
import { finishAssistedMessagesConfig } from "@src/pages/privileges/outlets/users/complete-invitation/config/completeInvitation.config";
import { privilegeUserTabsConfig } from "@src/pages/privileges/outlets/users/config/usersTabs.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { colorTabsConfig } from "./config/colorTabs.config";
import { textFormsConfig } from "./config/text.config";
import { inube } from "@inube/design-system";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";

function Surfaces() {
  const [isSelected, setIsSelected] = useState<string>();
  const [selectedTab, setSelectedTab] = useState(colorTabsConfig.primary.id);
  const [searchText, setSearchText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const location = useLocation();
  const [palette, setPalette] = useState(inube.color.palette);
  const [surfaceConfig, setSurfaceConfig] = useState(inube.color.surface);

  useEffect(() => {
    if (location.state?.tab) {
      setIsSelected(location.state.tab);
      if (location.state?.messageType && location.state?.username) {
        handleShowMessage(location.state.messageType, location.state.username);
      }
    }
  }, [location]);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
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

  const handleSurfaceConfigUpdate = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    const updatedSurfaceConfig = { ...surfaceConfig };
    if (
      updatedSurfaceConfig[appearance] &&
      updatedSurfaceConfig[appearance][category]
    ) {
      updatedSurfaceConfig[appearance][category] =
        getTokenColor(updatedTokenName);
    }
    setSurfaceConfig(updatedSurfaceConfig);
  };

  const handleShowMessage = (messageType: EMessageType, username: string) => {
    const { title, description, appearance, icon } =
      finishAssistedMessagesConfig[
        messageType as keyof typeof finishAssistedMessagesConfig
      ];

    setMessage({
      visible: true,
      data: {
        title,
        description: description(username),
        icon,
        appearance,
      },
    });
  };

  const handleCloseMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <SurfacesUI
      palette={palette}
      handleChangeColor={handleSurfaceConfigUpdate}
      textConfig={textFormsConfig}
      isSelected={isSelected || privilegeUserTabsConfig.privilegesUsers.id}
      selectedTab={selectedTab}
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

export { Surfaces };
