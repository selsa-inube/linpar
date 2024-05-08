import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import { FormikValues } from "formik";

import {
  Stack,
  Text,
  Textfield,
  SectionMessage,
  Icon,
  Grid,
  useMediaQuery,
} from "@inube/design-system";
import { FormButtons } from "@components/forms/submit/FormButtons";
import { EMessageType } from "@src/types/messages.types";
import {
  IGeneralInformationEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { SearchUserCard } from "@components/cards/SearchUserCard";

import { generalInfoMessages } from "./config/messages.config";
import { StyledMessageContainer, StyledSelectContainer } from "./styles";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IGeneralInformationEntry) => boolean;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (name: string, value: string) => void;
  positionsOptions: Record<string, unknown>[];
  readOnly?: boolean;
}

function renderMessages(
  showMessage: IMessageState,
  formInvalid: boolean,
  handleCloseSectionMessage: GeneralInformationFormUIProps["handleCloseSectionMessage"]
) {
  if (!showMessage.visible) {
    return null;
  }
  let messageType = EMessageType.SUCCESS;
  if (formInvalid) {
    messageType = EMessageType.FAILED;
  }

  const { title, description, icon, appearance } =
    generalInfoMessages[messageType];

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          title={title}
          description={description}
          icon={icon}
          appearance={appearance}
          duration={4000}
          closeSectionMessage={handleCloseSectionMessage}
        />
      </Stack>
    </StyledMessageContainer>
  );
}

function stateValue(
  formik: GeneralInformationFormUIProps["formik"],
  attribute: string
) {
  if (!formik.touched[attribute]) return "pending";
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (name: string, value: string) => void,
  positionsOptions: Record<string, unknown>[],
  readOnly?: boolean
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);
  const searchData = {
    "Digite el código o nombre de la aplicación:": "",
  };

  return (
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
        name="username"
        id="username"
        value={formik.values.username}
        type="text"
        disabled
        size="compact"
        fullwidth
        readOnly
      />

      <Textfield
        label="Identificación"
        placeholder="Ingrese su número de identificación"
        name="userID"
        id="userID"
        value={formik.values.userID}
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
          stateValue(formik, "email") === "invalid"
            ? formik.errors.email
            : "El correo electrónico ingresado es válido"
        }
        disabled={readOnly || loading}
        readOnly={readOnly}
        size="compact"
        fullwidth
        state={stateValue(formik, "email")}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => handleChangeForm(event.target.name, event.target.value)}
        onBlur={formik.handleBlur}
      />

      <Textfield
        label="Número de teléfono"
        placeholder="Ingrese su número telefónico"
        name="phone"
        id="phone"
        value={formik.values.phone}
        type="tel"
        iconAfter={<MdOutlineModeEdit size={18} />}
        status={stateValue(formik, "phone")}
        message={
          stateValue(formik, "phone") === "invalid"
            ? formik.errors.phone
            : "El número de teléfono ingresado es válido"
        }
        disabled={readOnly || loading}
        readOnly={readOnly}
        size="compact"
        fullwidth
        state={stateValue(formik, "phone")}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => handleChangeForm(event.target.name, event.target.value)}
        onBlur={formik.handleBlur}
      />

      <Stack direction="column" gap="8px">
        <StyledSelectContainer>
          <SearchUserCard
            id="cargo"
            label="cargo"
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
                cargo: value.n_Grupo,
              });
              handleChangeForm("cargo", String(value.n_Grupo));
            }}
            selectedId={formik.values.cargo}
          />
        </StyledSelectContainer>

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
    positionsOptions,
    withSubmitButtons,
    showMessage,
    handleCloseSectionMessage,
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
          {RenderFormFields(
            formik,
            loading,
            formInvalid,
            handleChangeForm,
            positionsOptions
          )}
        </FormButtons>
        {renderMessages(showMessage, formInvalid, handleCloseSectionMessage)}
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
        positionsOptions,
        readOnly
      )}
    </>
  );
}

export { GeneralInformationFormUI };
