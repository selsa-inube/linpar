import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  SectionMessage,
  Stack,
  Text,
  inube,
  Grid,
  useMediaQueries,
  NavLink,
} from "@inube/design-system";
import { StyledMessageContainer } from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { SendInformationMessage } from "@src/components/feedback/SendingInformation";
import { surfaceFormsConfig } from "../../config/surface.config";

interface ISurfaceCardConfig {
  title: string;
  description: string;
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

interface RenderSurfaceContentFormUIProps {
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
  surfaceConfig: typeof surfaceFormsConfig;
  updatedTheme: typeof inube;
}

function RenderSurfaceContentFormUI(props: RenderSurfaceContentFormUIProps) {
  const {
    formType,
    handleCloseMessage,
    handleReset,
    handleSubmitForm,
    handleTokenChange,
    hasChanges,
    isLoading,
    message,
    surfaceConfig,
    updatedTheme,
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
            {formType === "navLink" && <NavLink></NavLink>}
            {formType !== "navLink" && (
              <SendInformationMessage appearance={formType as Appearance} />
            )}

            <Grid
              templateColumns={templateColumns}
              gap="s350"
              autoColumns="unset"
              autoRows="unset"
            >
              {surfaceCards.map(
                ([key, config]: [string, ISurfaceCardConfig]) => (
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
                )
              )}
            </Grid>
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderSurfaceContentFormUI };
