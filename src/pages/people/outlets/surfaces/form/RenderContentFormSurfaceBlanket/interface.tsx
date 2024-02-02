import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  Button,
  Blanket,
  SectionMessage,
  Stack,
  Text,
  inube,
  Grid,
  useMediaQueries,
} from "@inube/design-system";
import {
  StyledBackdropBlanket,
  StyledMessageContainer,
  StyledModal,
} from "./styles";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@src/components/cards/FieldsetColorCard";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
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

interface RenderContentFormSurfaceBlanketUIProps {
  formType: Appearance | string;
  handleCloseMessage: () => void;
  handleReset: () => void;
  handleSubmitForm: () => void;
  handleShowBlanket: () => void;
  handleTokenChange: (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  message: IMessageState;
  showBlanket: boolean;
  surfaceConfig: typeof surfaceFormsConfig;
  toggleActive: boolean;
  setToggleActive: (props: boolean) => void;
  updatedTheme: typeof inube;
}

function RenderContentFormSurfaceBlanketUI(
  props: RenderContentFormSurfaceBlanketUIProps
) {
  const {
    formType,
    handleCloseMessage,
    handleReset,
    handleSubmitForm,
    handleShowBlanket,
    handleTokenChange,
    hasChanges,
    isLoading,
    message,
    showBlanket,
    surfaceConfig,
    toggleActive,
    setToggleActive,
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
            <Button
              appearance="dark"
              variant="outlined"
              spacing={isSmallScreen ? "compact" : "wide"}
              onClick={handleShowBlanket}
            >
              Mostrar Blanket
            </Button>
            {showBlanket && (
              <Blanket>
                <StyledModal>
                  <Stack
                    direction="column"
                    gap={inube.spacing.s300}
                    padding="s300"
                  >
                    <Stack>
                      <Text
                        type="title"
                        size={isSmallScreen ? "small" : "medium"}
                        appearance={"dark"}
                      >
                        Ventana modal
                      </Text>
                    </Stack>
                    <Stack justifyContent="flex-end" gap="8px">
                      <Button
                        appearance={"dark"}
                        variant="outlined"
                        spacing={isSmallScreen ? "compact" : "wide"}
                        onClick={handleShowBlanket}
                      >
                        Ocultar modal
                      </Button>
                    </Stack>
                  </Stack>
                </StyledModal>
                <StyledBackdropBlanket onClick={() => handleShowBlanket()} />
              </Blanket>
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
                    toggleActive={toggleActive}
                    setToggleActive={setToggleActive}
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

export { RenderContentFormSurfaceBlanketUI };
