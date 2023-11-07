import { FormikValues } from "formik";
import {
  MdOutlineModeEdit,
  MdOutlinePhone,
  MdOutlineShield,
  MdPersonOutline,
  MdShortcut,
} from "react-icons/md";

import {
  Button,
  Grid,
  Stack,
  Text,
  Textfield,
  useMediaQuery,
} from "@inube/design-system";

import { Fieldset } from "@src/components/inputs/Fieldset";
import { StyledForm, Styledlmage, StyledWelcomeContainer } from "./styles";
import { IClient } from "./types";

const renderHead = (clientData: IClient, smallScreen?: boolean) => {
  return (
    <>
      <Styledlmage src={clientData.logo} alt={`Logo ${clientData.name}`} />
      <Stack direction="column" gap={smallScreen ? "16px" : "36px"}>
        <Stack direction="column">
          <Text type="headline" size="small">
            Bienvenido
          </Text>
          <Text type="headline" size="large">
            Portal de Clientes
          </Text>
        </Stack>
        <Text appearance="gray">
          Complete su invitación y pase a formar parte de la comunidad.
        </Text>
      </Stack>
    </>
  );
};

const renderForm = (
  formik: FormikValues,
  loading: boolean,
  handleSubmitForm: () => void,
  smallScreen?: boolean
) => {
  const stateValue = (fieldName: string) => {
    if (!formik.touched[fieldName]) return "pending";
    if (formik.touched[fieldName] && formik.errors[fieldName]) return "invalid";
    return "valid";
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
      <StyledForm>
        <Fieldset
          title="Información Personal"
          icon={<MdPersonOutline size={24} />}
        >
          <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
            <Textfield
              id="name"
              name="name"
              label="Nombre"
              placeholder="Ingresa su nombre completo"
              value={formik.values.name}
              type="text"
              size="compact"
              fullwidth
              disabled
              readOnly
            />
            <Textfield
              id="userID"
              name="userID"
              label="Identificación"
              placeholder="Ingrese su número de identificación"
              value={formik.values.userID}
              type="number"
              size="compact"
              fullwidth
              handleChange={formik.handleChange}
              disabled
              readOnly
            />
          </Stack>
        </Fieldset>
        <Fieldset
          title="Información de Contacto"
          icon={<MdOutlinePhone size={24} />}
        >
          <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
            <Textfield
              id="phone"
              name="phone"
              label="Número de teléfono"
              placeholder="Ingrese su número telefónico"
              value={formik.values.phone}
              type="tel"
              iconAfter={<MdOutlineModeEdit />}
              message={
                stateValue("phone") === "invalid"
                  ? formik.errors.phone
                  : "El número de teléfono ingresado es válido"
              }
              validMessage="El número de teléfono ingresado es válido"
              disabled={loading}
              size="compact"
              state={stateValue("phone")}
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
              state={stateValue("email")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />
          </Stack>
        </Fieldset>
        <Fieldset title="Contraseña" icon={<MdOutlineShield size={24} />}>
          <Stack direction="column" gap="16px">
            <Textfield
              id="username"
              name="username"
              label="Nombre de Usuario"
              placeholder="Ingresa su nombre completo"
              value={formik.values.username}
              type="text"
              size="compact"
              fullwidth
              onChange={formik.handleChange}
              message={
                stateValue("username") === "invalid"
                  ? formik.errors.username
                  : "El nombre usuario ingresado es válido"
              }
              disabled={loading}
              state={stateValue("username")}
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
                fullWidth
                onChange={formik.handleChange}
                message={
                  stateValue("password") === "invalid"
                    ? formik.errors.password
                    : "La contraseña ingresada es válida"
                }
                disabled={loading}
                state={stateValue("password")}
                onBlur={formik.handleBlur}
              />
              <Textfield
                id="confirmPassword"
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                size="compact"
                fullWidth
                placeholder="Confirmar Contraseña"
                onChange={formik.handleChange}
                message={
                  stateValue("confirmPassword") === "invalid"
                    ? formik.errors.confirmPassword
                    : "Las contraseñas coinciden"
                }
                disabled={loading}
                state={stateValue("confirmPassword")}
                onBlur={formik.handleBlur}
              />
            </Stack>
          </Stack>
        </Fieldset>
        <Stack justifyContent="flex-end">
          <Button
            iconBefore={<MdShortcut size={18} />}
            size="compact"
            appearance="success"
            loading={loading}
            onClick={handleSubmitForm}
          >
            Enviar
          </Button>
        </Stack>
      </StyledForm>
    </Stack>
  );
};

interface RespondInvitationUIProps {
  loading: boolean;
  formik: FormikValues;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  clientData: IClient;
}

function RespondInvitationUI(props: RespondInvitationUIProps) {
  const { loading, formik, handleSubmitForm, clientData } = props;

  const smallScreen = useMediaQuery("(max-width: 820px)");

  if (smallScreen) {
    return (
      <Stack direction="column" gap="32px" padding="s200">
        {!smallScreen && renderHead(clientData, smallScreen)}
        {renderForm(formik, loading, handleSubmitForm, smallScreen)}
      </Stack>
    );
  }

  return (
    <Grid templateColumns="1fr 2fr">
      <Stack direction="column" gap="36px" padding="s800">
        {renderHead(clientData)}
      </Stack>
      <Stack direction="column" gap="48px" padding="s800">
        {renderForm(formik, loading, handleSubmitForm)}
      </Stack>
    </Grid>
  );
}

export { RespondInvitationUI };
