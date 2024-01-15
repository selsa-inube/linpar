import {
  Breadcrumbs,
  inube,
  SectionMessage,
  Stack,
  Tabs,
  useMediaQueries,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";

import {
  StyledMessageContainer,
  StyledContainer,
  StyledTabsContainer,
} from "./styles";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { peopleOptionsConfig } from "../options/config/people.config";
import { colorTabsConfig } from "./config/colorTabs.config";
import { PrimaryForm } from "./form/PrimaryForm";
import { ErrorForm } from "./form/ErrorForm";
import { WarningForm } from "./form/WarningForm";
import { SuccessForm } from "./form/SuccessForm";
import { InformationForm } from "./form/InformationForm";
import { HelpForm } from "./form/HelpForm";
import { DarkForm } from "./form/DarkForm";
import { GrayForm } from "./form/GrayForm";
import { LightForm } from "./form/LightForm";
import { ThemeProvider } from "styled-components";

const renderMessage = (
  message: IUsersMessage,
  handleCloseMessage: () => void
) => {
  if (!message.data) return null;

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="98%">
        <SectionMessage
          title={message.data.title}
          description={message.data.description}
          icon={message.data.icon}
          appearance={message.data.appearance}
          duration={4000}
          closeSectionMessage={handleCloseMessage}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

interface TextUIProps {
  originalTextConfig: any;
  textTokens: any;
  textConfig: any;
  palette: typeof inube;
  selectedTab: string;
  handleChangeColor: any;
  handleTabChange: (id: string) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  message: IUsersMessage;
  handleCloseMessage: () => void;
}

export function TextsUI(props: TextUIProps) {
  const {
    textConfig,
    palette,
    selectedTab,
    textTokens,
    originalTextConfig,
    handleChangeColor,
    handleTabChange,
    message,
    handleCloseMessage,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const updatedTheme = {
    ...inube.color,
    color: { ...textTokens },
  };

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={peopleOptionsConfig[1].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[1].label}
              description={peopleOptionsConfig[1].description}
              navigatePage="/people"
            />
          </Stack>
          <StyledContainer>
            <StyledTabsContainer typeTabs={typeTabs}>
              <Stack direction="column" gap="32px">
                <Tabs
                  tabs={Object.values(colorTabsConfig)}
                  selectedTab={selectedTab}
                  type={typeTabs ? "select" : "tabs"}
                  onChange={handleTabChange}
                />
                <ThemeProvider theme={updatedTheme}>
                  {selectedTab === colorTabsConfig.primary.id && (
                    <PrimaryForm
                      textConfig={textConfig.primary}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.error.id && (
                    <ErrorForm
                      textConfig={textConfig.error}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.warning.id && (
                    <WarningForm
                      textConfig={textConfig.warning}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.success.id && (
                    <SuccessForm
                      textConfig={textConfig.success}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.information.id && (
                    <InformationForm
                      textConfig={textConfig.info}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.help.id && (
                    <HelpForm
                      textConfig={textConfig.help}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.dark.id && (
                    <DarkForm
                      textConfig={textConfig.dark}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.gray.id && (
                    <GrayForm
                      textConfig={textConfig.gray}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                  {selectedTab === colorTabsConfig.light.id && (
                    <LightForm
                      textConfig={textConfig.light}
                      palette={palette}
                      onChange={handleChangeColor}
                      originalTextConfig={originalTextConfig}
                      textTokens={textTokens}
                    />
                  )}
                </ThemeProvider>
              </Stack>
            </StyledTabsContainer>
          </StyledContainer>
        </Stack>
        {renderMessage(message, handleCloseMessage)}
      </Stack>
    </>
  );
}
