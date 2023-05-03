import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";
import { Menu } from "../../navigation/Menu";
import { mockAppsConfig } from "../../../pages/home/config/apps.config";

function AppPage() {
  return (
    <StyledAppPage>
      <Header />
      <StyledContainer>
        <Menu links={mockAppsConfig} title="Menú" />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
