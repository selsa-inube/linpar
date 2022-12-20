import { Stack } from "../../../../components/layout/Stack";
import { Text } from "../../../../components/data/Text";
import { CircularProgress } from "../../../../components/feedback/CircularProgress";

import { StyledCheckingCredentials } from "./styles";

function CheckingCredentials() {
  return (
    <StyledCheckingCredentials>
      <Stack>
        <Text token="titleLarge" align="center">
          Validando credenciales
        </Text>
        <Text token="titleSmall" align="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack align="center">
        <CircularProgress />
      </Stack>
    </StyledCheckingCredentials>
  );
}

export { CheckingCredentials };
