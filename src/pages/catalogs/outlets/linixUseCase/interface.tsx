import { useLocation } from "react-router-dom";
import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";

import {
  Breadcrumbs,
  Button,
  Icon,
  useMediaQuery,
  inube,
} from "@inube/design-system";
import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { TableLinpar } from "@src/components/data/TableLinpar";
import { IEntry } from "@src/components/data/TableLinpar/types";
import { Input } from "@inubekit/input";

import { Stack } from "@inubekit/stack";
import { IDeleteForMessage, UseCase } from "./types";
import {
  actionsConfigLinixUseCase,
  useCasesBreakPointsConfig,
} from "./config/dataUseCases.config";
import { titlesOptions } from "./config/dataUseCases.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { StyledContainer } from "./styles";
import { catalogsOptionsConfig } from "../options/config/catalogs.config";

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
}
export type SelectedDataFunction = (k_Usecase: string) => UseCase;
export type HandleClickFunction = (id: string) => void;
export function LinixUseCaseUI(props: LinixUseCaseUIProps) {
  const {
    idDeleted,
    message,
    searchUseCase,
    handleCloseSectionMessage,
    handleSearchUseCase,
    handleCloseMenuInvitation,
    handleToggleMenuInvitation,
    linixUseCases,
    loading,
    setIdDeleted,
    showMenu,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 837px)");
  const location = useLocation();
  const label = catalogsOptionsConfig.find(
    (item) => item.url === location.pathname
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
            <Input
              name="searchLinixUseCases"
              id="searchLinixUseCases"
              placeholder="Buscar..."
              type="search"
              iconBefore={<MdSearch />}
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
          {idDeleted && message.visible && (
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
