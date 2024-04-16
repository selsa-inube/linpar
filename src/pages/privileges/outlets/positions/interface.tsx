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
import { privilegeOptionsConfig } from "@pages/privileges/outlets//options/config/privileges.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import {
  actionsConfig,
  PositionsBreakPointsConfig,
  titlesOptions,
} from "./config/dataPositions";
import { StyledContainer } from "./styles";
import { IRol } from "../roles/types";

interface IPositionsProps {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleCloseMenuInvitation: () => void;
  handleToggleMenuInvitation: () => void;
  searchPosition: string;
  linixPosition: IRol[];
  loading: boolean;
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
              name="searchPositions"
              id="searchPositions"
              placeholder="Buscar..."
              type="search"
              iconBefore={<MdSearch />}
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
                  <Menu options={[]} handleClose={handleCloseMenuInvitation} />
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
            <Table
              id="tablePositions"
              titles={titlesOptions}
              actions={actionsConfig}
              entries={linixPosition}
              breakpoints={PositionsBreakPointsConfig}
              modalTitle="Positions"
              filter={searchPosition}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
