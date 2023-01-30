import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";

function AppPageUI() {
  return (
    <StyledAppPage>
      <Header />
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

export { AppPageUI };
