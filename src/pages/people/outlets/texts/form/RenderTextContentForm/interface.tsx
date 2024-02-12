import { FormButtons } from "@components/forms/submit/FormButtons";
import { Stack, Text, inube } from "@inube/design-system";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@components/cards/FieldsetColorCard";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@components/feedback/SendingInformation/types";
import { textFormsConfig } from "../../config/text.config";
import { RenderMessage } from "@components/layout/RenderMessage";

interface ITextCardConfig {
  title: string;
  description: string;
  example: string;
}

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
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseMessage}
          onMessageClosed={handleReset}
        />
      )}
    </>
  );
}

export { RenderTextContentFormUI };
