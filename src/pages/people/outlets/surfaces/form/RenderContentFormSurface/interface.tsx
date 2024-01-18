import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  SectionMessage,
  Stack,
  Text,
  inube,
  Grid,
  useMediaQueries,
} from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { SendInformationMessage } from "@src/components/feedback/SendingInformation";

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

interface RenderSurfaceContentFormUIProps {
  surfaceTokens: typeof inube;
  formType: Appearance;
  surfaceConfig: any;
  isLoading: boolean;
  palette: typeof inube;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeTokens: any;
  message: IMessageState;
  hasChanges: () => boolean;
  handleCloseMessage: () => void;
}

function RenderSurfaceContentFormUI(props: RenderSurfaceContentFormUIProps) {
  const {
    formType,
    surfaceConfig,
    surfaceTokens,
    isLoading,
    handleSubmitForm,
    handleReset,
    palette,
    handleChangeTokens,
    message,
    handleCloseMessage,
    hasChanges,
  } = props;

  const colorCards = Object.entries(surfaceConfig[formType].status);

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
        {surfaceConfig[formType].description}
      </Text>

      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={surfaceTokens}>
          <Stack direction="column" gap={inube.spacing.s350}>
            <SendInformationMessage appearance={formType!} />
            <Grid
              templateColumns={templateColumns}
              gap="s350"
              autoColumns="unset"
              autoRows="unset"
            >
              {colorCards.map(([key, config]: any) => (
                <FieldsetColorCard
                  key={key}
                  optionsMenu={palette}
                  title={config.title}
                  description={config.description}
                  appearance={formType}
                  category={key}
                  typeToken="surface"
                  textWithColorToken={config.example}
                  onChange={(newTokenName) =>
                    handleChangeTokens(formType, key, newTokenName)
                  }
                />
              ))}
            </Grid>
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderSurfaceContentFormUI };
