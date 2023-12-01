import { Header, Nav, Grid, useMediaQuery } from "@inube/design-system";
import { navigationConfig } from "@pages/home/config/apps.config";
import { AppContext } from "@src/context";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledContainerNav,
} from "./styles";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const { user } = useContext(AppContext);

  const smallScreen = useMediaQuery("(max-width: 849px)");
  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <Header
          portalId="portal"
          navigation={navigationConfig}
          logoURL={renderLogo(user.operator.logo)}
          userName={user.username}
          client={user.company}
        />
        <StyledContainer>
          <Grid
            templateColumns={smallScreen ? "auto" : "auto 1fr"}
            alignContent="unset"
          >
            {!smallScreen && (
              <StyledContainerNav>
                <Nav
                  navigation={navigationConfig}
                  logoutPath="/"
                  logoutTitle="Cerrar Sesión"
                />
              </StyledContainerNav>
            )}

            <StyledMain>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
}

export { AppPage };
