import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Textfield,
  Textarea,
  Icon,
  Select,
  Grid,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { FormButtons } from "@components/forms/submit/FormButtons";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { SearchUserCard } from "@src/components/cards/SearchUserCard";
import { OptionSelect } from "@src/pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";

import { IGeneralInformationFormProps } from ".";
import { StyledSelectContainer } from "./styles";

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
  linixUseCases: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
}

const searchData = {
  "Digite el código o nombre de la aplicación:": "",
};

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void,
  linixUseCases: Record<string, unknown>[],
  webOptions: Record<string, unknown>[],
  readOnly?: boolean
) {
  const mediaQuery = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuery);

  return (
    <Grid
      templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
      gap="s200 s300"
      width={"100%"}
      autoRows="unset"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        padding="s050 s0"
      >
        <Textfield
          label="Nombre del caso de uso "
          placeholder="Digite un nombre para el caso de uso."
          name="caseUseLinixName"
          id="Caso de Uso Linix Name"
          value={formik.values.caseUseLinixName}
          type="text"
          size="compact"
          fullwidth
          onChange={(event: { target: { value: string } }) => {
            formik.setFieldValue("useCaseName", event.target.value);
          }}
        />

        <StyledSelectContainer>
          <Select
            label="Acción caso de uso"
            placeholder="Seleccione una opción"
            name="Acción Caso de Uso"
            id="Acción Caso de Uso"
            value={formik.values.actionUseCase}
            type="actionUseCase"
            iconAfter={<MdOutlineModeEdit size={18} />}
            size="compact"
            fullwidth
            onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("actionUseCase", value.target.outerText)
            }
            onBlur={formik.handleBlur}
            options={OptionSelect}
          />
        </StyledSelectContainer>
      </Stack>

      <Textarea
        label="Descripción"
        placeholder="Ingrese la descripción del caso de uso."
        name="description"
        id="description"
        value={formik.values.description}
        type="text"
        size="compact"
        maxLength={120}
        fullwidth
        onChange={handleChangeForm}
      />

      <Stack direction="column" gap={inube.spacing.s100}>
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
        <SearchUserCard
          id="Opción  Web"
          label="Opción  web"
          placeholder="Seleccione una opción"
          name="Búsqueda"
          title="Búsqueda"
          infoTitle="Opciones web"
          idModal="searchField"
          nameModal="searchField"
          labelModal="Digite la opción a buscar."
          placeholderModal="Digite el código o nombre del caso de uso."
          userData={webOptions}
          searchFieldData={searchData}
          onReset={() => {}}
          idLabel="K_opcion"
          nameLabel="Nombre_opcion"
          onUserSelect={() => {}}
        />
      </Stack>
      <SearchUserCard
        id="Opción cliente servidor"
        label="Opción cliente servidor"
        placeholder="Seleccione una opción"
        name="Opcion Cliente Servidor"
        title="Búsqueda"
        infoTitle="Opción cliente servidor"
        idModal="searchField"
        nameModal="searchField"
        labelModal="Digite la opción a buscar."
        placeholderModal="Digite el código o nombre del caso de uso."
        onUserSelect={() => {}}
        userData={linixUseCases}
        searchFieldData={searchData}
        idLabel="CODIGO_OPCION"
        nameLabel="DESCRIPCION"
        onReset={() => {}}
      />
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
    webOptions,
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
            linixUseCases,
            webOptions
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
        webOptions,
        readOnly
      )}
    </>
  );
}

export { GeneralInformationFormUI };
