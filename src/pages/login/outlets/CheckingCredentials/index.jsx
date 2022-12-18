import { Stack } from "../../../../components/layout/Stack";
import { Text } from "../../../../components/data/Text";
import { CircularProgress } from "../../../../components/feedback/CircularProgress";

function CheckingCredentials() {
  return (
    <>
      <Stack>
        <Text token="headlineLarge">Validando credenciales</Text>
        <Text token="headlineSmall">Espere un momento, por favor.</Text>
      </Stack>
      <CircularProgress />
    </>
  );
}

export { CheckingCredentials };
