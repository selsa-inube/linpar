import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";
import linparLogo from "../../../assets/images/linpar.png";

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
        <nav>
          <h5>Menú</h5>
          <ul>
            <li>Privilegios</li>
          </ul>
        </nav>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
