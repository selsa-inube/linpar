import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { Icon } from "@inubekit/icon";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { Text } from "@inubekit/text";
import { deletePositionModal } from "./config/deletePositions.config";
import { StyledContainer, StyledContainerIcon } from "./styles";

interface DeletePositionUIProps {
  deletePositionModal: typeof deletePositionModal;
  handleDeletePosition: () => void;
  hover: boolean;
  loading: boolean;
  namePosition: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeletePositionUI = (props: DeletePositionUIProps) => {
  const {
    deletePositionModal,
    handleDeletePosition,
    hover,
    loading,
    namePosition,
    setHover,
    setShowModal,
    showModal,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deletePositionModal[messageType!];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);

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
              size="16px"
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
          description={description(namePosition)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeletePosition}
        />
      )}
    </>
  );
};
