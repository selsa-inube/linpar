import { Stack } from "../layout/Stack";
import { Text } from "../data/Text";
import { StyledPageTitle, StyledIcon } from "./styles";

function PageTitle(props) {
  const { title, icon, description } = props;

  return (
    <StyledPageTitle>
      <Stack spacing="8">
        <Stack direction="row" spacing="8" align="center">
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
