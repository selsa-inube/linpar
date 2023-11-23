import { Outlet } from "react-router-dom";
import {
  Grid,
  Stack,
  Text,
  useMediaQuery,
  useMediaQueries,
} from "@inube/design-system";
import selsaLogo from "../../assets/images/selsa.png";

import {
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

function LoginUI() {
  //const screenMobile = useMediaQuery("(max-width: 768px)");
  const {
    "(max-width: 768px)": screenMobile,
    "(max-width: 992px)": tablet,
    "(max-width: 1200px)": desktop,
  } = useMediaQueries([
    "(max-width: 1200px)",
    "(max-width: 992px)",
    "(max-width: 768px)",
  ]);

  //console.log(screen)
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
          <StyledImage
            src={selsaLogo}
            alt="Sistemas Enlinea"
            maxWidth={desktop ? "240px" : tablet ? "200px" : "160px"}
          />
        </Stack>
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack
          alignItems="center"
          justifyContent="center"
          height="100%"
          padding="s400 s200"
        >
          <Outlet />
        </Stack>
      </StyledOutletContainer>
    </Grid>
  );
}

export { LoginUI };
