import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Icon,
  Select,
  Grid,
  useMediaQuery,
} from "@inube/design-system";

import { FormButtons } from "@components/forms/submit/FormButtons";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { StyledSelectContainer } from "./styles";

interface ClientServerButtonSelectionUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (name: string, value: string) => void;
  buttonOptions: Record<string, unknown>[];
}

function uniqueButtonOptionsCalculator(
  buttonOptions: Record<string, unknown>[]
) {
  const uniqueButtonList = new Map();
  buttonOptions.forEach((buttonOption) => {
    if (!uniqueButtonList.has(buttonOption.CODIGO_BOTON)) {
      uniqueButtonList.set(buttonOption.CODIGO_BOTON, buttonOption);
    }
  });

  return Array.from(uniqueButtonList.values());
}

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (name: string, value: string) => void,
  buttonOptions: Record<string, unknown>[]
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);

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
        padding="s050 s0"
      >
        <StyledSelectContainer>
          <Select
            label="Opción botón cliente servidor"
            placeholder="Seleccione una opción"
            name="csButtonOption"
            id="csButtonOption"
            value={formik.values.csButtonOption}
            type="csButtonOption"
            iconAfter={<MdOutlineModeEdit size={18} />}
            size="compact"
            fullwidth
            onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeForm("csButtonOption", value.target.outerText)
            }
            onBlur={formik.handleBlur}
            options={uniqueButtonOptionsCalculator(buttonOptions).map(
              (buttonOption) => ({
                id: buttonOption.CODIGO_BOTON,
                label: buttonOption.DESCRIPCION_BOTON,
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
            <Text size="small" margin="8px 0px 0px 4px" appearance="error">
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
    handleSubmitForm,
    handleChangeForm,
    buttonOptions,
  } = props;
  return (
    <>
      {withSubmitButtons && (
        <FormButtons
          handleSubmit={handleSubmitForm}
          handleReset={formik.resetForm}
          loading={loading}
        >
          {RenderFormFields(
            formik,
            loading,
            formInvalid,
            handleChangeForm,
            buttonOptions
          )}
        </FormButtons>
      )}
      {!withSubmitButtons &&
        RenderFormFields(
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
