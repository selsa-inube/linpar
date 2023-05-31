import { Stack, Text } from "@inube/design-system";
import { StyledLink, StyledOption } from "./styles";

function MenuOption(props) {
  const { label, icon, option } = props;

  const optionContent = () => (
    <Stack gap="12px" alignItems="center">
      {icon}
      <Text typo="bodySmall">{label}</Text>
    </Stack>
  );

  if (typeof option === "function") {
    return (
      <StyledOption variant="none" onClick={option}>
        {optionContent()}
      </StyledOption>
    );
  }

  return <StyledLink to={option}>{optionContent()}</StyledLink>;
}

export { MenuOption };
