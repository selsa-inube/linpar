import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { Breadcrumbs, Icon, Stack, Textfield } from "@inube/design-system";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { Button } from "@inubekit/button";
import { Tabs } from "@inubekit/tabs";
import { useMediaQueries } from "@inubekit/hooks";
import { Menu } from "@components/navigation/Menu";
import { PageTitle } from "@components/PageTitle";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import { IUsersMessage } from "./types/users.types";
import { InvitationsTab } from "./tabs/invitations";
import { UsersTab } from "./tabs/users";
import { StyledContainer } from "./styles";

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

  const { "(max-width: 580px)": smallScreen, "(max-width: 1600px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1600px)"]);
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            {label && (
              <>
                <Breadcrumbs crumbs={label.crumbs} />
                <PageTitle
                  title={label.label}
                  description={label.description}
                  navigatePage="/privileges"
                />
              </>
            )}
          </Stack>
          <Stack gap="32px" direction="column">
            <Tabs
              tabs={Object.values(privilegeUserTabsConfig)}
              selectedTab={isSelected}
              onChange={handleTabChange}
              scroll={typeTabs ? true : false}
            />
            <Stack justifyContent="space-between" alignItems="center">
              <Textfield
                name="searchUser"
                id="searchUser"
                placeholder="Buscar..."
                type="search"
                iconBefore={<MdSearch />}
                size="compact"
                value={searchText}
                onChange={handleSearchText}
              />

              {smallScreen ? (
                <StyledContainer>
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
                </StyledContainer>
              ) : (
                <Button
                  iconBefore={<MdPersonAddAlt />}
                  spacing="wide"
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
        {message.visible && (
          <RenderMessage
            message={message}
            handleCloseMessage={handleCloseMessage}
            onMessageClosed={() => {}}
          />
        )}
      </Stack>
    </>
  );
}
