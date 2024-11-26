import { useLocation } from "react-router-dom";
import { MdOutlineMoreHoriz, MdPersonAddAlt } from "react-icons/md";
import { Stack } from "@inubekit/stack";

import { Icon } from "@inubekit/icon";
import { Searchfield } from "@inubekit/input";
import { useMediaQuery } from "@inubekit/hooks";
import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { TableLinpar } from "@components/data/TableLinpar";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { IEntry } from "@components/data/TableLinpar/types";
import { useSubOptions } from "@src/hooks/useSubOptions";
import {
  actionsConfigPosition,
  PositionsBreakPointsConfig,
  titlesOptions,
} from "./config/dataPositions";
import { StyledContainer } from "./styles";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import { IPosition } from "./add-position/types";
import { IMessageState } from "../users/types/forms.types";
import { IDeleteForMessage } from "./types";
import { menuInvitationLinks } from "./config/menuInvitation.config";

interface IPositionsProps {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleCloseMenuInvitation: () => void;
  handleToggleMenuInvitation: () => void;
  searchPosition: string;
  linixPosition: IPosition[];
  handleCloseSectionMessage: () => void;
  loading: boolean;
  setIdDeleted: (show: IDeleteForMessage) => void;
  message: IMessageState;
  idDeleted: string;
  catalogName: string;
}

export function PositionsUI(props: IPositionsProps) {
  const {
    handleSearchPositions,
    showMenu,
    handleCloseMenuInvitation,
    handleToggleMenuInvitation,
    searchPosition,
    linixPosition,
    loading,
    setIdDeleted,
    catalogName,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const location = useLocation();
  const { subOptions } = useSubOptions(catalogName);
  const data = privilegeOptionsConfig(subOptions).find(
    (item, index) => item[index]?.url === location.pathname
  );

  return (
    <Stack
      direction="column"
      width="-webkit-fill-available"
      padding={smallScreen ? "24px" : "32px 64px"}
    >
      <Stack gap="48px" direction="column">
        <Stack gap="24px" direction="column">
          {data && (
            <>
              <Breadcrumbs crumbs={data[0].crumbs} />
              <PageTitle
                title={data[0].label}
                description={data[0].description}
                navigatePage="/privileges"
              />
            </>
          )}
        </Stack>
        <Stack gap="32px" direction="column">
          <Stack justifyContent="space-between" alignItems="center">
            <Searchfield
              name="searchPositions"
              id="searchPositions"
              placeholder="Buscar..."
              type="search"
              size="compact"
              value={searchPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchPositions(e)
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
                path="/privileges/positions/add-position"
              >
                Agregar cargo
              </Button>
            )}
          </Stack>
          {loading ? (
            <LoadingApp />
          ) : (
            <TableLinpar
              id="tablePositions"
              titles={titlesOptions}
              actions={actionsConfigPosition(linixPosition, setIdDeleted)}
              entries={linixPosition as IEntry[]}
              breakpoints={PositionsBreakPointsConfig}
              filter={searchPosition}
              isLoading={loading}
              widthPercentageTotalColumns={130}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
