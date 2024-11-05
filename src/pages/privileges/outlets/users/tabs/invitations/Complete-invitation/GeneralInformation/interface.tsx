import { MdOutlineModeEdit } from "react-icons/md";
import { FormikValues } from "formik";
import { Stack, Textfield, Grid } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { SearchUserCard } from "@components/cards/SearchUserCard";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading: boolean;
  handleChangeForm: (name: string, value: string) => void;
  positionsOptions: Record<string, unknown>[];
}

function stateValue(
  formik: GeneralInformationFormUIProps["formik"],
  attribute: string
) {
  if (!formik.touched[attribute]) return "pending";
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const { formik, loading, positionsOptions, handleChangeForm } = props;

  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);
  const searchData = {
    "Digite el código o nombre de la aplicación:": "",
  };

  return (
    <>
      <Grid
        templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
        gap={"s300"}
        margin={"s0 s0 s400 s0"}
        width={"100%"}
        autoRows="unset"
      >
        <Textfield
          label="Nombre"
          placeholder="Ingresa su nombre completo"
          name="userName"
          id="userName"
          value={formik.values.userName}
          type="text"
          disabled
          size="compact"
          fullwidth
          readOnly
        />

        <Textfield
          label="Identificación"
          placeholder="Ingrese su número de identificación"
          name="userIdentification"
          id="userIdentification"
          value={formik.values.userIdentification}
          type="number"
          disabled
          size="compact"
          fullwidth
          readOnly
        />

        <Textfield
          label="Correo"
          placeholder="Ingrese su dirección de correo electrónico"
          name="email"
          id="email"
          value={formik.values.email}
          type="email"
          iconAfter={<MdOutlineModeEdit size={18} />}
          status={stateValue(formik, "email")}
          message={
            stateValue(formik, "email") === "invalid" && formik.errors.email
          }
          disabled={loading}
          size="compact"
          fullwidth
          state={stateValue(formik, "email")}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => handleChangeForm(event.target.name, event.target.value)}
          onBlur={formik.handleBlur}
          required
        />

        <Textfield
          label="Número de teléfono"
          placeholder="Ingrese su número telefónico"
          name="phoneNumber"
          id="phoneNumber"
          value={formik.values.phoneNumber}
          type="tel"
          iconAfter={<MdOutlineModeEdit size={18} />}
          status={stateValue(formik, "phoneNumber")}
          message={
            stateValue(formik, "phoneNumber") === "invalid" &&
            formik.errors.phone
          }
          disabled={loading}
          size="compact"
          fullwidth
          state={stateValue(formik, "phone")}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => handleChangeForm(event.target.name, event.target.value)}
          onBlur={formik.handleBlur}
          required
        />

        <Stack direction="column" gap="8px">
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
            userData={positionsOptions}
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
            selectedId={formik.values.positionId}
            message={
              stateValue(formik, "position") === "invalid" &&
              formik.errors.position
            }
            status={stateValue(formik, "position")}
            onBlur={formik.handleBlur}
            required
          />
        </Stack>
      </Grid>
    </>
  );
}

export { GeneralInformationFormUI };
