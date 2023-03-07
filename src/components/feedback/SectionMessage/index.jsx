import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";
import { StyledContainer, StyledIcon, StyledDescription } from "./styles";
import { MdClear } from "react-icons/md";

function SectionMessage(props) {
  const { icon, title, description, appearance } = props;

  return (
    <StyledContainer appearance={appearance}>
      <StyledIcon appearance={appearance}>{icon}</StyledIcon>
      <StyledDescription>
        <Stack direction="row" justify="space-between">
          <Text typoToken="labelLarge">{title}</Text>
          <MdClear />
        </Stack>
        <Text typoToken="bodySmall">{description}</Text>
      </StyledDescription>
    </StyledContainer>
  );
}

export { SectionMessage };
