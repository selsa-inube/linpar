import { Stack, Text } from "@inube/design-system";
import { Spinner } from "@inube/design-system";

function CheckingCredentialsUI(): JSX.Element {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text typo="titleLarge" align="center">
          Validando credenciales
        </Text>
        <Text typo="titleSmall" align="center">
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
