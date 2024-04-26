import { DecisionModal } from "@components/feedback/DecisionModal";
import { Switch } from "@inube/design-system";

import { activateRoleModal } from "../config/activateRole.config";
import { EMessageType } from "@src/types/messages.types";

import { IActivateOptionModal } from "./types";

interface IActivateRoleUI {
  active: boolean;
  showActivateRole: boolean;
  id: string;
  handleToggleModal: () => void;
  handleActivateRole: () => void;
  showComplete: boolean;
  activateModalConfig: typeof activateRoleModal;
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

  return (
    <>
      <Switch
        checked={active}
        onChange={handleToggleModal}
        id={id}
        label={showComplete ? "Activar" : ""}
        padding={`s0 s0 s0 ${showComplete ? "s200" : "s0"}`}
      />

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
