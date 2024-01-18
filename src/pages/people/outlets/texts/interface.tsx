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
import { RenderTextContentForm } from "./form/RenderTextContentForm";
import { IHandleSubmitProps } from "@src/routes/people";

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
  tokens: typeof inube;
  textConfig: any;
  selectedTab: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  handleTabChange: (id: string) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  message: IUsersMessage;
  handleCloseMessage: () => void;
}

export function TextsUI(props: TextUIProps) {
  const {
    tokens,
    handleSubmit,
    textConfig,
    selectedTab,
    handleTabChange,
    message,
    handleCloseMessage,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const colorTabs = Object.keys(colorTabsConfig);

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
                {colorTabs.map(
                  (formType) =>
                    selectedTab === formType && (
                      <RenderTextContentForm
                        key={formType}
                        formType={formType}
                        textConfig={textConfig}
                        tokens={tokens}
                        handleSubmit={handleSubmit}
                      />
                    )
                )}
              </Stack>
            </StyledTabsContainer>
          </StyledContainer>
        </Stack>
        {renderMessage(message, handleCloseMessage)}
      </Stack>
    </>
  );
}
