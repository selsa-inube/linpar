import { Grid, Textfield, Textarea } from "@inube/design-system";
import { FormikValues } from "formik";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading?: boolean;
  customHandleBlur: (event: React.FocusEvent<HTMLElement, Element>) => void;
}

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const { formik, customHandleBlur } = props;

  return (
    <>
      <form>
        <Grid templateColumns="1fr" gap="s200" width={"100%"} autoRows="unset">
          <Textfield
            label="Nombre Cargo"
            placeholder="Nombre del cargo"
            name="positionName"
            id="positionName"
            value={formik.values.positionName}
            type="text"
            size="compact"
            fullwidth
            message={
              stateValue(formik, "positionName") === "valid"
                ? "El nombre es valido"
                : formik.errors.positionName
            }
            status={stateValue(formik, "positionName")}
            onBlur={customHandleBlur}
            onChange={formik.handleChange}
            required
          />

          <Textarea
            label="Descripción"
            placeholder="Ingresar descripción del cargo."
            name="description"
            id="description"
            value={formik.values.description}
            message={
              stateValue(formik, "description") === "valid"
                ? "El nombre es valido"
                : formik.errors.positionName
            }
            status={stateValue(formik, "description")}
            type="text"
            size="compact"
            fullwidth
            maxLength={100}
            onBlur={customHandleBlur}
            onChange={formik.handleChange}
            required
          />
        </Grid>
      </form>
    </>
  );
}
