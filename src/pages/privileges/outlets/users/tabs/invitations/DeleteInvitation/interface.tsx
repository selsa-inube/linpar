import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { Icon } from "@inubekit/icon";
import { Text } from "@inubekit/text";
import { deleteInvitationModal } from "./config/deleteInvitation.config";

import { StyledContainer, StyledContainerIcon } from "./styles";

interface DeleteLinixInvitationUIProps {
  deleteInvitationModal: typeof deleteInvitationModal;
  handleDeleteLinixInvitation: () => void;
  hover: boolean;
  loading: boolean;
  nameLinixInvitation: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeleteLinixInvitationUI = (
  props: DeleteLinixInvitationUIProps
) => {
  const {
    deleteInvitationModal,
    handleDeleteLinixInvitation,
    hover,
    loading,
    nameLinixInvitation,
    setHover,
    setShowModal,
    showModal,
  } = props;

  const messageType = EMessageType.DELETE;

  const { title, description, actionText, appearance } =
    deleteInvitationModal[messageType!];

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
          description={description(nameLinixInvitation)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteLinixInvitation}
        />
      )}
    </>
  );
};
