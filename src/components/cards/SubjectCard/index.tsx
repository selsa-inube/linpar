import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { InteractiveModal } from "@src/components/feedback/InteractiveModal";
import { ILabel } from "@src/components/feedback/InteractiveModal/types";
import { useState } from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { StyledIcon, StyledSubjectCard } from "./styles";

interface SubjectCardProps {
  subjectData: Record<string, string | number>;
  title: string;
  labels?: ILabel[];
}

function SubjectCard(props: SubjectCardProps) {
  const { subjectData, title, labels } = props;
  const [showModal, setShowModal] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 970px)");

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
        <InteractiveModal
          title={title}
          closeModal={handleToggleModal}
          infoData={subjectData}
          labels={labels}
        />
      )}
    </>
  );
}

export { SubjectCard };
export type { SubjectCardProps };
