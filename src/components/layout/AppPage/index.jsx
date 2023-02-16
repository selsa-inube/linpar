import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";
import { Menu } from "../../navigation/Menu";
import { mockApps } from "../../../mocks/home/apps.mock";

function AppPage() {
  return (
    <StyledAppPage>
      <Header />
      <StyledContainer>
        <Menu links={mockApps} title="Menú" />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
