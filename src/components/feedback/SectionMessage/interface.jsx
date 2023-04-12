import { Stack, Text } from "@inube/design-system";
import { MdClear } from "react-icons/md";
import { ProgressBar } from "../ProgressBar";
import { StyledSectionMessage, StyledIcon, StyledMessage } from "./styles";

const MAX_DESCRIPTION_LENGTH = 240;

function SectionMessageUI({
  icon,
  title,
  description,
  appearance,
  duration,
  handleHideSectionMessage,
  handleMouseEnter,
  handleMouseLeave,
  isHidden,
  isPaused,
  isMessageResponsive,
}) {
  const newDescription = description.substring(0, MAX_DESCRIPTION_LENGTH);

  return (
    <StyledSectionMessage
      appearance={appearance}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHidden={isHidden}
      isMessageResponsive={isMessageResponsive}
    >
      <StyledMessage>
        <Stack gap="16px" alignItems={isMessageResponsive && "center"}>
          <StyledIcon appearance={appearance}>{icon}</StyledIcon>
          <Stack direction="column" gap="6px">
            <Text typo="labelLarge">{title}</Text>
            {!isMessageResponsive && (
              <Text typo="bodySmall" appearance="secondary">
                {newDescription}
              </Text>
            )}
          </Stack>
        </Stack>
        <Stack alignItems={isMessageResponsive && "center"}>
          <MdClear
            size={16}
            cursor="pointer"
            onClick={handleHideSectionMessage}
          />
        </Stack>
      </StyledMessage>
      {duration && (
        <ProgressBar
          isPaused={isPaused}
          colorToken={appearance}
          duration={duration}
          size={4}
        />
      )}
    </StyledSectionMessage>
  );
}

export { SectionMessageUI };
