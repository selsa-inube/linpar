import { Switch } from "@inube/design-system";
import { DecisionModal } from "../../../../../../../components/feedback/DecisionModal";
import { activateUserConfig } from "../../../config/activateUser.config";

function ActivateUserModal(props) {
  const { active, user, handleToggleModal, onActionConfirm } = props;
  let messageType;
  if (!active) {
    messageType = "activation";
  } else {
    messageType = "deactivation";
  }

  const { title, description, textAction, appearance } =
    activateUserConfig[messageType];

  return (
    <>
      <DecisionModal
        title={title}
        description={description(user)}
        actionText={textAction}
        appearance={appearance}
        closeModal={handleToggleModal}
        handleClick={onActionConfirm}
      />
    </>
  );
}

function ActivateUserUI(props) {
  const {
    active,
    showActivateUserModal,
    user,
    id,
    handleToggleModal,
    onActionConfirm,
  } = props;

  return (
    <>
      <Switch
        checked={active}
        handleChange={handleToggleModal}
        id={id.toString()}
      />

      {showActivateUserModal && (
        <ActivateUserModal
          active={active}
          user={user}
          handleToggleModal={handleToggleModal}
          onActionConfirm={onActionConfirm}
        />
      )}
    </>
  );
}
export { ActivateUserUI };
