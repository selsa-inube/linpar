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
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { linixUseCases } from "@mocks/privileges/linixUseCases/LinixUseCases.mock";

import { useCasesBreakPointsConfig } from "./config/useCasesTable.config";
import { titlesOptions } from "./config/useCasesTable.config";
import { actionsConfig } from "./config/useCasesTable.config";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import { menuInvitationLinks } from "./config/menuInvitation.config";
import { StyledContainer } from "./styles";

interface LinixUseCaseUIProps {
  searchUseCase: string;
  handleSearchUseCase: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleCloseMenuInvitation: () => void;
  handleToggleMenuInvitation: () => void;
}

export function LinixUseCaseUI(props: LinixUseCaseUIProps) {
  const {
    searchUseCase,
    handleSearchUseCase,
    showMenu,
    handleCloseMenuInvitation,
    handleToggleMenuInvitation,
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
      <Stack gap="48px" direction="column">
        <Stack gap="24px" direction="column">
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
        <Stack gap="32px" direction="column">
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
          <Table
            id="tableLinixUseCases"
            titles={titlesOptions}
            actions={actionsConfig}
            entries={linixUseCases}
            breakpoints={useCasesBreakPointsConfig}
            filter={searchUseCase}
            modalTitle="Caso de uso"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
