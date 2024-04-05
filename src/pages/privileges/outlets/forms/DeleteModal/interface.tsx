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
  linuxUseCaseModalConfig: typeof deleteUserModal;
}

function DeleteOptionsModal(props: IDeleteOptionModal) {
  const { handleToggleModal, id, linuxUseCaseModalConfig } = props;
  let messageType = EMessageType.DELETE;

  const {
    title = "",
    description,
    actionText,
    appearance,
  } = linuxUseCaseModalConfig[messageType];

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
    linuxUseCaseModalConfig,
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
          linuxUseCaseModalConfig={linuxUseCaseModalConfig}
        />
      )}
    </>
  );
}
