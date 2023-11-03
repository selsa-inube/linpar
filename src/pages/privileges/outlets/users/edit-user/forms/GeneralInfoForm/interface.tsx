import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  Stack,
  Text,
  Textfield,
  SectionMessage,
  Icon,
  Select,
  Grid,
  useMediaQueries,
} from "@inube/design-system";
import { options } from "@mocks/apps/privileges/users/users.mock";
import { EMessageType } from "@src/types/messages.types";
import { FormikValues } from "formik";
import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import {
  IGeneralInformationEntry,
  IMessageState,
} from "../../../types/forms.types";
import { generalInfoMessages } from "./config/messages.config";

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
    <SectionMessage
      title={title}
      description={description}
      icon={icon}
      appearance={appearance}
      duration={10000}
      closeSectionMessage={handleCloseSectionMessage}
    />
  );
}

function renderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void,
  readOnly?: boolean
) {
  function stateValue(attribute: string) {
    if (!formik.touched[attribute]) return "pending";
    if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
    return "valid";
  }

  const mediaQueries = ["(max-width: 1111px)"];
  const matches = useMediaQueries(mediaQueries);

  return (
    <Grid
      templateColumns={
        matches["(max-width: 1111px)"] ? "repeat(1, 1fr)" : "repeat(2, 1fr)"
      }
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
        status={formik.errors.email && formInvalid ? "invalid" : "valid"}
        message={
          formik.errors.email && formInvalid
            ? formik.errors.email
            : "El correo electrónico ingresado es válido"
        }
        disabled={readOnly || loading}
        readOnly={readOnly}
        size="compact"
        fullwidth
        state={stateValue("email")}
        onChange={handleChangeForm}
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
        status={formik.errors.phone && formInvalid ? "invalid" : "pending"}
        message={
          formik.errors.phone && formInvalid
            ? formik.errors.phone
            : "El número de teléfono ingresado es válido"
        }
        disabled={readOnly || loading}
        readOnly={readOnly}
        size="compact"
        fullwidth
        state={stateValue("phone")}
        onChange={handleChangeForm}
        onBlur={formik.handleBlur}
      />

      <Stack direction="column" gap="8px">
        <Text
          type="label"
          size="medium"
          appearance={readOnly ? "disabled" : "dark"}
          padding="0px 0px 0px 16px"
        >
          Cargo
        </Text>
        <Select
          name="position"
          id="position"
          required
          placeholder="Seleccione una opción"
          value={formik.values.position}
          onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
            formik.setFieldValue("position", value.target.outerText)
          }
          options={options}
          fullwidth
          disabled={readOnly || loading}
        />
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

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IGeneralInformationEntry) => boolean;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  readOnly?: boolean;
}

function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const {
    formik,
    loading,
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
          {renderFormFields(formik, loading, formInvalid, handleChangeForm)}
        </FormButtons>
        {renderMessages(showMessage, formInvalid, handleCloseSectionMessage)}
      </>
    );
  }

  return (
    <>
      {renderFormFields(
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
