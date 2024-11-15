import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { Icon } from "@inubekit/icon";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { EMessageType } from "@src/types/messages.types";
import { Text } from "@inubekit/text";
import { deleteLinixUsersModal } from "./config/deleteLinixUsers.config";

import { StyledContainer, StyledContainerIcon } from "./styles";

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
