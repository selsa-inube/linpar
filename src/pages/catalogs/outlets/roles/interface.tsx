import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@inubekit/icon";

import { useMediaQuery } from "@inubekit/hooks";
import { Searchfield } from "@inubekit/input";
import { Button } from "@inubekit/button";
import { Menu } from "@components/navigation/Menu";
import { Stack } from "@inubekit/stack";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { TableLinpar } from "@components/data/TableLinpar";
import { IEntry } from "@components/data/TableLinpar/types";
import { useOptionsByBusinessunits } from "@src/hooks/useObject";
import { LinparContext } from "@context/AppContext";
import { decrypt } from "@src/utils/encrypt";
import { PageTitle } from "@src/components/PageTitle";
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
  const { businessUnitSigla } = useContext(LinparContext);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const { subOptions } = useOptionsByBusinessunits(
    staffPortalId,
    businessUnitSigla,
    "catalogosgeneraleslinix"
  );
  const location = useLocation();

  const label = catalogsOptionsConfig(subOptions).find(
    (item) => item[1]?.url === location.pathname
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
      <Stack gap="48px" direction="column">
        <Stack gap="24px" direction="column">
          {label && (
            <>
              <Breadcrumbs crumbs={label[1].crumbs} />
              <PageTitle
                title={label[1].label}
                description={label[1].description}
                navigatePage="/catalogs"
              />
            </>
          )}
        </Stack>
        <Stack gap="32px" direction="column">
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
        </Stack>
      </Stack>
    </Stack>
  );
}
