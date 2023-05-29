import { Stack } from "@inube/design-system";
import { Text } from "../../data/Text";
import { StyledLink } from "./styles";

function MenuLink(props) {
  const { label, icon, path } = props;

  return (
    <StyledLink to={path}>
      <Stack gap="12px" alignItems="center">
        {icon}
        <Text typoToken="bodySmall">{label}</Text>
      </Stack>
    </StyledLink>
  );
}

export { MenuLink };
