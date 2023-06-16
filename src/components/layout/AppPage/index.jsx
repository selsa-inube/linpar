import { Outlet } from "react-router-dom";
import { navigationConfig } from "@pages/home/config/apps.config";
import { Header } from "../../Header";
import { Nav, useMediaQuery } from "@inube/design-system";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";

function AppPage() {
  const smallScreen = useMediaQuery("(max-width: 849px)");
  return (
    <StyledAppPage>
      <Header />
      <StyledContainer smallScreen={smallScreen}>
        {!smallScreen && (
          <Nav navigation={navigationConfig} logoutPath="/logout" />
        )}

        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
