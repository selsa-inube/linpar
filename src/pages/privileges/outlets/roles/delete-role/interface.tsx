import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@src/components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteRolModal } from "./config/deleteRol.config";

interface DeleteRoleUIProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  rol: string;
  handleDeleteRol: () => void;
  deleteRolModal: typeof deleteRolModal;
  hover: boolean;
  setHover: (hover: boolean) => void;
}

export const DeleteRoleUI = (props: DeleteRoleUIProps) => {
  const {
    showModal,
    setShowModal,
    rol,
    handleDeleteRol,
    deleteRolModal,
    hover,
    setHover,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteRolModal[messageType!];

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Icon
          icon={<MdOutlineDelete />}
          onClick={() => setShowModal(true)}
          appearance={hover ? "primary" : "dark"}
          cursorHover
        />
      </div>
      {showModal && (
        <DecisionModal
          title={title}
          description={description(rol)}
          actionText={actionText}
          appearance={appearance}
          closeModal={() => setShowModal(false)}
          handleClick={() => handleDeleteRol(rol)}
        />
      )}
    </>
  );
};
