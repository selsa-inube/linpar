import { Button, Stack, inube } from "@inube/design-system";
import { ThemeProvider } from "styled-components";

interface FormButtonsProps {
  children: React.ReactNode;
  handleSubmit: () => void;
  handleReset: () => void;
  disableReset?: boolean;
  disabledButtons?: boolean;
  loading?: boolean;
  cancelButtonText?: string;
  submitButtonText?: string;
}

function FormButtons(props: FormButtonsProps) {
  const {
    children,
    handleSubmit,
    handleReset,
    disableReset,
    disabledButtons,
    loading,
    cancelButtonText = "Cancelar",
    submitButtonText = "Guardar",
  } = props;

  let disableCancel: boolean | undefined;

  if (disableReset === undefined || disableReset === null) {
    if (disabledButtons !== undefined && disabledButtons !== null) {
      disableCancel = disabledButtons;
    }
  } else {
    disableCancel = disableReset;
  }

  return (
    <Stack direction="column" gap={inube.spacing.s300}>
      <Stack direction="column">{children}</Stack>
      <Stack justifyContent="flex-end" gap={inube.spacing.s100}>
        <ThemeProvider theme={inube}>
          <Button
            appearance="gray"
            disabled={disableCancel}
            onClick={handleReset}
            type="reset"
          >
            {cancelButtonText}
          </Button>
          <Button
            appearance="primary"
            onClick={handleSubmit}
            loading={loading}
            disabled={disabledButtons}
            type="button"
          >
            {submitButtonText}
          </Button>
        </ThemeProvider>
      </Stack>
    </Stack>
  );
}

export { FormButtons };
export type { FormButtonsProps };
