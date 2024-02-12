import {
  Button,
  Blanket,
  Stack,
  Text,
  inube,
  Icon,
  useMediaQuery,
} from "@inube/design-system";
import { StyledBackdropBlanket, StyledModal } from "./styles";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

interface ILogoutModalProps {
  handleShowBlanket: () => void;
  logoutPath: string;
}

function LogoutModal(props: ILogoutModalProps) {
  const { logoutPath, handleShowBlanket } = props;
  const isSmallScreen = useMediaQuery("(max-width: 744px)");

  return (
    <StyledBackdropBlanket>
      <Blanket>
        <StyledModal isSmallScreen={isSmallScreen}>
          <Stack direction="column" gap={inube.spacing.s300} padding="s300">
            <Stack direction="column" gap={inube.spacing.s300}>
              <Stack direction="row" justifyContent="space-between">
                <Text
                  type="title"
                  size={isSmallScreen ? "small" : "medium"}
                  appearance="dark"
                >
                  Cerrar sesión
                </Text>
                <Icon
                  appearance="dark"
                  icon={<MdClose />}
                  size={isSmallScreen ? "20px" : "24px"}
                  onClick={handleShowBlanket}
                />
              </Stack>

              <Text size={isSmallScreen ? "small" : "large"} appearance="gray">
                ¿Realmente quieres cerrar sesión?
              </Text>
            </Stack>
            <Stack justifyContent="flex-end" gap="8px">
              <Button
                appearance="gray"
                spacing={isSmallScreen ? "compact" : "wide"}
                onClick={handleShowBlanket}
              >
                Cancelar
              </Button>
              <Link to={logoutPath}>
                <Button
                  appearance="primary"
                  spacing={isSmallScreen ? "compact" : "wide"}
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
