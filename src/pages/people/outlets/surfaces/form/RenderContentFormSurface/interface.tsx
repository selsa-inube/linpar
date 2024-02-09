import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  SectionMessage,
  Stack,
  Text,
  inube,
  Grid,
  useMediaQuery,
  NavLink,
} from "@inube/design-system";
import { StyledMessageContainer, StyledNavLinkContainer } from "./styles";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { FieldsetColorCard } from "@components/cards/FieldsetColorCard";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@components/feedback/SendingInformation/types";
import { SendInformationMessage } from "@components/feedback/SendingInformation";
import { surfaceFormsConfig } from "../../config/surface.config";
import { MdOutlineHouse } from "react-icons/md";
import { SurfaceAppearance } from "../../types";

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
  formType: SurfaceAppearance;
  handleCloseMessage: () => void;
  handleReset: () => void;
  handleSubmitForm: () => void;
  handleTokenChange: (
    appearance: SurfaceAppearance,
    category: string,
    updatedTokenName: string
  ) => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  message: IMessageState;
  surfaceConfig: typeof surfaceFormsConfig;
  updatedTheme: typeof inube;
  toggleActive: boolean;
  setToggleActive: (props: boolean) => void;
  navLinkIsSelected: boolean;
  setNavLinkIsSelected: (props: boolean) => void;
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
    toggleActive,
    setToggleActive,
    navLinkIsSelected,
    setNavLinkIsSelected,
  } = props;

  const surfaceCards = Object.entries(
    surfaceConfig[formType as keyof typeof surfaceConfig].status
  );

  const isSmallScreen = useMediaQuery("(max-width: 744px)");
  const templateColumns = isSmallScreen ? "repeat(1, 1fr)" : "repeat(2, 1fr)";

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
            {formType === "navLink" && (
              <StyledNavLinkContainer>
                <NavLink
                  icon={<MdOutlineHouse />}
                  label="Text"
                  onClick={() => setNavLinkIsSelected(!navLinkIsSelected)}
                  selected={navLinkIsSelected}
                />
              </StyledNavLinkContainer>
            )}

            {formType !== "navLink" && (
              <SendInformationMessage
                appearance={formType as Appearance}
                buttonType="filled"
              />
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

export { RenderSurfaceContentFormUI };
