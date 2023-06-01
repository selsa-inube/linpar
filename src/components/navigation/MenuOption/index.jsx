import { Stack, Text } from "@inube/design-system";
import { StyledOption } from "./styles";

function MenuOption(props) {
  const { label, icon, handleClick } = props;

  return (
    <StyledOption variant="none" onClick={handleClick}>
      <Stack gap="12px" alignItems="center">
        {icon}
        <Text typo="bodySmall">{label}</Text>
      </Stack>
    </StyledOption>
  );
}

export { MenuOption };
