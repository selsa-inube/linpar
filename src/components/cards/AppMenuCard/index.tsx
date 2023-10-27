import { Stack, Text } from "@inube/design-system";
import { StyledAppMenuCard, StyledIcon } from "./styles";

interface AppMenuCardProps {
  icon: JSX.Element;
  label: string;
  description: string;
  url: string;
}

function AppMenuCard(props: AppMenuCardProps) {
  const { icon, label, description, url } = props;
  return (
    <Stack direction="column">
      <StyledAppMenuCard to={url}>
        <Stack gap="4px" alignItems="center" direction="column">
          <StyledIcon>{icon}</StyledIcon>
          <Stack gap="4px" direction="column">
            <Text textAlign="center" size="medium">
              {label}
            </Text>
            <Text textAlign="center" size="small" appearance="gray">
              {description}
            </Text>
          </Stack>
        </Stack>
      </StyledAppMenuCard>
    </Stack>
  );
}

export { AppMenuCard };
export type { AppMenuCardProps };
