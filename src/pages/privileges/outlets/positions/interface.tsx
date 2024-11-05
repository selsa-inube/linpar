import { useLocation } from "react-router-dom";
import { MdOutlineMoreHoriz, MdPersonAddAlt, MdSearch } from "react-icons/md";

import {
  Breadcrumbs,
  Icon,
  Textfield,
  Table,
  inube,
} from "@inube/design-system";
import { useMediaQuery } from "@inubekit/hooks";
import { PageTitle } from "@components/PageTitle";
import { Menu } from "@components/navigation/Menu";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { Button } from "@inubekit/button";
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
import { Stack } from "@inubekit/stack";

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
}

export function PositionsUI(props: IPositionsProps) {
  const {
    handleSearchPositions,
    showMenu,
    handleCloseMenuInvitation,
    handleToggleMenuInvitation,
    handleCloseSectionMessage,
    searchPosition,
    linixPosition,
    loading,
    message,
    idDeleted,
    setIdDeleted,
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
              actions={actionsConfigPosition(linixPosition, setIdDeleted)}
              entries={linixPosition}
              breakpoints={PositionsBreakPointsConfig}
              modalTitle="Positions"
              filter={searchPosition}
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
