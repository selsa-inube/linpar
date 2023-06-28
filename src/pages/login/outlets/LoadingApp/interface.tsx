import { Stack, Text } from "@inube/design-system";
import { Spinner } from "@inube/design-system";

function LoadingAppUI(): JSX.Element {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text typo="titleLarge" align="center">
          Cargando la aplicación
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

export { LoadingAppUI };
