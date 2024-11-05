import { Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { StyledLink } from "./styles";

interface MenuLinkprops {
  label: string;
  icon?: JSX.Element;
  path: string;
}

function MenuLink(props: MenuLinkprops) {
  const { label, icon, path } = props;

  return (
    <StyledLink to={path}>
      <Stack gap="12px" alignItems="center">
        {icon}
        <Text size="small">{label}</Text>
      </Stack>
    </StyledLink>
  );
}

export { MenuLink };
export type { MenuLinkprops };
