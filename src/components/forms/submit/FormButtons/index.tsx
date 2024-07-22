import { Button, Stack, inube } from "@inube/design-system";
import { ThemeProvider } from "styled-components";

interface FormButtonsProps {
  handleReset: () => void;
  handleSubmit: (name: string, value: string) => void;
  cancelButtonText?: string;
  children?: React.ReactNode;
  disabledButtons?: boolean;
  disableReset?: boolean;
  loading?: boolean;
  submitButtonText?: string;
}

function FormButtons(props: FormButtonsProps) {
  const {
    handleSubmit,
    handleReset,
    cancelButtonText = "Cancelar",
    children,
    disabledButtons,
    disableReset,
    loading,
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
