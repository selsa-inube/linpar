import { EMessageType } from "@src/types/messages.types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { inube } from "@inube/design-system";
import { TextsUI } from "./interface";
import { finishAssistedMessagesConfig } from "@src/pages/privileges/outlets/users/complete-invitation/config/completeInvitation.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { colorTabsConfig } from "./config/colorTabs.config";
import { textFormsConfig } from "./config/text.config";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";

function Texts() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState(colorTabsConfig.primary.id);
  const [textConfig, setTextConfig] = useState(
    JSON.parse(JSON.stringify(inube.color))
  );
  const [originalTextConfig] = useState(inube.color);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const location = useLocation();

  useEffect(() => {
    if (location.state?.tab) {
      if (location.state?.messageType && location.state?.username) {
        handleShowMessage(location.state.messageType, location.state.username);
      }
    }
  }, [location]);

  // const handleTabChange = (tabId: string) => {
  //   setIsSelected(tabId);
  // };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
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

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const handleTextConfigUpdate = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    const updatedTextConfig = { ...textConfig.text };

    if (
      updatedTextConfig[appearance] &&
      updatedTextConfig[appearance][category]
    ) {
      updatedTextConfig[appearance][category] = getTokenColor(updatedTokenName);
    }
    const updatedInubeColor = {
      ...inube.color,
      text: { ...updatedTextConfig },
    };

    setTextConfig(updatedInubeColor);
  };

  return (
    <TextsUI
      originalTextConfig={originalTextConfig}
      textTokens={textConfig}
      textConfig={textFormsConfig}
      palette={inube.color.palette}
      selectedTab={selectedTab}
      handleChangeColor={handleTextConfigUpdate}
      handleTabChange={handleTabChange}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      message={message}
      handleCloseMessage={handleCloseMessage}
    />
  );
}

export { Texts };
