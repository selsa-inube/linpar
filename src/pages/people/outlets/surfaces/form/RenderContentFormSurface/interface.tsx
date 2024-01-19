import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  SectionMessage,
  Stack,
  Text,
  inube,
  Grid,
  useMediaQueries,
  Button,
  Nav,
} from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { SendInformationMessage } from "@src/components/feedback/SendingInformation";
import { mockNav, surfaceFormsConfig } from "../../config/surface.config";

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
  updatedTheme: typeof inube;
  formType: string;
  surfaceConfig: typeof surfaceFormsConfig;
  isLoading: boolean;

  handleSubmitForm: () => void;
  handleReset: () => void;
  handleTokenChange: (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => void;
  message: IMessageState;
  hasChanges: () => boolean;
  handleCloseMessage: () => void;
}

function RenderSurfaceContentFormUI(props: RenderSurfaceContentFormUIProps) {
  const {
    formType,
    surfaceConfig,
    updatedTheme,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleTokenChange,
    message,
    handleCloseMessage,
    hasChanges,
  } = props;

  const surfaceCards = Object.entries(
    surfaceConfig[formType as keyof typeof surfaceConfig].status
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
      <Text size="medium" padding="0px" appearance="gray">
        {surfaceConfig[formType as keyof typeof surfaceConfig].description}
      </Text>

      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Stack direction="column" gap={inube.spacing.s350}>
            {formType === "navLink" && <>Aqui esta el nav link</>}
            {formType !== "navLink" && (
              <SendInformationMessage appearance={formType as Appearance} />
            )}

            <Grid
              templateColumns={templateColumns}
              gap="s350"
              autoColumns="unset"
              autoRows="unset"
            >
              {surfaceCards.map(([key, config]: any) => (
                <FieldsetColorCard
                  key={key}
                  optionsMenu={updatedTheme.color.palette}
                  title={config.title}
                  description={config.description}
                  appearance={formType}
                  category={key}
                  typeToken="surface"
                  onChange={(newTokenName) =>
                    handleTokenChange(formType, key, newTokenName)
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
