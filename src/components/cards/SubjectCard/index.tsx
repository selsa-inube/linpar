import { Stack, Text, Icon, useMediaQuery } from "@inube/design-system";
import { useState } from "react";
import { StyledSubjectCard } from "./styles";
import { ILabel } from "./types";
import { InteractiveModal } from "@src/components/feedback/InteractiveModal";

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
          <Text type="label" size="medium" textAlign="end">
            {Object.values(subjectData)[0]}
          </Text>
          <Text size="small" textAlign="end">
            {Object.values(subjectData)[1]}
          </Text>
        </Stack>
        <Icon
          appearance={showModal ? "primary" : "dark"}
          icon={icon}
          size="24px"
          shape="circle"
        />
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
