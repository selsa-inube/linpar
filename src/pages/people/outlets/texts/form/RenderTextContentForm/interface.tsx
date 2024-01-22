import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube } from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { textFormsConfig } from "../../config/text.config";

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
          appearance={message.data.appearance}
          closeSectionMessage={closeMessageAndExecuteCallback}
          description={message.data.description}
          duration={4000}
          icon={message.data.icon}
          title={message.data.title}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

interface RenderTextContentFormUIProps {
  formType: Appearance | string;
  handleCloseMessage: () => void;
  handleReset: () => void;
  handleSubmitForm: () => void;
  handleTokenChange: (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  message: IMessageState;
  textConfig: typeof textFormsConfig;
  updatedTheme: typeof inube;
}

function RenderTextContentFormUI(props: RenderTextContentFormUIProps) {
  const {
    formType,
    handleCloseMessage,
    handleReset,
    handleSubmitForm,
    handleTokenChange,
    hasChanges,
    isLoading,
    message,
    textConfig,
    updatedTheme,
  } = props;

  const textCards = Object.entries(
    textConfig[formType as keyof typeof textConfig].status
  );
  return (
    <>
      <Text size="medium" padding="s0" appearance="gray">
        {textConfig[formType as keyof typeof textConfig].description}
      </Text>
      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Stack direction="column" gap={inube.spacing.s350}>
            {textCards.map(([key, config]) => (
              <FieldsetColorCard
                key={key}
                optionsMenu={updatedTheme.color.palette}
                title={config.title}
                description={config.description}
                appearance={formType}
                category={key}
                typeToken="text"
                textWithColorToken={config.example}
                onChange={(newTokenName) =>
                  handleTokenChange(formType, key, newTokenName)
                }
              />
            ))}
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderTextContentFormUI };
