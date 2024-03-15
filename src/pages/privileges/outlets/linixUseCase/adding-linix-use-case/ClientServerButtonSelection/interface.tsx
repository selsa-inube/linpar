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

import { IGeneralInformationFormProps } from ".";
import { StyledSelectContainer } from "./styles";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IGeneralInformationFormProps) => boolean;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  linixUseCases: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
}

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void,
  linixUseCases: Record<string, unknown>[],
  webOptions: Record<string, unknown>[],
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
            label="Acción caso de uso"
            placeholder="Seleccione una opción"
            name="Acción Caso de Uso"
            id="Acción Caso de Uso"
            value={formik.values.actionCaseUse}
            type="actionCaseUse"
            iconAfter={<MdOutlineModeEdit size={18} />}
            size="compact"
            fullwidth
            onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("actionCaseUse", value.target.outerText)
            }
            onBlur={formik.handleBlur}
            options={linixUseCases.map((useCase) => ({
              label: useCase.n_usecase,
              value: useCase.i_tipusec,
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

function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const {
    formik,
    loading,
    withSubmitButtons,
    hasChanges,
    formInvalid,
    handleSubmitForm,
    handleChangeForm,
    readOnly,
    linixUseCases,
    webOptions,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          handleSubmit={handleSubmitForm}
          handleReset={formik.resetForm}
          disabledButtons={!hasChanges(formik.values)}
          loading={loading}
        >
          {RenderFormFields(
            formik,
            loading,
            formInvalid,
            handleChangeForm,
            linixUseCases,
            webOptions
          )}
        </FormButtons>
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
        linixUseCases,
        webOptions,
        readOnly
      )}
    </>
  );
}

export { GeneralInformationFormUI };
