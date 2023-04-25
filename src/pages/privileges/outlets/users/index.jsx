import { Breadcrumbs } from "../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../components/PageTitle";
import { Tabs } from "../../../../components/navigation/Tabs";
import { Input } from "../../../../components/inputs/Input";
import { DecisionModal } from "../../../../components/feedback/DecisionModal";
import { Stack, Button } from "@inube/design-system";
import { mockPrivilegeOptions } from "../../../../mocks/apps/privileges.mock";
import { mockPrivilegeUserTabs } from "../../../../mocks/apps/privilegesUsers.mock";
import { StyledContainer } from "./styles";
import { MdSearch, MdPersonAddAlt, MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";
import { createPortal } from "react-dom";
import { mockUsersDecisionModalOptions } from "../../../../mocks/apps/decisionModalMessages.mock";

function Users() {
  const [isSelected, setIsSelected] = useState(mockPrivilegeUserTabs[0].id);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleTabChange = (tabId) => {
    setIsSelected(tabId);
  };

  function renderModal() {
    let messageType = "resend";

    const { title, description, textAction, appearance } =
      mockUsersDecisionModalOptions[messageType];

    return (
      <DecisionModal
        title={title}
        description={description}
        appearance={appearance}
        textAction={textAction}
        toggleModal={handleVisibleModal}
      />
    );
  }

  return (
    <>
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
              >
                Invite user
              </Button>
              <MdOutlineMoreHoriz size={24} />
            </Stack>
          </Stack>
        </Stack>
      </StyledContainer>

      {visibleModal &&
        createPortal(renderModal(), document.getElementById("decision"))}
    </>
  );
}

export { Users };
