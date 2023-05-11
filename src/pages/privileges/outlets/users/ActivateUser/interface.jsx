import { Switch } from "@inube/design-system";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { activateUserConfig } from "../config/activateUser.config";

function ActivateUserModal(active, user, handleCloseModal, onActionConfirm) {
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
        closeModal={handleCloseModal}
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
    handleChange,
    handleCloseModal,
    onActionConfirm,
  } = props;
  return (
    <>
      <form onSubmit={onActionConfirm}>
        <Switch
          checked={active}
          handleChange={handleChange}
          id={id.toString()}
        />

        {showActivateUserModal &&
          ActivateUserModal(active, user, handleCloseModal, onActionConfirm)}
      </form>
    </>
  );
}
export { ActivateUserUI };
