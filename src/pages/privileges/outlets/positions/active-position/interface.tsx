import { useEffect, useState } from "react";
import { EMessageType } from "@src/types/messages.types";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { Toggle } from "@inubekit/toggle";
import { Text } from "@inubekit/text";
import { activatePositionModal } from "./config/activatePosition.config";
import { IMessageState } from "../../users/types/forms.types";

interface IActivatePositionUI {
  active: boolean;
  showActivatePosition: boolean;
  id: string;
  message: IMessageState;
  showComplete: boolean;
  loading: boolean;
  activateModalConfig: typeof activatePositionModal;
  handleToggleModal: () => void;
  handleActivatePosition: () => void;
  handleCloseSectionMessage: () => void;
}

export function ActivatePositionUI(props: IActivatePositionUI) {
  const {
    active,
    showActivatePosition: showActivatePositionModal,
    id,
    showComplete,
    activateModalConfig,
    handleToggleModal,
    handleActivatePosition,
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
      {showActivatePositionModal && (
        <DecisionModal
          title={title}
          description={description(id)}
          actionText={textAction}
          appearance={appearance}
          closeModal={handleToggleModal}
          handleClick={handleActivatePosition}
        />
      )}
    </>
  );
}
