import { StyledPageUsers, StyledFormContainer, StyledSpinner } from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { messageInvitationSent } from "../../../../../mocks/apps/messagesCards.mock";
import { usersInvitations } from "../../../../../mocks/apps/usersInvitations.mock";
import { Input } from "../../../../../components/inputs/Input";
import { Stack } from "../../../../../components/layout/Stack";
import { Button } from "../../../../../components/inputs/Button";
import { MdOutlineShortcut } from "react-icons/md";
import { Spinner } from "../../../../../components/feedback/Spinner";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function InviteUI(props) {
  const {
    loading,
    showMessage,
    invitation,
    handleInputChange,
    handleSubmit,
    formInvalid,
  } = props;

  function renderMessages() {
    let messageType = -1;

    if (showMessage) {
      messageType = "success";
    } else if (
      Object.values(invitation).some((prop) => prop.isInvalid) &&
      formInvalid
    ) {
      messageType = "failed";
    }

    if (messageType === -1) {
      return null;
    }

    return (
      <SectionMessage
        title={messageInvitationSent[messageType].title}
        description={messageInvitationSent[messageType].description}
        icon={messageInvitationSent[messageType].icon}
        appearance={messageInvitationSent[messageType].appearance}
      />
    );
  }

  return (
    <StyledPageUsers>
      <Stack spacing={48}>
        <Stack spacing={32}>
          <Breadcrumbs route={usersInvitations[0].route} />
          <PageTitle
            title={usersInvitations[0].title}
            icon={usersInvitations[0].icon}
            description={usersInvitations[0].description}
          />
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={32} align="end">
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
              iconBefore={!loading && <MdOutlineShortcut size={18} />}
            >
              {loading ? (
                <StyledSpinner>
                  <Spinner />
                </StyledSpinner>
              ) : (
                "Enviar"
              )}
            </Button>
          </Stack>
        </form>
      </Stack>
      {renderMessages()}
    </StyledPageUsers>
  );
}

export { InviteUI };
