import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import {
  Breadcrumbs,
  Button,
  Icon,
  SectionMessage,
  Stack,
  Tabs,
  Textfield,
  useMediaQuery,
} from "@inube/design-system";

import { Menu } from "@components/navigation/Menu";
import { PageTitle } from "@components/PageTitle";

import {
  privilegeConfig,
  privilegeOptionsConfig,
} from "../options/config/privileges.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { privilegeUserTabsConfig } from "./config/usersTabs.config";

import { IUsersMessage } from "./types/users.types";
import { InvitationsTab } from "./tabs/invitations";
import { UsersTab } from "./tabs/users";

import {
  StyledContainer,
  StyledOptionsContainer,
  StyledTextFieldContainer,
} from "./styles";

const renderMessage = (
  message: IUsersMessage,
  handleCloseMessage: () => void
) => {
  if (!message.data) return null;

  return (
    <SectionMessage
      title={message.data.title}
      description={message.data.description}
      icon={message.data.icon}
      appearance={message.data.appearance}
      duration={10000}
      closeSectionMessage={handleCloseMessage}
    />
  );
};

interface UsersUIProps {
  isSelected: string;
  searchText: string;
  handleTabChange: (id: string) => void;
  handleSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  message: IUsersMessage;
  handleCloseMessage: () => void;
}

export function UsersUI(props: UsersUIProps) {
  const {
    isSelected,
    searchText,
    handleTabChange,
    handleSearchText,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    message,
    handleCloseMessage,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <>
      <StyledContainer smallScreen={smallScreen}>
        <Stack gap="48px" direction="column">
          <Stack gap="32px" direction="column">
            <Breadcrumbs crumbs={privilegeOptionsConfig[0].crumbs} />
            <PageTitle
              title={privilegeConfig.label}
              description={privilegeConfig.description}
              navigatePage="/privileges"
            />
          </Stack>
          <Stack gap="32px" direction="column">
            <Tabs
              tabs={Object.values(privilegeUserTabsConfig)}
              selectedTab={isSelected}
              onChange={handleTabChange}
              type={smallScreen ? "select" : "tabs"}
            />
            <Stack justifyContent="space-between" alignItems="center">
              <StyledTextFieldContainer>
                <Textfield
                  name="searchUser"
                  id="searchUser"
                  placeholder="Buscar..."
                  type="search"
                  iconBefore={<MdSearch />}
                  size="compact"
                  fullwidth
                  value={searchText}
                  onChange={handleSearchText}
                />
              </StyledTextFieldContainer>

              {smallScreen ? (
                <StyledOptionsContainer>
                  <Icon
                    icon={<MdOutlineMoreHoriz />}
                    size="24px"
                    onClick={handleToggleMenuInvitation}
                    cursorHover={true}
                    appearance="dark"
                  />
                  {showMenu && (
                    <Menu
                      options={menuInvitationLinks}
                      handleClose={handleCloseMenuInvitation}
                    />
                  )}
                </StyledOptionsContainer>
              ) : (
                <Button
                  iconBefore={<MdPersonAddAlt />}
                  spacing="compact"
                  type="link"
                  path="/privileges/users/invite"
                >
                  Invitar usuario
                </Button>
              )}
            </Stack>
            {isSelected === privilegeUserTabsConfig.privilegesUsers.id && (
              <UsersTab searchText={searchText} />
            )}
            {isSelected ===
              privilegeUserTabsConfig.privilegesInvitations.id && (
              <InvitationsTab searchText={searchText} />
            )}
          </Stack>
        </Stack>
      </StyledContainer>
      {renderMessage(message, handleCloseMessage)}
    </>
  );
}
