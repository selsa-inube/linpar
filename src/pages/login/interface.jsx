import { Outlet } from "react-router-dom";

import { Stack } from "../../components/layout/Stack";
import { Text } from "../../components/data/Text";

import selsaLogo from "../../assets/images/selsa.png";

import {
  StyledLoginContainer,
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

function LoginUI() {
  return (
    <StyledLoginContainer>
      <StyledWelcomeContainer>
        <Stack>
          <Text typoToken="headlineSmall" align="center">
            Bienvenido
          </Text>
          <Text as="h1" typoToken="headlineLarge">
            Portal de clientes
          </Text>
        </Stack>
        <StyledImage src={selsaLogo} alt="Sistemas Enlinea" />
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Outlet />
      </StyledOutletContainer>
    </StyledLoginContainer>
  );
}

export { LoginUI };
