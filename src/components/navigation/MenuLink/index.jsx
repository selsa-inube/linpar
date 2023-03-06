import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";
import { MdKeyboardArrowRight } from "react-icons/md";
import { StyledLink } from "./styles";

function MenuLink(props) {
  const {
    label,
    disabled = false,
    icon,
    isSelected,
    url,
    menu,
    handleClick,
  } = props;

  return (
    <StyledLink
      disabled={disabled}
      selected={isSelected}
      to={url}
      menu={menu}
      onClick={handleClick}
    >
      <Stack direction="row" spacing="24" align="center">
        {icon}
        <Text typoToken={isSelected ? "labelLarge" : "bodyMedium"}>
          {label}
        </Text>
      </Stack>
      <MdKeyboardArrowRight />
    </StyledLink>
  );
}

export { MenuLink };
