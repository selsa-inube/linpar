import { DecisionModal } from "@components/feedback/DecisionModal";
import { Icon } from "@inube/design-system";

import { activateUserModal } from "@pages/privileges/outlets/users/config/activateUser.config";
import { EMessageType } from "@src/types/messages.types";

import { IActivateOptionModal } from "./types";
import { MdOutlineDelete } from "react-icons/md";

interface IctivateFormOptionsUI {
  active: boolean;
  showActivateOptions: boolean;
  id: string;
  handleToggleModal: () => void;
  handleActivateOptions: () => void;
  showComplete: boolean;
  activateModalConfig: typeof activateUserModal;
}

function ActivateOptionsModal(props: IActivateOptionModal) {
  const {
    active,
    handleToggleModal,
    handleActivateOptions: handleActivateUser,
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
      handleClick={handleActivateUser}
    />
  );
}

export function ActivateFormOptionsUI(props: IctivateFormOptionsUI) {
  const {
    active,
    showActivateOptions: showActivateUserModal,
    id,
    handleToggleModal,
    handleActivateOptions: handleActivateUser,
    activateModalConfig,
  } = props;

  return (
    <>
      <Icon
        icon={<MdOutlineDelete />}
        appearance="dark"
        onClick={handleToggleModal}
        cursorHover
      />

      {showActivateUserModal && (
        <ActivateOptionsModal
          active={active}
          id={id}
          handleToggleModal={handleToggleModal}
          handleActivateOptions={handleActivateUser}
          activateModalConfig={activateModalConfig}
        />
      )}
    </>
  );
}
