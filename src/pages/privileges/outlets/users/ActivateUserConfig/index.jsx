import { createPortal } from "react-dom";
import { Switch } from "@inube/design-system";
import React, { useState } from "react";
import { DecisionModal } from "../../../../../components/feedback/DecisionModal";
import { activateUserDecisionConfig } from "./config/decisionModalMessages.config";

function ActivateUserConfig(props) {
  const { entry, id } = props;
  const [actUsermodal, setActUserModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const handelOpenModal = () => {
    setActUserModal(true);
  };

  const handleCloseModal = () => {
    setActUserModal(false);
  };

  const handleChange = () => {
    handelOpenModal();
  };

  const activationUserModal = () => {
    let messageType;
    if (!checked) {
      messageType = "activation";
    } else {
      messageType = "desactivation";
    }

    const { title, description, textAction, appearance } =
      activateUserDecisionConfig[messageType];

    return (
      <>
        {actUsermodal && (
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
  };

  const onActionConfirm = () => {
    setChecked(!checked);
  };

  return (
    <form onSubmit={onActionConfirm}>
      <Switch
        checked={checked}
        handleChange={handleChange}
        id={id.toString()}
      />

      {actUsermodal &&
        createPortal(
          <>{activationUserModal()}</>,
          document.getElementById("decision")
        )}
    </form>
  );
}

export { ActivateUserConfig };
