import { DecisionModal } from "@components/feedback/DecisionModal";
import { Switch } from "@inube/design-system";

import { EMessageType } from "@src/types/messages.types";
import { activateUserModal } from "@pages/privileges/outlets/users/config/activateUser.config";

import { IActivateOptionModal } from "./types";
import { IDataActivateOption } from ".";

interface IctivateFormOptionsUI<T extends IDataActivateOption> {
  active: boolean;
  showActivateOptions: boolean;
  id: string;
  handleToggleModal: () => void;
  handleActivateOptions: () => void;
  showComplete: boolean;
  data: T;
}

function ActivateOptionsModal<T extends IDataActivateOption>(
  props: IActivateOptionModal<T>
) {
  const {
    active,
    data,
    handleToggleModal,
    handleActivateOptions: handleActivateUser,
  } = props;
  let messageType = EMessageType.DEACTIVATION;
  if (!active) {
    messageType = EMessageType.ACTIVATION;
  }

  const { title, description, textAction, appearance } =
    activateUserModal[messageType];

  return (
    <>
      <DecisionModal
        title={title}
        description={description(data)}
        actionText={textAction}
        appearance={appearance}
        closeModal={handleToggleModal}
        handleClick={handleActivateUser}
      />
    </>
  );
}

export function ActivateFormOptionsUI<T extends IDataActivateOption>(
  props: IctivateFormOptionsUI<T>
) {
  const {
    active,
    showActivateOptions: showActivateUserModal,
    data,
    id,
    handleToggleModal,
    handleActivateOptions: handleActivateUser,
    showComplete,
  } = props;

  return (
    <>
      <Switch
        checked={active}
        onChange={handleToggleModal}
        id={id.toString()}
        label={showComplete ? "Activar" : ""}
        padding={`s0 s0 s0 ${showComplete ? "s200" : "s0"}`}
      />

      {showActivateUserModal && (
        <ActivateOptionsModal
          active={active}
          data={data}
          handleToggleModal={handleToggleModal}
          handleActivateOptions={handleActivateUser}
        />
      )}
    </>
  );
}
