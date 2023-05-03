import {
  breakPointsDataMock,
  entriesDataMock,
} from "../../../../mocks/apps/dataTable.mock";
import {
  actionsConfig,
  titlesConfig,
} from "../../../../components/data/Table/config/dataTable.config";
import { mockPrivilegeOptionsConfig } from "../config/privileges.config";
import { mockPrivilegeUserTabsConfig } from "../users/config/privilegesUsers.config";
import { Breadcrumbs } from "../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../components/PageTitle";
import { Input } from "../../../../components/inputs/Input";
import { Table } from "../../../../components/data/Table";
import { Stack, Button, Tabs } from "@inube/design-system";
import { StyledContainer } from "./styles";
import { MdSearch, MdPersonAddAlt, MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";

function Users() {
  const [isSelected, setIsSelected] = useState(
    mockPrivilegeUserTabsConfig[0].id
  );

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  return (
    <StyledContainer>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={mockPrivilegeOptionsConfig[0].url} />
          <PageTitle
            title={mockPrivilegeOptionsConfig[0].label}
            icon={mockPrivilegeOptionsConfig[0].icon}
            description={mockPrivilegeOptionsConfig[0].description}
          />
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={mockPrivilegeUserTabsConfig}
            selectedTab={isSelected}
            handleSelectedTab={handleTabChange}
          />
          <Stack justifyContent="space-between" alignItems="center">
            <Input
              placeholder="Search..."
              type="search"
              iconBefore={<MdSearch size={18} />}
              size="compact"
            />
            <Button iconBefore={<MdPersonAddAlt size={18} />} spacing="compact">
              Invite user
            </Button>
            <MdOutlineMoreHoriz size={24} />
          </Stack>
          <Table
            titles={titlesConfig}
            entries={entriesDataMock}
            actions={actionsConfig}
            breakPoints={breakPointsDataMock}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { Users };
