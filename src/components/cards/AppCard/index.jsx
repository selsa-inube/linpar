import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";

import { StyledAppCard, StyledIcon } from "./styles";

function AppCard(props) {
  const { label, description, icon, url } = props;

  return (
    <StyledAppCard to={url}>
      <Stack spacing="16">
        <Text typoToken="titleMedium">{label}</Text>
        <Text>{description}</Text>
      </Stack>
      <Stack align="end">
        <StyledIcon>{icon}</StyledIcon>
      </Stack>
    </StyledAppCard>
  );
}

export { AppCard };
