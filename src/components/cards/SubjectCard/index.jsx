import { Text, Stack, useMediaQuery } from "@inube/design-system";
import { StyledSubjectCard, StyledIcon } from "./styles";
import { MdOutlinePushPin } from "react-icons/md";
import { useState } from "react";
import { InfoModal } from "../../feedback/InfoModal";

function SubjectCard(props) {
  const { userData, title } = props;
  const [showModal, setshowModal] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const handleToggleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <StyledSubjectCard smallScreen={smallScreen} isActive={showModal}>
      <Stack direction="column">
        <Text typo="labelMedium" align="end">
          {userData.name}
        </Text>
        <Text typo="bodySmall" align="end">
          {userData.identification}
        </Text>
      </Stack>
      <StyledIcon onClick={handleToggleModal} isActive={showModal}>
        <MdOutlinePushPin size={24} />
      </StyledIcon>
      {showModal && (
        <InfoModal
          title={title}
          closeModal={handleToggleModal}
          dataUser={userData}
        />
      )}
    </StyledSubjectCard>
  );
}

export { SubjectCard };
