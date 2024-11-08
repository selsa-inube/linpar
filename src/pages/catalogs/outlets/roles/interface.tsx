import { useLocation } from "react-router-dom";
import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";

import { Icon } from "@inubekit/icon";
import { inube } from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { Searchfield } from "@inubekit/input";
import { Button } from "@inubekit/button";
import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { Stack } from "@inubekit/stack";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { TableLinpar } from "@components/data/TableLinpar";
import { IEntry } from "@components/data/TableLinpar/types";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { IDeleteForMessage, IRol } from "./types";
import { menuInvitationLinks } from "./config/MenuAddRole";
import {
  RolesBreakPointsConfig,
  actionsConfigPosition,
  linixRolesData,
  titlesOptions,
} from "./config/dataRoles";
import { StyledContainer } from "./styles";
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
    handleCloseMenuInvitation,
    handleSearchRole,
    handleToggleMenuInvitation,
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
  const dynamicTitlesOptions = smallScreen
    ? [
        {
          id: "n_Rol",
          titleName: "Nombre",
          priority: 1,
        },
      ]
    : titlesOptions;

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? "24px" : "32px 64px"}
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
            <Searchfield
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
            <TableLinpar
              id="tableRoles"
              titles={dynamicTitlesOptions}
              actions={actionsConfigPosition(linixRoles, setIdDeleted)}
              entries={linixRolesData(linixRoles, dataAplication) as IEntry[]}
              breakpoints={RolesBreakPointsConfig}
              filter={searchRole}
              isLoading={loading}
              widthPercentageTotalColumns={85}
            />
          )}
          {/* {idDeleted !== 0 && message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={handleCloseSectionMessage}
              onMessageClosed={handleCloseSectionMessage}
            />
          )} */}
        </Stack>
      </Stack>
    </Stack>
  );
}
