import { Stack } from "../../../../components/layout/Stack";
import { Text } from "../../../../components/data/Text";
import { Spinner } from "@inube/design-system";

function LoadingAppUI() {
  return (
    <Stack spacing="16">
      <Stack>
        <Text typoToken="titleLarge" align="center">
          Cargando la aplicación
        </Text>
        <Text typoToken="titleSmall" align="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack align="center">
        <Spinner size="large" />
      </Stack>
    </Stack>
  );
}

export { LoadingAppUI };
