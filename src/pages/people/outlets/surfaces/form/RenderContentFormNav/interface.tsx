import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  Nav,
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
import { mockNav, surfaceFormsConfig } from "../../config/surface.config";

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

interface RenderContentFormSurfaceNavUIProps {
  formType: Appearance | string;
  handleCloseMessage: () => void;
  handleReset: () => void;
  handleSubmitForm: () => void;
  handleShowNav: () => void;
  handleTokenChange: (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  message: IMessageState;
  showNav: boolean;
  surfaceConfig: typeof surfaceFormsConfig;
  updatedTheme: typeof inube;
}

function RenderContentFormSurfaceNavUI(
  props: RenderContentFormSurfaceNavUIProps
) {
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

  const { "(max-width: 744px)": isSmallScreen } = useMediaQueries([
    "(max-width: 744px)",
  ]);

  const flexDirection = isSmallScreen ? "column" : "row";
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
          <Stack gap={inube.spacing.s350} direction={flexDirection}>
            <Nav navigation={mockNav} logoutTitle="Logout" />
            <Grid>
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

export { RenderContentFormSurfaceNavUI };
