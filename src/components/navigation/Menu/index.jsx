import {
  StyledMenu,
  StyledTitle,
  StyledNavList,
  StyledDivisor,
  StyledFooter,
} from "./styles";
import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";
import { MenuLink } from "../MenuLink";
import { StyledIcon } from "../../Header/styles";
import { MdClose } from "react-icons/md";

function Menu(props) {
  const { links, title, handleMenu, menu } = props;
  return (
    <StyledMenu>
      <Stack>
        {menu ? (
          <StyledIcon>
            <MdClose onClick={handleMenu} />
          </StyledIcon>
        ) : null}

        <StyledTitle>
          <Text typoToken="titleSmall">{title}</Text>
        </StyledTitle>
        <StyledNavList>
          {links.map((link, index) => (
            <li key={link.id}>
              <MenuLink
                label={link.label}
                icon={link.icon}
                selected={index === 0 ? true : false}
                to={link.url}
              />
            </li>
          ))}
        </StyledNavList>
        <StyledDivisor />
      </Stack>
      <StyledFooter>
        <Text typoToken="labelMedium">© 2023 Sistemas Enlinea S.A</Text>
      </StyledFooter>
    </StyledMenu>
  );
}

export { Menu };
