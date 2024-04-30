import { FormikValues } from "formik";
import {
  Stack,
  Textfield,
  Textarea,
  Grid,
  useMediaQuery,
} from "@inube/design-system";
import { FormButtons } from "@components/forms/submit/FormButtons";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { RenderMessage } from "@components/feedback/RenderMessage";

import { SearchUserCard } from "@src/components/cards/SearchUserCard";
import { IGeneralInformationForm } from ".";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  isLoading?: boolean;
  handleSubmit: () => void;
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
  const {
    formik,
    handleSubmit,
    linixRoles,
    withSubmitButtons = false,
    hasChanges,
    isLoading,
    message,
    onCloseSectionMessage,
  } = props;

  const isMobile = useMediaQuery("(max-width: 750px)");

  const stateValue = (fieldName: string) => {
    if (!formik.touched[fieldName]) return "pending";
    if (formik.touched[fieldName] && formik.errors[fieldName]) return "invalid";
    return "valid";
  };

  return (
    <form>
      <Grid
        templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
        gap="s0 s300"
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
            name="roleName"
            id="roleName"
            value={formik.values.roleName}
            type="text"
            size="compact"
            fullwidth
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
            message={
              stateValue("roleName") === "invalid"
                ? formik.errors.roleName
                : "Nombre Rol: válido"
            }
            status={stateValue("roleName")}
          />

          <SearchUserCard
            id="aplication"
            label="Aplicación"
            placeholder="Seleccione una opción"
            name="aplication"
            title="Aplicación"
            infoTitle="Busque y seleccione una aplicación:"
            idModal="searchField"
            nameModal="searchField"
            labelModal="Digite el código o nombre de la aplicación."
            placeholderModal="Digite el código o nombre de la aplicación."
            onUserSelect={(value) => {
              formik.setValues({
                ...formik.values,
                aplicationId: value.k_Usecase,
                aplication: value.n_Usecase,
              });
            }}
            userData={linixRoles}
            searchFieldData={searchData}
            idLabel="k_Usecase"
            nameLabel="n_Usecase"
            selectedId={formik.values.aplicationId}
            onReset={() => {}}
            required
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
          maxLength={20}
          onChange={formik.handleChange}
          required
          onBlur={formik.handleBlur}
          message={
            stateValue("description") === "invalid"
              ? formik.errors.description
              : "Descripción: válido"
          }
          status={stateValue("description")}
        />
      </Grid>
      {withSubmitButtons && (
        <>
          <FormButtons
            disabledButtons={!hasChanges(formik.values)}
            handleSubmit={handleSubmit}
            handleReset={formik.resetForm}
            loading={isLoading}
            children={""}
          />
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={formik.resetForm}
            />
          )}
        </>
      )}
    </form>
  );
}
