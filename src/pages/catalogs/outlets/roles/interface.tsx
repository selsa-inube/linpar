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
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import { IDeleteForMessage, IMessageState, IRol } from "./types";
import { menuInvitationLinks } from "./config/MenuAddRole";
import {
  RolesBreakPointsConfig,
  actionsConfigPosition,
  linixRolesData,
  titlesOptions,
} from "./config/dataRoles";
import { StyledContainer } from "./styles";
import { RenderMessage } from "@src/components/feedback/RenderMessage";
import { catalogsOptionsConfig } from "../options/config/catalogs.config";

interface IRolesProps {
  handleCloseMenuInvitation: () => void;
  handleSearchRole: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleMenuInvitation: () => void;
  handleCloseSectionMessage: () => void;
  message: IMessageState;
  linixRoles: IRol[];
  loading: boolean;
  idDeleted: number;
  searchRole: string;
  setIdDeleted: (show: IDeleteForMessage) => void;
  dataAplication: (show: string) => void;
  showMenu: boolean;
}

export function RolesUI(props: IRolesProps) {
  const {
    dataAplication,
    idDeleted,
    handleCloseMenuInvitation,
    handleCloseSectionMessage,
    handleSearchRole,
    handleToggleMenuInvitation,
    message,
    linixRoles,
    loading,
    searchRole,
    setIdDeleted,
    showMenu,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const location = useLocation();
  const label = catalogsOptionsConfig.find(
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
                navigatePage="/catalogs"
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
                path="/catalogs/roles/add-role"
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
              actions={actionsConfigPosition(linixRoles, setIdDeleted)}
              entries={linixRolesData(linixRoles, dataAplication)}
              breakpoints={RolesBreakPointsConfig}
              modalTitle="Roles"
              filter={searchRole}
            />
          )}
          {idDeleted !== 0 && message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={handleCloseSectionMessage}
              onMessageClosed={handleCloseSectionMessage}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
