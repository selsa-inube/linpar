import { MdOutlineError } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Textfield,
  Textarea,
  Icon,
  Grid,
  useMediaQuery,
} from "@inube/design-system";

import { FormButtons } from "@components/forms/submit/FormButtons";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { SearchUserCard } from "@components/cards/SearchUserCard";

import { IGeneralInformationFormProps } from ".";
import { UseCase } from "@src/pages/privileges/outlets/linixUseCase/types";
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
  linixUseCases: UseCase[];
}

const searchData = {
  "Digite el código o nombre de la aplicación.": "",
};

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void,
  linixUseCases: UseCase[],
  readOnly?: boolean
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);

  return (
    <Grid
      templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
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
          onChange={handleChangeForm}
        />

        <SearchUserCard
          id="aplication"
          label="Aplicación"
          placeholder="Seleccione una opción"
          name="aplication"
          title="Búsqueda de aplicación"
          infoTitle="Buscar la aplicación para asignar el rol."
          idModal="searchField"
          nameModal="searchField"
          labelModal="Digite el código o nombre de la aplicación."
          placeholderModal="Digite el código o nombre de la aplicación."
          onUserSelect={() => {}}
          userData={linixUseCases}
          searchFieldData={searchData}
          onReset={() => {}}
          idLabel="k_usecase"
          nameLabel="n_usecase"
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
        onChange={handleChangeForm}
      />

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
            linixUseCases
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
        readOnly
      )}
    </>
  );
}

export { GeneralInformationFormUI };
