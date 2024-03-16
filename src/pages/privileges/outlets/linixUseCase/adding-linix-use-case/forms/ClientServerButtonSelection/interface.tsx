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
import { buttonOptionsMock } from "@src/mocks/privileges/button/buttonOptionsMock.mock";

interface ClientServerButtonSelectionUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  buttonOptionsMock: Record<string, unknown>[];
}

function filtrado() {
  const unico = new Map();
  buttonOptionsMock.forEach((buttonOptionsMock) => {
    if (!unico.has(buttonOptionsMock.OPCION_CLIENTE_SERVIDOR)) {
      unico.set(buttonOptionsMock.OPCION_CLIENTE_SERVIDOR, buttonOptionsMock);
    }
  });

  return Array.from(unico.values());
}

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void,
  buttonOptionsMock: Record<string, unknown>[],
  readOnly?: boolean
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
              formik.setFieldValue("csButtonOption", value.target.outerText)
            }
            onBlur={formik.handleBlur}
            options={filtrado().map((useCase) => ({
              id: useCase.OPCION_CLIENTE_SERVIDOR,
              label: useCase.OPCION_CLIENTE_SERVIDOR,
            }))}
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
    readOnly,
    buttonOptionsMock,
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
            buttonOptionsMock,
            readOnly
          )}
        </FormButtons>
      )}
      {!withSubmitButtons &&
        RenderFormFields(
          formik,
          loading,
          formInvalid,
          handleChangeForm,
          buttonOptionsMock,
          readOnly
        )}
    </>
  );
}

export { ClientServerButtonSelectionUI };
