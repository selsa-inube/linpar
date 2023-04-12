import { Text } from "../../data/Text";
import { Stack } from "@inube/design-system";

import { StyledAppCard, StyledIcon } from "./styles";

function AppCard(props) {
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
