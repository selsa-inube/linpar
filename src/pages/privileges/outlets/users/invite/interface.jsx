import { StyledPageUsers, StyledFormContainer } from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { messageInvitationSentConfig } from "../../../../../components/feedback/SectionMessage/config/sectionMessage.config";
import { usersInvitationsConfig } from "../invite/config/usersInvitations.config";
import { Input } from "../../../../../components/inputs/Input";
import { Stack, Button } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function InviteUI(props) {
  const {
    loading,
    showMessage,
    invitation,
    handleInputChange,
    handleSubmit,
    formInvalid,
    handleCloseSectionMessage,
  } = props;

  function renderMessages() {
    let messageType;

    const invalidPropExists = Object.values(invitation).some(
      (prop) => prop.isInvalid
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
      {renderMessages()}
    </StyledPageUsers>
  );
}

export { InviteUI };
