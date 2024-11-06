import { MdOutlineDelete } from "react-icons/md";

import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { deleteRolModal } from "./config/deleteRol.config";
import { useEffect, useState } from "react";

import { StyledContainerIcon, StyledContainer } from "./styles";

interface DeleteRoleUIProps {
  deleteRolModal: typeof deleteRolModal;
  handleDeleteRol: () => void;
  hover: boolean;
  loading: boolean;
  nameRol: string;
  setHover: (hover: boolean) => void;
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}

export const DeleteRoleUI = (props: DeleteRoleUIProps) => {
  const {
    deleteRolModal,
    handleDeleteRol,
    hover,
    loading,
    nameRol,
    setHover,
    setShowModal,
    showModal,
  } = props;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);
  const messageType = EMessageType.DELETE;
  const { title, description, actionText, appearance } =
    deleteRolModal[messageType!];

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
          description={description(nameRol)}
          actionText={actionText}
          appearance={appearance}
          loading={loading}
          closeModal={() => setShowModal(false)}
          handleClick={handleDeleteRol}
        />
      )}
    </>
  );
};
