import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { StyledAppPage, StyledContainer, StyledMain } from "./styles";
import linparLogo from "../../../assets/images/linpar.png";
import { Menu } from "../../navigation/Menu";
import { mockApps } from "../../../mocks/home/apps.mock";

function AppPage() {
  const [menu, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menu);
  };

  return (
    <StyledAppPage>
      <Header
        appLogo={linparLogo}
        appLogoAlt="linpar"
        username="Leonardo Garzón"
        businessName="Fondoccidente"
        handleMenu={handleMenu}
        menu={menu}
      />
      <StyledContainer menu={menu}>
        <Menu links={mockApps} title="Menú" />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </StyledContainer>
    </StyledAppPage>
  );
}

export { AppPage };
