import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";
import {
  Breadcrumbs,
  Button,
  Icon,
  Stack,
  Textfield,
  useMediaQuery,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { privilegeOptionsConfig } from "../options/config/privileges.config";
import { StyledContainer } from "./styles";
import { useLocation } from "react-router-dom";

interface UseCasesUIProps {
  searchText: string;
  handleSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
}

export function UseCasesUI(props: UseCasesUIProps) {
  const { searchText, handleSearchText, handleToggleMenuInvitation } = props;
  const smallScreen = useMediaQuery("(max-width: 580px)");
  const location = useLocation();
  const label = privilegeOptionsConfig.find(
    (item) => item.url === location.pathname
  );

  return (
    <>
      <Stack
        direction="column"
        width="-webkit-fill-available"
        padding={smallScreen ? "s300" : "s400 s800"}
      >
        <Stack gap="48px" direction="column">
          <Stack gap="24px" direction="column">
            <Breadcrumbs crumbs={label!.crumbs} />
            <PageTitle
              title={label!.label}
              description={label!.description}
              navigatePage="/privileges"
            />
          </Stack>
          <StyledContainer>
            <Stack gap="32px" direction="column">
              <Stack justifyContent="space-between" alignItems="center">
                <Textfield
                  name="searchUser"
                  id="searchUser"
                  placeholder="Buscar..."
                  type="search"
                  iconBefore={<MdSearch />}
                  size="compact"
                  value={searchText}
                  onChange={handleSearchText}
                />

                {smallScreen ? (
                  <>
                    <Icon
                      icon={<MdOutlineMoreHoriz />}
                      size="24px"
                      onClick={handleToggleMenuInvitation}
                      cursorHover={true}
                      appearance="dark"
                    />
                  </>
                ) : (
                  <Button
                    iconBefore={<MdPersonAddAlt />}
                    spacing="wide"
                    type="link"
                  >
                    Agregar caso de uso
                  </Button>
                )}
              </Stack>
            </Stack>
          </StyledContainer>
        </Stack>
      </Stack>
    </>
  );
}
