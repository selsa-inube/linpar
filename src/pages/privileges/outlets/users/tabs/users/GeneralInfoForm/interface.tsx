import { FormikValues } from "formik";

import { Grid, Textfield, useMediaQuery } from "@inube/design-system";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { FormButtons } from "@components/forms/submit/FormButtons";
import { SearchUserCard } from "@components/cards/SearchUserCard";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { IGeneralInformationUsersForm } from ".";

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  positionsOptions: Record<string, unknown>[];
  message: IMessageState;
  disabledButtons: (valueCompare: IGeneralInformationUsersForm) => boolean;
  handleCloseSectionMessage: () => void;
  handleChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmitForm: () => void;
  handleReset: () => void;
  loading?: boolean;
  withSubmitButtons?: boolean;
}

export function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const {
    formik,
    loading,
    positionsOptions,
    withSubmitButtons,
    message,
    disabledButtons,
    handleCloseSectionMessage,
    handleReset,
    handleSubmitForm,
  } = props;
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
            readOnly
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
            readOnly
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
        </Grid>
      </form>
      {withSubmitButtons && (
        <FormButtons
          handleSubmit={handleSubmitForm}
          handleReset={formik.resetForm}
          disabledButtons={!disabledButtons(formik.values)}
          loading={loading}
        />
      )}
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
