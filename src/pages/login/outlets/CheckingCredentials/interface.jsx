import { Stack } from "@inube/design-system";
import { Text } from "@components/data/Text";
import { Spinner } from "@inube/design-system";

function CheckingCredentialsUI() {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text typoToken="titleLarge" align="center">
          Validando credenciales
        </Text>
        <Text typoToken="titleSmall" align="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" />
      </Stack>
    </Stack>
  );
}

export { CheckingCredentialsUI };
