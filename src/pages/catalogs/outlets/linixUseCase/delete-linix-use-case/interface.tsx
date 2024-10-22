import { useState, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Icon } from "@inube/design-system";
import { Text } from "@inubekit/text";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteLinixUseCaseModal } from "./config/deleteLinixUseCase.config";
import { StyledContainer, StyledContainerIcon } from "./styles";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);

  const messageType = EMessageType.DELETE;
  const { title, description, actionText, appearance } =
    deleteLinixUseCaseModal[messageType!];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1201);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StyledContainer>
          <StyledContainerIcon>
            <Icon
              icon={<MdOutlineDelete />}
              onClick={() => setShowModal(true)}
              appearance={hover ? "primary" : "dark"}
              cursorHover
            />
          </StyledContainerIcon>
          {isMobile && (
            <Text size="small" type="body" onClick={() => setShowModal(true)}>
              Eliminar
            </Text>
          )}
        </StyledContainer>
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
