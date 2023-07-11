import React, { useState } from "react";
import { ActivateUserUI } from "./interface";

function ActivateUser(props) {
  const { user, handleActivateUser, showComplete } = props;
  const [showActivateUserModal, setShowActivateUserModal] = useState(false);

  const handleToggleModal = () => {
    setShowActivateUserModal(!showActivateUserModal);
  };

  return (
    <ActivateUserUI
      active={user.active}
      showActivateUserModal={showActivateUserModal}
      user={user}
      id={user.id}
      handleToggleModal={handleToggleModal}
      handleActivateUser={handleActivateUser}
      showComplete={showComplete}
    />
  );
}

export { ActivateUser };
