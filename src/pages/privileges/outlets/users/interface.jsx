import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import {
  Breadcrumbs,
  Button,
  Stack,
  Tabs,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import {
  privilegeConfig,
  privilegeOptionsConfig,
} from "../options/config/privileges.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { privilegeUserTabsConfig } from "./config/usersTabs.config";
import {
  StyledContainer,
  StyledOptionsContainer,
  StyledTextFieldContainer,
} from "./styles";
import InvitationsTab from "./tabs/invitations";
import UsersTab from "./tabs/users";

export default function UsersUI(props) {
  const {
    isSelected,
    searchText,
    handleTabChange,
    handleSearchText,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={privilegeOptionsConfig[0].url} />
          <PageTitle
            title={privilegeConfig.label}
            description={privilegeConfig.description}
          />
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(privilegeUserTabsConfig)}
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
              <StyledOptionsContainer>
                <MdOutlineMoreHoriz
                  size={24}
                  cursor="pointer"
                  onClick={handleToggleMenuInvitation}
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
                iconBefore={<MdPersonAddAlt size={18} />}
                spacing="compact"
                type="link"
                path="/privileges/users/invite"
              >
                Invite user
              </Button>
            )}
          </Stack>
          {isSelected === privilegeUserTabsConfig.privilegesUsers.id && (
            <UsersTab searchText={searchText} />
          )}
          {isSelected === privilegeUserTabsConfig.privilegesInvitations.id && (
            <InvitationsTab searchText={searchText} />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}
