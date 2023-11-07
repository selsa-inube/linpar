import { PageTitle } from "@components/PageTitle";
import {
  Breadcrumbs,
  Button,
  Stack,
  Textfield,
  SectionMessage,
  useMediaQueries,
  Grid,
} from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { messageInvitationSentConfig } from "./config/messageInvitationSent.config";
import { usersInvitationsConfig } from "./config/usersInvitations.config";
import { EMessageType } from "@src/types/messages.types";
import { StyledPageUsers } from "./styles";
import { FormikValues } from "formik";

interface InviteUIProps {
  formik: FormikValues;
  formInvalid: boolean;
  loading: boolean;
  showMessage: boolean;
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
    handleCloseSectionMessage,
    handleSubmit,
  } = props;

  const mediaQueries = ["(max-width: 1111px)", "(max-width: 565px)"];
  const matches = useMediaQueries(mediaQueries);

  return (
    <StyledPageUsers>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={usersInvitationsConfig[0].crumbs} />
          <PageTitle
            title={usersInvitationsConfig[0].title}
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
                // isInvalid={formik.errors.name && formInvalid}
                required={true}
                // errorMessage={formik.errors.name}
                // validMessage="El nombre es valido"
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
                // isInvalid={formik.errors.id && formInvalid}
                required={true}
                // errorMessage={formik.errors.id}
                // validMessage="El número de identificación es valido"
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
                // isInvalid={formik.errors.phone && formInvalid}
                required={true}
                // errorMessage={formik.errors.phone}
                // validMessage="El número de teléfono es valido"
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
                // isInvalid={formik.errors.email && formInvalid}
                // errorMessage={formik.errors.email}
                // validMessage="El correo electrónico es valido"
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
    </StyledPageUsers>
  );
}

export { InviteUI };
