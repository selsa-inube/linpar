import { Stack } from "../../../../components/layout/Stack";
import { Text } from "../../../../components/data/Text";
import { CircularProgress } from "../../../../components/feedback/CircularProgress";

import { StyledCheckingCredentials } from "./styles";

function CheckingCredentialsUI() {
  return (
    <StyledCheckingCredentials>
      <Stack>
        <Text typoToken="titleLarge" align="center">
          Validando credenciales
        </Text>
        <Text typoToken="titleSmall" align="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack align="center">
        <CircularProgress />
      </Stack>
    </StyledCheckingCredentials>
  );
}

export { CheckingCredentialsUI };
