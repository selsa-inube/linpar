import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";
import linparLogo from "../../../assets/images/linpar.png";
import { Menu } from "../../navigation/Menu";
import { mockApps } from "../../../mocks/home/apps.mock";

function AppPage() {
  return (
    <StyledAppPage>
      <Header
        appLogo={linparLogo}
        appLogoAlt="linpar"
        username="Leonardo Garzón"
        businessName="Fondoccidente"
      />
      <StyledContainer>
        <Menu links={mockApps} title="Menú"></Menu>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
