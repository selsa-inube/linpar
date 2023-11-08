import { PageTitle } from "@components/PageTitle";
import { MdOutlineShortcut } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Breadcrumbs,
  Button,
  Grid,
  SectionMessage,
  Stack,
  Textfield,
  useMediaQueries,
} from "@inube/design-system";

import { EMessageType } from "@src/types/messages.types";

import { messageInvitationSentConfig } from "./config/messageInvitationSent.config";
import { usersInvitationsConfig } from "./config/usersInvitations.config";

interface InviteUIProps {
  formik: FormikValues;
  formInvalid: boolean;
  loading: boolean;
  showMessage: boolean;
  screenMovil: boolean;
  handleCloseSectionMessage: () => void;
  handleSubmit: () => void;
}

function renderMessages(
  showMessage: boolean,
  formInvalid: boolean,
  handleCloseSectionMessage: () => void
) {
  if (!showMessage) {
    return null;
  }

  let messageType: EMessageType = EMessageType.SUCCESS;

  if (formInvalid) {
    messageType = EMessageType.FAILED;
  }

  const { title, description, icon, appearance } =
    messageInvitationSentConfig[messageType];

  return (
    <SectionMessage
      title={title}
      description={description}
      icon={icon}
      appearance={appearance}
      duration={4000}
      closeSectionMessage={handleCloseSectionMessage}
    />
  );
}

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

function InviteUI(props: InviteUIProps) {
  const {
    formik,
    formInvalid,
    loading,
    showMessage,
    screenMovil,
    handleCloseSectionMessage,
    handleSubmit,
  } = props;

  const mediaQueries = ["(max-width: 1111px)", "(max-width: 565px)"];
  const matches = useMediaQueries(mediaQueries);

  return (
    <Stack direction="column" padding="s400 s800">
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={usersInvitationsConfig} />
          <PageTitle
            title={usersInvitationsConfig[0].label}
            description={usersInvitationsConfig[0].description}
            navigatePage="/privileges/users"
          />
        </Stack>
        <form>
          <Stack gap="32px" alignItems="flex-end" direction="column">
            <Grid
              templateColumns={
                matches["(max-width: 1111px)"] ? "1fr" : "repeat(2, 1fr)"
              }
              gap={"s300"}
              margin={"s0 s0 s400 s0"}
              width={"100%"}
              autoRows="unset"
            >
              <Textfield
                label="Nombre"
                placeholder="Ingresa su nombre completo"
                name="name"
                id="name"
                value={formik.values.name}
                type="text"
                required={true}
                message={
                  stateValue(formik, "name") === "invalid"
                    ? formik.errors.name
                    : "El nombre es valido"
                }
                disabled={loading}
                size="compact"
                fullwidth={true}
                state={stateValue(formik, "name")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Textfield
                label="Identificación"
                placeholder="Ingrese su número de identificación"
                name="id"
                id="id"
                value={formik.values.id}
                type="number"
                required={true}
                message={
                  stateValue(formik, "id") === "invalid"
                    ? formik.errors.id
                    : "El número de identificación es valido"
                }
                disabled={loading}
                size="compact"
                fullwidth={true}
                state={stateValue(formik, "id")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Textfield
                label="Número de teléfono"
                placeholder="Ingrese su número telefónico"
                name="phone"
                id="phone"
                value={formik.values.phone}
                type="tel"
                required={true}
                message={
                  stateValue(formik, "phone") === "invalid"
                    ? formik.errors.phone
                    : "El número de teléfono es valido"
                }
                disabled={loading}
                size="compact"
                fullwidth={true}
                state={stateValue(formik, "phone")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <Textfield
                label="Correo"
                placeholder="Ingrese su dirección de correo electrónico"
                name="email"
                id="email"
                value={formik.values.email}
                type="email"
                required={true}
                message={
                  stateValue(formik, "email") === "valid"
                    ? formik.errors.email
                    : "El correo electrónico es valido"
                }
                disabled={loading}
                size="compact"
                fullwidth={true}
                state={stateValue(formik, "email")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Button
              type="button"
              appearance="success"
              iconBefore={<MdOutlineShortcut size={18} />}
              loading={loading}
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </Stack>
        </form>
      </Stack>
      {renderMessages(showMessage, formInvalid, handleCloseSectionMessage)}
    </Stack>
  );
}

export { InviteUI };
