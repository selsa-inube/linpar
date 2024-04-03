import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@src/components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteRolModal } from "./config/deleteRol.config";

interface DeleteRoleUIProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  rol: string;
  handleDeleteRol?: () => void;
  deleteRolModal: typeof deleteRolModal;
}

export const DeleteRoleUI = (props: DeleteRoleUIProps) => {
  const { showModal, setShowModal, rol, handleDeleteRol, deleteRolModal } =
    props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteRolModal[messageType!];

  return (
    <>
      <Icon
        icon={<MdOutlineDelete />}
        onClick={() => setShowModal(true)}
        appearance="dark"
        cursorHover
      />
      {showModal && (
        <DecisionModal
          title={title}
          description={description(rol)}
          actionText={actionText}
          appearance={appearance}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteRol!}
        />
      )}
    </>
  );
};
