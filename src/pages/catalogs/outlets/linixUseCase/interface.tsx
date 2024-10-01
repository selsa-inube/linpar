import { useLocation } from "react-router-dom";
import {
  MdModeEdit,
  MdOutlineAssignmentTurnedIn,
  MdOutlineDelete,
  MdOutlineMoreHoriz,
  MdPersonAddAlt,
  MdSearch,
} from "react-icons/md";

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
import { RenderMessage } from "@components/feedback/RenderMessage";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { IDeleteForMessage, UseCase } from "./types";
import {
  actionsConfigLinixUseCase,
  useCasesBreakPointsConfig,
} from "./config/dataUseCases.config";
import { titlesOptions } from "./config/dataUseCases.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { StyledContainer } from "./styles";
import { catalogsOptionsConfig } from "../options/config/catalogs.config";

import { DecisionModalActions } from "@src/components/cards/DecisionModalActions";

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
  onCloseModal: () => void;
  idDeleted: string;
  showOpenModal: boolean;
  setIdDeleted: (show: IDeleteForMessage) => void;
  handleCloseModal: () => void;
}
export type SelectedDataFunction = (k_Usecase: string) => UseCase;
export type HandleClickFunction = (id: string) => void;
export function LinixUseCaseUI(props: LinixUseCaseUIProps) {
  const {
    idDeleted,
    handleCloseModal,
    showOpenModal,
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
            <Table
              id="tableLinixUseCases"
              titles={titlesOptions}
              actions={actionsConfigLinixUseCase(linixUseCases, setIdDeleted)}
              entries={linixUseCases}
              breakpoints={useCasesBreakPointsConfig}
              filter={searchUseCase}
              modalTitle="Caso de uso"
              content={
                <DecisionModalActions
                  labels={["Detalles", "Editar", "Eliminar"]}
                  icons={[
                    [<MdOutlineAssignmentTurnedIn />],
                    [<MdModeEdit />],
                    [<MdOutlineDelete />],
                  ]}
                  url={""}
                  onClose={handleCloseModal}
                  showModal={showOpenModal}
                />
              }
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
