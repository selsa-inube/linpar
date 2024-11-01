import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Stack, Text, useMediaQueries } from "@inube/design-system";
import { LinparContext } from "@context/AppContext";
import { Grid } from "@inubekit/grid";
import {
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledImage,
} from "./styles";

function LoginUI() {
  const {
    "(max-width: 769px)": screenSmallMobile,
    "(max-width: 768px)": screenMobile,
    "(min-width: 769px) and (max-width: 992px)": screenTablet,
    "(min-width: 993px) and (max-width: 2200px)": screenDesktop,
  }: { [key: string]: boolean } = useMediaQueries([
    "(max-width: 769px)",
    "(max-width: 768px)",
    "(min-width: 769px) and (max-width: 992px)",
    "(min-width: 993px) and (max-width: 2200px)",
  ]);
  const { linparData } = useContext(LinparContext);

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
          <Stack direction="column" alignItems="center">
            <Text as="h1" type="headline" size="large">
              Bienvenido a Linpar
            </Text>
          </Stack>
          <StyledImage
            src={linparData.businessManager.urlLogo}
            alt="Sistemas Enlinea"
            width={screenDesktop ? "240px" : screenTablet ? "200px" : "160px"}
          />
        </Stack>
      </StyledWelcomeContainer>
      <StyledOutletContainer>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={
            screenSmallMobile
              ? "auto"
              : screenMobile
              ? "70vh"
              : "-webkit-fill-available"
          }
          padding="s400 s200"
        >
          <Outlet />
        </Stack>
      </StyledOutletContainer>
    </Grid>
  );
}

export { LoginUI };
