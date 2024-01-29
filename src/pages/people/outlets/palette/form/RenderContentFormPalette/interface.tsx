import { FormButtons } from "@components/forms/submit/FormButtons";
import { SectionMessage, Stack, inube } from "@inube/design-system";

import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";
import { StyledMessageContainer } from "./styles";

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

interface RenderContentFormPaletteUIProps {
  categories: typeof inube;
  formType: Appearance | string;
  handleCloseMessage: () => void;
  handleColorChange: (tokenName: string, newColor: string) => void;
  handleReset: () => void;
  handleSubmitForm: () => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  message: IMessageState;
  updatedTheme: typeof inube;
}

function RenderContentFormPaletteUI(props: RenderContentFormPaletteUIProps) {
  const {
    categories,
    formType,
    handleCloseMessage,
    handleColorChange,
    handleReset,
    handleSubmitForm,
    hasChanges,
    isLoading,
    message,
    updatedTheme,
  } = props;

  return (
    <>
      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Stack direction="column" gap={inube.spacing.s150}>
            {Object.entries(categories[formType]).map(([tokenName]) => (
              <Stack key={tokenName} gap="16px" direction="column">
                <TokenColorCard
                  key={tokenName}
                  onColorChange={(tokenName, newColor) =>
                    handleColorChange(tokenName, newColor!)
                  }
                  tokenDescription={"Token de color"}
                  tokenName={tokenName}
                  width="auto"
                />
              </Stack>
            ))}
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderContentFormPaletteUI };
