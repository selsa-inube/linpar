import { useEffect, useState } from "react";
import { Toggle } from "@inubekit/toggle";
import { EMessageType } from "@src/types/messages.types";
import { Text } from "@inubekit/text";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { activateUsersModal } from "./config/activateUsers.config";
import { IMessageState } from "../../../types/forms.types";

interface IActivateUsersUI {
  active: boolean;
  showActivateUsers: boolean;
  id: string;
  message: IMessageState;
  showComplete: boolean;
  activateModalConfig: typeof activateUsersModal;
  handleToggleModal: () => void;
  handleActivateUsers: () => void;
  handleCloseSectionMessage: () => void;
  loading: boolean;
}

export function ActivateUsersUI(props: IActivateUsersUI) {
  const {
    active,
    showActivateUsers: showactivateUsersModal,
    id,
    message,
    showComplete,
    activateModalConfig,
    handleToggleModal,
    handleActivateUsers,
    handleCloseSectionMessage,
  } = props;

  let messageType = EMessageType.DEACTIVATION;
  if (!active) {
    messageType = EMessageType.ACTIVATION;
  }

  const {
    title = "",
    description,
    textAction,
    appearance,
  } = activateModalConfig[messageType];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1201);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Toggle
        checked={active}
        onChange={handleToggleModal}
        id={id}
        size={"small"}
        name={showComplete ? "Activar" : ""}
        padding={`0px 0px 0px ${showComplete ? "16px" : "s0"}`}
      />
      {isMobile && (
        <Text size="small" type="body">
          {active ? "Activo" : "Inactivo"}
        </Text>
      )}
      {showactivateUsersModal && (
        <DecisionModal
          title={title}
          description={description(id)}
          actionText={textAction}
          appearance={appearance}
          closeModal={handleToggleModal}
          handleClick={handleActivateUsers}
        />
      )}
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleCloseSectionMessage}
        />
      )}
    </>
  );
}
