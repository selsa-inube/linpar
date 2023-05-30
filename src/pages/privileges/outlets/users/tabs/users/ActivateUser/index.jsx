import React, { useState } from "react";
import { ActivateUserUI } from "./interface";

function ActivateUser(props) {
  const { user, handleActivateUser } = props;
  const [showActivateUserModal, setShowActivateUserModal] = useState(false);

  const handleToggleModal = () => {
    setShowActivateUserModal(!showActivateUserModal);
  };

  const onActionConfirm = () => {
    handleActivateUser();
  };

  return (
    <>
      <ActivateUserUI
        active={user.active}
        showActivateUserModal={showActivateUserModal}
        user={user}
        id={user.id}
        handleToggleModal={handleToggleModal}
        onActionConfirm={onActionConfirm}
      />
    </>
  );
}

export { ActivateUser };
