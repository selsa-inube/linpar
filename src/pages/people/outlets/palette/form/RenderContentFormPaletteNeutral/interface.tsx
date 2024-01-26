import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  SectionMessage,
  Stack,
  inube,
  Grid,
  useMediaQueries,
} from "@inube/design-system";

import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { ThemeProvider } from "styled-components";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { RenderCategoryGrid } from "../RenderCategoryGrid";
import { StyledMessageContainer } from "../RenderCategoryGrid/styles";

interface IPaletteCardConfig {
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

interface RenderContentFormPaletteNeutralUIProps {
  formType: Appearance | string;
  categories: string[];
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
  updatedTheme: typeof inube;
  setColorTokens: typeof inube;
}

function RenderContentFormPaletteNeutralUI(
  props: RenderContentFormPaletteNeutralUIProps
) {
  const {
    formType,
    categories,
    handleCloseMessage,
    handleReset,
    handleSubmitForm,
    handleTokenChange,
    hasChanges,
    isLoading,
    message,
    setColorTokens,
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

  const {
    "(max-width: 640px)": smallScreen,
    "(max-width: 1170px)": midScreen,
  } = useMediaQueries(["(max-width: 640px)", "(max-width: 1170px)"]);
  return (
    <>
      {/* <Text size="medium" padding="0px" appearance="gray">
        {paletteConfig[formType as keyof typeof paletteConfig].description}
      </Text> */}

      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <ThemeProvider theme={updatedTheme}>
          <Stack direction="column" gap={inube.spacing.s350}>
            <Grid
              templateColumns="1fr"
              gap="s150"
              autoColumns="unset"
              autoRows="unset"
            >
              <RenderCategoryGrid
                categories={categories}
                templateColumns={
                  smallScreen ? "auto" : `repeat(${midScreen ? 2 : 3}, 1fr)`
                }
                templateRows={midScreen ? "repeat(10, 1fr)" : "repeat(7, 1fr)"}
                autoFlow={smallScreen ? "row" : "column"}
                hasBackground
                handleColorChange={setColorTokens}
              />
            </Grid>
          </Stack>
        </ThemeProvider>
      </FormButtons>
      {renderMessage(message, handleCloseMessage, handleReset)}
    </>
  );
}

export { RenderContentFormPaletteNeutralUI };
