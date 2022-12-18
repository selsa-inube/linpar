import { Outlet } from "react-router-dom";

import { Stack } from "../../components/layout/Stack";
import { Heading } from "../../components/data/Heading";
import { Text } from "../../components/data/Text";

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
        <Outlet />
      </StyledOutletContainer>
    </StyledLoginContainer>
  );
}

export { Login };
