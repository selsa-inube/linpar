import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useSubOptions } from "@src/hooks/useSubOptions";
import { Searchfield } from "@inubekit/input";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Tabs } from "@inubekit/tabs";
import { Icon } from "@inubekit/icon";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
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
  catalogName: string;
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
    catalogName,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1600px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1600px)"]);
  const location = useLocation();
  const { subOptions } = useSubOptions(catalogName);
  const data = privilegeOptionsConfig(subOptions).find(
    (item) => item[1]?.url === location.pathname
  );

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "24px" : "32px 64px"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            {data && (
              <>
                <Breadcrumbs crumbs={data[1].crumbs} />
                <PageTitle
                  title={data[1].label}
                  description={data[1].description}
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
              <Searchfield
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
      </Stack>
    </>
  );
}
