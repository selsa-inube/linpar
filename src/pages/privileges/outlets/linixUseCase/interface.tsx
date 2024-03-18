import { useLocation, Link } from "react-router-dom";
import {
  MdOutlineMoreHoriz,
  MdPersonAddAlt,
  MdSearch,
  MdModeEdit,
  MdOutlineAssignmentTurnedIn,
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

import { DeleteUser } from "@pages/privileges/outlets/users/tabs/users/DeleteUser";
import { DetailsModal } from "./components/DetailsModal";

import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import { UseCase } from "./types";
import { useCasesBreakPointsConfig } from "./config/useCasesTable.config";
import { titlesOptions } from "./config/useCasesTable.config";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { StyledContainer } from "./styles";

interface LinixUseCaseUIProps {
  searchUseCase: string;
  handleSearchUseCase: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleCloseMenuInvitation: () => void;
  handleToggleMenuInvitation: () => void;
  linixUseCases: UseCase[];
  loading: boolean;
}

export function LinixUseCaseUI(props: LinixUseCaseUIProps) {
  const {
    searchUseCase,
    handleSearchUseCase,
    showMenu,
    handleCloseMenuInvitation,
    handleToggleMenuInvitation,
    linixUseCases,
    loading,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  const handleClick = (id: string) => {
    linixUseCases.find((useCase) => useCase.id === id);
  };

  const actionsConfig = [
    {
      id: "Details",
      actionName: "Detalles",
      content: ({ k_Usecase }: { k_Usecase: string }) => {
        const useCase = linixUseCases.find(
          (useCase) => useCase.k_Usecase === k_Usecase
        );
        return useCase ? (
          <DetailsModal
            icon={<MdOutlineAssignmentTurnedIn />}
            useCase={useCase}
          />
        ) : null;
      },
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: ({ id }: { id: string }) => (
        <Link to={`edit/${id}`} onClick={() => handleClick(id)}>
          <Icon appearance="dark" cursorHover icon={<MdModeEdit />} />
        </Link>
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: ({ id }: { id: string }) => (
        <DeleteUser
          user={linixUseCases.find((useCase) => useCase.id === id)}
          handleDeleteUser={() => {}}
          showComplete={false}
          closeModal={() => {}}
        />
      ),
      type: "remove",
    },
  ];

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
                path="/privileges/linixUseCase/adding-linix-use-case"
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
              actions={actionsConfig}
              entries={linixUseCases}
              breakpoints={useCasesBreakPointsConfig}
              filter={searchUseCase}
              modalTitle="Caso de uso"
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
