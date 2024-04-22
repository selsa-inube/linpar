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

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  isLoading?: boolean;
  handleSubmit: (name: string, value: string) => void;
  linixRoles: Record<string, unknown>[];
  withSubmitButtons: boolean;
  hasChanges: (valueCompare: GeneralInformationFormUIProps) => boolean;
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

  const handleAplicationChange = (value) => {
    formik.setValues({
      ...formik.values,
      aplicationId: value.k_Usecase,
    });
  };

  const handleFormReset = () => {
    formik.resetForm();
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
              handleAplicationChange(value);
            }}
            userData={linixRoles}
            searchFieldData={searchData}
            idLabel="k_Usecase"
            nameLabel="n_Usecase"
            selectedId={formik.values.aplicationId}
            onReset={() => {}}
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
        />
      </Grid>
      {withSubmitButtons && (
        <>
          <FormButtons
            disabledButtons={!hasChanges(formik.values)}
            handleSubmit={handleSubmit}
            handleReset={handleFormReset}
            loading={isLoading}
          />
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={handleFormReset}
            />
          )}
        </>
      )}
    </form>
  );
}
