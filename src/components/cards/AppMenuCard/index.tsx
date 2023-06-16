import { Text } from "@components/data/Text";
import { Stack } from "@inube/design-system";
import { StyledAppMenuCard, StyledIcon } from "./styles";

interface AppMenuCardProps {
  icon: string;
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
            <Text align="center" typoToken="titleMedium">
              {label}
            </Text>
            <Text align="center" typoToken="bodySmall" colorToken="secondary">
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
