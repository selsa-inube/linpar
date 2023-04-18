import { Stack, Text } from "@inube/design-system";
import { MdClear } from "react-icons/md";
import { ProgressBar } from "../ProgressBar";
import { StyledSectionMessage, StyledIcon } from "./styles";

function SectionMessageUI(props) {
  const {
    icon,
    title,
    description,
    appearance,
    duration,
    handleMouseEnter,
    closeSectionMessage,
    handleMouseLeave,
    isPaused,
    isMessageResponsive,
  } = props;

  const MAX_DESCRIPTION_LENGTH = 240;

  const newDescription = description.substring(0, MAX_DESCRIPTION_LENGTH);

  return (
    <StyledSectionMessage
      appearance={appearance}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isMessageResponsive={isMessageResponsive}
    >
      <Stack justifyContent="space-between">
        <Stack
          gap="16px"
          alignItems={isMessageResponsive ? "center" : undefined}
        >
          <StyledIcon appearance={appearance}>{icon}</StyledIcon>
          <Stack direction="column" gap="6px">
            <Text typo="labelLarge">{title}</Text>
            {!isMessageResponsive ? (
              <Text typo="bodySmall" appearance="secondary">
                {newDescription}
              </Text>
            ) : null}
          </Stack>
        </Stack>
        <Stack alignItems={isMessageResponsive ? "center" : undefined}>
          <MdClear size={16} cursor="pointer" onClick={closeSectionMessage} />
        </Stack>
      </Stack>
      {duration && (
        <ProgressBar
          isPaused={isPaused}
          colorToken={appearance}
          duration={duration}
          size={4}
          handleAnimationEnd={closeSectionMessage}
        />
      )}
    </StyledSectionMessage>
  );
}

export { SectionMessageUI };
