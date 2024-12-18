import { MdOutlineMoreHoriz, MdPersonAddAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { useMediaQuery } from "@inubekit/hooks";
import { Searchfield } from "@inubekit/input";

import { Menu } from "@components/navigation/Menu";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { TableLinpar } from "@components/data/TableLinpar";
import { IEntry } from "@components/data/TableLinpar/types";

import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { PageTitle } from "@components/PageTitle";
import { catalogsOptionsConfig } from "../options/config/catalogs.config";
import { IDeleteForMessage, UseCase } from "./types";
import {
  actionsConfigLinixUseCase,
  useCasesBreakPointsConfig,
} from "./config/dataUseCases.config";
import { titlesOptions } from "./config/dataUseCases.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { StyledContainer } from "./styles";
import { useSubOptions } from "@src/hooks/useSubOptions";

interface LinixUseCaseUIProps {
  searchUseCase: string;
  handleSearchUseCase: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleCloseMenuInvitation: () => void;
  handleCloseSectionMessage: () => void;
  handleToggleMenuInvitation: () => void;
  message: IMessageState;
  linixUseCases: UseCase[];
  handleClick: HandleClickFunction;
  selectedData: SelectedDataFunction;
  loading: boolean;
  idDeleted: string;
  setIdDeleted: (show: IDeleteForMessage) => void;
  catalogName: string;
}
export type SelectedDataFunction = (k_Usecase: string) => UseCase;
export type HandleClickFunction = (id: string) => void;
export function LinixUseCaseUI(props: LinixUseCaseUIProps) {
  const {
    searchUseCase,
    handleSearchUseCase,
    handleCloseMenuInvitation,
    handleToggleMenuInvitation,
    linixUseCases,
    loading,
    setIdDeleted,
    showMenu,
    catalogName,
  } = props;

  const { subOptions } = useSubOptions(catalogName);

  const smallScreen = useMediaQuery("(max-width: 837px)");
  const location = useLocation();

  const data = catalogsOptionsConfig(subOptions).find(
    (item, index) => item[index]?.url === location.pathname
  );

  const dynamicTitlesOptions = smallScreen
    ? [
        {
          id: "n_Usecase",
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
          {data && (
            <>
              <Breadcrumbs crumbs={data[0].crumbs} />
              <PageTitle
                title={data[0].label}
                description={data[0].description}
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
              size="compact"
              value={searchUseCase}
              onChange={handleSearchUseCase}
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
                path="/catalogs/linixUseCase/adding-linix-use-case"
              >
                Agregar caso de uso
              </Button>
            )}
          </Stack>
          {loading ? (
            <LoadingApp />
          ) : (
            <TableLinpar
              id="tableLinixUseCases"
              titles={dynamicTitlesOptions}
              actions={actionsConfigLinixUseCase(linixUseCases, setIdDeleted)}
              entries={linixUseCases as IEntry[]}
              breakpoints={useCasesBreakPointsConfig}
              filter={searchUseCase}
              isLoading={loading}
              widthPercentageTotalColumns={80}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
