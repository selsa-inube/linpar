import { FormikValues } from "formik";
import {
  MdOutlineModeEdit,
  MdOutlinePhone,
  MdOutlineShield,
  MdPersonOutline,
  MdShortcut,
} from "react-icons/md";

import { Button, Grid, Stack, Text, useMediaQuery } from "@inube/design-system";

import { Fieldset } from "@components/inputs/Fieldset";
import { IBusinessUnitsPortalStaff } from "@services/businessUnitsPortalStaff/types";
import {
  Styledlmage,
  StyledContainerHeader,
  StyledContainerForm,
} from "./styles";
import { Input } from "@inubekit/input";

const renderHead = (
  bussinessData: IBusinessUnitsPortalStaff,
  smallScreen?: boolean
) => {
  return (
    <>
      <Styledlmage
        src={bussinessData.urlLogo}
        alt={`Logo ${bussinessData.abbreviatedName}`}
      />
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
  handleSubmitForm: () => void,
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
            <Input
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
            <Input
              id="userID"
              name="userID"
              label="Identificación"
              placeholder="Ingrese su número de identificación"
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
            <Input
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
              disabled={loading}
              size="compact"
              status={stateValue("phone")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />
            <Input
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
              status={stateValue("email")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullwidth
            />
          </Stack>
        </Fieldset>
        <Fieldset title="Contraseña" icon={<MdOutlineShield size={24} />}>
          <Stack direction="column" gap="16px">
            <Input
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
              status={stateValue("username")}
              onBlur={formik.handleBlur}
            />
            <Stack gap="16px" direction={smallScreen ? "column" : "row"}>
              <Input
                id="password"
                label="Contraseña"
                name="password"
                type="password"
                size="compact"
                placeholder="Contraseña"
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
              <Input
                id="confirmPassword"
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                size="compact"
                fullwidth
                placeholder="Confirmar Contraseña"
                onChange={formik.handleChange}
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
      </Stack>
    </Stack>
  );
};

interface RespondInvitationUIProps {
  loading: boolean;
  formik: FormikValues;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  bussinessData: IBusinessUnitsPortalStaff;
}

function RespondInvitationUI(props: RespondInvitationUIProps) {
  const { loading, formik, handleSubmitForm, bussinessData } = props;

  const smallScreen = useMediaQuery("(max-width: 744px)");

  if (smallScreen) {
    return (
      <StyledContainerForm>
        <Stack direction="column" gap="32px" padding="s200">
          <Styledlmage
            src={bussinessData.urlLogo}
            alt={`Logo ${bussinessData.abbreviatedName}`}
          />
          {renderForm(formik, loading, handleSubmitForm, smallScreen)}
        </Stack>
      </StyledContainerForm>
    );
  }

  return (
    <Grid templateColumns="1fr 2fr">
      <StyledContainerHeader>
        <Stack direction="column" gap="36px" padding="s800">
          {renderHead(bussinessData)}
        </Stack>
      </StyledContainerHeader>
      <StyledContainerForm>
        <Stack direction="column" gap="48px" padding="s800">
          {renderForm(formik, loading, handleSubmitForm)}
        </Stack>
      </StyledContainerForm>
    </Grid>
  );
}

export { RespondInvitationUI };
