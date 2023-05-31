import { Stack, useMediaQuery } from "@inube/design-system";
import { Text } from "../data/Text";
import { StyledPageTitle, StyledIcon } from "./styles";

function PageTitle(props) {
  const { title, icon, description } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledPageTitle>
      <Stack gap="8px" direction="column">
        <Stack gap="8px" alignItems="center">
          <StyledIcon> {icon} </StyledIcon>
          <Text as="h1" typoToken={smallScreen ? "titleMedium" : "titleLarge"}>
            {title}
          </Text>
        </Stack>
        <Text
          colorToken="secondary"
          typoToken={smallScreen ? "bodySmall" : "bodyMedium"}
        >
          {description}
        </Text>
      </Stack>
    </StyledPageTitle>
  );
}

export { PageTitle };
