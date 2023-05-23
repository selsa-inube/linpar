import { Text, Stack, useMediaQuery } from "@inube/design-system";
import { StyledSubjectCard, StyledIcon } from "./styles";
import { MdOutlinePushPin } from "react-icons/md";
import { useState } from "react";
import { InfoModal } from "../../feedback/InfoModal";

function SubjectCard(props) {
  const { subjectData, title } = props;
  const [showModal, setShowModal] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <StyledSubjectCard
        onClick={handleToggleModal}
        smallScreen={smallScreen}
        isActive={showModal}
      >
        <Stack direction="column">
          <Text typo="labelMedium" align="end">
            {Object.values(subjectData)[0]}
          </Text>
          <Text typo="bodySmall" align="end">
            {Object.values(subjectData)[1]}
          </Text>
        </Stack>
        <StyledIcon isActive={showModal}>
          <MdOutlinePushPin size={24} />
        </StyledIcon>
      </StyledSubjectCard>
      {showModal && (
        <InfoModal
          title={title}
          closeModal={handleToggleModal}
          infoData={subjectData}
        />
      )}
    </>
  );
}

export { SubjectCard };
