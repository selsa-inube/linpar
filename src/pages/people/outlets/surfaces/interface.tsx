import {
  Breadcrumbs,
  SectionMessage,
  Stack,
  Tabs,
  useMediaQueries,
  inube,
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
import { useState } from "react";
import { IAssignmentFormEntry } from "@src/pages/privileges/outlets/users/types/forms.types";
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

interface UsersUIProps {
  originalTextConfig: any;
  textTokens: any;
  surfaceConfig: any;
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

export function SurfacesUI(props: UsersUIProps) {
  const {
    surfaceConfig,
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
        gap={inube.spacing.s600}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={peopleOptionsConfig[2].crumbs} />
            <PageTitle
              title={peopleOptionsConfig[2].label}
              description={peopleOptionsConfig[2].description}
              navigatePage="/people"
            />
          </Stack>
        </Stack>

        <StyledContainer>
          <StyledTabsContainer typeTabs={typeTabs}>
            <Stack direction="column" gap={inube.spacing.s400}>
              <Tabs
                tabs={Object.values(colorTabsConfig)}
                selectedTab={selectedTab}
                type={typeTabs ? "select" : "tabs"}
                onChange={handleTabChange}
              />
              <ThemeProvider theme={updatedTheme}>
                {selectedTab === colorTabsConfig.primary.id && (
                  <PrimaryForm
                    surfaceConfig={surfaceConfig.primary}
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
    </>
  );
}
