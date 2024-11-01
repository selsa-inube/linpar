import { FormikValues } from "formik";
import {
  Stack,
  Textfield,
  Textarea,
  useMediaQuery,
} from "@inube/design-system";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { Grid } from "@inubekit/grid";
import { SearchUserCard } from "@components/cards/SearchUserCard";
import { IGeneralInformationForm } from "../../types";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  isLoading?: boolean;
  handleChangeForm: (name: string, value: string) => void;
  linixRoles: Record<string, unknown>[];
  withSubmitButtons: boolean;
  hasChanges: (valueCompare: IGeneralInformationForm) => boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
}

const searchData = {
  "Digite el código o nombre de la aplicación.": "",
};

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const { formik, handleChangeForm, linixRoles } = props;

  const isMobile = useMediaQuery("(max-width: 750px)");

  const stateValue = (fieldName: string) => {
    if (formik.touched[fieldName] && formik.errors[fieldName]) return "invalid";
    return null;
  };

  return (
    <form>
      <Grid
        templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
        gap="0px 24px"
        width={"100%"}
        autoRows="unset"
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          padding="s050 s0"
        >
          <Textfield
            label="Nombre Rol"
            placeholder="Nombe del rol"
            name="n_Rol"
            id="n_Rol"
            value={formik.values.n_Rol}
            type="text"
            size="compact"
            fullwidth
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => handleChangeForm(event.target.name, event.target.value)}
            required
            onBlur={formik.handleBlur}
            message={
              stateValue("n_Rol") === "invalid" ? formik.errors.n_Rol : null
            }
            status={stateValue("n_Rol") === "invalid" ? "invalid" : null}
          />

          <SearchUserCard
            id="application"
            label="Aplicación"
            placeholder="Seleccione una opción"
            name="application"
            title="Aplicación"
            infoTitle="Busque y seleccione una aplicación:"
            idModal="searchField"
            nameModal="searchField"
            labelModal="Digite el código o nombre de la aplicación."
            placeholderModal="Digite el código o nombre de la aplicación."
            onUserSelect={(value) => {
              handleChangeForm("applicationId", value.k_Aplica as string);
            }}
            userData={linixRoles}
            searchFieldData={searchData}
            idLabel="k_Aplica"
            nameLabel="n_Aplica"
            selectedId={formik.values.applicationId}
            onReset={() => {}}
            required
            message={
              stateValue("applicationId") === "invalid"
                ? formik.errors.applicationID
                : null
            }
            status={
              stateValue("applicationId") === "invalid" ? "invalid" : null
            }
            onBlur={formik.handleBlur}
          />
        </Stack>

        <Textarea
          label="Descripción"
          placeholder="Ingresar descripción del rol."
          name="description"
          id="description"
          value={formik.values.description}
          type="text"
          size="compact"
          fullwidth
          maxLength={30}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => {
            const { value } = event.target;
            if (value.length <= 30) {
              handleChangeForm(event.target.name, value);
            }
          }}
          required
          onBlur={formik.handleBlur}
          message={
            formik.values.description.length > 30
              ? "Excediste el límite"
              : stateValue("description") === "invalid"
              ? formik.errors.description
              : null
          }
          status={stateValue("description") === "invalid" ? "invalid" : null}
        />
      </Grid>
    </form>
  );
}
