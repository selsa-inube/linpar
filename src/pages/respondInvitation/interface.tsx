import { FormikValues } from "formik";
import {
  MdOutlineModeEdit,
  MdOutlinePhone,
  MdOutlineShield,
  MdPersonOutline,
} from "react-icons/md";
import { Fieldset } from "@components/inputs/Fieldset";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";
import { useMediaQuery } from "@inubekit/hooks";
import { Blanket } from "@inubekit/blanket";
import {
  Styledlmage,
  StyledContainerForm,
  Content,
  StyledContainerBlanket,
} from "./styles";

const renderForm = (
  formik: FormikValues,
  loading: boolean,
  handleSubmitForm: () => void,
  handleCancel?: () => void,
  isFormUnchanged?: boolean,
  isFormValidAndChanged?: boolean,
  smallScreen?: boolean
) => {
  const stateValue = (fieldName: string) => {
    if (!formik.touched[fieldName]) return "pending";
    if (formik.touched[fieldName] && formik.errors[fieldName]) return "invalid";
    return undefined;
  };

  return (
    <Stack direction="column" gap={smallScreen ? "32px" : "48px"}>
      <Stack direction="column">
        <Text type="headline" size="small">
          Informacion de Contacto
        </Text>

        <Text type="title" size="medium" appearance="gray">
          Complete your information to register in Linix
        </Text>
      </Stack>
      <Stack direction="column" gap="32px">
        <Fieldset
          title="Información Personal"
          icon={<MdPersonOutline size={24} />}
        >
          <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
            <Textfield
              id="userName"
              name="userName"
              label="Nombre"
              placeholder="Ingresa su nombre completo"
              value={formik.values.userName}
              type="text"
              size="compact"
              fullwidth
              disabled
            />
            <Textfield
              id="userIdentification"
              name="userIdentification"
              label="Identificación"
              placeholder="Ingrese su número de identificación"
              value={formik.values.userIdentification}
              type="number"
              size="compact"
              fullwidth
              onChange={formik.handleChange}
              disabled
            />
          </Stack>
        </Fieldset>
        <Fieldset
          title="Información de Contacto"
          icon={<MdOutlinePhone size={24} />}
        >
          <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
            <Textfield
              id="phoneNumber"
              name="phoneNumber"
              label="Número de teléfono"
              placeholder="Ingrese su número telefónico"
              value={formik.values.phoneNumber}
              type="tel"
              iconAfter={<MdOutlineModeEdit />}
              message={
                stateValue("phoneNumber") === "invalid"
                  ? formik.errors.phoneNumber
                  : "El número de teléfono ingresado es válido"
              }
              disabled={loading}
              size="compact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />
            <Textfield
              id="email"
              label="Correo"
              name="email"
              placeholder="Ingrese su dirección de correo electrónico"
              value={formik.values.email}
              type="email"
              iconAfter={<MdOutlineModeEdit size={18} />}
              message={
                stateValue("email") === "invalid"
                  ? formik.errors.email
                  : "El correo electrónico ingresado es válido"
              }
              disabled={loading}
              size="compact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />
          </Stack>
        </Fieldset>
        <Fieldset title="Contraseña" icon={<MdOutlineShield size={24} />}>
          <Stack direction="column" gap="16px">
            <Textfield
              id="userAccountId"
              name="userAccountId"
              label="Nombre de Usuario"
              placeholder="Ingresa su nombre completo"
              value={formik.values.userAccountId}
              type="text"
              size="compact"
              fullwidth
              onChange={formik.handleChange}
              message={
                stateValue("userAccountId") === "invalid"
                  ? formik.errors.userAccountId
                  : "El nombre usuario ingresado es válido"
              }
              disabled={loading}
              status={stateValue("userAccountId")}
              onBlur={formik.handleBlur}
            />
            <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
              <Textfield
                id="password"
                label="Contraseña"
                name="password"
                type="password"
                size="compact"
                placeholder="Contraseña"
                value={formik.values.password}
                fullwidth
                onChange={formik.handleChange}
                message={
                  stateValue("password") === "invalid"
                    ? formik.errors.password
                    : "La contraseña ingresada es válida"
                }
                disabled={loading}
                status={stateValue("password")}
                onBlur={formik.handleBlur}
              />
              <Textfield
                id="confirmPassword"
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                size="compact"
                fullwidth
                placeholder="Confirmar Contraseña"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                message={
                  stateValue("confirmPassword") === "invalid"
                    ? formik.errors.confirmPassword
                    : "Las contraseñas coinciden"
                }
                disabled={loading}
                status={stateValue("confirmPassword")}
                onBlur={formik.handleBlur}
              />
            </Stack>
          </Stack>
        </Fieldset>
        <Stack justifyContent="flex-end" gap="8px">
          <Button
            onClick={handleCancel}
            appearance="gray"
            disabled={isFormUnchanged}
          >
            Cancelar
          </Button>
          <Button
            loading={loading}
            onClick={() => handleSubmitForm()}
            disabled={!isFormValidAndChanged}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

interface RespondInvitationUIProps {
  loading: boolean;
  formik: FormikValues;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleCancel: () => void;
  isFormUnchanged: boolean;
  isFormValidAndChanged: boolean;
}

function RespondInvitationUI(props: RespondInvitationUIProps) {
  const {
    loading,
    formik,
    handleSubmitForm,
    handleCancel,
    isFormUnchanged,
    isFormValidAndChanged,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 744px)");

  if (smallScreen) {
    return (
      <StyledContainerForm>
        <Stack direction="column" gap="32px">
          <Styledlmage src="./assets/images/selsa.png" />
          {renderForm(formik, loading, handleSubmitForm)}
        </Stack>
      </StyledContainerForm>
    );
  }

  return (
    <StyledContainerBlanket>
      <Blanket>
        <Stack justifyContent="center" alignItems="center">
          <StyledContainerForm>
            <Content>
              <Stack direction="column" gap="48px" padding="24px">
                {renderForm(
                  formik,
                  loading,
                  handleSubmitForm,
                  handleCancel,
                  isFormUnchanged,
                  isFormValidAndChanged
                )}
              </Stack>
            </Content>
          </StyledContainerForm>
        </Stack>
      </Blanket>
    </StyledContainerBlanket>
  );
}

export { RespondInvitationUI };
