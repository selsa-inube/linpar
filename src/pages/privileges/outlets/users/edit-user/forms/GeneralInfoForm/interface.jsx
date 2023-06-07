import { StyledFormContainer, StyledSelect } from "./styles";
import { Button, Stack, TextField, Text } from "@inube/design-system";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { messageGeneralInfoConfig } from "./config/messageGeneralInfoConfig";
import { MdOutlineModeEdit } from "react-icons/md";
import { roles } from "@mocks/apps/privileges/users.mock";

function renderMessages(showMessage, formInvalid, handleCloseSectionMessage) {
  let messageType;
  if (showMessage) {
    if (formInvalid) {
      messageType = "failed";
    } else {
      messageType = "success";
    }
  } else {
    return null;
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

function GeneralInformationFormUI(props) {
  const {
    formik,
    loading,
    allowSubmit,
    showMessage,
    handleCloseSectionMessage,
    enableButtons,
    formInvalid,
    handleSubmit,
  } = props;

  function stateValue(attribute) {
    if (!formik.touched[attribute]) return "pending";
    if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
    return "valid";
  }

  return (
    <>
      <form>
        <StyledFormContainer>
          <TextField
            label="Nombre"
            placeholder="Ingresa su nombre completo"
            name="name"
            id="name"
            value={formik.values.name}
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
            name="Identificación"
            id="Identificación"
            value={formik.values.identification}
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
            handleChange={formik.handleChange}
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
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />

          <Stack direction="column" gap="8px">
            <Text typo="labelMedium" padding="0px 0px 0px 16px">
              Cargo
            </Text>
            <StyledSelect
              value={formik.values.rol}
              name="rol"
              id="rol"
              disabled={loading}
              onChange={formik.handleChange}
            >
              {roles.map((rol) => (
                <option key={rol.value} value={rol.value}>
                  {rol.label}
                </option>
              ))}
            </StyledSelect>
          </Stack>
        </StyledFormContainer>
        {allowSubmit && (
          <Stack gap="8px" justifyContent="flex-end">
            <Button
              appearance="secondary"
              type="reset"
              handleClick={formik.resetForm}
              isDisabled={enableButtons}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              appearance={"confirm"}
              isLoading={loading}
              isDisabled={enableButtons}
              handleClick={handleSubmit}
            >
              Guardar
            </Button>
          </Stack>
        )}
        {renderMessages(showMessage, formInvalid, handleCloseSectionMessage)}
      </form>
    </>
  );
}

export { GeneralInformationFormUI };
