import { Stack, Text } from "@inube/design-system";
import { MdKeyboardArrowRight } from "react-icons/md";
import { StyledLink } from "./styles";

function NavLink(props) {
  const { label, disabled = false, icon, isSelected, url, handleClick } = props;

  return (
    <StyledLink
      disabled={disabled}
      selected={isSelected}
      to={url}
      onClick={handleClick}
    >
      <Stack gap="24px" alignItems="center">
        {icon}
        <Text typo={isSelected ? "labelLarge" : "bodyMedium"}>{label}</Text>
      </Stack>
      <MdKeyboardArrowRight />
    </StyledLink>
  );
}

export { NavLink };
