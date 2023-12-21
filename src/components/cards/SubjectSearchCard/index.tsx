import { Stack, Text, Icon, useMediaQuery } from "@inube/design-system";
import { useState } from "react";
import { StyledSubjectSearchCard } from "./styles";
import { ILabel } from "./types";

interface SubjectCardProps {
  subjectData: Record<string, string | number> | any;
  title: string;
  labels?: ILabel[];
  onClick: any;
}

function SubjectSearchCard(props: SubjectCardProps) {
  const { subjectData, onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 970px)");

  const handleToggleModal = () => {
    setIsActive(!isActive);
    onClick;
  };

  return (
    <>
      <StyledSubjectSearchCard
        onClick={handleToggleModal}
        smallScreen={smallScreen}
        isActive={isActive}
      >
        <Stack
          justifyContent={"start"}
          gap={smallScreen ? "0px" : "8px"}
          padding={smallScreen ? "s0" : "s100 s200"}
        >
          {!smallScreen && (
            <Stack direction="column">
              <Text type="label" size="medium" textAlign="start">
                {Object.values(subjectData)[3]}
              </Text>
              <Text size="medium" textAlign="start">
                {Object.values(subjectData)[1]}
              </Text>
            </Stack>
          )}
          <Stack
            width={smallScreen ? "56px" : "260"}
            height={smallScreen ? "56px" : "auto"}
            justifyContent="center"
            alignItems="center"
          ></Stack>
        </Stack>
      </StyledSubjectSearchCard>
    </>
  );
}

export { SubjectSearchCard };
export type { SubjectCardProps };
