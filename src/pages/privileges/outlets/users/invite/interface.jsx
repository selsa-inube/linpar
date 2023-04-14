import { StyledPageUsers, StyledFormContainer } from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { messageInvitationSent } from "../../../../../mocks/apps/messagesCards.mock";
import { usersInvitations } from "../../../../../mocks/apps/usersInvitations.mock";
import { Input } from "../../../../../components/inputs/Input";
import { Stack } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";
import { Button } from "@inube/design-system";

function InviteUI(props) {
  const {
    loading,
    showMessage,
    invitation,
    handleInputChange,
    handleSubmit,
    formInvalid,
    MessageTimer,
    handleHideSectionMessage,
    timeMessage,
    handlePauseMessage,
    handleStartMessage,
  } = props;

  function renderMessages() {
    let messageType;

    if (showMessage) {
      messageType = "success";
      handleStartMessage();
    } else {
      const invalidPropExists = Object.values(invitation).some(
        (prop) => prop.isInvalid
      );
      messageType = invalidPropExists && formInvalid ? "failed" : undefined;
    }

    if (!messageType || timeMessage === MessageTimer) {
      return null;
    }

    const { title, description, icon, appearance } =
      messageInvitationSent[messageType];

    return (
      <SectionMessage
        title={title}
        description={description}
        icon={icon}
        appearance={appearance}
        duration={messageType === "success" ? MessageTimer : undefined}
        handleHideSectionMessage={handleHideSectionMessage}
      />
    );
  }

  return (
    <StyledPageUsers>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={usersInvitations[0].route} />
          <PageTitle
            title={usersInvitations[0].title}
            icon={usersInvitations[0].icon}
            description={usersInvitations[0].description}
          />
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack gap="32px" alignItems="flex-end" direction="column">
            <StyledFormContainer>
              <Input
                label="Nombre (Requerido)"
                placeholder="Ingresa su nombre completo"
                name="name"
                handleChange={handleInputChange}
                value={invitation.name.value}
                type="text"
                isInvalid={invitation.name.isInvalid && formInvalid}
                errorMessage="Este campo no puede estar vacío"
                isDisabled={loading && true}
                size="compact"
              />
              <Input
                label="Identificación (Requerido)"
                placeholder="Ingrese su número de identificación"
                name="id"
                handleChange={handleInputChange}
                value={invitation.id.value}
                type="number"
                isInvalid={invitation.id.isInvalid && formInvalid}
                errorMessage="Este campo debe contener un número de identificación"
                isDisabled={loading && true}
                size="compact"
              />
              <Input
                label="Número de teléfono (Requerido)"
                placeholder="Ingrese su número telefónico"
                name="phone"
                handleChange={handleInputChange}
                value={invitation.phone.value}
                type="number"
                isInvalid={invitation.phone.isInvalid && formInvalid}
                errorMessage="Este campo debe tener un número de teléfono"
                isDisabled={loading && true}
                size="compact"
              />
              <Input
                label="Correo (Requerido)"
                placeholder="Ingrese su dirección de correo electrónico"
                name="email"
                handleChange={handleInputChange}
                value={invitation.email.value}
                type="email"
                isInvalid={invitation.email.isInvalid && formInvalid}
                errorMessage="Este campo debe tener una dirección de correo electrónico válida"
                isDisabled={loading && true}
                size="compact"
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
      <div onMouseEnter={handlePauseMessage} onMouseLeave={handlePauseMessage}>
        {renderMessages()}
      </div>
    </StyledPageUsers>
  );
}

export { InviteUI };
