import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";
import { StyledAppMenuCard, StyledIcon } from "./styles";

function AppMenuCard(props) {
  const { icon, label, description, url } = props;
  return (
    <Stack>
      <StyledAppMenuCard to={url}>
        <Stack spacing="4" align="center">
          <StyledIcon>{icon}</StyledIcon>
          <Text align="center" typoToken="titleLarge">
            {label}
          </Text>
          <Text align="center" typoToken="bodySmall">
            {description}
          </Text>
        </Stack>
      </StyledAppMenuCard>
    </Stack>
  );
}

export { AppMenuCard };
