import { Stack, Text } from "@inube/design-system";
import { Spinner } from "@inube/design-system";

function LoadingAppUI() {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text type="title" size="large" textAlign="center">
          Cargando la aplicación
        </Text>
        <Text type="titleSmall" size="small" textAlign="center">
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
