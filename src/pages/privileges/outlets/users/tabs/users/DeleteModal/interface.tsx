import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteLinixUsersModal } from "./config/deleteLinixUseCase.config";

interface DeleteLinixUsersUIProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  linixUsers: string;
  handleDeletelinixUsers: () => void;
  deleteLinixUsersModal: typeof deleteLinixUsersModal;
  hover: boolean;
  setHover: (hover: boolean) => void;
}

export const DeleteLinixUsersUI = (props: DeleteLinixUsersUIProps) => {
  const {
    showModal,
    setShowModal,
    linixUsers,
    handleDeletelinixUsers,
    deleteLinixUsersModal,
    hover,
    setHover,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteLinixUsersModal[messageType!];

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
          description={description(linixUsers)}
          actionText={actionText}
          appearance={appearance}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeletelinixUsers}
        />
      )}
    </>
  );
};
