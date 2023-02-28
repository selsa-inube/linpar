import {
  StyledMenu,
  StyledTitle,
  StyledNavList,
  StyledDivisor,
  StyledFooter,
} from "./styles";
import { Text } from "../../data/Text";
import { useLocation } from "react-router-dom";
import { Stack } from "../../layout/Stack";
import { MenuLink } from "../MenuLink";
import { StyledIcon } from "../../Header/styles";
import { MdClose } from "react-icons/md";

function Menu(props) {
  const { links, title, handleMenu, menu } = props;
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <StyledMenu>
      <Stack>
        {menu && (
          <StyledIcon>
            <MdClose onClick={handleMenu} />
          </StyledIcon>
        )}

        <StyledTitle>
          <Text typoToken="titleSmall">{title}</Text>
        </StyledTitle>
        <StyledNavList>
          {links.map((link) => (
            <li key={link.id}>
              <MenuLink
                label={link.label}
                icon={link.icon}
                selected={currentUrl.startsWith(link.url)}
                url={link.url}
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
