import React, { useState } from "react";
import { ActivateUserUI } from "./interface";

function ActivateUser(props) {
  const { entry, id } = props;
  const [showActivateUserModal, setShowActivateUserModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const handelOpenModal = () => {
    setShowActivateUserModal(true);
  };

  const handleCloseModal = () => {
    setShowActivateUserModal(false);
  };

  const handleChange = () => {
    handelOpenModal();
  };

  const onActionConfirm = () => {
    setChecked(!checked);
  };

  return (
    <ActivateUserUI
      checked={checked}
      showActivateUserModal={showActivateUserModal}
      entry={entry}
      id={id}
      handleChange={handleChange}
      handleCloseModal={handleCloseModal}
      onActionConfirm={onActionConfirm}
    />
  );
}

export { ActivateUser };
