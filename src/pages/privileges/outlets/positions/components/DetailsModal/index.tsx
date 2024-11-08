import { useEffect, useState } from "react";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Text } from "@inubekit/text";
import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { Icon } from "@inubekit/icon";
import { StyledContainer, StyledContainerIcon } from "./styles";

interface IDetailsModalProps {
  data: { [key: string]: string | number };
}

export const DetailsModal = (props: IDetailsModalProps) => {
  const { data } = props;

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

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
      <StyledContainer onClick={handleToggleModal}>
        <StyledContainerIcon>
          <Icon
            icon={<MdOutlineAssignmentTurnedIn />}
            appearance="dark"
            size="16px"
          />
        </StyledContainerIcon>

        {isMobile && (
          <Text size="small" type="body">
            Detalles
          </Text>
        )}
      </StyledContainer>
      {showModal && data && (
        <InteractiveModal
          portalId="portal"
          title="Detalles de cargo"
          infoData={data}
          infoTitle="Información"
          closeModal={handleToggleModal}
        />
      )}
    </>
  );
};
