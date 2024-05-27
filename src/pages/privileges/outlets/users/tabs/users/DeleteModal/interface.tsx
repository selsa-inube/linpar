import { MdOutlineDelete } from "react-icons/md";

import { Icon } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";

import { deleteLinixUsersModal } from "./config/deleteLinixUsers.config";

interface DeleteLinixUserUIProps {
  deleteLinixUsersModal: typeof deleteLinixUsersModal;
  handleDeleteLinixUser: () => void;
  hover: boolean;
  loading: boolean;
  nameLinixuser: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeleteLinixUserUI = (props: DeleteLinixUserUIProps) => {
  const {
    deleteLinixUsersModal,
    handleDeleteLinixUser,
    hover,
    loading,
    nameLinixuser,
    setHover,
    setShowModal,
    showModal,
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
          description={description(nameLinixuser)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteLinixUser}
        />
      )}
    </>
  );
};
