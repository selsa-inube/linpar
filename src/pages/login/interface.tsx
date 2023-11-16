import { Outlet } from "react-router-dom";
import { Grid, Stack, Text, useMediaQuery } from "@inube/design-system";
import selsaLogo from "../../assets/images/selsa.png";

import {
  // StyledLoginContainer,
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

function LoginUI() {
  const screenMobile = useMediaQuery("(max-width: 768px)");
  //console.log(screenMobile);
  return (
    <Grid
      templateColumns={screenMobile ? "1fr" : "repeat(2, 1fr)"}
      templateRows={screenMobile ? "minmax(150px, 20vh) 1fr" : "100vh"}
    >
      <StyledWelcomeContainer>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          gap={screenMobile ? "16px" : "32px"}
        >
          <Stack direction="column">
            <Text type="headline" size="small" textAlign="center">
              Bienvenido
            </Text>
            <Text as="h1" type="headline" size="large">
              Portal de clientes
            </Text>
          </Stack>
          <StyledImage src={selsaLogo} alt="Sistemas Enlinea" />
        </Stack>
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Outlet />
      </StyledOutletContainer>
    </Grid>
  );
}

export { LoginUI };
