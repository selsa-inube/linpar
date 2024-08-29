import { FormikValues } from "formik";
import { Grid } from "@inube/design-system";
import { Textfield } from "@inubekit/textfield";
import { Textarea } from "@inubekit/textarea";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { IGeneralInformationEntry } from ".";

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return "pending";
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return undefined;
}

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  message: IMessageState;
  disabledButtons: (valueCompare: IGeneralInformationEntry) => boolean;
  handleCloseSectionMessage: () => void;
  handleChangeForm: (name: string, value: string) => void;
  handleSubmitForm: () => void;
  handleReset: () => void;
  loading?: boolean;
  withSubmitButtons?: boolean;
}

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const { formik, handleChangeForm } = props;

  return (
    <>
      <form>
        <Grid templateColumns="1fr" gap="s200" width="100%" autoRows="unset">
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
              stateValue(formik, "n_Grupo") !== "invalid" &&
              stateValue(formik, "n_Grupo") !== undefined
                ? "El nombre del cargo es valido"
                : formik.errors.n_Grupo
            }
            status={stateValue(formik, "n_Grupo")}
            onBlur={formik.handleBlur}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => handleChangeForm(event.target.name, event.target.value)}
            required
          />

          <Textarea
            label="Descripción"
            placeholder="Ingresar descripción del cargo."
            name="n_Uso"
            id="n_Uso"
            value={formik.values.n_Uso}
            message={
              stateValue(formik, "n_Uso") !== "invalid" &&
              stateValue(formik, "n_Uso") !== "pending"
                ? "La descripción del cargo es valido"
                : formik.errors.n_Uso
            }
            status={stateValue(formik, "n_Uso")}
            fullwidth
            maxLength={100}
            onBlur={formik.handleBlur}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => handleChangeForm(event.target.name, event.target.value)}
            required
          />
        </Grid>
      </form>
    </>
  );
}
