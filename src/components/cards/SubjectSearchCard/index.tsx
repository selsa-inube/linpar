import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { useState } from "react";
import { StyledSubjectSearchCard } from "./styles";

interface SubjectSearchCardProps {
  subjectSearchData: { [key: string]: string | number };
  onClick: (data: { [key: string]: string | number }) => void;
}

function SubjectSearchCard(props: SubjectSearchCardProps) {
  const { subjectSearchData, onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 970px)");

  const handleToggleModal = () => {
    setIsActive(!isActive);
    onClick(subjectSearchData);
  };

  return (
    <>
      <StyledSubjectSearchCard
        onClick={handleToggleModal}
        $smallScreen={smallScreen}
        $isActive={isActive}
      >
        <Stack justifyContent={"start"} gap={"8px"} padding={"s100 s200"}>
          <Stack direction="column">
            <Text type="label" size="medium" textAlign="start">
              {Object.values(subjectSearchData)[0]}
            </Text>
            <Text size="medium" textAlign="start">
              {Object.values(subjectSearchData)[1]}
            </Text>
          </Stack>
        </Stack>
      </StyledSubjectSearchCard>
    </>
  );
}

export { SubjectSearchCard };
export type { SubjectSearchCardProps };
