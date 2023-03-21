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
          <Stack spacing="4" direction="column">
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
