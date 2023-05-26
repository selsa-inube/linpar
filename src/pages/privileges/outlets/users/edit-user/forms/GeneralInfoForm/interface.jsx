import { FormContainer } from "../../../../../../../components/forms/FormContainer";
import { Button, Stack } from "@inube/design-system";
import { SectionMessage } from "../../../../../../../components/feedback/SectionMessage";
import { messageGeneralInfoConfig } from "./config/messageGeneralInfoConfig";
import { StyledForm } from "./styles";

function GeneralInformationFormUI(props) {
  const {
    isLoading,
    handleSubmit,
    handleChange,
    user,
    allowSubmit,
    formInvalid,
    runValidations,
    showMessage,
    handleCloseSectionMessage,
    handleButtons,
  } = props;

  function renderMessages() {
    let messageType;

    const invalidPropExists = Object.values(user).some(
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
      messageGeneralInfoConfig[messageType];

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
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FormContainer
          handleChange={handleChange}
          user={user}
          isLoading={isLoading}
          formInvalid={formInvalid}
          runValidations={runValidations}
        />
        {allowSubmit && (
          <Stack gap="8px" justifyContent="flex-end">
            <Button
              appearance="secondary"
              type="link"
              path="/privileges/users"
              isDisabled={handleButtons}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              appearance={"confirm"}
              isLoading={isLoading}
              isDisabled={handleButtons}
            >
              Guardar
            </Button>
          </Stack>
        )}
      </StyledForm>
      {renderMessages()}
    </>
  );
}

export { GeneralInformationFormUI };
