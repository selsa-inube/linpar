import { Button, Stack } from "@inube/design-system";

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
    <Stack direction="column">
      <Stack>{children}</Stack>
      <Stack justifyContent="flex-end" gap="16px" margin="s100 s0 s0 s0">
        <Button
          appearance="gray"
          disabled={disabledButtons}
          handleClick={handleReset}
          type="reset"
        >
          Cancelar
        </Button>
        <Button
          appearance="success"
          handleClick={handleSubmit}
          loading={loading}
          disabled={disabledButtons}
          type="button"
        >
          Guardar
        </Button>
      </Stack>
    </Stack>
  );
}

export { FormButtons };
export type { FormButtonsProps };
