import { FormikValues } from "formik";

import { Grid, useMediaQuery } from "@inube/design-system";
import { Textfield } from "@inubekit/textfield";
import { SearchUserCard } from "@components/cards/SearchUserCard";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  positions: Record<string, unknown>[];
  message: IMessageState;
  handleCloseSectionMessage: () => void;
  handleChangeForm: (name: string, value: string) => void;
  handleSubmitForm: () => void;
  handleReset: () => void;
  loading?: boolean;
  withSubmitButtons?: boolean;
}

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const { formik, positions } = props;
  const searchData = {
    "Digite el código o nombre de la aplicación:": "",
  };
  const mediaQuery = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuery);
  return (
    <>
      <form>
        <Grid
          templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
          gap="s200 s300"
          width="100%"
          autoRows="unset"
        >
          <Textfield
            label="Nombre Cargo"
            placeholder="Nombre del cargo"
            name="n_Usuari"
            id="n_Usuari"
            value={formik.values.n_Usuari}
            type="text"
            size="compact"
            fullwidth
            disabled
          />
          <Textfield
            label="Identificación"
            name="a_Numnit"
            id="a_Numnit"
            value={formik.values.a_Numnit}
            type="text"
            size="compact"
            fullwidth
            disabled
          />
          <SearchUserCard
            id="position"
            label="Cargo"
            placeholder="Seleccione una opción"
            name="position"
            title="Búsqueda"
            infoTitle="Opción de Cargo"
            idModal="searchField"
            nameModal="searchField"
            labelModal="Digite la opción a buscar."
            placeholderModal="Digite el código o nombre del cargo."
            userData={positions}
            searchFieldData={searchData}
            onReset={() => {}}
            idLabel="k_Grupo"
            nameLabel="n_Grupo"
            onUserSelect={(value) => {
              formik.setValues({
                ...formik.values,
                positionId: value.k_Grupo,
                position: value.n_Grupo,
              });
            }}
            selectedId={formik.values.k_Grupo}
            message={
              stateValue(formik, "position") === "invalid" &&
              formik.errors.position
            }
            status={stateValue(formik, "position")}
            onBlur={formik.handleBlur}
            required
          />
        </Grid>
      </form>
    </>
  );
}
