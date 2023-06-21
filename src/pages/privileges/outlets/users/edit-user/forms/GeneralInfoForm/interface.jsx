import { SectionMessage } from "@components/feedback/SectionMessage";
import { FormButtons } from "@components/forms/submit/FormButtons";
import { Stack, Text, TextField } from "@inube/design-system";
import { positions } from "@mocks/apps/privileges/users.mock";
import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import { messageGeneralInfoConfig } from "./config/messageGeneralInfoConfig";
import {
  StyledErrorMessageContainer,
  StyledFormContainer,
  StyledSelect,
} from "./styles";

function renderMessages(showMessage, formInvalid, handleCloseSectionMessage) {
  if (!showMessage) {
    return null;
  }
  let messageType = "success";
  if (formInvalid) {
    messageType = "failed";
  }

  const { title, description, icon, appearance } =
    messageGeneralInfoConfig[messageType];

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

function renderFormFields(formik, loading, formInvalid, handleChangeForm) {
  function stateValue(attribute) {
    if (!formik.touched[attribute]) return "pending";
    if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
    return "valid";
  }

  return (
    <StyledFormContainer>
      <TextField
        label="Nombre"
        placeholder="Ingresa su nombre completo"
        name="username"
        id="username"
        value={formik.values.username}
        type="text"
        isDisabled={true}
        size="compact"
        isFullWidth={true}
        maxLength={40}
        minLength={1}
        readOnly={true}
      />

      <TextField
        label="Identificación"
        placeholder="Ingrese su número de identificación"
        name="userID"
        id="userID"
        value={formik.values.userID}
        type="number"
        isDisabled={true}
        size="compact"
        isFullWidth={true}
        readOnly={true}
      />

      <TextField
        label="Correo"
        placeholder="Ingrese su dirección de correo electrónico"
        name="email"
        id="email"
        value={formik.values.email}
        type="email"
        iconAfter={<MdOutlineModeEdit size={18} />}
        isInvalid={formik.errors.email && formInvalid}
        errorMessage={formik.errors.email}
        validMessage="El correo electrónico ingresado es válido"
        isDisabled={loading}
        size="compact"
        isFullWidth={true}
        state={stateValue("email")}
        handleChange={handleChangeForm}
        handleBlur={formik.handleBlur}
      />

      <TextField
        label="Número de teléfono"
        placeholder="Ingrese su número telefónico"
        name="phone"
        id="phone"
        value={formik.values.phone}
        type="tel"
        iconAfter={<MdOutlineModeEdit size={18} />}
        isInvalid={formik.errors.phone && formInvalid}
        errorMessage={formik.errors.phone}
        validMessage="El número de teléfono ingresado es válido"
        isDisabled={loading}
        size="compact"
        isFullWidth={true}
        state={stateValue("phone")}
        handleChange={handleChangeForm}
        handleBlur={formik.handleBlur}
      />

      <Stack direction="column" gap="8px">
        <Text typo="labelMedium" padding="0px 0px 0px 16px">
          Cargo
        </Text>
        <StyledSelect
          defaultValue={formik.values.position}
          name="position"
          id="position"
          disabled={loading}
          onChange={handleChangeForm}
          required
        >
          {positions.map((position) => (
            <option key={position.value} value={position.value}>
              {position.label}
            </option>
          ))}
        </StyledSelect>
        {formik.errors.position && formInvalid && (
          <StyledErrorMessageContainer>
            <MdOutlineError />
            <Text typo="bodySmall" margin="8px 0px 0px 4px" appearance="error">
              ({formik.errors.position})
            </Text>
          </StyledErrorMessageContainer>
        )}
      </Stack>
    </StyledFormContainer>
  );
}

function GeneralInformationFormUI(props) {
  const {
    formik,
    loading,
    withSubmitButtons,
    showMessage,
    handleCloseSectionMessage,
    disabledButtons,
    formInvalid,
    handleSubmitForm,
    handleChangeForm,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          handleSubmit={handleSubmitForm}
          handleReset={formik.resetForm}
          disabledButtons={disabledButtons}
          isLoading={loading}
        >
          {renderFormFields(formik, loading, formInvalid, handleChangeForm)}
        </FormButtons>
        {renderMessages(showMessage, formInvalid, handleCloseSectionMessage)}
      </>
    );
  }

  return (
    <>{renderFormFields(formik, loading, formInvalid, handleChangeForm)}</>
  );
}

export { GeneralInformationFormUI };
