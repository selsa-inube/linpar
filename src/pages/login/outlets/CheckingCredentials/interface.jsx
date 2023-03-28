import { Stack } from "../../../../components/layout/Stack";
import { Text } from "../../../../components/data/Text";
import { Spinner } from "@inube/design-system";

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
        <Spinner size="large" appearance="blue" isTransparent={false} />
      </Stack>
    </Stack>
  );
}

export { CheckingCredentialsUI };
