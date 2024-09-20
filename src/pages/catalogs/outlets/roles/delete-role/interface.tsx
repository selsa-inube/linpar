import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteRolModal } from "./config/deleteRol.config";

interface DeleteRoleUIProps {
  deleteRolModal: typeof deleteRolModal;
  handleDeleteRol: () => void;
  hover: boolean;
  loading: boolean;
  nameRol: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeleteRoleUI = (props: DeleteRoleUIProps) => {
  const {
    deleteRolModal,
    handleDeleteRol,
    hover,
    loading,
    nameRol,
    setHover,
    setShowModal,
    showModal,
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
          description={description(nameRol)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteRol}
        />
      )}
    </>
  );
};
