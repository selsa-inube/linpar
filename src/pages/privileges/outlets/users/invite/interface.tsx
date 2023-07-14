import { PageTitle } from "@components/PageTitle";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { Breadcrumbs, Button, Stack, TextField } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { messageInvitationSentConfig } from "./config/messageInvitationSent.config";
import { usersInvitationsConfig } from "./config/usersInvitations.config";
import { StyledFormContainer, StyledPageUsers } from "./styles";
import { FormikValues } from "formik";
import { IMessageConfig } from "./types";

interface InviteUIProps {
  formik: FormikValues;
  formInvalid: boolean;
  loading: boolean;
  showMessage: boolean;
  handleCloseSectionMessage: () => void;
  handleSubmit: () => void;
}

enum EMessageType {
  SUCCESS = "success",
  FAILED = "failed",
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
      duration={10000}
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

  return (
    <StyledPageUsers>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={usersInvitationsConfig[0].route} />
          <PageTitle
            title={usersInvitationsConfig[0].title}
            description={usersInvitationsConfig[0].description}
            navigatePage="/privileges/users"
          />
        </Stack>
        <form>
          <Stack gap="32px" alignItems="flex-end" direction="column">
            <StyledFormContainer>
              <TextField
                label="Nombre"
                placeholder="Ingresa su nombre completo"
                name="name"
                id="name"
                value={formik.values.name}
                type="text"
                isInvalid={formik.errors.name && formInvalid}
                isRequired={true}
                errorMessage={formik.errors.name}
                validMessage="El nombre es valido"
                isDisabled={loading}
                size="compact"
                isFullWidth={true}
                state={stateValue(formik, "name")}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <TextField
                label="Identificación"
                placeholder="Ingrese su número de identificación"
                name="id"
                id="id"
                value={formik.values.id}
                type="number"
                isInvalid={formik.errors.id && formInvalid}
                isRequired={true}
                errorMessage={formik.errors.id}
                validMessage="El número de identificación es valido"
                isDisabled={loading}
                size="compact"
                isFullWidth={true}
                state={stateValue(formik, "id")}
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
                isInvalid={formik.errors.phone && formInvalid}
                isRequired={true}
                errorMessage={formik.errors.phone}
                validMessage="El número de teléfono es valido"
                isDisabled={loading}
                size="compact"
                isFullWidth={true}
                state={stateValue(formik, "phone")}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <TextField
                label="Correo"
                placeholder="Ingrese su dirección de correo electrónico"
                name="email"
                id="email"
                value={formik.values.email}
                type="email"
                isRequired={true}
                isInvalid={formik.errors.email && formInvalid}
                errorMessage={formik.errors.email}
                validMessage="El correo electrónico es valido"
                isDisabled={loading}
                size="compact"
                isFullWidth={true}
                state={stateValue(formik, "email")}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </StyledFormContainer>
            <Button
              type="button"
              appearance="confirm"
              iconBefore={<MdOutlineShortcut size={18} />}
              isLoading={loading}
              handleClick={handleSubmit}
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
