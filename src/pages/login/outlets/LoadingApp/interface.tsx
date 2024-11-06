import { Text } from "@inubekit/text";
import { Spinner } from "@inube/design-system";
import { Stack } from "@inubekit/stack";

function LoadingAppUI() {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text type="title" textAlign="center">
          Cargando la aplicación
        </Text>
        <Text type="title" size="small" textAlign="center">
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
