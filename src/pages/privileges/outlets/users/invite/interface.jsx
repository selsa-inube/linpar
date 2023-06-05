import { PageTitle } from "@components/PageTitle";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { Breadcrumbs, Button, Stack, TextField } from "@inube/design-system";
import { MdOutlineShortcut } from "react-icons/md";
import { messageInvitationSentConfig } from "./config/messageInvitationSent.config";
import { usersInvitationsConfig } from "./config/usersInvitations.config";
import { StyledFormContainer, StyledPageUsers } from "./styles";

function InviteUI(props) {
  const {
    formik,
    formInvalid,
    loading,
    showMessage,
    handleCloseSectionMessage,
    handleSubmit,
  } = props;

  function stateValue(attribute) {
    if (!formik.touched[attribute]) return undefined;
    if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
    return "valid";
  }

  function renderMessages() {
    let messageType;
    if (showMessage) {
      if (formInvalid) {
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
                state={stateValue("name")}
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
                state={stateValue("id")}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <TextField
                label="Número de teléfono"
                placeholder="Ingrese su número telefónico"
                name="phone"
                id="phone"
                value={formik.values.phone}
                type="number"
                isInvalid={formik.errors.phone && formInvalid}
                isRequired={true}
                errorMessage={formik.errors.phone}
                validMessage="El número de teléfono es valido"
                isDisabled={loading}
                size="compact"
                isFullWidth={true}
                state={stateValue("phone")}
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
                state={stateValue("email")}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </StyledFormContainer>
            <Button
              type="text"
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
      {renderMessages()}
    </StyledPageUsers>
  );
}

export { InviteUI };
