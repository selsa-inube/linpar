import { Switch } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { activateUserModal } from "../../../config/activateUser.config";

function ActivateUserModal(props) {
  const { active, user, handleToggleModal, handleActivateUser } = props;
  let messageType;
  if (!active) {
    messageType = "activation";
  } else {
    messageType = "deactivation";
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

function ActivateUserUI(props) {
  const {
    active,
    showActivateUserModal,
    user,
    id,
    handleToggleModal,
    handleActivateUser,
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
          handleActivateUser={handleActivateUser}
        />
      )}
    </>
  );
}
export { ActivateUserUI };
