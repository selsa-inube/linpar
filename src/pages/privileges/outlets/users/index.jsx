import {
  actions,
  titles,
  breakPoints,
  entries,
} from "../../../../mocks/apps/dataTable.mock";
import { mockPrivilegeOptions } from "../../../../mocks/apps/privileges.mock";
import { mockPrivilegeUserTabs } from "../../../../mocks/apps/privilegesUsers.mock";
import { Breadcrumbs } from "../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../components/PageTitle";
import { Input } from "../../../../components/inputs/Input";
import { Table } from "../../../../components/data/Table";
import { Stack, Button, Tabs, useMediaQuery } from "@inube/design-system";
import { StyledContainer } from "./styles";
import { MdSearch, MdPersonAddAlt, MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";

function Users() {
  const [isSelected, setIsSelected] = useState(mockPrivilegeUserTabs[0].id);

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer>
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
            <Input
              placeholder="Search..."
              type="search"
              iconBefore={<MdSearch size={18} />}
              size="compact"
            />

            {smallScreen ? (
              <MdOutlineMoreHoriz size={24} cursor="pointer" />
            ) : (
              <Button
                iconBefore={<MdPersonAddAlt size={18} />}
                spacing="compact"
              >
                Invite user
              </Button>
            )}
          </Stack>
          <Table
            titles={titles}
            entries={entries}
            actions={actions}
            breakPoints={breakPoints}
          />
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { Users };
