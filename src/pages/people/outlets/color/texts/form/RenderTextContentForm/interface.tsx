import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, Text, inube } from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@components/cards/FieldsetColorCard";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@components/feedback/SendingInformation/types";
import { textFormsConfig } from "../../config/text.config";

interface ITextCardConfig {
  title: string;
  description: string;
  example: string;
}
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
  toggleActive: boolean;
  setToggleActive: (props: boolean) => void;
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
    toggleActive,
    setToggleActive,
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
            {textCards.map(([key, config]: [string, ITextCardConfig]) => (
              <FieldsetColorCard
                key={key}
                optionsMenu={updatedTheme.color.palette}
                title={config.title}
                description={config.description}
                appearance={formType}
                category={key}
                typeToken="text"
                onChange={(newTokenName) =>
                  handleTokenChange(formType, key, newTokenName)
                }
                toggleActive={toggleActive}
                setToggleActive={setToggleActive}
              >
                <Text
                  size="medium"
                  appearance={formType}
                  parentHover={key === "hover"}
                  disabled={key === "disabled"}
                >
                  {config.example}
                </Text>
              </FieldsetColorCard>
            ))}
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderTextContentFormUI };
