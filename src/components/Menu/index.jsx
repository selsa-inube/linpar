import {
  StyledMenu,
  StyledTitle,
  StyledNavList,
  StyledDivisor,
  StyledFooter,
  StyledLink,
} from "./styles";
import { Text } from "../data/Text";
import { Stack } from "../layout/Stack";
import { MdKeyboardArrowRight } from "react-icons/md";

function MenuLink(props) {
  const { label, disabled = false, icon, selected, url } = props;

  return (
    <StyledLink disabled={disabled} selected={selected} to={url}>
      {icon}
      <Text typoToken={selected ? "labelLarge" : "bodyMedium"}>{label}</Text>
      <MdKeyboardArrowRight />
    </StyledLink>
  );
}

function Menu(props) {
  const { links, title } = props;
  return (
    <StyledMenu>
      <Stack>
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
        <Text typoToken="labelMedium">© 2022 Sistemas Enlinea S.A</Text>
      </StyledFooter>
    </StyledMenu>
  );
}

export { Menu, MenuLink };
