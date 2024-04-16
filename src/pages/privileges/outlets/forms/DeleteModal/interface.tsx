import { DecisionModal } from "@components/feedback/DecisionModal";
import { Icon } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import { MdOutlineDelete } from "react-icons/md";
import { deleteUserModal } from "@pages/privileges/outlets/users/config/deleteUser.config";
import { IDeleteOptionModal } from "./types";

interface IDeleteFormOptionsUI {
  showActivateOptions: boolean;
  id: string;
  handleToggleModal: () => void;
  showComplete: boolean;
  modalConfig: typeof deleteUserModal;
}

function DeleteOptionsModal(props: IDeleteOptionModal) {
  const { handleToggleModal, id, modalConfig } = props;
  let messageType = EMessageType.DELETE;

  const {
    title = "",
    description,
    actionText,
    appearance,
  } = modalConfig[messageType];

  return (
    <DecisionModal
      title={title}
      description={description(id)}
      actionText={actionText}
      appearance={appearance}
      closeModal={handleToggleModal}
      handleClick={handleToggleModal}
    />
  );
}

export function DeleteFormOptionsUI(props: IDeleteFormOptionsUI) {
  const {
    showActivateOptions: showActivateModal,
    id,
    handleToggleModal,
    modalConfig,
  } = props;

  return (
    <>
      <Icon
        icon={<MdOutlineDelete />}
        appearance="dark"
        onClick={handleToggleModal}
        cursorHover
      />

      {showActivateModal && (
        <DeleteOptionsModal
          id={id}
          handleToggleModal={handleToggleModal}
          modalConfig={modalConfig}
        />
      )}
    </>
  );
}
