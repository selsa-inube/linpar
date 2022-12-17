import { Stack } from "../../components/layout/Stack";
import { Heading } from "../../components/data/Heading";
import { Text } from "../../components/data/Text";
import { CircularProgress } from "../../components/feedback/CircularProgress";

import {
  StyledLoginContainer,
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

import selsaLogo from "../../assets/images/selsa.png";

function Login() {
  return (
    <StyledLoginContainer>
      <StyledWelcomeContainer>
        <Stack>
          <Text token="headlineLarge">Bienvenido</Text>
          <Heading level="2" token="headlineLarge">
            Portal de clientes
          </Heading>
        </Stack>
        <StyledImage src={selsaLogo} alt="Sistemas Enlinea" />
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack>
          <Text token="headlineLarge">Validando credenciales</Text>
          <Text token="headlineSmall">Espere un momento, por favor.</Text>
        </Stack>
        <CircularProgress />
      </StyledOutletContainer>
    </StyledLoginContainer>
  );
}

export { Login };
