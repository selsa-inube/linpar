import { DecisionModal } from "@components/feedback/DecisionModal";
import { Switch } from "@inube/design-system";

import { activateUserModal } from "@pages/privileges/outlets/users/config/activateUser.config";
import { EMessageType } from "@src/types/messages.types";

import { IActivateOptionModal } from "./types";

interface IctivateFormOptionsUI {
  i_Activo: string;
  showActivateOptions: boolean;
  k_Usuari: string;
  handleToggleModal: () => void;
  handleActivateOptions: () => void;
  showComplete: boolean;
  activateModalConfig: typeof activateUserModal;
}

function ActivateOptionsModal(props: IActivateOptionModal) {
  const {
    i_Activo,
    handleToggleModal,
    handleActivateOptions: handleActivateUser,
    k_Usuari,
    activateModalConfig,
  } = props;
  let messageType = EMessageType.DEACTIVATION;
  if (!i_Activo) {
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
      description={description(k_Usuari)}
      actionText={textAction}
      appearance={appearance}
      closeModal={handleToggleModal}
      handleClick={handleActivateUser}
    />
  );
}

export function ActivateFormOptionsUI(props: IctivateFormOptionsUI) {
  const {
    i_Activo,
    showActivateOptions: showActivateUserModal,
    k_Usuari,
    handleToggleModal,
    handleActivateOptions: handleActivateUser,
    showComplete,
    activateModalConfig,
  } = props;

  return (
    <>
      <Switch
        checked={i_Activo}
        onChange={handleToggleModal}
        id={k_Usuari}
        label={showComplete ? "Activar" : ""}
        padding={`s0 s0 s0 ${showComplete ? "s200" : "s0"}`}
      />

      {showActivateUserModal && (
        <ActivateOptionsModal
          i_Activo={i_Activo}
          k_Usuari={k_Usuari}
          handleToggleModal={handleToggleModal}
          handleActivateOptions={handleActivateUser}
          activateModalConfig={activateModalConfig}
        />
      )}
    </>
  );
}
