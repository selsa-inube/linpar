import { Stack } from "../../components/layout/Stack";

import {
  StyledLoginContainer,
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledHead2,
  StyledHead3,
  StyledImage,
} from "./styles";

import selsaLogo from "../../assets/images/selsa.png";

function Login() {
  return (
    <StyledLoginContainer>
      <StyledWelcomeContainer>
        <Stack>
          <StyledHead2>Bienvenido</StyledHead2>
          <StyledHead2>Portal de clientes</StyledHead2>
        </Stack>
        <StyledImage src={selsaLogo} alt="Sistemas Enlinea" />
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack>
          <StyledHead2>Validando credenciales</StyledHead2>
          <StyledHead3>Espere un momento, por favor.</StyledHead3>
        </Stack>
        <p>Spinner</p>
      </StyledOutletContainer>
    </StyledLoginContainer>
  );
}

export { Login };
