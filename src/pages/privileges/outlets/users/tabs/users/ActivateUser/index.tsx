import React, { useState } from "react";
import { ActivateUserUI } from "./interface";
import { IGeneralInformationEntry } from "../../../types/forms.types";

interface ActivateUserProps {
  user: IGeneralInformationEntry;
  handleActivateUser: () => void;
  showComplete: boolean;
}

function ActivateUser(props: ActivateUserProps) {
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
