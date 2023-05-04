import { StyledPageUsers, StyledFormContainer } from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { messageInvitationSentConfig } from "./config/sectionMessage.config";
import { usersInvitationsConfig } from "../invite/config/usersInvitations.config";
import { Stack, Button, TextField } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function InviteUI(props) {
  const {
    loading,
    showMessage,
    invitation,
    handleChange,
    runValidations,
    handleSubmit,
    formInvalid,
    handleCloseSectionMessage,
  } = props;

  function renderMessages() {
    let messageType;

    const invalidPropExists = Object.values(invitation).some(
      (prop) => prop.state === "invalid"
    );

    if (showMessage) {
      if (formInvalid) {
        if (!invalidPropExists) {
          handleCloseSectionMessage();
          return null;
        }
        messageType = "failed";
      } else {
        messageType = "success";
      }
    } else {
      return null;
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

  return (
    <StyledPageUsers>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={usersInvitationsConfig[0].route} />
          <PageTitle
            title={usersInvitationsConfig[0].title}
            icon={usersInvitationsConfig[0].icon}
            description={usersInvitationsConfig[0].description}
          />
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack gap="32px" alignItems="flex-end" direction="column">
            <StyledFormContainer>
              <TextField
                label="Nombre"
                placeholder="Ingresa su nombre completo"
                name="name"
                id="name"
                value={invitation.name.value}
                type="text"
                isInvalid={invitation.name.isInvalid && formInvalid}
                isRequired={true}
                errorMessage="Este campo no puede estar vacío"
                validMessage="El nombre es valido"
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                maxLength={30}
                minLength={1}
                state={invitation.name.state}
                handleChange={handleChange}
                handleBlur={runValidations}
              />

              <TextField
                label="Identificación"
                placeholder="Ingrese su número de identificación"
                name="id"
                id="id"
                value={invitation.id.value}
                type="number"
                isInvalid={invitation.id.isInvalid && formInvalid}
                isRequired={true}
                errorMessage="Este campo debe contener un número de identificación"
                validMessage="El número de identificación es valido"
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                state={invitation.id.state}
                handleChange={handleChange}
                handleBlur={runValidations}
              />

              <TextField
                label="Número de teléfono"
                placeholder="Ingrese su número telefónico"
                name="phone"
                id="phone"
                value={invitation.phone.value}
                type="number"
                isInvalid={invitation.phone.isInvalid && formInvalid}
                isRequired={true}
                errorMessage="Este campo debe tener un número de teléfono"
                validMessage="El número de teléfono es valido"
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                state={invitation.phone.state}
                handleChange={handleChange}
                handleBlur={runValidations}
              />

              <TextField
                label="Correo"
                placeholder="Ingrese su dirección de correo electrónico"
                name="email"
                id="email"
                value={invitation.email.value}
                type="email"
                isRequired={true}
                isInvalid={invitation.email.isInvalid && formInvalid}
                errorMessage="Este campo debe tener una dirección de correo electrónico válida"
                validMessage="El correo electrónico es valido"
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                state={invitation.email.state}
                handleChange={handleChange}
                handleBlur={runValidations}
              />
            </StyledFormContainer>
            <Button
              type="submit"
              appearance="confirm"
              iconBefore={<MdOutlineShortcut size={18} />}
              isLoading={loading}
            >
              Enviar
            </Button>
          </Stack>
        </form>
      </Stack>
      {renderMessages()}
    </StyledPageUsers>
  );
}

export { InviteUI };
