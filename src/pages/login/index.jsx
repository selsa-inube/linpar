import { Stack } from "../../components/layout/Stack";
import { Heading } from "../../components/data/Heading";

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
          <Heading level="2" token="headlineLarge">
            Bienvenido
          </Heading>
          <Heading level="2" token="headlineLarge">
            Portal de clientes
          </Heading>
        </Stack>
        <StyledImage src={selsaLogo} alt="Sistemas Enlinea" />
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack>
          <Heading level="2" token="headlineLarge">
            Validando credenciales
          </Heading>
          <Heading level="3" token="headlineSmall">
            Espere un momento, por favor.
          </Heading>
        </Stack>
        <p>Spinner</p>
      </StyledOutletContainer>
    </StyledLoginContainer>
  );
}

export { Login };
