import { Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { StyledMenuItemLink } from "./styles";
import { MenuItemSpacingType } from "./types";
import { Icon } from "@inubekit/icon";

interface MenuItemProps {
  title: string;
  description?: string;
  spacing?: MenuItemSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  isDisabled?: boolean;
  path?: string;
  onClick?: () => void;
}

function MenuItem(props: MenuItemProps) {
  const {
    title,
    description,
    spacing = "wide",
    iconBefore,
    iconAfter,
    isDisabled = false,
    path = "#",
    onClick,
  } = props;

  return (
    <StyledMenuItemLink
      spacing={spacing}
      disabled={isDisabled}
      to={path}
      onClick={onClick}
    >
      <Stack gap="12px" alignItems="center">
        {iconBefore && (
          <Icon
            icon={iconBefore}
            spacing="narrow"
            size="24px"
            appearance="dark"
            disabled={isDisabled}
          />
        )}
        <Stack direction="column" gap="4px">
          <Text type="label" size="large" disabled={isDisabled}>
            {title}
          </Text>
          <Text
            type="body"
            size="small"
            appearance="gray"
            disabled={isDisabled}
          >
            {description}
          </Text>
        </Stack>
      </Stack>
      {iconAfter && (
        <Icon
          icon={iconAfter}
          spacing="narrow"
          size="24px"
          appearance="dark"
          disabled={isDisabled}
        />
      )}
    </StyledMenuItemLink>
  );
}

export { MenuItem };
export type { MenuItemProps };
