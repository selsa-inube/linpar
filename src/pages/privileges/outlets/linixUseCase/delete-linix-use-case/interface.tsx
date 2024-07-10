import { MdOutlineDelete } from "react-icons/md";

import { Icon } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";

import { deleteLinixUseCaseModal } from "./config/deleteLinixUseCase.config";

interface DeleteLinixUseCaseUIProps {
  deleteLinixUseCaseModal: typeof deleteLinixUseCaseModal;
  handleDeleteLinixUseCase: () => void;
  hover: boolean;
  loading: boolean;
  linixUseCase: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeleteLinixUseCaseUI = (props: DeleteLinixUseCaseUIProps) => {
  const {
    deleteLinixUseCaseModal,
    handleDeleteLinixUseCase,
    hover,
    loading,
    linixUseCase,

    setHover,
    setShowModal,
    showModal,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteLinixUseCaseModal[messageType!];

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
          description={description(linixUseCase)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteLinixUseCase}
        />
      )}
    </>
  );
};
