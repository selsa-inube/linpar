import {
  Button,
  Stack,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { Fieldset } from "@src/components/inputs/Fieldset";
import { FormikValues } from "formik";
import {
  MdOutlineModeEdit,
  MdOutlinePhone,
  MdOutlineShield,
  MdPersonOutline,
  MdShortcut,
} from "react-icons/md";
import {
  StyledForm,
  StyledPageContainer,
  StyledWelcomeContainer,
  Styledlmage,
} from "./styles";
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
          <Text type="headline">Portal de Clientes</Text>
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
  formInvalid: boolean,
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
            <TextField
              label="Nombre"
              placeholder="Ingresa su nombre completo"
              name="name"
              id="name"
              value={formik.values.name}
              type="text"
              size="compact"
              fullwidth
              disabled
              readOnly
            />

            <TextField
              label="Identificación"
              placeholder="Ingrese su número de identificación"
              name="userID"
              id="userID"
              value={formik.values.userID}
              type="number"
              size="compact"
              fullwidth
              onChange={formik.handleChange}
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
            <TextField
              label="Número de teléfono"
              placeholder="Ingrese su número telefónico"
              name="phone"
              id="phone"
              value={formik.values.phone}
              type="tel"
              iconAfter={<MdOutlineModeEdit size={18} />}
              // isInvalid={formik.errors.phone && formInvalid}
              // errorMessage={formik.errors.phone}
              // validMessage="El número de teléfono ingresado es válido"
              disabled={loading}
              size="compact"
              // state={stateValue("phone")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />

            <TextField
              label="Correo"
              placeholder="Ingrese su dirección de correo electrónico"
              name="email"
              id="email"
              value={formik.values.email}
              type="email"
              iconAfter={<MdOutlineModeEdit size={18} />}
              // isInvalid={formik.errors.email && formInvalid}
              // errorMessage={formik.errors.email}
              // validMessage="El correo electrónico ingresado es válido"
              disabled={loading}
              size="compact"
              // state={stateValue("email")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />
          </Stack>
        </Fieldset>
        <Fieldset title="Contraseña" icon={<MdOutlineShield size={24} />}>
          <Stack direction="column" gap="16px">
            <TextField
              label="Nombre de Usuario"
              placeholder="Ingresa su nombre completo"
              name="username"
              id="username"
              value={formik.values.username}
              type="text"
              size="compact"
              fullwidth
              onChange={formik.handleChange}
              // isInvalid={formik.errors.username && formInvalid}
              // errorMessage={formik.errors.username}
              // validMessage="El nombre usuario ingresado es válido"
              disabled={loading}
              // state={stateValue("username")}
              onBlur={formik.handleBlur}
            />

            <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
              <TextField
                id="password"
                label="Contraseña"
                name="password"
                type="password"
                size="compact"
                placeholder="Contraseña"
                fullwidth
                onChange={formik.handleChange}
                // isInvalid={formik.errors.password && formInvalid}
                // errorMessage={formik.errors.password}
                // validMessage="La contraseña ingresada es válida"
                disabled={loading}
                // state={stateValue("password")}
                onBlur={formik.handleBlur}
              />
              <TextField
                id="confirmPassword"
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                size="compact"
                fullwidth
                placeholder="Confirmar Contraseña"
                onChange={formik.handleChange}
                // isInvalid={formik.errors.confirmPassword && formInvalid}
                // errorMessage={formik.errors.confirmPassword}
                // validMessage="Las contraseñas coinciden"
                disabled={loading}
                // state={stateValue("confirmPassword")}
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
  const { loading, formik, formInvalid, handleSubmitForm, clientData } = props;

  const smallScreen = useMediaQuery("(max-width: 820px)");

  if (smallScreen) {
    return (
      <Stack direction="column" gap="32px" padding="16px">
        <Stack direction="column" gap="32px">
          {renderHead(clientData, smallScreen)}
        </Stack>
        {renderForm(
          formik,
          loading,
          formInvalid,
          handleSubmitForm,
          smallScreen
        )}
      </Stack>
    );
  }

  return (
    <StyledPageContainer>
      <StyledWelcomeContainer>{renderHead(clientData)}</StyledWelcomeContainer>
      <Stack direction="column" gap="48px" padding="64px">
        {renderForm(formik, loading, formInvalid, handleSubmitForm)}
      </Stack>
    </StyledPageContainer>
  );
}

export { RespondInvitationUI };
