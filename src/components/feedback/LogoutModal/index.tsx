import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Blanket } from "@inubekit/blanket";
import {
  Button,
  Stack,
  Text,
  inube,
  Icon,
  useMediaQuery,
} from "@inube/design-system";
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
          <Stack direction="column" gap={inube.spacing.s300} padding="s300">
            <Stack direction="column" gap={inube.spacing.s300}>
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
