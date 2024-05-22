import { Switch } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
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

  return (
    <>
      <Switch
        checked={active}
        onChange={handleToggleModal}
        id={id}
        label={showComplete ? "Activar" : ""}
        padding={`s0 s0 s0 ${showComplete ? "s200" : "s0"}`}
      />

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
