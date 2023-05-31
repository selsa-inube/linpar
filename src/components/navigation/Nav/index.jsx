import { Stack } from "@inube/design-system";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { StyledIcon } from "../../Header/styles";
import { Text } from "../../data/Text";
import { NavLink } from "../NavLink";
import {
  StyledDivisor,
  StyledFooter,
  StyledNav,
  StyledNavList,
  StyledTitle,
} from "./styles";

function Nav(props) {
  const { links, title, handleNav, nav } = props;
  const location = useLocation();
  const currentUrl = location.pathname;

  const isSelected = (url, nav) => currentUrl.startsWith(url) && !nav;

  return (
    <StyledNav>
      <Stack direction="column">
        {nav && (
          <StyledIcon>
            <MdClose onClick={handleNav} />
          </StyledIcon>
        )}

        <StyledTitle>
          <Text typoToken="titleSmall">{title}</Text>
        </StyledTitle>
        <StyledNavList>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                label={link.label}
                icon={link.icon}
                isSelected={isSelected(link.url, nav)}
                url={link.url}
                handleClick={handleNav}
              />
            </li>
          ))}
        </StyledNavList>
        <StyledDivisor />
      </Stack>
      <StyledFooter>
        <Text typoToken="labelMedium">© 2023 Inube</Text>
      </StyledFooter>
    </StyledNav>
  );
}

export { Nav };
