import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import { FormikValues } from "formik";
import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  Stack,
  Text,
  Textfield,
  SectionMessage,
  Icon,
  Select,
  Grid,
  useMediaQuery,
} from "@inube/design-system";

import { options } from "@mocks/apps/privileges/users/users.mock";
import { EMessageType } from "@src/types/messages.types";
import { generalInfoMessages } from "./config/messages.config";
import {
  IGeneralInformationEntry,
  IMessageState,
} from "../../../types/forms.types";

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
    <Stack justifyContent="flex-end" width="100%">
      <SectionMessage
        title={title}
        description={description}
        icon={icon}
        appearance={appearance}
        duration={10000}
        closeSectionMessage={handleCloseSectionMessage}
      />
    </Stack>
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
  handleChangeForm: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void,
  readOnly?: boolean
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);

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
        onChange={handleChangeForm}
        onBlur={formik.handleBlur}
      />

      <Stack direction="column" gap="8px">
        <Text
          type="label"
          size="medium"
          appearance={readOnly ? "gray" : "dark"}
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
          {RenderFormFields(formik, loading, formInvalid, handleChangeForm)}
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
        readOnly
      )}
    </>
  );
}

export { GeneralInformationFormUI };
