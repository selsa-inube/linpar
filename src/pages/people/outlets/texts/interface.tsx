import {
  Breadcrumbs,
  Button,
  Icon,
  SectionMessage,
  Stack,
  Tabs,
  Textfield,
  useMediaQueries,
} from "@inube/design-system";

import { Menu } from "@components/navigation/Menu";
import { PageTitle } from "@components/PageTitle";

import {
  StyledMessageContainer,
  StyledContainer,
  StyledTabsContainer,
} from "./styles";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { privilegeUserTabsConfig } from "@src/pages/privileges/outlets/users/config/usersTabs.config";
import { menuInvitationLinks } from "@src/pages/privileges/outlets/users/config/menuInvitation.config";
import { InvitationsTab } from "@src/pages/privileges/outlets/users/tabs/invitations";
import { UsersTab } from "@src/pages/privileges/outlets/users/tabs/users";
import { peopleOptionsConfig } from "../options/config/people.config";
import { colorTabsConfig } from "./config/colorTabs.config";
import { PrimaryForm } from "./form/PrimaryForm";
import { IAssignmentFormEntry } from "@src/pages/privileges/outlets/users/types/forms.types";
import { ErrorForm } from "./form/ErrorForm";
import { WarningForm } from "./form/WarningForm";
import { SuccessForm } from "./form/SuccessForm";
import { InformationForm } from "./form/InformationForm";
import { HelpForm } from "./form/HelpForm";
import { DarkForm } from "./form/DarkForm";
import { GrayForm } from "./form/GrayForm";
import { LightForm } from "./form/LightForm";
import { textFormsConfig } from "./config/text.config";

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
  textConfig: any;
  selectedTab: string;
  isSelected: string;
  searchText: string;
  handleTabChange: (id: string) => void;
  handleContinueTab: () => void;
  handleSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  message: IUsersMessage;
  handleCloseMessage: () => void;
}

export function TextsUI(props: UsersUIProps) {
  const {
    textConfig,
    selectedTab,
    handleTabChange,
    message,
    handleCloseMessage,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

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
                {selectedTab === colorTabsConfig.primary.id && (
                  <PrimaryForm
                    textConfig={textConfig.primary}
                    handleSubmit={function (textConfig: any): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.error.id && (
                  <ErrorForm
                    textConfig={textConfig.error}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.warning.id && (
                  <WarningForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.success.id && (
                  <SuccessForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.information.id && (
                  <InformationForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.help.id && (
                  <HelpForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.dark.id && (
                  <DarkForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.gray.id && (
                  <GrayForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                )}
                {selectedTab === colorTabsConfig.light.id && (
                  <LightForm
                    currentAidBudgetUnits={[]}
                    handleSubmit={function (
                      aidBudgetUnits: IAssignmentFormEntry[]
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
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
