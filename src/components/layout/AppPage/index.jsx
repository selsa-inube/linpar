import { Outlet } from "react-router-dom";
import { appsConfig } from "@pages/home/config/apps.config";
import { Header } from "../../Header";
import { Nav } from "../../navigation/Nav";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";

function AppPage() {
  return (
    <StyledAppPage>
      <Header />
      <StyledContainer>
        <Nav links={appsConfig} title="Menú" />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
