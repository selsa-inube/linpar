import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube } from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

const renderMessage = (
  message: IUsersMessage,
  handleCloseMessage: () => void,
  onMessageClosed: () => void
) => {
  if (!message.data) return null;

  const closeMessageAndExecuteCallback = () => {
    handleCloseMessage();
    onMessageClosed();
  };

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          title={message.data.title}
          description={message.data.description}
          icon={message.data.icon}
          appearance={message.data.appearance}
          duration={4000}
          closeSectionMessage={closeMessageAndExecuteCallback}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

interface RenderContentFormUIProps {
  textTokens: typeof inube;
  formType: string;
  textConfig: any;
  isLoading: boolean;
  palette: typeof inube;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangePrimaryTokens: any;
  message: IMessageState;
  hasChanges: () => boolean;
  handleCloseMessage: () => void;
}

function RenderContentFormUI(props: RenderContentFormUIProps) {
  const {
    formType,
    textConfig,
    isLoading,
    handleSubmitForm,
    handleReset,
    palette,
    handleChangePrimaryTokens,
    message,
    handleCloseMessage,
    hasChanges,
  } = props;

  const colorCards = Object.entries(textConfig[formType].status);

  return (
    <>
      <Text size="medium" padding="s0" appearance="gray">
        {textConfig.description}
      </Text>
      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <Stack direction="column" gap={inube.spacing.s350}>
          {colorCards.map(([key, config]: any) => (
            <FieldsetColorCard
              key={key}
              optionsMenu={palette}
              title={config.title}
              description={config.description}
              appearance={formType}
              category={key}
              textWithColorToken={config.example}
              onChange={(newTokenName) =>
                handleChangePrimaryTokens(formType, key, newTokenName)
              }
            />
          ))}
        </Stack>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderContentFormUI };
