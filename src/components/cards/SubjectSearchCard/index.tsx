import { Stack, Text, useMediaQuery, Icon, Grid } from "@inube/design-system";
import { useState } from "react";
import { MdClear } from "react-icons/md";
import { StyledSubjectSearchCard, StyledSubjectSearchCardText } from "./styles";

interface SubjectSearchCardProps {
  subjectSearchData: { [key: string]: string | number };
  onClick: (data: { [key: string]: string | number }) => void;
  closeIcon?: boolean;
  closeSearchCard?: () => void;
}

function SubjectSearchCard(props: SubjectSearchCardProps) {
  const { subjectSearchData, onClick, closeIcon, closeSearchCard } = props;
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 970px)");

  const handleToggleModal = () => {
    setIsActive(!isActive);
    onClick(subjectSearchData);
  };

  return (
    <>
      <StyledSubjectSearchCard smallScreen={smallScreen} isActive={isActive}>
        <Grid templateColumns="1fr auto">
          <StyledSubjectSearchCardText onClick={handleToggleModal}>
            <Stack direction="column">
              <Text type="label" size="medium" textAlign="start">
                {Object.values(subjectSearchData)[0]}
              </Text>
              <Text size="medium" textAlign="start">
                {Object.values(subjectSearchData)[1]}
              </Text>
            </Stack>
          </StyledSubjectSearchCardText>
          {closeIcon && (
            <Stack justifyContent="end" padding="s100 s200 s0 s0">
              <Icon
                icon={<MdClear />}
                appearance="dark"
                size="16px"
                onClick={closeSearchCard}
              />
            </Stack>
          )}
        </Grid>
      </StyledSubjectSearchCard>
    </>
  );
}

export { SubjectSearchCard };
export type { SubjectSearchCardProps };
