import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@src/components/feedback/DecisionModal";

interface DeleteRoleUIProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  rol: string;
  handleDeleteUser?: () => void;
}

const deleteRolModal = {
  delete: {
    title: "Eliminar Rol",
    description: (k_Rol: string) =>
      `¿Está seguro de que desea eliminar el rol ${k_Rol}?`,
    actionText: "Eliminar",
    appearance: "error",
  },
};

export const DeleteRoleUI = (props: DeleteRoleUIProps) => {
  const { showModal, setShowModal, rol, handleDeleteUser } = props;
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
          title={deleteRolModal.delete.title}
          description={deleteRolModal.delete.description(rol)}
          actionText={deleteRolModal.delete.actionText}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteUser!}
        />
      )}
    </>
  );
};
