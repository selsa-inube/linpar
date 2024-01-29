import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  SectionMessage,
  Stack,
  Text,
  inube,
  Grid,
  useMediaQueries,
} from "@inube/design-system";

import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";
import { paletteConfig } from "../../config/palette.config";
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

interface RenderContentFormNeutralPaletteUIProps {
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

function RenderContentFormNeutralPaletteUI(
  props: RenderContentFormNeutralPaletteUIProps
) {
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

  const {
    "(max-width: 744px)": isSmallScreen,
    "(min-width: 745px) and (max-width: 1000px)": isMediumScreen,
  } = useMediaQueries([
    "(max-width: 744px)",
    "(min-width: 745px) and (max-width: 1000px)",
  ]);

  const templateColumns = isSmallScreen
    ? "repeat(1, 1fr)"
    : isMediumScreen
    ? "repeat(2, 1fr)"
    : "repeat(3, 1fr)";

  return (
    <>
      <Text size="medium" padding="0px" appearance="gray">
        {paletteConfig[formType as keyof typeof paletteConfig].description}
      </Text>

      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Grid
            templateColumns="1fr"
            gap="s150"
            autoColumns="unset"
            autoRows="unset"
          >
            <Grid
              templateColumns={templateColumns}
              templateRows={
                isMediumScreen ? "repeat(10, 1fr)" : "repeat(7, 1fr)"
              }
              gap="s150"
              autoColumns="unset"
              autoRows="unset"
              autoFlow={isSmallScreen ? "row" : "column"}
            >
              {Object.entries(categories[formType]).map(([tokenName]) => (
                <Stack key={tokenName} gap="16px" direction="column">
                  <TokenColorCard
                    key={tokenName}
                    tokenName={tokenName}
                    tokenDescription={"Token de color"}
                    onColorChange={(tokenName, newColor) =>
                      handleColorChange(tokenName, newColor!)
                    }
                    width="auto"
                  />
                </Stack>
              ))}
            </Grid>
          </Grid>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderContentFormNeutralPaletteUI };
