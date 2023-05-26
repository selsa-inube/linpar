import { Stack } from "@inube/design-system";
import { Text } from "../../data/Text";
import { StyledLink } from "./styles";

function MenuLink(props) {
  const { label, icon, path } = props;

  return (
    <StyledLink to={path}>
      <Stack gap="24px" alignItems="center">
        {icon}
        <Text typoToken="bodyMedium">{label}</Text>
      </Stack>
    </StyledLink>
  );
}

export { MenuLink };
