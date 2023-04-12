import { Breadcrumbs } from "../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../components/PageTitle";
import { Tabs } from "../../../../components/navigation/Tabs";
import { Input } from "../../../../components/inputs/Input";
import { Stack, Button } from "@inube/design-system";
import { mockPrivilegeOptions } from "../../../../mocks/apps/privileges.mock";
import { mockPrivilegeUserTabs } from "../../../../mocks/apps/privilegesUsers.mock";
import { StyledContainer } from "./styles";
import { MdSearch, MdPersonAddAlt, MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";

function Users() {
  const [isSelected, setIsSelected] = useState(mockPrivilegeUserTabs[0].id);

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  //function created while giving functionality to the button
  function handleButtonClick() {
    console.log("button clicked");
  }

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
            selected={isSelected}
            handleTabChange={handleTabChange}
          />
          <Stack justifyContent="space-between" alignItems="center">
            <Input
              placeholder="Search..."
              type="search"
              iconBefore={<MdSearch size={18} />}
              size="compact"
            />
            <Button
              iconBefore={<MdPersonAddAlt size={18} />}
              spacing="compact"
              handleClick={handleButtonClick}
            >
              Invite user
            </Button>
            <MdOutlineMoreHoriz size={24} />
          </Stack>
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { Users };
