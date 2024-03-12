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
} from "@inube/design-system";

import { FormButtons } from "@components/forms/submit/FormButtons";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IGeneralInformationFormProps } from ".";
import { StyledSelectContainer } from "./styles";
import { SearchUserCard } from "@src/components/cards/SearchUserCard";

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
}

const searchData = {
  "Digita el nombre o numero de identificación.": "",
};

const OptionSelectSearch: Record<string, string>[] = [
  {
    username: "diferidos",
    userID: "diferidos",
  },
  {
    username: "pagos",
    userID: "pagos",
  },
  {
    username: "SIG",
    userID: "SIG",
  },
];

const OptionSelect = [
  {
    id: "Insertar",
    label: "Insertar",
    disabled: false,
  },
  {
    id: "Modificar",
    label: "Modificar",
    disabled: false,
  },
  {
    id: "Eliminar",
    label: "Eliminar",
    disabled: false,
  },
];

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void,
  readOnly?: boolean
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);

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
          placeholder="Simular y radicar"
          name="Caso de Uso LinixeName"
          id="Caso de Uso LinixeName"
          value={formik.values.CaseUseLinixName}
          type="text"
          size="compact"
          fullwidth
          onChange={handleChangeForm}
        />
        <StyledSelectContainer>
          <Select
            label="Accion caso de uso"
            placeholder="Seleccione una opción"
            name="Accion Caso de Uso"
            id="Accion Caso de Uso"
            value={formik.values.aplication}
            type="aplication"
            iconAfter={<MdOutlineModeEdit size={18} />}
            size="compact"
            fullwidth
            onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("aplication", value.target.outerText)
            }
            onBlur={formik.handleBlur}
            options={OptionSelect}
          />
        </StyledSelectContainer>
      </Stack>

      <Textarea
        label="Descripción"
        placeholder="Enter the Use Case description"
        name="description"
        id="description"
        value={formik.values.description}
        type="text"
        size="compact"
        maxLength={120}
        fullwidth
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
        <SearchUserCard
          id="Opciones Web"
          label="Opciones web"
          placeholder="seleccione una opción"
          name="aplication"
          title="Búsqueda de la opción web"
          infoTitle="Buscar caso de uso."
          idModal="searchField"
          nameModal="searchField"
          labelModal="Digite el código o nombre del caso de uso."
          placeholderModal="Digite el código o nombre del caso de uso."
          onUserSelect={() => {}}
          userData={OptionSelectSearch}
          searchFieldData={searchData}
          onReset={() => {}}
        />
      </Stack>
      <SearchUserCard
        id="Opcion cliente servidor"
        label="Opcion Cliente Servidor"
        placeholder="Seleccione una opción"
        name="Opcion Cliente Servidor"
        title="Búsqueda de cliente servidor"
        infoTitle="Buscar caso de uso."
        idModal="searchField"
        nameModal="searchField"
        labelModal="Digite el código o nombre del caso de uso."
        placeholderModal="Digite el código o nombre del caso de uso."
        onUserSelect={() => {}}
        userData={OptionSelectSearch}
        searchFieldData={searchData}
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
          {RenderFormFields(formik, loading, formInvalid, handleChangeForm)}
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
        readOnly
      )}
    </>
  );
}

export { GeneralInformationFormUI };
