import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  inube,
  SectionMessage,
  Stack,
  Text,
  Label,
} from "@inube/design-system";
import { StyledMessageContainer, StyledLinkContainer } from "./styles";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@components/cards/FieldsetColorCard";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { strokesFormsConfig } from "../../config/Strokes.config";

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

interface RenderStrokesWithLinkFormUIProps {
  formType: Appearance | string;
  handleReset: () => void;
  handleCloseMessage: () => void;
  handleSubmitForm: () => void;
  handleTokenChange: (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  strokesConfig: typeof strokesFormsConfig;
  message: IMessageState;
  updatedTheme: typeof inube;
  toggleActive: boolean;
  setToggleActive: (props: boolean) => void;
}

function RenderStrokesWithLinkFormUI(props: RenderStrokesWithLinkFormUIProps) {
  const {
    formType,
    handleReset,
    handleCloseMessage,
    handleSubmitForm,
    handleTokenChange,
    hasChanges,
    isLoading,
    strokesConfig,
    message,
    updatedTheme,
    toggleActive,
    setToggleActive,
  } = props;

  const strokesCards = Object.entries(
    strokesConfig[formType as keyof typeof strokesConfig].status
  );

  return (
    <>
      <Text size="medium" appearance="gray">
        {strokesConfig[formType as keyof typeof strokesConfig].description}
      </Text>
      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Stack direction="column" gap={inube.spacing.s350}>
            {strokesCards.map(([key, config]: any) => (
              <FieldsetColorCard
                appearance={formType}
                category={key}
                description={config.description}
                key={key}
                onChange={(newTokenName) =>
                  handleTokenChange(formType, key, newTokenName)
                }
                optionsMenu={updatedTheme.color.palette}
                title={config.title}
                typeToken="stroke"
                toggleActive={toggleActive}
                setToggleActive={setToggleActive}
              >
                <Text size="medium" appearance="dark">
                  {config.example}
                  <StyledLinkContainer appearance={formType} category={key}>
                    <Label
                      size="medium"
                      appearance={formType}
                      parentHover={key === "hover"}
                      disabled={key === "disabled"}
                    >
                      {config.link}
                    </Label>
                  </StyledLinkContainer>
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

export { RenderStrokesWithLinkFormUI };
