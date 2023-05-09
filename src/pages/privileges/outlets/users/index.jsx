import {
  Button,
  Stack,
  Tabs,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { useState } from "react";
import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import { PageTitle } from "../../../../components/PageTitle";
import { Table } from "../../../../components/data/Table";
import { Breadcrumbs } from "../../../../components/navigation/Breadcrumbs";
import {
  actions,
  breakPoints,
  entries,
  titles,
} from "../../../../mocks/apps/dataTable.mock";
import { mockPrivilegeOptions } from "../../../../mocks/apps/privileges.mock";
import { invitationEntriesDataMock } from "../../../../mocks/apps/privileges/clientsInvitations.mock";
import { mockPrivilegeUserTabs } from "../../../../mocks/apps/privilegesUsers.mock";
import {
  invitationActionsConfig,
  invitationBreakpointsConfig,
  invitationTitlesConfig,
} from "../../../../pages/privileges/outlets/users/config/dataTableInvitations.config";
import { StyledContainer, StyledTextFieldContainer } from "./styles";

function Users() {
  const [isSelected, setIsSelected] = useState(mockPrivilegeUserTabs[0].id);
  const [searchText, setSearchText] = useState("");

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const renderSelectedTab = () => {
    return (
      <>
        {isSelected === mockPrivilegeUserTabs[0].id && (
          <Table
            titles={titles}
            entries={entries}
            actions={actions}
            breakPoints={breakPoints}
          />
        )}
        {isSelected === mockPrivilegeUserTabs[1].id && (
          <Table
            titles={invitationTitlesConfig}
            entries={invitationEntriesDataMock}
            actions={invitationActionsConfig}
            breakPoints={invitationBreakpointsConfig}
          />
        )}
      </>
    );
  };

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={mockPrivilegeOptions[0].url} />
          <PageTitle
            title={mockPrivilegeOptions[0].label}
            icon={mockPrivilegeOptions[0].icon}
            description={mockPrivilegeOptions[0].description}
          />
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={mockPrivilegeUserTabs}
            selectedTab={isSelected}
            handleSelectedTab={handleTabChange}
          />
          <Stack justifyContent="space-between" alignItems="center">
            <StyledTextFieldContainer>
              <TextField
                name="searchUser"
                id="searchUser"
                placeholder="Search..."
                type="search"
                minLength={1}
                iconBefore={<MdSearch size={18} />}
                size="compact"
                isFullWidth={true}
                value={searchText}
                handleChange={handleSearchText}
              />
            </StyledTextFieldContainer>

            {smallScreen ? (
              <Stack>
                <MdOutlineMoreHoriz size={24} cursor="pointer" />
              </Stack>
            ) : (
              <Button
                iconBefore={<MdPersonAddAlt size={18} />}
                spacing="compact"
                type="link"
                path="/privileges/users/invite"
              >
                Invite user
              </Button>
            )}
          </Stack>
          {renderSelectedTab()}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { Users };
