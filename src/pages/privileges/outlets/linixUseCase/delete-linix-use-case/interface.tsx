import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { DecisionModal } from "@src/components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteLinixUseCaseModal } from "./config/deleteLinixUseCase.config";

interface DeleteLinixUseCaseUIProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  linixUseCase: string;
  handleDeleteLinixUseCase: () => void;
  deleteLinixUseCaseModal: typeof deleteLinixUseCaseModal;
  hover: boolean;
  setHover: (hover: boolean) => void;
}

export const DeleteLinixUseCaseUI = (props: DeleteLinixUseCaseUIProps) => {
  const {
    showModal,
    setShowModal,
    linixUseCase,
    handleDeleteLinixUseCase,
    deleteLinixUseCaseModal,
    hover,
    setHover,
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
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteLinixUseCase}
        />
      )}
    </>
  );
};
