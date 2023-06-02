import { Button, Stack } from "@inube/design-system";
import { StyledSubmitContainer } from "./styles";

function FormControl(props) {
  const { children, handleSubmit, handleCancel, disabledButtons, isLoading } =
    props;

  return (
    <Stack direction="column">
      <Stack>{children}</Stack>
      {handleSubmit && handleCancel && (
        <StyledSubmitContainer>
          <Button
            appearance="secondary"
            isDisabled={disabledButtons}
            handleClick={handleCancel}
            type="text"
          >
            Cancelar
          </Button>
          <Button
            appearance="confirm"
            handleClick={handleSubmit}
            isLoading={isLoading}
            isDisabled={disabledButtons}
            type="text"
          >
            Guardar
          </Button>
        </StyledSubmitContainer>
      )}
    </Stack>
  );
}

export { FormControl };
