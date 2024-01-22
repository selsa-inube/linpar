import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  Grid,
  inube,
  SectionMessage,
  Stack,
  Spinner,
  Text,
  useMediaQueries,
} from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";

import { linesFormsConfig } from "../../config/lines.config";

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

interface RenderLinesWithSpinnerFormUIProps {
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
  linesConfig: typeof linesFormsConfig;
  message: IMessageState;
  updatedTheme: typeof inube;
}

function RenderLinesWithSpinnerFormUI(
  props: RenderLinesWithSpinnerFormUIProps
) {
  const {
    formType,
    handleReset,
    handleCloseMessage,
    handleSubmitForm,
    handleTokenChange,
    hasChanges,
    isLoading,
    linesConfig,
    message,
    updatedTheme,
  } = props;

  const linesCards = Object.entries(
    linesConfig[formType as keyof typeof linesConfig].status
  );

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
      <Text size="medium" appearance="gray">
        {linesConfig[formType as keyof typeof linesConfig].description}
      </Text>
      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Stack direction="column" gap={inube.spacing.s350}>
            <Grid
              templateColumns={templateColumns}
              gap="s350"
              autoColumns="unset"
              autoRows="unset"
            >
              {linesCards.map(([key, config]) => (
                <Stack key={key} direction="column" alignItems="center">
                  <Spinner transparent={key === "transparent"} />
                  <FieldsetColorCard
                    appearance={formType}
                    category={key}
                    description={config.description}
                    onChange={(newTokenName) =>
                      handleTokenChange(formType, key, newTokenName)
                    }
                    optionsMenu={updatedTheme.color.palette}
                    title={config.title}
                    typeToken="stroke"
                  />
                </Stack>
              ))}
            </Grid>
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderLinesWithSpinnerFormUI };
