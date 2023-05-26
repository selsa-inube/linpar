import { Stack } from "@inube/design-system";
import { MenuLink } from "../MenuLink";
import { StyledMenu } from "./styles";

function Menu(props) {
  const { links } = props;

  return (
    <StyledMenu>
      <Stack direction="column">
        {links.map((link) => (
          <MenuLink
            label={link.label}
            key={link.id}
            icon={link.icon}
            path={link.path}
          />
        ))}
      </Stack>
    </StyledMenu>
  );
}

export { Menu };
