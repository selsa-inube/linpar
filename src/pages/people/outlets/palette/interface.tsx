import {
  Breadcrumbs,
  Grid,
  SectionMessage,
  Stack,
  useMediaQueries,
  inube,
  Text,
  Tabs,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";

import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { peopleOptionsConfig } from "../options/config/people.config";
import { FormButtons } from "@src/components/forms/submit/FormButtons";
import { ThemeProvider } from "styled-components";
import { paletteTabsConfig } from "./config/paletteTabs.config";
import { StyledContainer, StyledTabsContainer } from "./styles";
import { RenderCategoryGrid } from "./form/RenderCategoryGrid";

interface PaletteUIProps {
  colorTokens: typeof inube;
  setColorTokens: typeof inube;
  isLoading: boolean;
  handleSubmitForm: () => void;
  hasChanges: () => boolean;
  message: IUsersMessage;
  handleCloseMessage: () => void;
  onMessageClosed: () => void;
  handleReset: () => void;
  originalTokens: typeof inube;
  handleTabChange: (id: string) => void;
  selectedTab: string;
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
};

export function PaletteUI(props: PaletteUIProps) {
  const {
    message,
    handleCloseMessage,
    onMessageClosed,
    isLoading,
    handleSubmitForm,
    hasChanges,
    colorTokens,
    setColorTokens,
    handleReset,
    handleTabChange,
    selectedTab,
    originalTokens,
  } = props;

  const {
    "(max-width: 640px)": smallScreen,
    "(max-width: 1170px)": midScreen,
  } = useMediaQueries(["(max-width: 640px)", "(max-width: 1170px)"]);
  const colorTabs = Object.keys(paletteTabsConfig);
  const paletteEntries = Object.entries(colorTokens);
  const firstTwoCategories = paletteEntries.slice(0, 2);
  const remainingCategories = paletteEntries.slice(2);

  const updatedThemeColor = {
    ...originalTokens.color,
    palette: { ...colorTokens },
  };

  const updatedTheme = {
    ...originalTokens,
    color: { ...updatedThemeColor },
  };
  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? "s300" : "s400 s800"}
    >
      <Stack gap="48px" direction="column">
        <Stack gap="24px" direction="column">
          <Breadcrumbs crumbs={peopleOptionsConfig[0].crumbs} />
          <PageTitle
            title={peopleOptionsConfig[0].label}
            description={peopleOptionsConfig[0].description}
            navigatePage="/people"
          />
        </Stack>
        <StyledContainer>
          <StyledTabsContainer typeTabs={midScreen}>
            <Stack direction="column" gap={inube.spacing.s400}>
              <Tabs
                onChange={handleTabChange}
                selectedTab={selectedTab}
                tabs={Object.values(paletteTabsConfig)}
                type={midScreen ? "select" : "tabs"}
              />
              {colorTabs.map(
                (formType) =>
                  selectedTab === formType &&
                  formType === "neutral" && (
                    <Grid
                      templateColumns="1fr"
                      gap="s150"
                      autoColumns="unset"
                      autoRows="unset"
                    >
                      <RenderCategoryGrid
                        categories={firstTwoCategories}
                        templateColumns={
                          smallScreen
                            ? "auto"
                            : `repeat(${midScreen ? 2 : 3}, 1fr)`
                        }
                        templateRows={
                          midScreen ? "repeat(10, 1fr)" : "repeat(7, 1fr)"
                        }
                        autoFlow={smallScreen ? "row" : "column"}
                        hasBackground
                        handleColorChange={setColorTokens}
                      />
                    </Grid>
                  )
              )}
            </Stack>
          </StyledTabsContainer>
        </StyledContainer>
        <Tabs tabs={Object.values(paletteTabsConfig)} />

        <Stack direction="column" width="100%" gap="24px">
          <Grid
            templateColumns="1fr"
            gap="s150"
            autoColumns="unset"
            autoRows="unset"
          >
            <RenderCategoryGrid
              categories={firstTwoCategories}
              templateColumns={
                smallScreen ? "auto" : `repeat(${midScreen ? 2 : 3}, 1fr)`
              }
              templateRows={midScreen ? "repeat(10, 1fr)" : "repeat(7, 1fr)"}
              autoFlow={smallScreen ? "row" : "column"}
              hasBackground
              handleColorChange={setColorTokens}
            />
          </Grid>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="s150"
            autoColumns="unset"
            autoRows="unset"
          >
            <RenderCategoryGrid
              categories={remainingCategories}
              templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
              handleColorChange={setColorTokens}
            />
          </Grid>
        </Stack>
      </Stack>
      {renderMessage(message, handleCloseMessage, onMessageClosed)}
    </Stack>
  );
}
