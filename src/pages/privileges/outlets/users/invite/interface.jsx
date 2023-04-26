import { StyledPageUsers, StyledFormContainer } from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { messageInvitationSent } from "../../../../../mocks/apps/messagesCards.mock";
import { usersInvitations } from "../../../../../mocks/apps/usersInvitations.mock";
import { Stack, Button, TextField } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function InviteUI(props) {
  const {
    loading,
    showMessage,
    invitation,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    formInvalid,
    handleCloseSectionMessage,
    state,
    form,
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
      messageInvitationSent[messageType];

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
              <TextField
                label="Nombre"
                placeholder="Ingresa su nombre completo"
                name="name"
                id="name"
                value={invitation.name.value}
                type="text"
                isRequired={true}
                errorMessage="Este campo no puede estar vacío"
                validMessage="bien"
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                maxLength={30}
                minLength={1}
                state={invitation.name.state}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />

              <TextField
                label="Identificación"
                placeholder="Ingrese su número de identificación"
                name="id"
                id="id"
                value={invitation.id.value}
                type="number"
                isRequired={true}
                errorMessage="Este campo debe contener un número de identificación"
                validMessage=""
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                min={3}
                state={invitation.id.state}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />

              <TextField
                label="Número de teléfono (Requerido)"
                placeholder="Ingrese su número telefónico"
                name="phone"
                id="phone"
                value={invitation.phone.value}
                type="number"
                isRequired={true}
                errorMessage="Este campo debe tener un número de teléfono"
                validMessage=""
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                min={10}
                state={invitation.phone.state}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />

              <TextField
                label="Correo"
                placeholder="Ingrese su dirección de correo electrónico"
                name="email"
                id="email"
                value={invitation.email.value}
                type="email"
                isRequired={true}
                // isInvalid={invitation.email.isInvalid && formInvalid}
                errorMessage="Este campo debe tener una dirección de correo electrónico válida"
                validMessage=""
                isDisabled={loading && true}
                size="compact"
                isFullWidth={true}
                minLength={5}
                state={invitation.email.state}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
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
      {/* {renderMessages()} */}
    </StyledPageUsers>
  );
}

export { InviteUI };
