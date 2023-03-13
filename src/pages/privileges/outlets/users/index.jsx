import { Breadcrumbs } from "../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../components/PageTitle";
import { Tabs } from "../../../../components/navigation/Tabs";
import { mockPrivilegeOptions } from "../../../../mocks/apps/privileges.mock";
import { mockPrivilegeUserTabs } from "../../../../mocks/apps/privilegesUsers.mock";
import { Input } from "../../../../components/inputs/Input";
import { Button } from "../../../../components/inputs/Button";
import { StyledContainer, StyledInputsContainer } from "./styles";
import { MdSearch, MdPersonAddAlt } from "react-icons/md";
import { useState } from "react";
import { Stack } from "../../../../components/layout/Stack";

function Users() {
  const [isSelected, setIsSelected] = useState(mockPrivilegeUserTabs[0].id);

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  return (
    <StyledContainer>
      <Stack spacing="48">
        <Stack spacing="32">
          <Breadcrumbs route={mockPrivilegeOptions[0].url} />
          <PageTitle
            title={mockPrivilegeOptions[0].label}
            icon={mockPrivilegeOptions[0].icon}
            description={mockPrivilegeOptions[0].description}
          />
        </Stack>
        <Stack spacing="32">
          <Tabs
            tabs={mockPrivilegeUserTabs}
            selected={isSelected}
            handleTabChange={handleTabChange}
          />
          <StyledInputsContainer>
            <Input
              placeholder="Search..."
              type="search"
              iconBefore={<MdSearch size={18} />}
              size="compact"
            />
            <Button
              iconBefore={<MdPersonAddAlt size={18} />}
              spacing="compact"
              children="Invite user"
            />
          </StyledInputsContainer>
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { Users };
