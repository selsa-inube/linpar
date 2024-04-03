import { useState } from "react";
import { DeleteRoleUI } from "./interface";

interface IDeleteRoleProps {
  rol: string;
  handleDeleteUser?: () => void;
}

export const DeleteRole = (props: IDeleteRoleProps) => {
  const { rol, handleDeleteUser } = props;

  console.log(rol, "esto es rol");

  const [showModal, setShowModal] = useState(false);

  return (
    <DeleteRoleUI
      showModal={showModal}
      setShowModal={setShowModal}
      rol={rol}
      handleDeleteUser={handleDeleteUser}
    />
  );
};
