import {
  StyledLoginContainer,
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledStack,
  StyledHead2,
  StyledHead3,
  StyledImage,
} from "./styles";

import selsaLogo from "../../assets/images/selsa.png";

function Login() {
  return (
    <StyledLoginContainer>
      <StyledWelcomeContainer>
        <StyledStack>
          <StyledHead2>Bienvenido</StyledHead2>
          <StyledHead2>Portal de clientes</StyledHead2>
        </StyledStack>
        <StyledImage src={selsaLogo} alt="Sistemas Enlinea" />
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <StyledStack>
          <StyledHead2>Validando credenciales</StyledHead2>
          <StyledHead3>Espere un momento, por favor.</StyledHead3>
        </StyledStack>
        <p>Spinner</p>
      </StyledOutletContainer>
    </StyledLoginContainer>
  );
}

export { Login };
