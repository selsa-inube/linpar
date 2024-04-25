import { Grid, Textfield, Textarea } from "@inube/design-system";
import { RenderMessage } from "@src/components/feedback/RenderMessage";
import { FormButtons } from "@src/components/forms/submit/FormButtons";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FormikValues } from "formik";
import { IGeneralInformationEntry } from ".";

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

function RenderFormFields(
  formik: FormikValues,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void
) {
  return (
    <form>
      <Grid templateColumns="1fr" gap="s200" width={"100%"} autoRows="unset">
        <Textfield
          label="Nombre Cargo"
          placeholder="Nombre del cargo"
          name="n_Grupo"
          id="n_Grupo"
          value={formik.values.n_Grupo}
          type="text"
          size="compact"
          fullwidth
          message={
            stateValue(formik, "n_Grupo") === "valid"
              ? "El nombre del cargo es valido"
              : formik.errors.n_Grupo
          }
          status={stateValue(formik, "n_Grupo")}
          onBlur={formik.handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeForm(event)
          }
          required
        />

        <Textarea
          label="Descripción"
          placeholder="Ingresar descripción del cargo."
          name="n_Uso"
          id="n_Uso"
          value={formik.values.n_Uso}
          message={
            stateValue(formik, "n_Uso") === "valid"
              ? "La descripción del cargo es valido"
              : formik.errors.n_Uso
          }
          status={stateValue(formik, "n_Uso")}
          type="text"
          size="compact"
          fullwidth
          maxLength={100}
          onBlur={formik.handleBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeForm(event)
          }
          required
        />
      </Grid>
    </form>
  );
}

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading?: boolean;
  withSubmitButtons?: boolean;
  message: IMessageState;
  disabledButtons: (valueCompare: IGeneralInformationEntry) => boolean;
  handleCloseSectionMessage: () => void;
  handleSubmitForm: () => void;
  handleChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleReset: () => void;
}

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const {
    formik,
    loading,
    withSubmitButtons,
    message,
    disabledButtons,
    handleCloseSectionMessage,
    handleReset,
    handleChangeForm,
    handleSubmitForm,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          handleSubmit={handleSubmitForm}
          handleReset={formik.resetForm}
          disabledButtons={!disabledButtons(formik.values)}
          loading={loading}
        >
          {RenderFormFields(formik, handleChangeForm)}
        </FormButtons>
        {message.visible && (
          <RenderMessage
            message={message}
            handleCloseMessage={handleCloseSectionMessage}
            onMessageClosed={handleReset}
          />
        )}
      </>
    );
  }
  return <>{RenderFormFields(formik, handleChangeForm)}</>;
}
