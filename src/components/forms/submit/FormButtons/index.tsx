import { Button, Stack, inube } from "@inube/design-system";
import { ThemeProvider } from "styled-components";

interface FormButtonsProps {
  children: React.ReactNode;
  handleSubmit: () => void;
  handleReset: () => void;
  disabledButtons?: boolean;
  loading?: boolean;
}

function FormButtons(props: FormButtonsProps) {
  const { children, handleSubmit, handleReset, disabledButtons, loading } =
    props;

  return (
    <Stack direction="column" gap={inube.spacing.s300}>
      <Stack direction="column">{children}</Stack>
      <Stack justifyContent="flex-end" gap={inube.spacing.s100}>
        <ThemeProvider theme={inube}>
          <Button
            appearance="gray"
            disabled={disabledButtons}
            onClick={handleReset}
            type="reset"
          >
            Cancelar
          </Button>
          <Button
            appearance="primary"
            onClick={handleSubmit}
            loading={loading}
            disabled={disabledButtons}
            type="button"
          >
            Guardar
          </Button>
        </ThemeProvider>
      </Stack>
    </Stack>
  );
}

export { FormButtons };
export type { FormButtonsProps };
