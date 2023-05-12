import React, { useState } from "react";
import { ActivateUserUI } from "./interface";

function ActivateUser(props) {
  const { user } = props;
  const [showActivateUserModal, setShowActivateUserModal] = useState(false);
  const [active, setActive] = useState(false);

  const handleOpenModal = () => {
    setShowActivateUserModal(true);
  };

  const handleCloseModal = () => {
    setShowActivateUserModal(false);
  };

  const handleChange = () => {
    handleOpenModal();
  };

  const onActionConfirm = () => {
    setActive(!active);
  };

  return (
    <ActivateUserUI
      active={active}
      showActivateUserModal={showActivateUserModal}
      user={user}
      id={user.id}
      handleChange={handleChange}
      handleCloseModal={handleCloseModal}
      onActionConfirm={onActionConfirm}
    />
  );
}

export { ActivateUser };
