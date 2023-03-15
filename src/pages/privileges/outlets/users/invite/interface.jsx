import {
  StyledPageUsers,
  StyledFormContainer,
  StyledSpinner,
  StyledMessage,
} from "./styles";
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
    submitted,
    handleClickSubmit,
  } = props;

  function renderMessages() {
    let messageIndex = -1;

    if (showMessage) {
      messageIndex = 0;
    } else if (
      (invitation.name.valid ||
        invitation.id.valid ||
        invitation.phone.valid ||
        invitation.email.valid) &&
      submitted
    ) {
      messageIndex = 1;
    }

    if (messageIndex === -1) {
      return null;
    }

    return (
      <StyledMessage>
        <SectionMessage
          title={messageInvitationSent[messageIndex].title}
          description={messageInvitationSent[messageIndex].description}
          icon={messageInvitationSent[messageIndex].icon}
          appearance={messageInvitationSent[messageIndex].appearance}
        />
      </StyledMessage>
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
                isRequired={true}
                type="text"
                isInvalid={invitation.name.valid && submitted}
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
                isRequired={true}
                type="number"
                isInvalid={invitation.id.valid && submitted}
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
                isRequired={true}
                type="number"
                isInvalid={invitation.phone.valid && submitted}
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
                isRequired={true}
                type="email"
                isInvalid={invitation.email.valid && submitted}
                errorMessage="Este campo debe tener una dirección de correo electrónico válida"
                isDisabled={loading && true}
                size="compact"
              />
            </StyledFormContainer>
            <Button
              type="submitted"
              appearance="confirm"
              iconBefore={!loading && <MdOutlineShortcut size={18} />}
              handleClick={() => handleClickSubmit(true)}
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
