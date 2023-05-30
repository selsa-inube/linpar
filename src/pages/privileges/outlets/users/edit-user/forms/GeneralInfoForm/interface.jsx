import { FormContainer } from "@components/forms/FormContainer";
import { Button, Stack } from "@inube/design-system";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { messageGeneralInfoConfig } from "./config/messageGeneralInfoConfig";

function GeneralInformationFormUI(props) {
  const {
    isLoading,
    handleSubmit,
    handleFieldChange,
    user,
    allowSubmit,
    formInvalid,
    runValidations,
    showMessage,
    handleCloseSectionMessage,
    handleButtons,
    resetValues,
    isFieldModified,
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
      <form onSubmit={handleSubmit}>
        <FormContainer
          handleFieldChange={handleFieldChange}
          user={user}
          isLoading={isLoading}
          formInvalid={formInvalid}
          runValidations={runValidations}
          isFieldModified={isFieldModified}
        />
        {allowSubmit && (
          <Stack gap="8px" justifyContent="flex-end">
            <Button
              appearance="secondary"
              type="reset"
              handleClick={resetValues}
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
      </form>
      {renderMessages()}
    </>
  );
}

export { GeneralInformationFormUI };
