import { Stack } from "../layout/Stack";
import { Heading } from "../data/Heading";
import { Text } from "../data/Text";
import { StyledGreetingContainer, StyledIcon } from "./styles";

function PageTitle(props) {
  const { title, icon, description } = props;

  return (
    <StyledGreetingContainer>
      <Stack spacing="8">
        <Stack direction="row" spacing="8" align="center">
          <StyledIcon> {icon} </StyledIcon>
          <Heading level="1"> {title} </Heading>
        </Stack>
        <Text> {description} </Text>
      </Stack>
    </StyledGreetingContainer>
  );
}

export { PageTitle };
