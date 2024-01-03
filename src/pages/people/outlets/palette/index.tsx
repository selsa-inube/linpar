import { EMessageType } from "@src/types/messages.types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { PaletteUI } from "./interface";
import { finishAssistedMessagesConfig } from "@src/pages/privileges/outlets/users/complete-invitation/config/completeInvitation.config";
import { privilegeUserTabsConfig } from "@src/pages/privileges/outlets/users/config/usersTabs.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

function Palette() {
  const [isLoading, setIsLoading] = useState(false);
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
  }, [location]);

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
    <PaletteUI
      handleSubmitForm={() => {}}
      handleReset={() => {}}
      isLoading={isLoading}
      message={message}
      onCloseSectionMessage={() => {}}
      // hasChanges={hasChanges}
      handleCloseMessage={handleCloseMessage}
    />
  );
}

export { Palette };
