import {
  Breadcrumbs,
  Grid,
  SectionMessage,
  Stack,
  useMediaQueries,
  inube,
  Text,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { StyledMessageContainer, StyledGridContainer } from "./styles";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { peopleOptionsConfig } from "../options/config/people.config";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";
import { FormButtons } from "@src/components/forms/submit/FormButtons";
import { categoryTranslations } from "./config/palette.config";
import { ThemeProvider } from "styled-components";

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
}

interface renderCategoryGridProps {
  categories: typeof inube;
  templateColumns: string;
  templateRows?: string;
  autoFlow?: string;
  hasBackground?: boolean;
  handleColorChange: (tokenName: string, newColor: string) => void;
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
      <Stack justifyContent="flex-end" width="98%">
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

function RenderCategoryGrid(props: renderCategoryGridProps) {
  const {
    categories,
    templateColumns,
    templateRows = "auto",
    autoFlow = "row",
    hasBackground = false,
    handleColorChange,
  } = props;
  return categories.map(([category, tokens]: string) => (
    <Stack key={category} gap="16px" direction="column">
      <Text type="title" size="medium" textAlign="start" appearance="dark">
        {categoryTranslations[category] || category}
      </Text>
      <StyledGridContainer hasBackground={hasBackground}>
        <Grid
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap="s050"
          autoColumns="unset"
          autoRows="unset"
          autoFlow={autoFlow}
        >
          {Object.entries(tokens).map(([tokenName]) => (
            <TokenColorCard
              key={tokenName}
              tokenName={tokenName}
              tokenDescription={"Token de color"}
              onColorChange={(tokenName, newColor) =>
                handleColorChange(tokenName, newColor!)
              }
            />
          ))}
        </Grid>
      </StyledGridContainer>
    </Stack>
  ));
}

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
    originalTokens,
  } = props;

  const {
    "(max-width: 640px)": smallScreen,
    "(max-width: 1170px)": midScreen,
  } = useMediaQueries(["(max-width: 640px)", "(max-width: 1170px)"]);
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
        <FormButtons
          disabledButtons={!hasChanges()}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        >
          <ThemeProvider theme={updatedTheme}>
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
                  templateRows={
                    midScreen ? "repeat(10, 1fr)" : "repeat(7, 1fr)"
                  }
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
          </ThemeProvider>
        </FormButtons>
      </Stack>
      {renderMessage(message, handleCloseMessage, onMessageClosed)}
    </Stack>
  );
}
