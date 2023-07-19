import {
  InteractiveModal,
  Stack,
  Text,
  useMediaQuery,
} from "@inube/design-system";
import { useState } from "react";
import { StyledIcon, StyledSubjectCard } from "./styles";
import { ILabel } from "./types";

interface SubjectCardProps {
  subjectData: Record<string, string | number>;
  title: string;
  labels?: ILabel[];
  icon: JSX.Element;
}

function SubjectCard(props: SubjectCardProps) {
  const { subjectData, title, labels, icon } = props;
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
        <StyledIcon isActive={showModal}>{icon}</StyledIcon>
      </StyledSubjectCard>
      {showModal && (
        <InteractiveModal
          title={title}
          closeModal={handleToggleModal}
          infoData={subjectData}
          labels={labels}
          portalId="portal"
        />
      )}
    </>
  );
}

export { SubjectCard };
export type { SubjectCardProps };
