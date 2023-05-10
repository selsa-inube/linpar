import { createPortal } from "react-dom";
import { Switch } from "@inube/design-system";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { activateUserConfig } from "../config/activateUser.config";

function ActivateUserModal(
  checked,
  showActivateUserModal,
  entry,
  handleCloseModal,
  onActionConfirm
) {
  let messageType;
  if (!checked) {
    messageType = "activation";
  } else {
    messageType = "deactivation";
  }

  const { title, description, textAction, appearance } =
    activateUserConfig[messageType];

  return (
    <>
      {showActivateUserModal && (
        <DecisionModal
          title={title}
          description={description(entry)}
          actionText={textAction}
          appearance={appearance}
          closeModal={handleCloseModal}
          handleClick={onActionConfirm}
        />
      )}
    </>
  );
}

function ActivateUserUI(props) {
  const {
    checked,
    showActivateUserModal,
    entry,
    id,
    handleChange,
    handleCloseModal,
    onActionConfirm,
  } = props;
  return (
    <form onSubmit={onActionConfirm}>
      <Switch
        checked={checked}
        handleChange={handleChange}
        id={id.toString()}
      />

      {showActivateUserModal &&
        ActivateUserModal(
          checked,
          showActivateUserModal,
          entry,
          handleCloseModal,
          onActionConfirm
        )}
    </form>
  );
}
export { ActivateUserUI };
