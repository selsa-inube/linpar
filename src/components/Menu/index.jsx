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

function NavLink(props) {
  const {
    label,
    type = "button",
    disabled = false,
    icon,
    icon2,
    active,
  } = props;

  return (
    <StyledLink type={type} disabled={disabled} active={active}>
      {icon}
      {label}
      {icon2}
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
            <NavLink
              label={link.label}
              icon={link.icon}
              icon2={<MdKeyboardArrowRight />}
              //change value to style test
              active={index === 0 ? true : false}
            />
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

export { Menu };
