import { Stack } from "@inube/design-system";
import { Text } from "../data/Text";
import { StyledPageTitle, StyledIcon } from "./styles";

function PageTitle(props) {
  const { title, icon, description } = props;

  return (
    <StyledPageTitle>
      <Stack gap="8px" direction="column">
        <Stack gap="8px" alignItems="center">
          <StyledIcon> {icon} </StyledIcon>
          <Text as="h1" typoToken="titleLarge">
            {title}
          </Text>
        </Stack>
        <Text colorToken="secondary"> {description} </Text>
      </Stack>
    </StyledPageTitle>
  );
}

export { PageTitle };
