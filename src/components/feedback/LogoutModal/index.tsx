import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Icon } from "@inubekit/icon";

import { Blanket } from "@inubekit/blanket";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { StyledBackdropBlanket, StyledModal } from "./styles";

interface ILogoutModalProps {
  handleShowBlanket: () => void;
  logoutPath: string;
}

function LogoutModal(props: ILogoutModalProps) {
  const { logoutPath, handleShowBlanket } = props;
  const smallScreen = useMediaQuery("(max-width: 743px)");

  return (
    <StyledBackdropBlanket>
      <Blanket>
        <StyledModal $smallScreen={smallScreen}>
          <Stack direction="column" gap="24px" padding="24px">
            <Stack direction="column" gap="24px">
              <Stack direction="row" justifyContent="space-between">
                <Text
                  type="title"
                  size={smallScreen ? "small" : "medium"}
                  appearance="dark"
                >
                  Cerrar sesión
                </Text>
                <Icon
                  appearance="dark"
                  icon={<MdClose />}
                  size={smallScreen ? "20px" : "24px"}
                  onClick={handleShowBlanket}
                />
              </Stack>

              <Text size={smallScreen ? "small" : "large"} appearance="gray">
                ¿Realmente quieres cerrar sesión?
              </Text>
            </Stack>
            <Stack justifyContent="flex-end" gap="8px">
              <Button
                appearance="gray"
                spacing={smallScreen ? "compact" : "wide"}
                onClick={handleShowBlanket}
              >
                Cancelar
              </Button>
              <Link to={logoutPath}>
                <Button
                  appearance="primary"
                  spacing={smallScreen ? "compact" : "wide"}
                  onClick={handleShowBlanket}
                >
                  Cerrar sesión
                </Button>
              </Link>
            </Stack>
          </Stack>
        </StyledModal>
      </Blanket>
    </StyledBackdropBlanket>
  );
}

export { LogoutModal };
export type { ILogoutModalProps };
