import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { StyledOption } from "./styles";

interface MenuOptionProps {
  label: string;
  icon?: JSX.Element;
  handleClick: () => void;
}

function MenuOption(props: MenuOptionProps) {
  const { label, icon, handleClick } = props;

  return (
    <StyledOption onClick={handleClick} type="button">
      <Stack gap="12px" alignItems="center">
        {icon}
        <Text size="small">{label}</Text>
      </Stack>
    </StyledOption>
  );
}

export { MenuOption };
export type { MenuOptionProps };
