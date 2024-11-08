import { useEffect, useState } from "react";

import { Text } from "@inubekit/text";
import { EMessageType } from "@src/types/messages.types";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { Toggle } from "@inubekit/toggle";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IActivateOptionModal } from "./types";
import { activateRoleModal } from "./config/activateRole.config";
import { StyledActive } from "./styles";

interface IActivateRoleUI {
  active: boolean;
  showActivateRole: boolean;
  id: string;
  handleToggleModal: () => void;
  handleActivateRole: () => void;
  showComplete: boolean;
  activateModalConfig: typeof activateRoleModal;
  message: IMessageState;
  loading: boolean;
  onCloseSectionMessage: () => void;
}

function ActivateRoleModal(props: IActivateOptionModal) {
  const {
    active,
    handleToggleModal,
    handleActivateRole,
    id,
    activateModalConfig,
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

  return (
    <DecisionModal
      title={title}
      description={description(id)}
      actionText={textAction}
      appearance={appearance}
      closeModal={handleToggleModal}
      handleClick={handleActivateRole}
    />
  );
}

export function ActivateRoleUI(props: IActivateRoleUI) {
  const {
    active,
    showActivateRole: showActivateRoleModal,
    id,
    handleToggleModal,
    handleActivateRole: handleActivateUser,
    showComplete,
    activateModalConfig,
  } = props;

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
      <StyledActive>
        <Toggle
          checked={active}
          onChange={handleToggleModal}
          id={id}
          size={"small"}
          name={showComplete ? "Activar" : ""}
          padding={`0px 0px 0px ${showComplete ? "16px" : "0px"}`}
        />
      </StyledActive>

      {isMobile && (
        <Text size="small" type="body">
          {active ? "Activo" : "Inactivo"}
        </Text>
      )}

      {showActivateRoleModal && (
        <ActivateRoleModal
          active={active}
          id={id}
          handleToggleModal={handleToggleModal}
          handleActivateRole={handleActivateUser}
          activateModalConfig={activateModalConfig}
        />
      )}
    </>
  );
}
