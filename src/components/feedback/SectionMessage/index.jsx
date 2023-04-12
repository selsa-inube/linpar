import { Text } from "../../data/Text";
import { Stack } from "@inube/design-system";
import { StyledContainer, StyledIcon, StyledDescription } from "./styles";
import { MdClear } from "react-icons/md";

function SectionMessage(props) {
  const { icon, title, description, appearance } = props;

  return (
    <StyledContainer appearance={appearance}>
      <StyledIcon appearance={appearance}>{icon}</StyledIcon>
      <StyledDescription>
        <Stack justifyContent="space-between" gap="26px">
          <Text typoToken="labelLarge">{title}</Text>
          <MdClear />
        </Stack>
        <Text typoToken="bodySmall">{description}</Text>
      </StyledDescription>
    </StyledContainer>
  );
}

export { SectionMessage };
