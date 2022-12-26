import { Stack } from "../../../../components/layout/Stack";
import { Text } from "../../../../components/data/Text";
import { CircularProgress } from "../../../../components/feedback/CircularProgress";

function CheckingCredentialsUI() {
  return (
    <Stack spacing="16">
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
    </Stack>
  );
}

export { CheckingCredentialsUI };
