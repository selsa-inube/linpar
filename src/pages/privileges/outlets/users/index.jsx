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
  invitationEntriesDataMock,
  userEntriesDataMock,
} from "../../../../mocks/apps/privileges/users.mock";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import {
  invitationActionsConfig,
  invitationBreakpointsConfig,
  invitationTitlesConfig,
} from "./config/dataTableInvitations.config";
import {
  usersActionsConfig,
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "./config/usersTable.config";
import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import { StyledContainer, StyledTextFieldContainer } from "./styles";

function Users() {
  const [isSelected, setIsSelected] = useState(privilegeUserTabsConfig[0].id);
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
        {isSelected === privilegeUserTabsConfig[0].id && (
          <Table
            titles={usersTitlesConfig}
            entries={userEntriesDataMock}
            actions={usersActionsConfig}
            breakPoints={usersBreakPointsConfig}
            filter={searchText}
          />
        )}
        {isSelected === privilegeUserTabsConfig[1].id && (
          <Table
            titles={invitationTitlesConfig}
            entries={invitationEntriesDataMock}
            actions={invitationActionsConfig}
            breakPoints={invitationBreakpointsConfig}
            filter={searchText}
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
          <Breadcrumbs route={privilegeOptionsConfig[0].url} />
          <PageTitle
            title={privilegeOptionsConfig[0].label}
            icon={privilegeOptionsConfig[0].icon}
            description={privilegeOptionsConfig[0].description}
          />
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={privilegeUserTabsConfig}
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
