import { MdOutlineError } from "react-icons/md";
import { FormikValues } from "formik";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Select } from "@inubekit/select";
import { Textfield } from "@inubekit/input";
import { Textarea } from "@inubekit/textarea";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Grid } from "@inubekit/grid";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IGeneralInformation } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/types";
import { SearchUserCard } from "@components/cards/SearchUserCard";
import { Option } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";

import { StyledSelectContainer } from "./styles";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  selectLinixUseCase: Option[];
  loading: boolean;
  message: IMessageState;
  editform: boolean;
  onCloseSectionMessage: () => void;
  handleCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IGeneralInformation) => boolean;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (name: string, value: string) => void;
  readOnly?: boolean;
  csOptions: Record<string, unknown>[];
  handleReset: () => void;
  webOptions: Record<string, unknown>[];
}

const searchData = {
  "Digite el código o nombre de la aplicación:": "",
};

function RenderFormFields(
  formik: FormikValues,
  selectLinixUseCase: Option[],
  loading: boolean,
  formInvalid: boolean,

  handleChangeForm: (name: string, value: string) => void,
  csOptions: Record<string, unknown>[],
  webOptions: Record<string, unknown>[],
  readOnly?: boolean,
  editform?: boolean
) {
  const mediaQuery = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuery);
  const stateValue = (fieldName: string) => {
    if (!formik.touched[fieldName]) return "pending";
    if (formik.touched[fieldName] && formik.errors[fieldName]) return "invalid";
  };

  return (
    <Grid
      templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
      gap="16px 24px"
      width="100%"
      autoRows="unset"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        padding="4px 0px"
      >
        <Textfield
          label="Nombre del caso de uso "
          placeholder="Digite un nombre para el caso de uso."
          name="n_Usecase"
          id="n_Usecase"
          value={formik.values.n_Usecase}
          onBlur={formik.handleBlur}
          message={
            stateValue("n_Usecase") === "invalid" && formik.errors.n_Usecase
          }
          status={stateValue("n_Usecase")}
          type="text"
          size="compact"
          fullwidth
          required
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => handleChangeForm(event.target.name, event.target.value)}
        />
        <StyledSelectContainer>
          <Select
            label="Acción caso de uso"
            placeholder="Seleccione una opción"
            name="i_Tipusec"
            id="i_Tipusec"
            value={formik.values.i_Tipusec}
            onBlur={formik.handleBlur}
            message={
              stateValue("i_Tipusec") === "invalid" && formik.errors.i_Tipusec
            }
            invalid={
              stateValue("i_Tipusec") === "invalid" && formik.errors.i_Tipusec
            }
            size="compact"
            fullwidth
            required
            onChange={handleChangeForm}
            options={selectLinixUseCase}
          />
        </StyledSelectContainer>
      </Stack>

      <Textarea
        label="Descripción"
        placeholder="Ingrese la descripción del caso de uso."
        name="n_Descrip"
        id="n_Descrip"
        value={formik.values.n_Descrip}
        onBlur={formik.handleBlur}
        required
        message={
          stateValue("n_Descrip") === "invalid" && formik.errors.n_Descrip
        }
        status={stateValue("n_Descrip")}
        maxLength={120}
        fullwidth
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
          const { value } = event.target;
          if (value.length <= 120) {
            handleChangeForm(event.target.name, value);
          }
        }}
      />

      <Stack direction="column" gap={"8px"}>
        {formik.errors.position && formInvalid && (
          <Stack alignItems="center" margin="0 0 0 12px">
            <Icon
              appearance={"warning"}
              icon={<MdOutlineError />}
              spacing="wide"
              size="14px"
              shape="circle"
            />
            <Text size="small" margin="8px 0px 0px 4px" appearance="danger">
              ({formik.errors.position})
            </Text>
          </Stack>
        )}

        {editform && (
          <SearchUserCard
            id="webSearch"
            label="Opción de menú web Linix"
            placeholder="Seleccione una opción"
            name="webSearch"
            title="Búsqueda"
            infoTitle="Opción de menú web Linix"
            idModal="searchField"
            nameModal="searchField"
            labelModal="Digite la opción a buscar."
            placeholderModal="Digite el código o nombre del caso de uso."
            userData={webOptions}
            searchFieldData={searchData}
            onReset={() => {}}
            idLabel="k_Funcio"
            nameLabel="n_Funcio"
            onUserSelect={(value: Record<string, unknown>) =>
              handleChangeForm("k_Funcio", value.k_Funcio as string)
            }
            selectedId={formik.values.k_Funcio}
          />
        )}
      </Stack>
      {editform && (
        <SearchUserCard
          id="csSearch"
          label="Opción de menú cliente servidor Linix"
          placeholder="Seleccione una opción"
          name="csSearch"
          title="Búsqueda"
          infoTitle="Opción de menú cliente servidor Linix"
          idModal="searchField"
          nameModal="searchField"
          labelModal="Digite la opción a buscar."
          placeholderModal="Digite el código o nombre del caso de uso."
          onUserSelect={(value: Record<string, unknown>) =>
            handleChangeForm("k_Opcion", value.k_Opcion as string)
          }
          userData={csOptions}
          searchFieldData={searchData}
          idLabel="k_Opcion"
          nameLabel="DESCRIPCION"
          onReset={() => {}}
          selectedId={formik.values.k_Opcion}
        />
      )}
    </Grid>
  );
}

function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const {
    selectLinixUseCase,
    formik,
    loading,

    formInvalid,
    handleChangeForm,
    readOnly,
    csOptions,
    webOptions,
    editform,
  } = props;

  return (
    <>
      {RenderFormFields(
        formik,
        selectLinixUseCase,
        loading,

        formInvalid,
        handleChangeForm,
        csOptions,
        webOptions,
        readOnly,
        editform
      )}
    </>
  );
}

export { GeneralInformationFormUI };
