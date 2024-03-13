import { useState } from "react";
import { ActivateFormOptionsUI } from "./interface";

export interface IDataActivateOption {
  id: string;
  active: boolean;
}

interface IActivateFormOptionsProps<T extends IDataActivateOption> {
  handleActivateUser: () => void;
  showComplete: boolean;
  data: T;
}

export function ActivateFormOptions<T extends IDataActivateOption>(
  props: IActivateFormOptionsProps<T>
) {
  const { data, handleActivateUser, showComplete } = props;
  const [showActivateUserModal, setShowActivateUserModal] = useState(false);

  const handleToggleModal = () => {
    setShowActivateUserModal(!showActivateUserModal);
  };

  return (
    <ActivateFormOptionsUI
      active={data.active}
      showActivateOptions={showActivateUserModal}
      data={data}
      id={data.id}
      handleToggleModal={handleToggleModal}
      handleActivateOptions={handleActivateUser}
      showComplete={showComplete}
    />
  );
}

//export { ActivateUser };
