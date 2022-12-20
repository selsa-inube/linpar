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
          <Text token="headlineSmall" align="center">
            Bienvenido
          </Text>
          <Heading level="1" token="headlineLarge">
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
