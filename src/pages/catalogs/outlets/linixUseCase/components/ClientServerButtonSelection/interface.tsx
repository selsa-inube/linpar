import { MdOutlineError } from "react-icons/md";
import { FormikValues } from "formik";
import { Text } from "@inubekit/text";
import { Icon, Grid, useMediaQuery } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Select } from "@inubekit/select";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IClientServerButton } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/types";
import { StyledSelectContainer } from "./styles";

interface ClientServerButtonSelectionUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  hasChanges: (valueCompare: IClientServerButton) => boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (name: string, value: string) => void;
  buttonOptions: Record<string, unknown>[];
}

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (name: string, value: string) => void,
  buttonOptions: Record<string, unknown>[]
) {
  const mediaQuery = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuery);
  return (
    <Grid
      templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
      gap="s200 s300"
      width={"100%"}
      autoRows="unset"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        padding="4px 0px"
      >
        <StyledSelectContainer>
          <Select
            label="Opción botón cliente servidor"
            placeholder="Seleccione una opción"
            name="k_option_button"
            id="k_option_button"
            value={formik.values.k_option_button}
            size="compact"
            fullwidth
            onChange={handleChangeForm}
            onBlur={formik.handleBlur}
            options={buttonOptions.map(
              (buttonOption: Record<string, unknown>) => ({
                id: buttonOption.CODIGO_BOTON as string,
                label: buttonOption.DESCRIPCION_BOTON as string,
                value: buttonOption.CODIGO_BOTON as string,
              })
            )}
          />
        </StyledSelectContainer>
      </Stack>

      <Stack direction="column" gap="8px">
        {formik.errors.position && formInvalid && (
          <Stack alignItems="center" margin="s0 s0 s0 s150">
            <Icon
              appearance={"error"}
              icon={<MdOutlineError />}
              spacing="wide"
              size="14px"
              shape="circle"
            />
            <Text size="small" margin="8px 0px 0px 4px" appearance="danger">
              ({formik.errors.position})
            </Text>
          </Stack>
        )}
      </Stack>
    </Grid>
  );
}

function ClientServerButtonSelectionUI(
  props: ClientServerButtonSelectionUIProps
) {
  const {
    formik,
    loading,
    withSubmitButtons,
    formInvalid,
    handleChangeForm,
    buttonOptions,
  } = props;
  if (withSubmitButtons) {
    return (
      <>
        {RenderFormFields(
          formik,
          loading,
          formInvalid,
          handleChangeForm,
          buttonOptions
        )}
      </>
    );
  }
  return (
    <>
      {RenderFormFields(
        formik,
        loading,
        formInvalid,
        handleChangeForm,
        buttonOptions
      )}
    </>
  );
}

export { ClientServerButtonSelectionUI };
