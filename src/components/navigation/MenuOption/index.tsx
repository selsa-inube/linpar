import { Text } from "@inube/design-system";
import { StyledOption } from "./styles";
import { Stack } from "@inubekit/stack";

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
