import { Stack, Text } from "@inube/design-system";
import { StyledLink } from "./styles";

function MenuLink(props) {
  const { label, icon, path } = props;

  return (
    <StyledLink to={path}>
      <Stack gap="12px" alignItems="center">
        {icon}
        <Text typo="bodySmall">{label}</Text>
      </Stack>
    </StyledLink>
  );
}

export { MenuLink };
