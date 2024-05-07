import { useLocation } from "react-router-dom";
import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import {
  Breadcrumbs,
  Button,
  Icon,
  Stack,
  Textfield,
  useMediaQuery,
  Table,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { privilegeOptionsConfig } from "@pages/privileges/outlets/options/config/privileges.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { RenderMessage } from "@components/feedback/RenderMessage";

import { IRol } from "./types";
import { menuInvitationLinks } from "./config/MenuAddRole";
import {
  RolesBreakPointsConfig,
  actionsConfigPosition,
  titlesOptions,
} from "./config/dataRoles";
import { StyledContainer } from "./styles";

interface IRolesProps {
  handleCloseMenuInvitation: () => void;
  handleSearchRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleMenuInvitation: () => void;
  linixRoles: IRol[];
  loading: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  searchRole: string;
  showMenu: boolean;
  onDeleteRole?: (k_role?: string) => void;
}

export function RolesUI(props: IRolesProps) {
  const {
    handleCloseMenuInvitation,
    handleSearchRole,
    handleToggleMenuInvitation,
    linixRoles,
    loading,
    message,
    onCloseSectionMessage,
    searchRole,
    showMenu,
    onDeleteRole,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? "s300" : "s400 s800"}
    >
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s300} direction="column">
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
        <Stack gap={inube.spacing.s400} direction="column">
          <Stack justifyContent="space-between" alignItems="center">
            <Textfield
              name="searchLinixUseCases"
              id="searchLinixUseCases"
              placeholder="Buscar..."
              type="search"
              iconBefore={<MdSearch />}
              size="compact"
              value={searchRole}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchRole(e)
              }
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
                path="/privileges/roles/add-role"
              >
                Agregar rol
              </Button>
            )}
          </Stack>
          {loading ? (
            <LoadingApp />
          ) : (
            <Table
              id="tableRoles"
              titles={titlesOptions}
              actions={actionsConfigPosition(linixRoles, onDeleteRole)}
              entries={linixRoles}
              breakpoints={RolesBreakPointsConfig}
              modalTitle="Roles"
              filter={searchRole}
            />
          )}
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={() => {}}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
