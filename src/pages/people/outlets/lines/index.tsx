import { EMessageType } from "@src/types/messages.types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { LinesUI } from "./interface";
import { finishAssistedMessagesConfig } from "@src/pages/privileges/outlets/users/complete-invitation/config/completeInvitation.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import type { IPeopleColorProps } from "src/routes/people";
import { linesFormsConfig } from "./config/lines.config";
import { colorTabsConfig } from "./config/colorTabs.config";

function Lines(props: IPeopleColorProps) {
  const { token, handleSubmit } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState(colorTabsConfig.primary.id);
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

  return (
    <LinesUI
      tokens={token}
      handleSubmit={handleSubmit}
      linesConfig={linesFormsConfig}
      selectedTab={selectedTab}
      handleTabChange={handleTabChange}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      message={message}
      handleCloseMessage={handleCloseMessage}
    />
  );
}

export { Lines };
