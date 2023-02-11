import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";
import { MdKeyboardArrowRight } from "react-icons/md";
import { StyledLink } from "./styles";

function MenuLink(props) {
  const { label, disabled = false, icon, selected, url } = props;

  return (
    <StyledLink disabled={disabled} selected={selected} to={url}>
      <Stack direction="row" spacing="24" align="center">
        {icon}
        <Text typoToken={selected ? "labelLarge" : "bodyMedium"}>{label}</Text>
      </Stack>
      <MdKeyboardArrowRight />
    </StyledLink>
  );
}

export { MenuLink };
