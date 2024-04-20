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

import {
  actionsConfigPosition,
  PositionsBreakPointsConfig,
  titlesOptions,
} from "./config/dataPositions";
import { StyledContainer } from "./styles";
import { IPosition } from "./types";
import { privilegeOptionsConfig } from "../options/config/privileges.config";

interface IPositionsProps {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleCloseMenuInvitation: () => void;
  handleToggleMenuInvitation: () => void;
  searchPosition: string;
  linixPosition: IPosition[];
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

  // const dataDetailsPosition = (k_Grupo: string) => {
  //   const data = [
  //     linixPosition.find((position) => position.k_Grupo === k_Grupo)!,
  //   ].map((positionSelected) => ({
  //     Código: positionSelected?.k_Grupo,
  //     Nombre: positionSelected?.n_Grupo,
  //     Descripción: positionSelected?.n_Uso,
  //     Activo: positionSelected?.i_Activo === "Y" ? "activo" : "inactivo",
  //   }));

  //   return [...data].shift();
  // };

  // const selectedData = (k_Grupo: string) =>
  //   linixPosition.find((position) => position.k_Grupo === k_Grupo);

  // const actionsConfig = [
  //   {
  //     id: "i_activo",
  //     actionName: "Activo",
  //     content: ({ k_Grupo }: { k_Grupo: string }) => {
  //       return (
  //         <ActivateFormOptions
  //           handleActivate={() => {}}
  //           data={{
  //             id: selectedData(k_Grupo)?.k_Grupo || "",
  //             active: selectedData(k_Grupo)?.i_Activo === "Y" || false,
  //           }}
  //           showComplete={false}
  //           activateModalConfig={activatePositionModal}
  //         />
  //       );
  //     },
  //     type: "secondary",
  //   },
  //   {
  //     id: "Details",
  //     actionName: "Detalles",
  //     content: ({ k_Grupo }: { k_Grupo: string }) => (
  //       <DetailsModal data={dataDetailsPosition(k_Grupo)} />
  //     ),
  //     type: "secondary",
  //   },
  //   {
  //     id: "Edit",
  //     actionName: "Editar",
  //     content: () => (
  //       <Link to={`edit`}>
  //         <Icon icon={<MdModeEdit />} size="16px" appearance="dark" />
  //       </Link>
  //     ),
  //     type: "primary",
  //   },
  //   {
  //     id: "Delete",
  //     actionName: "Eliminar",
  //     content: () => (
  //       <Link to={`delete`}>
  //         <Icon icon={<MdOutlineDelete />} size="16px" appearance="dark" />
  //       </Link>
  //     ),
  //     type: "remove",
  //   },
  // ];

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
              actions={actionsConfigPosition(linixPosition)}
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
