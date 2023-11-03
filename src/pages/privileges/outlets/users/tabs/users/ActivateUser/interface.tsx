import { DecisionModal } from "@components/feedback/DecisionModal";
import { Switch } from "@inube/design-system";
import { activateUserModal } from "../../../config/activateUser.config";
import { IActivateUserModal } from "./types";
import { EMessageType } from "@src/types/messages.types";
import { IGeneralInformationEntry } from "../../../types/forms.types";

interface ActivateUserUIProps {
  active: IGeneralInformationEntry["active"];
  showActivateUserModal: boolean;
  user: IGeneralInformationEntry;
  id: IGeneralInformationEntry["id"];
  handleToggleModal: () => void;
  handleActivateUser: () => void;
  showComplete: boolean;
}

function ActivateUserModal(props: IActivateUserModal) {
  const { active, user, handleToggleModal, handleActivateUser } = props;
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
        description={description(user)}
        actionText={textAction}
        appearance={appearance}
        closeModal={handleToggleModal}
        handleClick={handleActivateUser}
      />
    </>
  );
}

function ActivateUserUI(props: ActivateUserUIProps) {
  const {
    active,
    showActivateUserModal,
    user,
    id,
    handleToggleModal,
    handleActivateUser,
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
        <ActivateUserModal
          active={active}
          user={user}
          handleToggleModal={handleToggleModal}
          handleActivateUser={handleActivateUser}
        />
      )}
    </>
  );
}
export { ActivateUserUI };
