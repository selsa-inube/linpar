import { Switch } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import { DecisionModal } from "@components/feedback/DecisionModal";
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

  return (
    <>
      <Switch
        checked={active}
        onChange={handleToggleModal}
        id={id}
        label={showComplete ? "Activar" : ""}
        padding={`s0 s0 s0 ${showComplete ? "s200" : "s0"}`}
      />

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
