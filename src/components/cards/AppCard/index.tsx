import { Stack } from "@inube/design-system";
import { Text } from "../../data/Text";

import { StyledAppCard, StyledIcon } from "./styles";

interface AppCardProps {
  label: string;
  description: string;
  icon: JSX.Element;
  url: string;
}

function AppCard(props: AppCardProps) {
  const { label, description, icon, url } = props;

  return (
    <StyledAppCard to={url}>
      <Stack gap="16px" direction="column">
        <Text typoToken="titleMedium">{label}</Text>
        <Text typoToken="bodySmall">{description}</Text>
      </Stack>
      <Stack alignItems="flex-end" direction="column">
        <StyledIcon>{icon}</StyledIcon>
      </Stack>
    </StyledAppCard>
  );
}

export { AppCard };
export type { AppCardProps };
